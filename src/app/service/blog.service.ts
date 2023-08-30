import { Injectable } from '@angular/core';

import { BlogPost } from '../interface/blog-post.interface';

@Injectable({
  providedIn: 'root',
})
export class BlogService {
  private _blogPosts: BlogPost[] = [];

  get blogPosts(): BlogPost[] {
    return this._blogPosts;
  }

  getBlogPostById(id: string): BlogPost | undefined {
    return this._blogPosts.find((post) => post.id === id);
  }

  addBlogPost(id: string, title: string, text: string, date: Date): void {
    const newPost = new BlogPost(id, title, text, date);
    this._blogPosts.push(newPost);
  }

  deleteBlogPost(post: BlogPost): void {
    this._blogPosts = this._blogPosts.filter((item) => item !== post);
  }

  updateBlogPost(id: string, title: string, text: string, date: Date): void {
    const updatedPost = new BlogPost(id, title, text, date);
    const index = this._blogPosts.findIndex(
      (post) => post.id === updatedPost.id,
    );

    if (index !== -1) {
      this._blogPosts[index] = updatedPost;
    }
  }
}
