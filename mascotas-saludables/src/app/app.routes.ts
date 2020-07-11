import { RouterModule, Routes } from '@angular/router';

import { formularioComponent } from './componentes/formulario1/formulario.component';
import { headerComponent } from './componentes/header/header.component';
import { nosotros1Component } from './componentes/nosotros1/nosotros1.component';
import { serviciosComponent } from  './componentes/servicios/servicios.component';



const APP_ROUTES: Routes =[

    { path: 'formulario', component: formularioComponent },
    { path: 'header', component: headerComponent },
    { path: 'nosotros1', component: nosotros1Component },
    { path: 'servicios' , component: serviciosComponent },
    
    { path: '**', pathMatch: 'full', redirectTo: 'header'}
];/*Esto es un arreglo de rutas */

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);

