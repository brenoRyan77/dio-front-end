import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CorrentistaService } from 'src/app/services/correntista.service';
import { MovimentacaoService } from 'src/app/services/movimentacao.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-movimentacao-new',
  templateUrl: './movimentacao-new.component.html',
  styleUrls: ['./movimentacao-new.component.css']
})
export class MovimentacaoNewComponent implements OnInit {

  correntistas:any;
  correntista:any;

  dataHora:any;
  valor:any;
  descricao:any;
  tipo:any;

  constructor(
    private movimentacaoService: MovimentacaoService,
    private correntistaService: CorrentistaService,
    private router: Router) { }

  ngOnInit(): void {
    this.exibirCorrentistas();
  }

  exibirCorrentistas(): void {
    this.correntistaService.list()
      .subscribe(
        data => {
          this.correntistas = data;
          console.log(data);
        },
        error => {
          console.log(error);
        })
  }

  salvar(): void {
    console.log(this.correntista)
    const movimentacao = {
      valor:this.valor,
      descricao:this.descricao,
      tipo:this.tipo,
      idConta:this.correntista.id,
      dataHora:this.dataHora

    };
    console.log(movimentacao);
    this.movimentacaoService.salvarMovimentacao(movimentacao)
      .subscribe(
        response => {
          Swal.fire({
            icon: 'success',
            title: 'Movimentação realizada!',
            showConfirmButton: false,
            timer: 1500
          })
          console.log(response);
        },
        error => {
          console.log(error);
        });
        this.router.navigate(['/movimentacoes'])
  }
}
