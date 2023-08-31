import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogDetailComponent } from './blog-detail/blog-detail.component';
import { BlogEditComponent } from './blog-edit/blog-edit.component';
import { BlogCreateComponent } from './blog-create/blog-create.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [BlogDetailComponent, BlogEditComponent, BlogCreateComponent],
  imports: [CommonModule, SharedModule],
})
export class BlogModule {}
