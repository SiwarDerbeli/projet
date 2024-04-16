import React, { useState } from 'react';
import { Select, Space } from 'antd';

const FilereData = ['Filière', 'ING A1', 'ING A2', 'ING A3', 'ING A4'];

const groupeData = {
  Filière: ['groupe'],
  'ING A2': ['groupe 1', 'groupe 2', 'groupe 3', 'groupe 4'],
  'ING A3': ['groupe 1', 'groupe 2', 'groupe 3', 'groupe 4'],
  'ING A4': ['groupe 1', 'groupe 2', 'groupe 3', 'groupe 4'],
  'ING A1': ['groupe 1', 'groupe 2', 'groupe 3', 'groupe 4'],
};

const Selectt = ({ onFilereChange, onSecondGroupeChange }) => {
  const [selectedFilere, setSelectedFilere] = useState(FilereData[0]);
  const [cities, setCities] = useState(groupeData[FilereData[0]]);
  const [secondgroupe, setSecondgroupe] = useState(groupeData[FilereData[0]][0]);

  const handleFilereChange = (value) => {
    setSelectedFilere(value);
    setCities(groupeData[value]);
    setSecondgroupe(groupeData[value][0]);
    onFilereChange(value);
  };

  const handleSecondgroupeChange = (value) => {
    setSecondgroupe(value);
    onSecondGroupeChange(value);
  };

  return (
    <Space wrap>
      <Select
        defaultValue={FilereData[0]}
        style={{ width: 320 }}
        onChange={handleFilereChange}
        options={FilereData.map((Filere) => ({
          label: Filere,
          value: Filere,
        }))}
      />
      <Select
        style={{ width: 320 }}
        value={secondgroupe}
        onChange={handleSecondgroupeChange}
        options={cities.map((groupe) => ({
          label: groupe,
          value: groupe,
        }))}
      />
    </Space>
  );
};

export default Selectt;
