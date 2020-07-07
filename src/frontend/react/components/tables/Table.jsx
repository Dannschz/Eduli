import React from 'react';
import { Link } from 'react-router-dom';

const Table = (props) => {
  return (
    <table className='table'>
      <thead>
        <tr>
          <th scope='col'>#</th>
          <th scope='col'>Name</th>
          <th scope='col'>Maestro</th>
          <th scope='col'>Alumnos</th>
          <th scope='col'>Videos</th>
          <th scope='col'>Archivos</th>
          <th scope='col'>Acciones</th>
          <th scope='col'>Status</th>
        </tr>
      </thead>
      <tbody>
        <TableItem
          badge='primary'
          position='1'
          name='Matematicas 1'
          level='1° Primaria'
          teacher='Armando Cruz'
          students='25'
          videos='15'
          files='10'
          status={true}
        />
        <TableItem
          badge='tertiary'
          position='2'
          name='Español 2'
          level='2° Primaria'
          teacher='Hector Marquez'
          students='0'
          videos='15'
          files='10'
          status={false}
        />
        <TableItem
          badge='danger'
          position='3'
          name='Matematicas 5'
          level='5° Primaria'
          teacher='Armando Cruz'
          students='25'
          videos='15'
          files='10'
          status={true}
        />
        <TableItem
          badge='acent'
          position='4'
          name='Matematicas 3'
          level='3° Primaria'
          teacher='Armando Cruz'
          students='0'
          videos='15'
          files='10'
          status={false}
        />
        <TableItem
          badge='dark'
          position='5'
          name='Español 4'
          level='4° Primaria'
          teacher='Hector Marquez'
          students='0'
          videos='15'
          files='10'
          status={false}
        />
        <TableItem
          badge='green'
          position='6'
          name='Ingles 6'
          level='6° Primaria'
          teacher='Elizabeth Smith'
          students='25'
          videos='15'
          files='10'
          status={true}
        />
      </tbody>
    </table>
  );
};

const TableItem = (props) => {

  const { position, name, teacher, students, videos, files, level, badge, status } = props;

  return (
    <tr>
      <th scope='row'>{position}</th>
      <td>
        <div className='table-name v-center'>
          <p className='single-line'>{name}</p>
          <span className={`badge badge-${badge} badge-xs text-white center v-center`}>
            {level}
          </span>
        </div>
      </td>
      <td><span className='grid center'>{teacher}</span></td>
      <td><span className='grid center'>{students}</span></td>
      <td><span className='grid center'>{videos}</span></td>
      <td><span className='grid center'>{files}</span></td>
      <td>
        <div className='column-2 center v-center'>
          <Link to='/course' className='text-blue'><i className='fas fa-eye' /></Link>
          <button type='button' className='btn-link text-gray-700'>
            <i className='fas fa-edit' />
          </button>
        </div>
      </td>
      <td>
        <span className={`grid center v-center text-${status ? 'success' : 'danger'}`}>
          <i className={`fas fa-${status ? 'check' : 'times'}-circle`} />
        </span>
      </td>
    </tr>
  );
};

export default Table;
