import { Component, OnInit } from '@angular/core';
import { Celular } from '../celular';
import { CelularService } from '../celular.service';

@Component({
  selector: 'app-celular-list',
  templateUrl: './celular-list.component.html',
  styleUrls: ['./celular-list.component.css']
})
export class CelularListComponent implements OnInit {
  celulares?: Celular[] = [];
  //celularEdit?: Celular;

  constructor(private celularService: CelularService) {}

  ngOnInit(): void {
    this.getCelulares();
  }

  async getCelulares() {
    try {
      const celulares = await this.celularService.getCelulares().toPromise();
      this.celulares = celulares;
    } catch (error) {
      console.error(error);
    }
  }

  delete(celular: Celular): void {
    if (confirm(`Deseja excluir o celular "${celular.nome}"?`)) {
      this.celularService.deleteCelular(celular.id).subscribe(() => this.getCelulares());
    }
  }
}