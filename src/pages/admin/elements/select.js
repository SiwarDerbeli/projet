import React from 'react';
import { Select } from 'antd';

const Selectt = ({ setSelectedFiliere }) => {
  const onChange = (value) => {
    console.log(`selected ${value}`);
    setSelectedFiliere(value);
  };

  const onSearch = (value) => {
    console.log('search:', value);
  };

  // Filter `option.label` match the user type `input`
  const filterOption = (input, option) =>
    (option?.label ?? '').toLowerCase().includes(input.toLowerCase());

  return (
    <Select
      showSearch
      placeholder="filière .."
      optionFilterProp="children"
      onChange={onChange}
      onSearch={onSearch}
      filterOption={filterOption}
      options={[
        {
          value: 'ING A1',
          label: 'ING A1',
        },
        {
          value: 'ING A2',
          label: 'ING A2',
        },
        {
          value: 'ING A3',
          label: 'ING A3',
        },
        {
          value: 'ING A4',
          label: 'ING A4',
        },
      ]}
    />
  );
};

export default Selectt;
