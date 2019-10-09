import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DoorListComponent } from './door-list/door-list.component';


const routes: Routes = [
  { path: '', redirectTo: 'doors', pathMatch: 'full' },
  { path: 'doors', component: DoorListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
