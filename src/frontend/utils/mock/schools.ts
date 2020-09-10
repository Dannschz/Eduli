// eslint-disable-next-line no-unused-vars
import { world, area, level, chapter, mission } from '../../models/school';

//** misiones **//
const clase1: mission = {
  name: 'Clase 1',
  description: 'Pequeña descripcion',
  videos: [],
  files: [],
};

//** capitulos **//
export const matematicas1: chapter = {
  name: 'Matematicas 1',
  description: 'Pequeña descripcion',
  missions: [clase1],
};

//** levels **//
export const primero: level = {
  name: '1° Grado Pri',
  description: 'Pequeña descripcion',
  chapters: [matematicas1],
};

//** areas **//
export const primaria: area = {
  name: 'Primaria',
  description: 'Pequeña descripcion',
  levels: [primero],
};

//** mundos **//
const patito: world = {
  name: 'Patito',
  description: 'Pequeña descripcion',
  areas: [primaria],
};

export const school = patito;
export const areas = [primaria];
export const levels = [primero];
export const chapters = [matematicas1];
export const missions = [clase1];
