import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
interface Job {
  company: string;
  title: string;
  period: string;
  responsibilities: string[];
}

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {
  companies: string[] = ['IRIS', 'Infosys', 'TCS'];
  jobs: Job[] = [
    {
      company: 'IRIS Softwares Pvt Ltd, Pune, India',
      title: 'Senior Software Developer',
      period: 'Jan 2022 - Present',
      responsibilities: [
        'Working for Citi Bank client project for E-KYC CCB(Citi Commercial Banking) team',
        'Developed and allowed mutiple new country onboarding as well as change in existing country workflow for CCB-CDCB integration.',
        'Mainly working on Spring, Spring Boot, Hibernate to develop new features and maintain the application.',
        'Contributed in multiple improvement ideas'
      ]
    },
    {
      company: 'Infosys Technologies Ltd, Pune, India',
      title: 'Senior Analyst',
      period: 'Jan 2022 - Dec 2022',
      responsibilities: [
        'worked for Goldman Sachs client project for reconciliation of cash and securities.',
        'Mainly worked on Spring ,Spring Boot and Hibernate to develop new features and maintain the application.',
        'Devloped different cron jobs for acount reconciliation based on the requirement.'
      ]  
    },
    {
      company: 'Tata Consultancy Services(TCS), Thane, India',
      title: 'IT Analyst',
      period: 'Jan 2017 - Jan 2022',
      responsibilities: [
        'Worked for FCA(Fiat Chrysler Automobiles) client project.',
        'Developing new features of production application using Struts,Hibernate,JSP and Servlets.',
        'Developed Internal Data Visualization tool using Angular and Spring Boot.Used different libraries for charts and graphs.',
        'Provided production support to the application and fixed the production issues.'
      ]
    }

    // Add more job entries for other companies
  ];

  selectedCompany: string = this.companies[0];
  selectedJob: Job = this.jobs[0];

  ngOnInit() {
    this.selectCompany(this.companies[0]);
  }

  selectCompany(company: string) {
    this.selectedCompany = company;
    this.selectedJob = this.jobs.find(job => job.company.includes(company)) || this.jobs[0];
  }
}