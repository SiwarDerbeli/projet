import React from 'react';
import { useState } from 'react';
import { Slider, Typography } from 'antd';

const { Text } = Typography;

const NiveauxUniversitairesSlider = () => {
    const [niveau, setNiveau] = useState(4); // Niveau par défaut
  
    const handleChange = (value) => {
      setNiveau(value);
    }; // Niveau par défaut, non changeable

  return (
    <div style={{ width: 300, margin: 'auto' }}>
      <Slider
        defaultValue={niveau}
        min={1}
        max={5}
        step={1}
        onChange={handleChange}
        tooltipVisible
        marks={{ 1: '1ére', 2: '2éme', 3: '3éme', 4: '4éme', 5: '5éme' }}
      />
      <div style={{ textAlign: 'center', marginTop: 20 }}>
        <Text strong>Niveau Universitaire:</Text>{' '}
        <Text>{niveau}</Text>
      </div>
    </div>
  );
};

export default NiveauxUniversitairesSlider;

