import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './About/about.component';
import { ServiceComponent } from './service/service.component';

const routes: Routes = [
{path:'',component:HomeComponent},
{path:'about',component:AboutComponent},
{path:'service',component:ServiceComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
