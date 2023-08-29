import { Component, OnInit } from '@angular/core';
import { BlogService } from '../service/blog.service';
import { BlogPost } from '../interface/blog-post.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  blogPosts: BlogPost[] = [];

  constructor(private blogService: BlogService) {}

  ngOnInit() {
    this.blogPosts = this.blogService.getBlogPosts();
  }
}
