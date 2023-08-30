import * as uuid from 'uuid';

export interface IBlogPost {
  id: string;
  title: string;
  text: string;
  date: Date;
}

export class BlogPost {
  private readonly _id;
  private readonly _createDate;

  constructor(title: string, text: string) {
    this._id = uuid.v4();
    this._title = title;
    this._text = text;
    this._createDate = new Date();
    this._editDate = new Date();
    this._isDraft = false;
  }

  private _isDraft;

  get isDraft(): boolean {
    return this._isDraft;
  }

  private _editDate;

  get editDate(): Date {
    return this._editDate;
  }

  private _text;

  get text(): string {
    return this._text;
  }

  private _title;

  get title(): string {
    return this._title;
  }

  get id(): string {
    return this._id;
  }

  get createDate(): Date {
    return this._createDate;
  }

  setTitle(title: string) {
    this._title = title;
  }

  setText(text: string) {
    this._text = text;
  }

  setEditDate(editDate: Date) {
    if (editDate < this._createDate) {
      throw Error('Not a valid edit date');
    }
    this._editDate = editDate;
  }

  setDraft(isDraft: boolean) {
    this._isDraft = isDraft;
  }
}
