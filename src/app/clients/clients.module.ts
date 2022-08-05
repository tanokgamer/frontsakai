import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientsRoutingModule } from './clients-routing.module';
import { TableModule } from 'primeng/table';
import { FormlayoutRoutingModule } from '../demo/components/uikit/formlayout/formlayout-routing.module';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { ButtonModule } from 'primeng/button';
import { MenuModule } from 'primeng/menu';
import { StyleClassModule } from 'primeng/styleclass';
import { PanelMenuModule } from 'primeng/panelmenu';
import { QueryclientsComponent } from './queryclients/queryclients.component';
import { UploadclientsComponent } from './uploadclients/uploadclients.component';


@NgModule({
  
  imports: [
    CommonModule,
    ClientsRoutingModule,
    TableModule,
    FormlayoutRoutingModule,
    DropdownModule,
    FormsModule,
    InputTextModule,
    InputTextareaModule,
    ButtonModule,
    MenuModule,
    StyleClassModule,
    PanelMenuModule,
  ],
  declarations: [QueryclientsComponent,UploadclientsComponent]
})
export class ClientsModule { }
