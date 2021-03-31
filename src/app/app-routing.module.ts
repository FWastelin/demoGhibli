import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/pages/home/home.component';
import { InfoComponent } from './component/pages/info/info.component';
import { ErrorComponent } from './component/shared/error/error.component';

const routes: Routes = [
  {path : '', redirectTo:'/home', pathMatch: 'full'},
  {path : 'home', component : HomeComponent},
  {path : 'info/:id', component : InfoComponent},

  {path : 'notfound', component : ErrorComponent},
  {path : '**', redirectTo:'/notfound'}//si on rentre n'importe quoi =**, alors 404
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
