import { Component, OnInit } from '@angular/core';
import { FolhaService } from '../folha.service'
import { Folha } from '../folha'

@Component({
  selector: 'app-segunda-tela',
  templateUrl: './segunda-tela.component.html',
  styleUrls: ['./segunda-tela.component.css']
})
export class SegundaTelaComponent implements OnInit {

  folhas: Folha[] = [];
  

  constructor(private folhaService: FolhaService) {

  }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.folhaService.getAll().subscribe(folha => this.folhas = folha);
  }

  totalDeDescontos(): any {
    let descontos;
   
      const element = this.folhas[this.getAll.length];
     return descontos = element.salarioBruto - element.salarioLiquido;

  }


}
