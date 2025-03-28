

export interface Nose {
  count:    number;
  next:     string;
  previous: null;
  results:  Result[];
}

export interface Result {
  id:           number;
  name:         string;
  location:     string;
  descrition:   string;
  price:        string;
  cancelation:  boolean;
  duration:     number;
  availability: boolean;
  rating:       string;
  created_at:   Date;
  updated_at:   Date;
  images:       Image[];
}

export interface Image {
  id:         number;
  fk_package: number;
  img_url:    string;
  created_at: Date;
  updated_at: Date;
}

