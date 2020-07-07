import React from 'react';
import { Link } from 'react-router-dom';

const TableStudent = (props) => {
  return (
    <table className='table table-6'>
      <thead>
        <tr>
          <th scope='col'>#</th>
          <th scope='col'>Name</th>
          <th scope='col'>Matricula</th>
          <th scope='col'>Correo</th>
          <th scope='col'>Acciones</th>
          <th scope='col'>Status</th>
        </tr>
      </thead>
      <tbody>
        <TableItem
          position='1'
          name='Mariana Lopez'
          nickName='sin matricula'
          email='mariana@eduli.com'
          badge='primary'
          level='1° Primaria'
          status={true}
        />
        <TableItem
          position='2'
          name='Daniel Sanchez'
          nickName='sin matricula'
          email='daniel@eduli.com'
          badge='tertiary'
          level='2° Primaria'
          status={true}
        />
        <TableItem
          position='3'
          name='Valeria Gomez'
          nickName='sin matricula'
          email='valeria@eduli.com'
          badge='danger'
          level='3° Primaria'
          status={true}
        />
        <TableItem
          position='3'
          name='Antonio Guzmán'
          nickName='sin matricula'
          email='antonio@eduli.com'
          badge='disable'
          level='Sin nivel'
          status={false}
        />
      </tbody>
    </table>
  );
};

const TableItem = (props) => {

  const { position, name, nickName, email, level, badge, status } = props;

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
      <td><span className='grid center single-line'>{nickName}</span></td>
      <td><span className='grid center single-line'>{email}</span></td>
      <td>
        <div className='column-2 center v-center'>
          <Link to='/student/1234' className='text-blue'><i className='fas fa-eye' /></Link>
          <Link to='/edit/student/1234' className='btn-link text-gray-700'><i className='fas fa-edit' /></Link>
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

export default TableStudent;
