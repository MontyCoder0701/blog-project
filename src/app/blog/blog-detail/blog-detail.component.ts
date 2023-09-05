import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

import { BlogService } from '../../service/blog.service';
import { BlogPost } from '../../interface/blog-post.interface';

@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.css'],
})
export class BlogDetailComponent implements OnInit {
  private _postId: string = '';
  private _isDraft: boolean = false;
  private _post?: BlogPost;

  constructor(
    private route: ActivatedRoute,
    private blogService: BlogService,
    private router: Router,
    private http: HttpClient,
  ) {}

  private _data: any;

  get data() {
    return this._data;
  }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this._postId = params['id'];
      this.http
        .post(`http://localhost:5500/blog/${this._postId}`, '')
        .subscribe((response) => {
          this._data = response;
          if (this._data) {
            this._isDraft = this._data.isDraft;
          }
        });
    });
  }

  handleToggleOn() {
    this._isDraft = !this._isDraft;
    this.http
      .post('http://localhost:5500/blog/updateDraft', {
        id: this._postId,
        isDraft: this._isDraft,
      })
      .subscribe();
  }

  handleDeletePost(post: BlogPost) {
    this.http
      .delete(`http://localhost:5500/blog/${this._postId}`)
      .subscribe(() =>
        this.router.navigate(['/']).then(
          (nav) => {
            if (!nav) {
              throw Error('Navigation failed');
            }
          },
          (err) => {
            throw Error(err);
          },
        ),
      );
  }
}
