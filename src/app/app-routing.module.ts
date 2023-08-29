import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogDetailComponent } from './blog-detail/blog-detail.component';
import { BlogFormComponent } from './blog-form/blog-form.component';
import { HomeComponent } from './home/home.component';
import { BlogEditComponent } from './blog-edit/blog-edit.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'create', component: BlogFormComponent },
  { path: 'blog/:id', component: BlogDetailComponent },
  { path: 'edit/:id', component: BlogEditComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
