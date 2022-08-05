import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QueryclientsComponent } from './queryclients/queryclients.component';
import { UploadclientsComponent } from './uploadclients/uploadclients.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild([
		{ path: 'query-clients', component: QueryclientsComponent },
    { path: 'upload-clients', component: UploadclientsComponent }
	])],
  exports: [RouterModule]
})
export class ClientsRoutingModule { }
