import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Client } from 'src/app/demo/api/client';

@Injectable({
  providedIn: 'root'
})
export class QueryClientService {

  constructor(private http: HttpClient) { }
  getClientsSmall() {
    return this.http.get<any>('assets/demo/data/clients.json')
        .toPromise()
        .then(res => res.data as Client[])
        .then(data => data); 
}
}
