import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { BlogService } from '../service/blog.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-blog-form',
  templateUrl: './blog-form.component.html',
  styleUrls: ['./blog-form.component.css'],
})
export class BlogFormComponent {
  blogForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private blogService: BlogService,
    private router: Router
  ) {
    this.blogForm = this.formBuilder.group({
      title: '',
      text: '',
    });
  }

  onSubmit() {
    const newPost = this.blogForm.value;
    newPost.date = new Date().toLocaleDateString();
    this.blogService.addBlogPost(newPost);
    this.blogForm.reset();
    this.router.navigate(['/']);
  }
}
