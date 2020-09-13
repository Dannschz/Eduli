export interface element {
  name: string,
  description: string,
}

export interface mission extends element {
  videos?: [],
  files?: [],
}

export interface chapter extends element {
  missions?: Array<mission>,
}

export interface level extends element {
  chapters?: Array<chapter>,
}

export interface area extends element {
  levels?: Array<level>,
}

export interface World extends element {
  name: string,
  address: string,
  email: string,
  telephone: number,
  dateFoundation: Date,
  slogan: string,
  areas?: Array<area>,
  levels?: Array<level>,
  chapters?: Array<chapter>,
  missions?: Array<mission>,
}

