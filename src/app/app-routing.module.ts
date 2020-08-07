import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HackerrecipedetailsComponent } from './hackerrecipe/hackerrecipedetails.component';
import { HackerrecipeComponent } from './hackerrecipe/hackerrecipe.component';


const routes: Routes = [
  {
    path: "hackerrecepiedetails/:id", component: HackerrecipedetailsComponent,
  },
  
  { path: "", component: HackerrecipeComponent, },
  { path: '**', component: HackerrecipeComponent, }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
