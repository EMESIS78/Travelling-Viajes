export interface PackageDetail {
  results: Results;
}

export interface Results {
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
  schedules:    Schedule[];
  reviews:      Review[];
  features:     Feature[];
}

export interface Feature {
  id:          number;
  fk_package:  number;
  feature:     string;
  description: string;
  included:    boolean;
  created_at:  Date;
  updated_at:  Date;
}

export interface Image {
  id:         number;
  fk_package: number;
  img_url:    string;
  created_at: Date;
  updated_at: Date;
}

export interface Review {
  id:             number;
  fk_user:        number;
  fk_package:     number;
  review:         string;
  average_rating: string;
  created_at:     Date;
  updated_at:     Date;
  user:           User;
}

export interface User {
  id:     number;
  name:   string;
  email:  string;
  avatar: string;
}

export interface Schedule {
  id:          number;
  fk_package:  number;
  location:    string;
  amount:      string;
  description: string;
  integer:     number;
  created_at:  Date;
  updated_at:  Date;
}
