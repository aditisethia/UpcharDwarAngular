
import { Appointment_Request } from './../../../payload/Request/Appointment_Request ';
import { ChatMessageResponse } from './../../../payload/response/Response/ChatMessageResponse';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Doctor_Request } from 'src/app/payload/Request/Doctor_Request';
import { PatientRequest } from 'src/app/payload/Request/ParientRequest';
import { UserRequest } from 'src/app/payload/Request/userRequest';
import { User_Table_response } from 'src/app/payload/response/User_Table_response';
import { WebSocketService } from 'src/app/services/Conversation/web-socket.service';
import { LabServiceService } from 'src/app/services/Lab-service/lab-service.service';
import { DoctorScheduleService } from 'src/app/services/doctor-schedule.service';
import { AppointmentserviceService } from 'src/app/services/doctor-service/appointmentservice.service';
import { DoctorserviceService } from 'src/app/services/doctor-service/doctorservice.service';
import { PatientserviceService } from 'src/app/services/patient-service/patientservice.service';
import { SearchService } from 'src/app/services/search-service/search.service';
import baseUrl from 'src/app/services/user/helper';
import { UserServiceService } from 'src/app/services/user/user-service.service';
import Swal from 'sweetalert2';
import SockJS from 'sockjs-client';
import * as Stomp from 'stompjs';
import { Client } from 'stompjs';
import { Cloudinary } from 'cloudinary-core';
import { image } from '@cloudinary/url-gen/qualifiers/source';

@Component({
  selector: 'app-chatting',
  templateUrl: './chatting.component.html',
  styleUrls: ['./chatting.component.css']
})
export class ChattingComponent implements OnInit {

  inputmessage: string = '';
  Leadusertochat: leadusertochat = new leadusertochat; //this is setting by doctor or patient limited detrail to lead on main content screen
  chatmessageresponse: ChatMessageResponse[] = [];
  apppointments: Appointment_Request[] = [];
  dr: any;
  doctor: Doctor_Request[] | undefined;
  searchdoctor: Doctor_Request[] | undefined;
  leadtochatdoctor: Doctor_Request | undefined;
  leadtochatpatient: PatientRequest | undefined;
  leadId: any;
  searchKeyword: string = '';
  users: User_Table_response[] = [];
  flagusers: User_Table_response = new User_Table_response;
  selfroleId: any;
  selfuserId: any;
  selfdoctor: Doctor_Request = new Doctor_Request;
  patients: PatientRequest[] = [];
  private stompClient: any;
  constructor(private patientservice: PatientserviceService, private userservice: UserServiceService, private scheduleservice: DoctorScheduleService, private appointmentService: AppointmentserviceService, private searchservice: SearchService, private http: HttpClient, private doctorService: DoctorserviceService, private webSocketService: WebSocketService, private labService: LabServiceService) { }
  IMG_URLs = this.labService.IMAGE_URL;
  userpatient: UserRequest = new UserRequest;
  latestmessage:any;
  // const cloudinary = new Cloudinary();

  //clodinary'
  // Cloudinary.config({
  //   cloud_name: 'your-cloud-name',
  //   api_key: 'your-api-key',
  //   api_secret: 'your-api-secret',
  // });


  ngOnInit(): void {
    const cld = new Cloudinary({ cloud_name: 'dpdh2nryr', api_key: '225387359941256', api_secret: 'O9anrUbSZg3WzQ6fdFSs2hvjKsw' });

    const imageUrl = cld.url('../../../../assets/img-01.jpg', { width: 300, height: 200, crop: 'fill' });
console.log(imageUrl);

    this.getself();

    this.getallUsers();
    this.webSocketService.initializeWebSocketConnection();

  }
  getmessages() {
    console.log("leadId:::", this.leadId);
    console.log("selfroleId:::::", this.selfroleId);


    if (this.leadId || this.selfroleId)
      this.webSocketService.getmessage(this.selfuserId, this.leadId).subscribe((messages: any) => {
        this.chatmessageresponse = messages;
        console.log(messages);

      }), (error: any) => {

        Swal.fire('Message Not Found !!', 'Error On Server', 'error')
      }
  }

  makeleadtouser(id: any) {
    this.chatmessageresponse = [];
    this.doctorService.getdoctorbyydrId(id).subscribe((doctor: any) => {

      this.leadtochatdoctor = doctor;
      this.setleaddoctor();

    }), (error: any) => {
      Swal.fire('doctor found !!', 'doctor not found by doctor id', 'error')
    }
  }

  makeleadtopatient(id: any) {
    this.chatmessageresponse = [];
    this.patientservice.getpatientbyemail(id).subscribe((doctor: any) => {

      this.leadtochatpatient = doctor;
      this.setleadpatient();

    }), (error: any) => {
      Swal.fire('doctor found !!', 'doctor not found by doctor id', 'error')
    }
  }
  setleadpatient() {
    this.Leadusertochat.id = this.leadtochatpatient?.id;
    this.Leadusertochat.name = this.leadtochatpatient?.patientName;
    this.Leadusertochat.gmail = this.leadtochatpatient?.email;
    this.Leadusertochat.image = this.leadtochatpatient?.imageName;
    this.userservice.getuserbtpatientemail(this.Leadusertochat.gmail).subscribe((data: any) => {
      this.flagusers = data;

      if (this.flagusers) {
        this.leadId = this.flagusers.id;
      }
      console.log(data);
      console.log(this.flagusers);

      console.log(this.leadtochatpatient);
      this.getmessages();
      this.subscribeuser();
    })

  }
  setleaddoctor() {

    this.Leadusertochat.id = this.leadtochatdoctor?.userid;
    this.Leadusertochat.name = this.leadtochatdoctor?.name;
    this.Leadusertochat.gmail = this.leadtochatdoctor?.email;
    this.Leadusertochat.image = this.leadtochatdoctor?.imageName;
    this.leadId = this.leadtochatdoctor?.userid;

    this.getmessages();
    this.subscribeuser();

  }

