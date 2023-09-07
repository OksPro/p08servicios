import { Component } from '@angular/core';
import { ClientesService } from 'src/app/clientes.service';
import { Cliente } from 'src/app/models/cliente.model';

@Component({
  selector: 'app-crear-cliente',
  templateUrl: './crear-cliente.component.html',
  styleUrls: ['./crear-cliente.component.css']
})
export class CrearClienteComponent {
/** Recuerda que para two-way tienes que importar la libreria FormsModule */

  cliente: Cliente ={ // Creamos un objeto ficticio para luego enlazarlo
    nombre: '',
    cif: '',
    domicilio: ''
  }
  constructor(private clienteServicio: ClientesService){}
  addCliente(){
    this.clienteServicio.setCliente( this.cliente );
  }
}
