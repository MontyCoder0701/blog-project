import { Component, OnInit } from '@angular/core';

import { BlogService } from '../service/blog.service';
import { BlogPost } from '../interface/blog-post.interface';
import { TranslateService } from '@ngx-translate/core';
import { Auth } from '../interface/auth.class';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  authenticated = false;

  constructor(
    private blogService: BlogService,
    private translate: TranslateService,
  ) {
    Auth.authEmitter.subscribe((authenticated: boolean) => {
      this.authenticated = authenticated;
    });
  }

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
