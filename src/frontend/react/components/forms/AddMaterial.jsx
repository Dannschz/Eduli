import React from 'react';

export default function AddMaterial(props) {

  const { course, onClose } = props;

  return (
    <div className='AddMaterial '>
      { course ? <h1>{course}</h1> : <h1>Agregar Material</h1> }
      <form method='post' className='form-group'>
        <label htmlFor='materialLink'>File</label>
        <input type='file' className='form-file' id='materialLink' />
        <label htmlFor='materialName'>Name</label>
        <input type='text' placeholder='Nombre del curso' className='form-control' />
        <label htmlFor='materialDescription'>Description</label>
        <textarea className='form-control' id='materialDescription' rows='3' />
        <label htmlFor='materialDivision'>Materia</label>
        { !course && (
          <select className='form-select' id='exampleFormControlSelect1'>
            <option>Sin asignar</option>
            <option>Materia 2</option>
            <option>Materia 3</option>
            <option>Materia 4</option>
            <option>Materia 5</option>
            <option>Materia 5</option>
          </select>
        ) }
        { course && (
          <select disabled className='custom-select' id='exampleFormControlSelect1'>
            <option>{course}</option>
          </select>
        )}
        <div className='form-button column--2'>
          <button type='button' className='btn btn-secondary' onClick={onClose}>Crear</button>
          <button type='button' className='btn btn-danger' onClick={onClose}>Cancelar</button>
        </div>
      </form>
    </div>
  );
}
