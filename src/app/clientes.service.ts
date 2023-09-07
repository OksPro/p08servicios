import { Injectable } from '@angular/core';
import { Cliente } from './models/cliente.model';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  private clientes: Array<Cliente> = [
    {nombre: 'Iberdrola', cif: 'A6456465', domicilio: 'Bilbao'},
    {nombre: 'Jazztel', cif: 'T4646546', domicilio: 'Madrid'},  
    {nombre: 'La Caixa', cif: 'B6546465', domicilio: 'Sevilla'}
]

  constructor() { }

  getClientes():  Array<Cliente>{
    return this.clientes;
  }
  setCliente(cliente: Cliente){
    this.clientes.push(cliente);
  }
}
