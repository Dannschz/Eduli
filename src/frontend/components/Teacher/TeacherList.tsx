import React from 'react';
import TeacherCard from './TeacherCard';
import './teacherList.scss';

export default function TeacherList({
  teachers,
}: {
  teachers: Array<{ id: string; name: string; email: string; nivel: string; avatar: string }>;
}) {
  return (
    <div className='teacherList'>
      {teachers.map((teacher) => {
        return (
          <TeacherCard
            key={teacher.id}
            name={teacher.name}
            nivel={teacher.nivel}
            avatar={teacher.avatar}
          />
        );
      })}
    </div>
  );
}
