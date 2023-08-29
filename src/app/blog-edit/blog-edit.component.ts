import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BlogService } from '../service/blog.service';
import { BlogPost } from '../interface/blog-post.interface';

@Component({
  selector: 'app-blog-edit',
  templateUrl: './blog-edit.component.html',
  styleUrls: ['./blog-edit.component.css'],
})
export class BlogEditComponent {
  blogForm: FormGroup;
  postId: string = '';
  post?: BlogPost;

  constructor(
    private formBuilder: FormBuilder,
    private blogService: BlogService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.blogForm = this.formBuilder.group({
      title: '',
      text: '',
    });
  }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.postId = params['id'];
      this.post = this.blogService.getBlogPostById(this.postId);
    });
  }

  onSubmit() {
    const newPost = this.blogForm.value;
    newPost.date = new Date().toLocaleDateString();
    this.blogService.addBlogPost(newPost);
    this.blogForm.reset();
    this.router.navigate(['/']);
  }
}
