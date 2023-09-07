import { Component, OnInit } from '@angular/core';
import { ClientesService } from 'src/app/clientes.service';
import { Cliente } from 'src/app/models/cliente.model';

@Component({
  selector: 'app-listado-clientes',
  templateUrl: './listado-clientes.component.html',
  styleUrls: ['./listado-clientes.component.css']
})
export class ListadoClientesComponent implements OnInit {
  /**Para incorporar clientes del servicio falso que hemos creado lo llenamos en el constructor. */
  clientes: Array<Cliente>;
  constructor( private ClientesService: ClientesService){ // ahora ya con la clase CS podemos acceder a los metodos.

  }
  ngOnInit(): void {
    this.clientes = this.ClientesService.getClientes(); // ahora están cargados
    
  }
  
}
