import { Component } from '@angular/core';
import { LabRegistrationResponse } from 'src/app/payload/response/Response/LabRegistrationResponse';
import { LabInvoiceResponse } from 'src/app/payload/response/Response/labInvoice_Response';
import { InvoiceService } from 'src/app/services/Invoice-Services/invoice.service';
import { LabServiceService } from 'src/app/services/Lab-service/lab-service.service';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
@Component({
  selector: 'app-lab-invoices',
  templateUrl: './lab-invoices.component.html',
  styleUrls: ['./lab-invoices.component.css']
})
export class LabInvoicesComponent {

  lab!: LabRegistrationResponse;
  labId:any;
  labInvoiceResponse: LabInvoiceResponse []=[];
  IMG_URLs = this.labService.IMAGE_URL;
  constructor(private labService:LabServiceService,private invoiceService:InvoiceService){
    this.lab = new LabRegistrationResponse();
  }

  ngOnInit(): void
  {

    this.labService.lab.subscribe((data: any) => {
      this.lab = data.Lab;
      this.labId=this.lab.id;
      console.log(data.Lab);
      console.log(this.labId+"labIDINLIST");
    });
    this.getinvoiceforLab(this.labId);
}

generatePDF(invoice: LabInvoiceResponse,action:string): void {
  
  const documentDefinition = this.getDocumentDefinition(invoice);
  switch (action) {
    case 'open': pdfMake.createPdf(documentDefinition).open(); break;
    case 'print': pdfMake.createPdf(documentDefinition).print(); break;
    case 'download': pdfMake.createPdf(documentDefinition).download(); break;

    default: pdfMake.createPdf(documentDefinition).open(); break;
  }

  pdfMake.vfs = pdfFonts.pdfMake.vfs;
  pdfMake.createPdf(documentDefinition).download(invoice.patientName.ps);
}

getinvoiceforLab(labId:number){
  this.invoiceService.getInvoiceByLabId(labId).subscribe((data: any) => {
    console.log(data);
    this.labInvoiceResponse = data.content;
    console.log('doctorInvoices------>>>>>>...');
    
  });
}

getDocumentDefinition(invoice: LabInvoiceResponse): any {
  return {
    content: [
      {
        text: 'Doctor Invoice',
        style: 'header'
      },
      // Add content for each invoice, e.g., invoice details, patient info, etc.
      {
        text: `Invoice ID: ${invoice.invoiceId}`,
        margin: [0, 10]
      },
      {
        text: `Lab ID: ${invoice.labId}`,
        margin: [0, 10]
      },
      {
        text: `Invoice Date: ${invoice.invoiceGenerateDate}`,
        margin: [0, 10]
      },
      ,
      {
        text: `payment method: ${invoice.paymentMethod}`,
        margin: [0, 10]
      },
      // Add other invoice details here...

      // adding patient information
      {
        text: 'Patient Information',
        style: 'subheader'
      },
      {
        text: `Patient Name: ${invoice.patientName}`,
        margin: [0, 5]
      },
      {
        text: `Test Name: ${invoice.testName}`,
        margin: [0, 5]
      },


      //  adding appointment information
      {
        text: 'Appointment Information',
        style: 'subheader'
      },
      {
        text:  `Appointment Date: ${invoice.invoiceGenerateDate}`,
        margin: [0, 5]
      },
      ,
      {
        text:  `Appointment Fees: Rs. ${invoice.totalAmount}`,
        margin: [0, 5]
      },
      ,


    ],
    styles: {
      header: {
        fontSize: 18,
        bold: true,
        margin: [0, 0, 0, 10]
      },
      subheader: {
        fontSize: 16,
        bold: true,
        margin: [0, 10, 0, 5]
      }
      // Add other styles as needed...
    }
  };
}

}