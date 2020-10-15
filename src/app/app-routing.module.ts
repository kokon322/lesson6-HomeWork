import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AllUserComponent} from './components/all-user/all-user.component';

const routes: Routes = [
  {path: 'users', component: AllUserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
