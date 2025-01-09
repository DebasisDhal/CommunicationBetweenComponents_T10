import { Component, inject, OnInit, ViewChild } from '@angular/core';
import { domainList,Domain } from '../../data/json';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { DomainsComponent } from '../domains/domains.component';
import { MasterServiceService } from '../service/master-service.service';

@Component({
  selector: 'app-domain-list',
  standalone: true,
  imports: [CommonModule,RouterLink,RouterOutlet],
  templateUrl: './domain-list.component.html',
  styleUrl: './domain-list.component.css'
})
export class DomainListComponent implements OnInit{
  @ViewChild(DomainsComponent) domainsComponent!:DomainsComponent;

  domains! : Domain[];
  mService =inject(MasterServiceService)
 
  constructor(private router: Router){
  this.domains = domainList
  }
  ngOnInit(): void {
    
  }

  sendData(row:any){
     this.mService.sendRowData(row);
     this.router.navigate(['/domains']);
  }


}
