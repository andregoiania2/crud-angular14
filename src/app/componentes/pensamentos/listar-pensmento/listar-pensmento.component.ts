import { Component, OnInit } from '@angular/core';
import { Pensamento } from '../pensamento';
import { PensamentoService } from '../pensamento.service';

@Component({
  selector: 'app-listar-pensmento',
  templateUrl: './listar-pensmento.component.html',
  styleUrls: ['./listar-pensmento.component.css']
})
export class ListarPensmentoComponent implements OnInit {

  listaPensamentos: Pensamento[]  = [

  ];

  constructor(private service: PensamentoService) { }

  ngOnInit(): void {
    this.service.listar()
          .subscribe((listaPensamentos) => {
            this.listaPensamentos = listaPensamentos;
          });
  }

}
