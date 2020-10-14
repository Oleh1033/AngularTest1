import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { AboutComponent } from './about.component';
import { AboutGuard } from './about.guard';
import { ExitAboutGuard } from './exit.about.guard';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', 
  component: AboutComponent, 
  canActivate: [AboutGuard],
  canDeactivate: [ExitAboutGuard] }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AboutGuard, ExitAboutGuard]
})
export class AppRoutingModule { }
