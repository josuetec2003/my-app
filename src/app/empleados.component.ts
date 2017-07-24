import { Component, OnInit, Input } from '@angular/core';
import { Empleado } from '../models/empleado';
import { EmpleadosService } from './empleados.service'

@Component({
	selector: 'emp',
	templateUrl: '../views/empleados.html',
	providers: [EmpleadosService]
})

export class EmpleadoComponent implements OnInit
{
	empleado:Empleado;
	public empleadoActual:Empleado;
	empleados: Empleado[];

	constructor (private empleadosService: EmpleadosService) { }

	getEmpleados (): void
	{
		this.empleadosService.getEmpleados().then(emps => 
		{
			this.empleados = emps;
			this.empleado = this.empleados[0];
			this.empleadoActual = this.empleados[0];
		});
	}

	ngOnInit(): void
	{
		this.getEmpleados();
	}	

	editarEmpleado (emp:Empleado)
	{
		this.empleado = emp;
		this.empleadoActual = this.empleado;
	}	
}