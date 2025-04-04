import { Injectable } from '@angular/core';
import { Egreso } from './egreso.model';

@Injectable({
  providedIn: 'root'
})
export class EgresoService {

  egreso: Egreso[] = [
    new Egreso('Renta Depto', 900),
    new Egreso('Ropa', 200)
  ];

}
