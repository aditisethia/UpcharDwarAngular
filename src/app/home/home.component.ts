import { AfterViewInit, Component, OnInit } from '@angular/core';
declare let Swiper:any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})


export class HomeComponent implements AfterViewInit {

    ngAfterViewInit(): void {
       // Initialize Swiper\
       var swiper = new Swiper(".slide-content", {
        slidesPerView: 3,
        spaceBetween: 25,
        loop: true,
        centerSlide: 'true',
        fade: 'true',
        grabCursor: 'true',
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
          dynamicBullets: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },

        breakpoints:{
            0: {
                slidesPerView: 1,
            },
            520: {
                slidesPerView: 2,
            },
            950: {
                slidesPerView: 3,
            },
        },
      });


    }



    doctors: Doctor[] = [
      {
        name: 'Puby Perrin',
        specialty: 'DS - Periodontology and Oral Implantology, BDS (17)',
        location: 'Florida, USA',
        availability: 'Available on Fri, 22 Mar',
        price: '$300 - $1000',
        icon: 'Ⓡ',
        id: 1
      },
      {
        name: 'Darren Elder',
        specialty: 'BDS, MDS- Oral & Maxillofacial Surgery (35)',
        location: 'Newyork, USA',
        availability: 'Available on Fri, 22 Mar',
        price: '$50 - $300',
        icon: '+',
        id: 2
      },
      {
        name: 'Deborah Angel',
        specialty: 'MBBS, MD - General Medicine, DNB - Cardiology (27)',
        location: 'Georgia, USA',
        availability: 'Available on Fri, 22 Mar',
        price: '$100-$400',
        icon: '✪',
        id: 3
      },
      {
        name: 'Sofia Brit',
        specialty: 'MBBS, MS Urology',
        location: 'Louisiana',
        availability: 'Available o',
        price: '$150 $250',
        icon: '',
        id: 4
      }
    ];

    bookDoctor(doctor: Doctor) {
      // code to book doctor goes here
    }
}
interface Doctor {
  name: string;
  specialty: string;
  location: string;
  availability: string;
  price: string;
  icon: string;
  id: number;
}
