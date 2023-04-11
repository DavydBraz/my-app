import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CelularListComponent } from './celular-list/celular-list.component';
import { CelularFormComponent } from './celular-form/celular-form.component';

const routes: Routes = [
  { path: '', redirectTo: '/celulares', pathMatch: 'full' },
  { path: 'celulares', component: CelularListComponent },
  //{ path: 'celulares/new', component: CelularFormComponent },
  { path: 'celulares/:id/edit', component: CelularFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }