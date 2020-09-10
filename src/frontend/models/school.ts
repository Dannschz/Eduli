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

export interface world extends element {
  areas?: Array<area>,
}

