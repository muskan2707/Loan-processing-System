import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApplicationComponent } from './components/application/application.component';
import { ConfirmComponent } from './components/confirm/confirm.component';
import { HomeComponent } from './components/home/home.component';
import { SubmitComponent } from './components/submit/submit.component';
import { ViewComponent } from './components/view/view.component';

const routes: Routes = [
  {path:'',redirectTo:'/',pathMatch:'full'},
  {
    path: '',
    component : HomeComponent
  },
  {
    path : 'view',
    component : ViewComponent
  },
  {
    path : 'applications/:id',
    component : ApplicationComponent
  },
  {
    path: 'submit', 
    component : SubmitComponent

  },
  {
    path: 'confirm', 
    component: ConfirmComponent
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
