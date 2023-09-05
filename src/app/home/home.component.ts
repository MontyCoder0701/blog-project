import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

import { BlogService } from '../service/blog.service';
import { BlogPost } from '../interface/blog-post.interface';
import { Auth } from '../interface/auth.class';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  authenticated = false;
  data: any;

  constructor(
    private blogService: BlogService,
    private translate: TranslateService,
    private http: HttpClient,
    private router: Router,
  ) {
    Auth.authEmitter.subscribe((authenticated: boolean) => {
      this.authenticated = authenticated;
    });
  }

  private _blogPosts: BlogPost[] = [];

  get blogPosts() {
    return this._blogPosts;
  }

  ngOnInit() {
    this.http.get('http://localhost:5500/user').subscribe({
      next: (res: any) => {
        Auth.authEmitter.emit(true);
      },
      error: () => {
        Auth.authEmitter.emit(false);
      },
    });
    // this._blogPosts = this.blogService.blogPosts;
    this.fetchData();
  }

  handleLangChange(lang: string) {
    this.translate.use(lang);
  }

  handleLogout() {
    this.http
      .post('http://localhost:5500/logout', '')
      .subscribe(() => this.router.navigate(['/login']));
  }

  private fetchData() {
    this.http.get('http://localhost:5500/blog').subscribe({
      next: (response) => {
        this.data = response;
      },
      error: (err) => {
        console.log('Error:', err);
      },
    });
  }
}
