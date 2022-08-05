import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { LayoutService } from './service/app.layout.service';

@Component({
    selector: 'app-menu',
    templateUrl: './app.menu.component.html'
})
export class AppMenuComponent implements OnInit {

    model: any[] = [];

    constructor(public layoutService: LayoutService) { }

    ngOnInit() {
        this.model = [
            {
                label: 'Home',
                items: [
                    { label: 'Inicio', icon: 'pi pi-fw pi-home', routerLink: ['/'] }
                ]
            },
            {
                label: 'UI Components',
                items: [
                    { label: 'Registrar Cliente', icon: 'pi pi-fw pi-id-card', routerLink: ['/clients/upload-clients'] },
                    { label: 'Buscar Cliente', icon: 'pi pi-fw pi-search', routerLink: ['/clients/query-clients'] },
                ]
            },
            
            
            
        ];
    }
}
