export interface IBlogPost {
  id: string;
  title: string;
  text: string;
  date: Date;
}

export class BlogPost {
  private readonly _id;
  private readonly _title;
  private readonly _text;
  private readonly _date;

  constructor(id: string, title: string, text: string, date: Date) {
    this._id = id;
    this._title = title;
    this._text = text;
    this._date = date;
  }

  get id(): string {
    return this._id;
  }

  get title(): string {
    return this._title;
  }

  get date(): Date {
    return this._date;
  }

  get text(): string {
    return this._text;
  }
}
