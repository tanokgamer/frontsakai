import { Component, OnInit } from '@angular/core';
import { Response } from 'src/app/demo/api/response';
import { UploadClientService } from '../services/upload-client.service';

@Component({
  templateUrl: './uploadclients.component.html',
})
export class UploadclientsComponent implements OnInit {
  response: Response[];
    document1: string ;
    firstname1: string;
    lastname1: string;
    email: string;
    phone: string;
    address: string; 
  constructor( private uploadClientService:UploadClientService) { }

  ngOnInit(): void {
  }
  uploadClient()
  {
      this.uploadClientService.uploadClients(this.document1,this.firstname1,this.lastname1,this.email,this.phone,this.address).then(data => this.response = data);
      console.log('Respuesta Servicio',this.response);
      this.document1= '';
      this.firstname1='';
      this.lastname1='';
      this.email='';
      this.phone='';
      this.address='';
  }
}
