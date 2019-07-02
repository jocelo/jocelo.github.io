import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-certifications',
  templateUrl: './certifications.component.html',
  styleUrls: ['./certifications.component.scss']
})
export class CertificationsComponent implements OnInit {
  certs = [];

  constructor() {
    this.certs = [{
      obtainedDate: 'June 03, 2019',
      desc: 'Interview Bootcamp: Algorithms + Data Structures',
      siteLink: 'https://www.udemy.com/',
      site: 'Udemy',
      certLink: 'https://www.udemy.com/certificate/UC-ZQ6PP7JW/',
      certImage: 'https://udemy-certificate.s3.amazonaws.com/image/UC-ZQ6PP7JW.jpg?l=null'
    },{
      obtainedDate: 'March 29, 2019',
      desc: 'Introduction to Computer Science and Programming Using Python',
      siteLink: 'https://www.edx.org/school/mitx',
      site: 'MITx on edX',
      certLink: 'https://courses.edx.org/certificates/f8fa717b2dad467aa27fd89bbef33f13',
      certImage: 'https://res.cloudinary.com/mycollections/image/upload/v1551302762/certificates/computer_science_python_mitx.png'
    },{
      obtainedDate: 'March 12, 2015',
      desc: 'Programming Mobile Applications for Android Handheld Systems: Part 1',
      siteLink: 'https://www.coursera.org',
      site: 'Coursera',
      certLink: 'https://www.coursera.org/account/accomplishments/certificate/HMB4F9CDRM',
      certImage: 'https://res.cloudinary.com/mycollections/image/upload/v1551302937/certificates/android_cert_maryland.png'
    }];
  }

  ngOnInit() {
  }

}
