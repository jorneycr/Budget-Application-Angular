import { Injectable } from '@angular/core';
import { Ingreso } from './ingreso.model';

@Injectable({
  providedIn: 'root'
})
export class IngresoService {

  ingreso: Ingreso [] = [
    new Ingreso('Salario', 400),
    new Ingreso('Venta Coche', 500)
  ];
  
}
