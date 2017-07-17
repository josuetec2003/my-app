import { Component } from '@angular/core';
import { Empleado } from '../models/empleado';

@Component({
	selector: 'app-root',
	templateUrl: '../views/home.html',
	styleUrls: ['../assets/css/home.css']
})

export class AppComponent {
	public empleado:Empleado;
	public empleadoActual:Empleado;	
	public mostrarDatos:boolean;
	public empleados:Array<Empleado>;

	constructor ()
	{
		this.mostrarDatos = true;		

		this.empleados = [
			new Empleado('0', 'Jack', 'Dorsey', 40000),
			new Empleado('1', 'Mark', 'Zuck', 10000),
			new Empleado('2', 'Jeff', 'Bezzos', 5000),
			new Empleado('3', 'Sergey', 'Brin', 15000)
		];

		this.empleado = this.empleados[0];

		this.debug();
	}

	mostrar ()
	{
		this.mostrarDatos = !this.mostrarDatos;
	}

	editarEmpleado (emp:Empleado)
	{
		this.empleado = emp;
		this.empleadoActual = this.empleado;
	}		

	debug ()
	{
		console.log(this.empleados);
	}
}
