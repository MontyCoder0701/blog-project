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
    });
  }

  handleDeletePost(post: BlogPost) {
    this.blogService.deleteBlogPost(post);
    this.router.navigate(['/']);
  }
}
