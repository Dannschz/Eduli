import { User } from './users';

interface Activity {
  name: string;
  file: string;
  description: string;
}

interface Curso {
  name: string;
  activities: Array<Activity>;
}

export interface Teacher extends User {
  cursos: Array<Curso>;
}

export interface TeacherArray {
  teachers: Array<Teacher>;
}
