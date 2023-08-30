import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import { BlogService } from '../service/blog.service';

@Component({
  selector: 'app-blog-create',
  templateUrl: './blog-create.component.html',
  styleUrls: ['./blog-create.component.css'],
})
export class BlogCreateComponent {
  private readonly _blogForm: FormGroup = new FormGroup({
    title: new FormControl(''),
    text: new FormControl(''),
  });

  constructor(
    private blogService: BlogService,
    private router: Router,
  ) {}

  get blogForm() {
    return this._blogForm;
  }

  handleAddSubmit() {
    this.blogService.addBlogPost(
      this._blogForm.value.title,
      this._blogForm.value.text,
    );
    this._blogForm.reset();
    this.router.navigate(['/']).then(
      (nav) => {},
      (err) => {},
    );
  }
}
