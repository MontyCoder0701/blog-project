import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-blog-create',
  templateUrl: './blog-create.component.html',
  styleUrls: ['./blog-create.component.css'],
})
export class BlogCreateComponent {
  private readonly _blogForm: FormGroup = new FormGroup({
    title: new FormControl(''),
    text: new FormControl(''),
  });

  constructor(
    private router: Router,
    private http: HttpClient,
  ) {}

  get blogForm() {
    return this._blogForm;
  }

  handleAddSubmit() {
    this.http
      .post('http://localhost:5500/blog/create', this._blogForm.getRawValue())
      .subscribe(() => {
        this._blogForm.reset();
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
