import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './components/signin/signin.component';
import { HelloComponent } from './hello/hello.component';

const routes: Routes = [
  
    { path:'hello', component : HelloComponent },
    { path: 'signin', component : SignInComponent} 
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
 
}
