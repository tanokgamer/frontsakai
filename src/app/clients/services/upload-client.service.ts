import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Response } from 'src/app/demo/api/response';


@Injectable({
  providedIn: 'root'
})
export class UploadClientService {

  constructor(private http: HttpClient) { }
  uploadClients(id:string,firtsname:string,lastname:string,email:string,phone:string,address:string) {
    return this.http.get<any>('assets/demo/data/uploadResponse.json')
        .toPromise()
        .then(res => res.data as Response[])
        .then(data => data); 
}
}
