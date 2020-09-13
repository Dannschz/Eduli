export interface User {
  id: string,
  name: string,
  email: string,
  password: string,
  type: string,
  theme: string,
}

export interface Manager extends User {
  institute: string,
}

