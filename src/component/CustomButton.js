import React from 'react';
import { Button } from 'reactstrap';

const CustomButton = ({ color, text, ...rest }) => {
  return <Button color={color}>{text}</Button>;
};

export default CustomButton;
