import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms'; // <- 

import { AppComponent } from './app.component';
import { EmpleadoComponent } from './empleados.component';
import { DetalleEmpleadoComponent } from './detalle-empleado.component';

@NgModule({
  declarations: [
    AppComponent,
    EmpleadoComponent,
    DetalleEmpleadoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
