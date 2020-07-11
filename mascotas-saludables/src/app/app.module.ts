import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';



//importando la clase de rutas
import { APP_ROUTING } from './app.routes'


//COMPONENTES
import { AppComponent } from './app.component';
import { nabvarComponent  } from './componentes/nabvar/nabvar.component';
import { headerComponent } from './componentes/header/header.component';
import { formularioComponent } from './componentes/formulario1/formulario.component';
import { div1Component } from './componentes/div1/div1.component';
import { footerComponent } from './componentes/footer/footer.component';
import { nosotros1Component } from './componentes/nosotros1/nosotros1.component';
import { serviciosComponent } from  './componentes/servicios/servicios.component';

/*
import { nosotrosComponent } from './componentes/nosotros/nosotros.component';
*/
@NgModule({
  declarations: [
    AppComponent,
    nabvarComponent,
    headerComponent,
    formularioComponent,
    div1Component,
    footerComponent,
    nosotros1Component,
    serviciosComponent,
    
    
  ],
  imports: [
    BrowserModule,
 
    APP_ROUTING //IMPORTANDO LA CLASE DE RUTAS 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
