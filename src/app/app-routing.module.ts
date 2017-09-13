import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BurbankComponent } from './burbank/burbank.component';
import { SeattleComponent } from './seattle/seattle.component';
import { SanjoseComponent } from './sanjose/sanjose.component';
import { WashingtonComponent } from './washington/washington.component';
import { ChicagoComponent } from './chicago/chicago.component';
import { DallasComponent } from './dallas/dallas.component';
const routes: Routes = [
  {path: '', pathMatch: 'full', component: BurbankComponent},
  {path: 'burbank', pathMatch: 'full', component: BurbankComponent},
  {path: 'seattle', pathMatch: 'full', component: SeattleComponent},
  {path: 'sanjose', pathMatch: 'full', component: SanjoseComponent},
  {path: 'dc', pathMatch: 'full', component: WashingtonComponent},
  {path: 'chicago', pathMatch: 'full', component: ChicagoComponent},
  {path: 'dallas', pathMatch: 'full', component: DallasComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
