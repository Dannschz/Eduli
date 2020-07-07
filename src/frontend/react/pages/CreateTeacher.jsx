import React, { useRef } from 'react';
import { useForm } from 'react-hook-form';
import TeacherIcon from '../../assets/images/draw-teacher.png';

export default function CreateTeacher(props) {
  const { register, errors, handleSubmit, watch } = useForm();
  const password = useRef({});
  password.current = watch('password', '');
  const onSubmit = (data) => {
    console.log(data);
  };

  // const [visible, setvisible] = useState(false);

  return (
    <div className='CreateTeacher border-thin column-2'>
      <h2 className='column-end-2'>Crear Profesor</h2>
      <div className='CreateTeacher__info'>
        <form className='form-group' onSubmit={handleSubmit(onSubmit)}>
          <h5 className='form-group--title'>Información basica</h5>
          <div className='form-group--name icon-input'>
            <label htmlFor='name'>Nombre</label>
            <span className='background-white text-blue border-thin'>
              <i className='far fa-user' />
            </span>
            <input
              placeholder='Ingresa nombre'
              name='name'
              className='form-control'
              ref={register({
                required: {
                  value: true,
                  message: 'Nombre requerdio',
                  pattern: /[A-Za-z]{3}/,
                },
                maxLength: {
                  value: 15,
                  message: 'Maximo 15 caracteres',
                },
                minLength: {
                  value: 2,
                  message: 'Minimo 2 caracteres',
                },
              })}
            />
            <small className='text-danger'>
              {errors?.name?.message}
            </small>
          </div>

          <div className='form-group--lastname icon-input'>
            <label htmlFor='lastname'>Apellidos</label>
            <span className='background-white text-blue border-thin'>
              <i className='far fa-user' />
            </span>
            <input
              placeholder='Ingresa los apellidos'
              name='lastname'
              className='form-control'
              type='text'
              ref={register({
                required: {
                  value: true,
                  message: 'Apellido requerido',
                },
                maxLength: {
                  value: 20,
                  message: 'Maximo 20 caracteres',
                },
                minLength: {
                  value: 2,
                  message: 'Minimo 2 caracteres',
                },
              })}
            />
            <small className='text-danger'>
              {errors?.lastname?.message}
            </small>
          </div>

          <div className='form-group--birthdate'>
            <label htmlFor='dayBirthdate'>Fecha de nacimiento</label>
            <div className='birthdate--group'>
              <span className='birthdate--group-icon border-thin text-blue'>
                <i className='fas fa-calendar-alt grid center' />
              </span>
              <div>
                <input
                  placeholder='Dia'
                  name='dayBirthdate'
                  className='form-control'
                  type='number'
                  ref={register({
                    required: {
                      value: true,
                      message: 'Dia requerido',
                    },
                    maxLength: {
                      value: 2,
                      message: 'Dia invalido',
                    },
                    max: {
                      value: 31,
                      message: 'Dia invalido',
                    },
                    min: {
                      value: 1,
                      message: 'Dia invalido',
                    },
                  })}
                />
                <span className='text-danger text-small d-block mb2'>
                  {errors?.dayBirthdate?.message}
                </span>
              </div>

              <div>
                <input
                  placeholder='Mes'
                  name='monthBirthdate'
                  className='form-control'
                  type='number'
                  ref={register({
                    required: {
                      value: true,
                      message: 'Mes requerido',
                    },
                    maxLength: {
                      value: 2,
                      message: 'Mes invalido',
                    },
                    max: {
                      value: 12,
                      message: 'Mes invalido',
                    },
                    min: {
                      value: 1,
                      message: 'Mes invalido',
                    },
                  })}
                />
                <span className='text-danger text-small d-block mb2'>
                  {errors?.monthBirthdate?.message}
                </span>
              </div>

              <div className='birthdate--group-year'>
                <input
                  placeholder='Año'
                  name='yearBirthdate'
                  className='form-control'
                  type='number'
                  ref={register({
                    required: {
                      value: true,
                      message: 'Año requerido',
                    },
                    minLength: {
                      value: 4,
                      message: 'Año invalido',
                    },
                    min: {
                      value: 1900,
                      message: 'Año invalido',
                    },
                    max: {
                      value: 2020,
                      message: 'Año invalido',
                    },
                  })}
                />
                <span className='text-danger text-small d-block mb2'>
                  {errors?.yearBirthdate?.message}
                </span>
              </div>
            </div>
          </div>

          <h5 className='form-group--subtitle'>Informacion de registro</h5>
          <div className='form-group--id icon-input-button'>
            <label htmlFor='nickname'>Maticula</label>
            <span className='background-white text-white border-thin right'>
              <i className='far fa-user' />
            </span>
            <input
              placeholder='Ingresa la matricula'
              name='nickname'
              className='form-control'
              type='text'
              ref={register({
                required: {
                  value: true,
                  message: 'Matricula requerida',
                },
              })}
            />
            <button type='button' className='btn-acent'>
              Generar
            </button>
            <small className='text-danger'>
              {errors?.nickname?.message}
            </small>
          </div>

          <div className='form-group--email icon-input'>
            <label htmlFor='email'>Correo electronico</label>
            <span className='background-white text-blue border-thin'>
              <i className='far fa-envelope' />
            </span>
            <input
              placeholder='Ingresa correo'
              name='email'
              className='form-control'
              type='email'
              pattern='^[^@]+@[^@]+\.[a-zA-Z]{2,}$'
              ref={register({
                required: {
                  value: true,
                  message: 'Correo requerido',
                },
              })}
            />
            <small className='text-danger text-small d-block mb2'>
              {errors?.email?.message}
            </small>
          </div>

          <div className='form-group--password icon-input-button'>
            <label htmlFor='password'>Contraseña</label>
            <span className='background-white text-white border-thin'>
              <i className='fas fa-unlock-alt' />
            </span>
            <input
              name='password'
              className='form-control'
              placeholder='Ingresa una contraseña'
              type='text'
              pattern='(?=.*\d)(?=.*[a-záéíóúüñ]).*[A-ZÁÉÍÓÚÜÑ].*'
              ref={register({
                required: 'Contraseña requerida',
                minLength: {
                  value: 8,
                  message: 'La contraseña debe tener un minimo de 8 caracteres',
                },
              })}
            />
            <button type='button' className='btn-acent'>
              Generar
            </button>
            {/* <i
              className="fa fa-eye password-icon"
              onClick={() => setvisible(!visible)}
            ></i> */}
            <small>
              Minimo 8 caracteres, una mayuscula y un numero
              {' '}
              <br />
              {errors.password && <p className='text-danger'>{errors.password.message}</p>}
            </small>
          </div>

          <button type='submit' className='form-group--button btn-primary background-black'>
            {' '}
            Enviar
          </button>
        </form>
      </div>

      <div className='CreateTeacher__side'>
        <img className='image-contain' src={TeacherIcon} alt='' />
      </div>
    </div>
  );
}
