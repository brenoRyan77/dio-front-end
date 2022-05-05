import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CorrentistaService } from 'src/app/services/correntista.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cadastrar-correntistas',
  templateUrl: './cadastrar-correntistas.component.html',
  styleUrls: ['./cadastrar-correntistas.component.css']
})
export class CadastrarCorrentistasComponent implements OnInit {

  correntistas:any;
  cpf:any;
  nome:any;

  constructor(
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
        });
  }

  salvar(): void {
    const correntista = {
      cpf:this.cpf,
      nome:this.nome
    };
    console.log(correntista);
    this.correntistaService.salvarMovimentacao(correntista)
      .subscribe(
        response => {
          Swal.fire({
            icon: 'success',
            title: 'Correntista salvo com sucesso!',
            showConfirmButton: false,
            timer: 1500
          })
          console.log(response);
          this.exibirCorrentistas();
        },
        error => {
          console.log(error);
        });
        this.router.navigate(['/correntistas'])
  }

}
