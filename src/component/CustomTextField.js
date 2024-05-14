import React from 'react';
import { Input } from 'reactstrap';

const CustomTextField = ({ label, ...rest }) => {
  return (
    <div>
      <label>{label}</label>
      <Input {...rest} />
    </div>
  );
};

export default CustomTextField;
