import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { BlogDetailComponent } from './blog-detail/blog-detail.component';
import { BlogEditComponent } from './blog-edit/blog-edit.component';
import { BlogCreateComponent } from './blog-create/blog-create.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'create', component: BlogCreateComponent },
  { path: 'blog/:id', component: BlogDetailComponent },
  { path: 'edit/:id', component: BlogEditComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
