import { Component, ElementRef, inject, Input, OnInit, Renderer2, ViewChild } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { Domain } from '../../data/json';
import { CommonModule } from '@angular/common';
import { MasterServiceService } from '../service/master-service.service';
import { EMPTY } from 'rxjs';

@Component({
  selector: 'app-domains',
  standalone: true,
  imports: [RouterLink,CommonModule],
  templateUrl: './domains.component.html',
  styleUrl: './domains.component.css'
})
export class DomainsComponent implements OnInit  {
  
 @ViewChild('propertyModal') modal: ElementRef | undefined; //It is useing for open modal

  mService = inject(MasterServiceService);
  recivedData:any;

  ngOnInit(): void {
    this.mService.rowData$.subscribe((data)=>{
      this.openModal();
      this.recivedData = data;
    });
  
  }
constructor(private router:Router){
  
}

openModal() {
  if(this.modal){
    this.modal.nativeElement.style.display='block'
  }
}

closeModal(){
  if(this.modal){
    this.modal.nativeElement.style.display='none'
    //this.router.navigate(['']);
  }
}

}
