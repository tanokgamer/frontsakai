import { Component, OnInit } from '@angular/core';
import { Client } from 'src/app/demo/api/client';
import { QueryClientService } from '../services/query-client.service';

@Component({
  selector: 'app-queryclients',
  templateUrl: './queryclients.component.html',
  styleUrls: ['./queryclients.component.scss']
})
export class QueryclientsComponent implements OnInit {
  clients: Client[];
  filteredclients: Client[];
  document1: string;
  firstname1: string;
  lastname1: string;
 
  constructor(private queryClientService: QueryClientService) { }

  ngOnInit(): void {
    this.queryClientService.getClientsSmall().then(data => this.clients = data);
  }
  queryClient() {
    if (this.firstname1) {
      console.log('algun parametro');
      this.clients= this.filterClients(this.firstname1,'N');
      console.log('this.clients',this.clients)
      ;
    }
    else if (this.lastname1){
      this.clients= this.filterClients(this.lastname1,'A');
    }
    else if(this.document1){
      this.clients= this.filterClients(this.document1,'D');
    }
    else{
      this.queryClientService.getClientsSmall().then(data => this.clients = data);
    }
  }
  filterClients(searchString: string,parameter:string) {
    console.log('filtrando parametro',parameter);
   switch (parameter){
    case 'N': return this.clients.filter(client =>
      client.firstname.toLowerCase().indexOf(searchString.toLowerCase()) == 0);
      break;
    case 'A'  : return this.clients.filter(client =>
      client.lastname.toLowerCase().indexOf(searchString.toLowerCase()) == 0);
      break;
      case 'D'  : return this.clients.filter(client =>
        client.id.toLowerCase().indexOf(searchString.toLowerCase()) == 0);
        break;
        default:
          return this.clients;
          break;
  }
}
}
