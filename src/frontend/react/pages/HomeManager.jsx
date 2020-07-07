import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import LevelCard from '../components/cards/LevelCard';
import Table from '../components/tables/Table';
import ProfileCard2 from '../components/cards/ProfileCard2';
import TableStudent from '../components/tables/TableStudents';
import LeftMenu from '../components/menu/LeftMenu';
import NotFound from './NotFound';
// import School from './School';
// import Pagination from '../components/Pagination';

export default function HomeManager() {

  const [tab, setTab] = useState('niveles');

  return (
    <section className='HomeManager'>
      <div className='HomeManager__header column-2 v-center'>
        <h1>{tab.toUpperCase()}</h1>
        <div className='column-2 right'>
          <Link to='/create/level' className='btn-outline'>
            Crear Nivel
          </Link>
          <Link to='/create/teacher' className='btn-outline'>
            Crear Maestro
          </Link>
        </div>
      </div>

      {tab !== 'instituto' && (
        <div className='HomeManager__filter column-2'>
          <div className='HomeManager__filter--items left column-5'>
            <select className='form-select btn-light v-center' id=''>
              <option value=''>Todos</option>
              <option value=''>Liberados</option>
              <option value=''>No Liberados</option>
            </select>
            <select className='form-select btn-light v-center' id=''>
              <option value=''>Todos</option>
              <option value=''>Liberados</option>
              <option value=''>No Liberados</option>
            </select>
            <select className='form-select btn-light v-center' id=''>
              <option value=''>Todos</option>
              <option value=''>Liberados</option>
              <option value=''>No Liberados</option>
            </select>
            <select className='form-select btn-light v-center' id=''>
              <option value=''>Todos</option>
              <option value=''>Liberados</option>
              <option value=''>No Liberados</option>
            </select>
            <select className='form-select btn-light v-center' id=''>
              <option value=''>Todos</option>
              <option value=''>Liberados</option>
              <option value=''>No Liberados</option>
            </select>
          </div>
          <form className='HomeManager__filter--form right'>
            <label htmlFor='ManagerSearch' className='filter--label left'>
              Buscar
              {`(${tab})`}
            </label>
            <span className='filter--icon'><i className='fas fa-search' /></span>
            <input id='ManagerSearch' className='filter--input' placeholder='Que desea encontrar' type='text' />
            <button type='button' className='filter--button btn-secondary'>Buscar</button>
          </form>
        </div>
      )}

      <LeftMenu
        tab={tab}
        setTab={setTab}
        item1={{ content: 'instituto', icon: 'fas fa-graduation-cap' }}
        item3={{ content: 'niveles', icon: 'fas fa-layer-group' }}
        item4={{ content: 'cursos', icon: 'fas fa-chalkboard' }}
        item5={{ content: 'profesores', icon: 'fas fa-chalkboard-teacher' }}
        item6={{ content: 'alumnos', icon: 'fas fa-users' }}
      />

      {/* <div className="HomeManager__actions background-secondary row--10">
        <div></div>
        <div></div>
        <div></div>
        <button
          className={`btn ${tab === 'levels' ? 'btn-blue' : 'btn-outline'} btn-outline-gray-400`}
          onClick={() => setTab('levels')}>
            Niveles{' '}<i className="fas fa-layer-group"></i>
          </button>
        <button
          className={`btn ${tab === 'courses' ? 'btn-blue' : 'btn-outline'} btn-outline-gray-400`}
          onClick={() => setTab('courses')}>
            Cursos{' '}<i className="fas fa-chalkboard"></i>
          </button>
        <button
          className={`btn ${tab === 'teachers' ? 'btn-blue' : 'btn-outline'} btn-outline-gray-400`}
          onClick={() => setTab('teachers')}>
            Profesores{' '}<i className="fas fa-chalkboard-teacher"></i>
          </button>
        <button
          className={`btn ${tab === 'students' ? 'btn-blue' : 'btn-outline'} btn-outline-gray-400`}
          onClick={() => setTab('students')}>
            Alumnos{' '}<i className="fas fa-users"></i>
          </button>
      </div> */}
      <div className='HomeManager__body'>
        {tab === 'instituto' && (
          <NotFound />
        )}
        {tab === 'niveles' && (
          <div className='column-4'>
            <LevelCard id='5eff40e9627cef68235b7a97' level='1° Primaria' iconBackground='primary' iconColor='white' />
            <LevelCard id='5eff4283627cef68235b7a98' level='2° Primaria' iconBackground='tertiary' iconColor='white' />
            <LevelCard id='5eff44d0627cef68235b7a99' level='3° Primaria' iconBackground='danger' iconColor='white' />
            <LevelCard id='5eff45b7627cef68235b7a9a' level='4° Primaria' iconBackground='acent' iconColor='white' />
            <LevelCard id='5eff4696627cef68235b7a9b' level='5° Primaria' iconBackground='dark' iconColor='white' />
            <LevelCard id='5eff4726627cef68235b7a9c' level='6° Primaria' iconBackground='green' iconColor='white' />
          </div>
        )}
        {tab === 'cursos' && (
          <div>
            <Table />
          </div>
        )}
        {tab === 'profesores' && (
          <div className='HomeManager__body--teachers column-3'>
            <ProfileCard2 name='Armando Cruz' courses={10} approved={8} failed={2} />
            <ProfileCard2 name='Luis E. Tenorio' courses={12} approved={9} failed={3} />
            <ProfileCard2 name='Hector Marquez' courses={8} approved={7} failed={1} />
            <ProfileCard2 name='Elizabeth Smith' courses={15} approved={10} failed={5} />
            <ProfileCard2 name='Antonio Guzmán' courses={5} approved={3} failed={2} />
            <ProfileCard2 name='Valeria Gomez' courses={10} approved={10} failed={0} />
          </div>
        )}
        {tab === 'alumnos' && (
          <div>
            <TableStudent />
          </div>
        )}
      </div>
      <div className='HomeManager__footer'>
        {/* <Pagination></Pagination> */}
      </div>
    </section>
  );
}
