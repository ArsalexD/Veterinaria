import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListarComponent } from './Cliente/listar/listar.component';
import { AddComponent } from './Cliente/add/add.component';
import { EditarComponent } from './Cliente/editar/editar.component';
import { FooterComponent } from './footer/footer.component';
import { MenuComponent } from './menu/menu.component';
import { AddempleadoComponent } from './Empleado/addempleado/addempleado.component';
import { EditarempleadoComponent } from './Empleado/editarempleado/editarempleado.component';
import { ListarempleadoComponent } from './Empleado/listarempleado/listarempleado.component';
import { AddjaulaComponent } from './Jaula/addjaula/addjaula.component';
import { EditarjaulaComponent } from './Jaula/editarjaula/editarjaula.component';
import { ListarjaulaComponent } from './Jaula/listarjaula/listarjaula.component';
import { AddmascotaComponent } from './Mascota/addmascota/addmascota.component';
import { EditarmascotaComponent } from './Mascota/editarmascota/editarmascota.component';
import { ListarmascotaComponent } from './Mascota/listarmascota/listarmascota.component';
import { AddusuarioComponent } from './Usuario/addusuario/addusuario.component';
import { EditarusuarioComponent } from './Usuario/editarusuario/editarusuario.component';
import { ListarusuarioComponent } from './Usuario/listarusuario/listarusuario.component';

@NgModule({
  declarations: [
    AppComponent,
    ListarComponent,
    AddComponent,
    EditarComponent,
    FooterComponent,
    MenuComponent,
    AddempleadoComponent,
    EditarempleadoComponent,
    ListarempleadoComponent,
    AddjaulaComponent,
    EditarjaulaComponent,
    ListarjaulaComponent,
    AddmascotaComponent,
    EditarmascotaComponent,
    ListarmascotaComponent,
    AddusuarioComponent,
    EditarusuarioComponent,
    ListarusuarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
