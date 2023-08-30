import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { BlogService } from '../service/blog.service';
import { BlogPost } from '../interface/blog-post.interface';

@Component({
  selector: 'app-blog-edit',
  templateUrl: './blog-edit.component.html',
  styleUrls: ['./blog-edit.component.css'],
})
export class BlogEditComponent implements OnInit {
  private _postId: string = '';
  private _post?: BlogPost;

  constructor(
    private blogService: BlogService,
    private router: Router,
    private route: ActivatedRoute,
  ) {}

  private _blogForm: FormGroup = new FormGroup({
    title: new FormControl(''),
    text: new FormControl(''),
  });

  get blogForm() {
    return this._blogForm;
  }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this._postId = params['id'];
      this._post = this.blogService.getBlogPostById(this._postId);

      if (this._post) {
        this._blogForm.setValue({
          title: this._post.title,
          text: this._post.text,
        });
      }
    });
  }

  handleUpdateSubmit() {
    this.blogService.updateBlogPost(
      this._postId,
      this._blogForm.value.title,
      this._blogForm.value.text,
      new Date(),
    );
    this._blogForm.reset();
    this.router.navigate(['/']);
  }
}