  sendMessage(): void {
    const options = { hour12: false, timeZone: 'Asia/Kolkata' };  // set time zone for india
    var currentuser = localStorage.getItem('user');
    if (currentuser) {
      const userDetails = JSON.parse(currentuser);
      // Access the roleId from the userRole array

      if (this.inputmessage.trim() !== "") {
        const message:any = {
          senderId: this.selfuserId,
          recipientId: this.leadId,
          senderName: userDetails.name,
          recipientName: this.Leadusertochat.name,
          content: this.inputmessage,
          timestamp: new Date().toLocaleString('en-IN', options), // Convert timestamp to string
        };

        // Send the message using STOMP
        this.webSocketService.sendmessage(message);
        this.inputmessage = '';
        this.chatmessageresponse.unshift(message)
        // setTimeout(() => {
        //   this.getmessages();
        // }, 200);
        // Update local messages
        // this.messages.push(message);
      }

    }
  }


  // read messages from topics
  subscribeuser() {
    this.connect();
  }

   connect(): void {
    const socket = new SockJS('http://localhost:8080/ws');
    this.stompClient = Stomp.over(socket);
    this.stompClient.connect({}, () => this.onConnected(), (err: any) => this.onError(err));
  }


  onConnected() {

      console.log('user/' + this.selfuserId + '_' + this.leadId + '/queue/messages');

      this.stompClient.subscribe('/user/' + this.selfuserId+ '_' + this.leadId + '/queue/messages',  (message: any) => {
        // Handle incoming messages
        console.log('Received message:', message.body);
        const newMessage: ChatMessageResponse = JSON.parse(message.body);
        console.log(newMessage);
        this.chatmessageresponse.unshift(newMessage);

       // console.log(this.chatmessageresponse);


      });

    }
    onError = (err: any): void => {
      console.log(err);
    }

  getallUsers() {


    this.webSocketService.getalluser().subscribe((data: any) => {
      this.users = data.body.users;
      console.log(data.body.users);////////////////////////
    }), (error: any) => {
      console.log("error");
      console.log(error);
      alert("error at finds Users!!!!")
    }
  }

  getself() {
    var userDetailsString = localStorage.getItem('user');

    console.log(userDetailsString);

    if (userDetailsString) {
      const userDetails = JSON.parse(userDetailsString);
      const uid = userDetails.id;
      this.selfuserId = userDetails.id;
      console.log("selfuserId>>>>>>>>>>>>>>>>>>>>>>>");

      console.log(this.selfuserId);

      // Access the roleId from the userRole array
      this.selfroleId = userDetails.userRole[0].role.roleId;
      // Now you have the roleId
      console.log('RoleId:', this.selfroleId);
      if (this.selfroleId === 2) {
        // alert("Doctor")
        this.fordoctor(uid);
      }
      if (this.selfroleId === 3) {
        // alert("patient")
        //get all doctor which are verified
        this.getAllDoctors(0, 10).subscribe((data) => {
          console.log(data);
          this.dr = data;
          this.doctor = this.dr.content;
          console.log(this.doctor);
        })
        this.search();
      }
    } else {
      alert("error");
    }
  }

  getAllDoctors(pageNo: number, pageSize: number) {
    const url = `${baseUrl}/doctor/${pageNo}/${pageSize}`;
    return this.http.get(url);


  }


  search() {

    console.log(this.searchdoctor);

    this.searchservice.serchDoctor(this.searchKeyword).subscribe((data: any) => {
      this.searchdoctor = data.slice(0, 6); // Take only the first 4 items
      console.log(data);

    })
  }



  //for doctor


  fordoctor(id: any) {

    this.scheduleservice.getdoctorbyuserid(id).subscribe((data: any) => {
      this.selfdoctor = data.doctor;
      console.log(this.selfdoctor);
      this.getappointments(this.selfdoctor.id)
      console.log();

    })
  }

  getappointments(id: any) {
    this.appointmentService.getappointmentbystatusanddrid(this.selfdoctor.id).subscribe((appointments: any) => {

      this.apppointments = appointments;
      console.log("Appointment_Request --------------------------");
      console.log(this.apppointments);
      this.patients = this.apppointments
        .map(appointment => appointment.patient)
        .filter((patient, index, self) =>
          index === self.findIndex(p =>
            p.id === patient.id &&
            p.name === patient.name
            // Add other properties for comparison
          )
        );
      const uniqueUseremails = [...new Set(this.apppointments.map(appointment => appointment.patient.email))];
      console.log("unique ids for patients");
      console.log(this.patients);

      console.log(uniqueUseremails);
      this.userservice.getUsersByEmails(uniqueUseremails).subscribe((data: any) => {
        console.log("123456789-----------emails");
        console.log(data);


      })

    })




  }

}


export class leadusertochat {

  id: any;
  name: any;
  gmail: any;
  image: any;

}
