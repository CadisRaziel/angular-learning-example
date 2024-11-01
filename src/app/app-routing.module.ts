import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstComponentComponent } from './components/first-component/first-component.component';
import { ListsForComponent } from './components/lists-for/lists-for.component';

const routes: Routes = [
  {
    path: '', component: FirstComponentComponent
  },
  {
    path: 'list', component: ListsForComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
