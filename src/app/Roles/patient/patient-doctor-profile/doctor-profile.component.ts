import { Component } from '@angular/core';

@Component({
  selector: 'app-doctor-profile',
  templateUrl: './doctor-profile.component.html',
  styleUrls: ['./doctor-profile.component.css']
})
export class DoctorProfileComponent {
  aboutContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
  loacation=[
    
      {
        name: 'Smile Cute Dental Care Center',
        speciality: 'MDS - Periodontology and Oral Implantology, BDS',
        rating: 4,
        address: '2286 Sundown Lane, Austin, Texas 78749, USA',
        timings: [
          { days: 'Mon - Sat', times: ['10:00 AM - 2:00 PM', '4:00 PM - 9:00 PM'] },
          { days: 'Sun', times: ['10:00 AM - 2:00 PM'] }
        ],
        images: ['assets/img/features/feature-01.jpg', 'assets/img/features/feature-02.jpg', 'assets/img/features/feature-03.jpg', 'assets/img/features/feature-04.jpg'],
        consultationPrice: 250
      },
      {
        name: 'The Family Dentistry Clinic',
        speciality: 'MDS - Periodontology and Oral Implantology, BDS',
        rating: 4,
        address: '2883 University Street, Seattle, Texas Washington, 98155',
        timings: [
          { days: 'Tue - Fri', times: ['11:00 AM - 1:00 PM', '6:00 PM - 11:00 PM'] },
          { days: 'Sat - Sun', times: ['8:00 AM - 10:00 AM', '3:00 PM - 7:00 PM'] }
        ],
        images: ['assets/img/features/feature-01.jpg', 'assets/img/features/feature-02.jpg', 'assets/img/features/feature-03.jpg', 'assets/img/features/feature-04.jpg'],
        consultationPrice: 350
      }
  ];
  educationDetails = [
    { university: 'American Dental Medical University', degree: 'BDS', time: '1998 - 2003' },
    { university: 'American Dental Medical University', degree: 'MDS', time: '2003 - 2005' }
  ];

  experienceDetails = [
    { clinic: 'Glowing Smiles Family Dental Clinic', time: '2010 - Present (5 years)' },
    { clinic: 'Comfort Care Dental Clinic', time: '2007 - 2010 (3 years)' },
    { clinic: 'Dream Smile Dental Practice', time: '2005 - 2007 (2 years)' }
  ];

  awardsDetails = [
    { year: 'July 2019', title: 'Humanitarian Award', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a ipsum tellus. Interdum et malesuada fames ac ante ipsum primis in faucibus.' },
    { year: 'March 2011', title: 'Certificate for International Volunteer Service', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a ipsum tellus. Interdum et malesuada fames ac ante ipsum primis in faucibus.' },
    { year: 'May 2008', title: 'The Dental Professional of The Year Award', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a ipsum tellus. Interdum et malesuada fames ac ante ipsum primis in faucibus.' }
  ];

  reviews = [
    {
      author: 'Richard Wilson',
      date: '2 Days ago',
      rating: 4,
      recommended: true,
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit...',
    },
    {
      author: 'tinci Wilson',
      date: '1 Days ago',
      rating: 2,
      recommended: true,
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit...',
    },
   
  ];

  businessHours: any[] = [
    { day: 'Today', date: '5 Nov 2019', openNow: true, openingHours: '07:00 AM - 09:00 PM' },
    { day: 'Monday', openingHours: '07:00 AM - 09:00 PM' },
    { day: 'Tuesday', openingHours: '07:00 AM - 09:00 PM' },
    { day: 'Wednesday', openingHours: '07:00 AM - 09:00 PM' },
    { day: 'Thursday', openingHours: '07:00 AM - 09:00 PM' },
    { day: 'Friday', openingHours: '07:00 AM - 09:00 PM' },
    { day: 'Saturday', openingHours: '07:00 AM - 09:00 PM' },
    { day: 'Sunday', closed: true },
  ];

  servicesList = ['Tooth cleaning', 'Root Canal Therapy', 'Implants', 'Composite Bonding', 'Fissure Sealants', 'Surgical Extractions'];

  specializationsList = ['Children Care', 'Dental Care', 'Oral and Maxillofacial Surgery', 'Orthodontist', 'Periodontist', 'Prosthodontics'];
}
