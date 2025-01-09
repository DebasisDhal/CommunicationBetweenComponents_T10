import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { DomainListComponent } from './domain-list/domain-list.component';
import { DomainsComponent } from './domains/domains.component';

export const routes: Routes = [
{    path: '',
     component: DomainListComponent,
     children:[
        {    path: 'domains',
            component: DomainsComponent
       }

     ]
}



];
