import { PageNotFoundComponent } from './components/shared/page-not-found/page-not-found.component';
import { DetailPeopleComponent } from './components/people/detail-people/detail-people.component';
import { ListPeopleComponent } from './components/people/list-people/list-people.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', component: ListPeopleComponent },
  { path: 'detail/:id', component: DetailPeopleComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
