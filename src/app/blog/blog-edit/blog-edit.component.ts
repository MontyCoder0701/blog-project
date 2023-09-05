import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-blog-edit',
  templateUrl: './blog-edit.component.html',
  styleUrls: ['./blog-edit.component.css'],
})
export class BlogEditComponent implements OnInit {
  private _data: any;
  private _postId: string = '';

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private http: HttpClient,
  ) {}

  private _blogForm: FormGroup = new FormGroup({
    title: new FormControl(''),
    text: new FormControl(''),
  });

  get blogForm() {
    return this._blogForm;
  }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this._postId = params['id'];
      this.http
        .post(`http://localhost:5500/blog/${this._postId}`, '')
        .subscribe((response) => {
          this._data = response;
          if (this._data) {
            this._blogForm.setValue({
              title: this._data.title,
              text: this._data.text,
            });
          }
        });
    });
  }

  handleUpdateSubmit() {
    this.http
      .post('http://localhost:5500/blog/updateBlog', {
        id: this._postId,
        blog: this._blogForm.value,
      })
      .subscribe((response) => {
        this.router.navigate(['/']).then(
          (nav) => {
            if (!nav) {
              throw Error('Navigation failed');
            }
          },
          (err) => {
            throw Error(err);
          },
        );
      });
  }
}
