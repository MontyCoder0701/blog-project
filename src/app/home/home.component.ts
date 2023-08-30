import { Component, OnInit } from '@angular/core';

import { BlogService } from '../service/blog.service';
import { BlogPost } from '../interface/blog-post.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(private blogService: BlogService) {}

  private _blogPosts: BlogPost[] = [];

  get blogPosts() {
    return this._blogPosts;
  }

  ngOnInit() {
    this._blogPosts = this.blogService.blogPosts;
  }
}
