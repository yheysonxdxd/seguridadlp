import {Usuario} from './Usuario';
import {ProductoReport} from './Producto';

export interface VentCarrito {
  idCarrito: number
  dniruc: string
  producto: ProductoReport
  nombreProducto: string
  cantidad: number
  punitario: number
  ptotal: number
  estado: number
  usuario: Usuario
}

export class VentCarritosCA{
  constructor(
   public idCarrito: number,
   public dniruc: string,
   public producto: number,
   public nombreProducto: string,
   public cantidad: number,
   public punitario: number,
   public ptotal: number,
   public estado: number,
   public usuario: number
 ){}
}
