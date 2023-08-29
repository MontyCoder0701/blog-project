import { Injectable } from '@angular/core';
import { BlogPost } from '../interface/blog-post.interface';
import * as uuid from 'uuid';

@Injectable({
  providedIn: 'root',
})
export class BlogService {
  private blogPosts: BlogPost[] = [];

  getBlogPosts() {
    return this.blogPosts;
  }

  getBlogPostById(id: string) {
    return this.blogPosts.find((post) => post.id === id);
  }

  addBlogPost(post: BlogPost) {
    const randomId = uuid.v4();
    post.id = randomId;
    this.blogPosts.push(post);
  }

  deleteBlogPostById(id: string) {
    const blogPost = this.getBlogPostById(id);
    this.blogPosts = this.blogPosts.filter((item) => item !== blogPost);
  }

  editBlogPostById(id: string, post: BlogPost) {}
}
