import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Celular } from '../celular';
import { CelularService } from '../celular.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-celular-form',
  templateUrl: './celular-form.component.html',
  styleUrls: ['./celular-form.component.css']
})
export class CelularFormComponent implements OnInit {
  celular: Celular = {id: '',nome: '', valor: 0, especificacao: '', imagem: '' };
  //editMode = false;
  celulares?: Celular[] = [];

  constructor(
    private route: ActivatedRoute,
    private celularService: CelularService,
    private location: Location
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      //this.editMode = true;
      this.celularService.getCelular(id).subscribe(celular => this.celular = celular);
    }
  }
  async getCelulares() {
    try {
      const celulares = await this.celularService.getCelulares().toPromise();
      this.celulares = celulares;
    } catch (error) {
      console.error(error);
    }
  }
  submit(form: NgForm): void {
    this.celularService.addCelular(this.celular).subscribe(celular => {
      this.celulares?.push(celular); // adiciona o novo celular à lista de celulares
      form.resetForm();
      this.getCelulares();
      //o jeito mais facil de fazer atualizar a tela foi esse, reload na pagina apos modificação
      window.location.reload();

    })
  }
  //  submit(form: NgForm): void {
 //   if (this.editMode) {
 //     this.celularService.updateCelular(this.celular.id, this.celular).subscribe(() => this.goBack());
//   } else {
//    this.celularService.addCelular(this.celular).subscribe(() => { this.getCelulares(); form.resetForm();
      //});
   // }
//    })
//}

  goBack(): void {
    this.location.back();
  }
}
