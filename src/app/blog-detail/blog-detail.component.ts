import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { BlogService } from '../service/blog.service';
import { BlogPost } from '../interface/blog-post.interface';

@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.css'],
})
export class BlogDetailComponent implements OnInit {
  private _postId: string = '';
  private _isDraft: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private blogService: BlogService,
    private router: Router,
  ) {}

  private _post?: BlogPost;

  get post() {
    return this._post;
  }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this._postId = params['id'];
      this._post = this.blogService.getBlogPostById(this._postId);
      if (this._post) {
        this._isDraft = this._post.isDraft;
      }
    });
  }

  handleToggleOn() {
    this._isDraft = !this._isDraft;
    this.blogService.updateBlogPostDraft(this._postId, this._isDraft);
  }

  handleDeletePost(post: BlogPost) {
    this.blogService.deleteBlogPost(post);
    this.router.navigate(['/']).then(
      (nav) => {},
      (err) => {},
    );
  }
}
