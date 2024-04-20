import React, { useState } from 'react';
import { Select } from 'antd';

const onSearch = (value) => {
  console.log('search:', value);
};

const Matiere = ['matière..', 'BD Avancée', 'Conception', 'Architectures logiciels'];

// Filter `option.label` match the user type `input`
const filterOption = (input, option) =>
  (option?.label ?? '').toLowerCase().includes(input.toLowerCase());

const SelectMatiere = ({ onMatiereChange }) => {
  const [selectedMatiere, setSelectedMatiere] = useState(Matiere[0]);

  const handleMatiereChange = (value) => {
    setSelectedMatiere(value);
    onMatiereChange(value);
  };

  return (
    <Select
      showSearch
      placeholder="matière .."
      optionFilterProp="children"
      onChange={handleMatiereChange}
      onSearch={onSearch}
      filterOption={filterOption}
      options={Matiere.map((matiere) => ({
        label: matiere,
        value: matiere,
      }))}
    />
  );
};

export default SelectMatiere;
