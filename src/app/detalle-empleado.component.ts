import { Component, Input } from '@angular/core';
import { Empleado } from '../models/empleado';

@Component({
	selector: 'emp-form',
	templateUrl: '../views/detalle-empleado.html',
})

export class DetalleEmpleadoComponent {
	@Input() empleado:Empleado;	
	titulo:string = "Aqui va el detalle del empleado";
}