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

  addBlogPost(title: string, text: string): void {
    const newPost = new BlogPost(title, text);
    this._blogPosts.push(newPost);
  }

  deleteBlogPost(post: BlogPost): void {
    this._blogPosts = this._blogPosts.filter((item) => item !== post);
  }

  updateBlogPost(id: string, value: { title: string; text: string }): void {
    const foundPost = this._blogPosts.find((post) => post.id === id);
    foundPost?.setTitle(value.title);
    foundPost?.setText(value.text);
    foundPost?.setEditDate(new Date());
  }

  updateBlogPostDraft(id: string, isDraft: boolean): void {
    const foundPost = this._blogPosts.find((post) => post.id === id);
    foundPost?.setDraft(isDraft);
  }
}
