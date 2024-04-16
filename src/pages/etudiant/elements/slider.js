import React, { useState } from 'react';
import { UserOutlined, CheckCircleOutlined } from '@ant-design/icons';

import { Slider } from 'antd';
const IconSlider = (props) => {
  const { max, min } = props;
  const [value, setValue] = useState(0);
  const mid = Number(((max - min) / 2).toFixed(5));
  const preColorCls = value >= mid ? '' : 'icon-wrapper-active';
  const nextColorCls = value >= mid ? 'icon-wrapper-active' : '';
  return (
    <div className="icon-wrapper">
      <UserOutlined className={preColorCls} />
      <Slider {...props} onChange={setValue} value={value} />
      <CheckCircleOutlined className={nextColorCls} />
    </div>
  );
};
const Slide = () => <IconSlider min={0} max={5} />;
export default Slide;