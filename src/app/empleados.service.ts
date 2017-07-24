import { Injectable } from '@angular/core'
import { Empleado } from '../models/empleado'
import { EMPLEADOS } from './mock-empleados'


@Injectable()
export class EmpleadosService
{
	// sincrono
	getEmployees(): Empleado[]
	{
		return EMPLEADOS;
	}

	// asincrono
	getEmpleados(): Promise<Empleado[]>
	{
		return Promise.resolve(EMPLEADOS);
	}
}

