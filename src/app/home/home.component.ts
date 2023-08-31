import { Component, OnInit } from '@angular/core';

import { BlogService } from '../service/blog.service';
import { BlogPost } from '../interface/blog-post.interface';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(
    private blogService: BlogService,
    private translate: TranslateService,
  ) {}

  private _blogPosts: BlogPost[] = [];

  get blogPosts() {
    return this._blogPosts;
  }

  handleLangChange(lang: string) {
    this.translate.use(lang);
  }

  ngOnInit() {
    this._blogPosts = this.blogService.blogPosts;
  }
}
