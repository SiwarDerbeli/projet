import React, { useState } from 'react';
import { Select, Space } from 'antd';


const teachersData = [
  { name: 'Sofiene Ben ahmed', subjects: [
      { name: 'Matière 1', hours: 4, groups: ['ING A1 ,groupe 2', 'ING A2 ,groupe1'] },
      { name: 'Matière 2', hours: 3, groups: ['ING A3 ,groupe 2', 'ING A4 ,groupe1'] }
    ]
  },
  { name: 'Chtioui Alhoussem', subjects: [
      { name: 'Matière 3', hours: 5, groups: ['ING A2 ,groupe3', 'ING A3 ,groupe3'] },
      { name: 'Matière 4', hours: 2, groups: ['ING A1 ,groupe3', 'ING A4 ,groupe3'] }
    ]
  },
];

const SelectEmploi = () => {
  const [selectedTeacher, setSelectedTeacher] = useState(teachersData[0]);
  const [selectedSubject, setSelectedSubject] = useState(null);

  const handleTeacherChange = (value) => {
    const teacher = teachersData.find(teacher => teacher.name === value);
    setSelectedTeacher(teacher);
    setSelectedSubject(null);
  };

  const handleSubjectChange = (value) => {
    const subject = selectedTeacher.subjects.find(subject => subject.name === value);
    setSelectedSubject(subject);
  };

  return (
    <div className='space-x-6'>
      <Select
        defaultValue={teachersData[0].name}
        style={{ width: 320 }}
        onChange={handleTeacherChange}
        options={teachersData.map(teacher => ({
          label: teacher.name,
          value: teacher.name,
        }))}
      />
      {selectedTeacher && (
        <Select
          style={{ width: 320 }}
          value={selectedSubject ? selectedSubject.name : ''}
          onChange={handleSubjectChange}
          options={selectedTeacher.subjects.map(subject => ({
            label: `${subject.name} - ${subject.hours} heures`,
            value: subject.name,
          }))}
        />
      )}
      {selectedSubject && (
        <div className='py-6 space-y-4'>
          <h3 className='text-gray-400'>Groupes étudiants cette matière :</h3>
          <ul className='space-y-2'>
            {selectedSubject.groups.map(group => (
              <li key={group}
              className='p-2 border border-green-500 text-green-500 bg-green-100 rounded-lg w-1/4'>{group}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SelectEmploi;

