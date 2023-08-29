import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogService } from '../service/blog.service';
import { BlogPost } from '../interface/blog-post.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.css'],
})
export class BlogDetailComponent implements OnInit {
  postId: string = '';
  // post: BlogPost = {} as BlogPost;
  post?: BlogPost;

  constructor(
    private route: ActivatedRoute,
    private blogService: BlogService,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.postId = params['id'];
      this.post = this.blogService.getBlogPostById(this.postId);
    });
  }

  DeletePost() {
    this.route.params.subscribe((params) => {
      this.postId = params['id'];
      this.blogService.deleteBlogPostById(this.postId);
      this.router.navigate(['/']);
    });
  }
}
