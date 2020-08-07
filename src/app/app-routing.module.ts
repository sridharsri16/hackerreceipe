import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HackerrecipedetailsComponent } from './hackerrecipe/hackerrecipedetails.component';


const routes: Routes = [
  {
    path: "hackerrecepiedetails/:id", component: HackerrecipedetailsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
