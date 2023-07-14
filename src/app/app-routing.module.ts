import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RiskpageComponent } from './riskpage/riskpage.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomepageComponent } from './homepage/homepage.component';

const routes: Routes = [
  { path: 'home' , component: HomepageComponent },  
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'risk', component: RiskpageComponent },
  { path: '**', pathMatch: 'full',  component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
