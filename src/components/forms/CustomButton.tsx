import React from "react";
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import { ButtonProps as bButtonProps, Button } from "reactstrap";

type ButtonProps = bButtonProps & { loading?: boolean };

const CustomButton: React.FC<ButtonProps> = ({ loading, ...rest }) => {
  return (
    <Button className="btn" disabled={loading} {...rest}>
      {loading && <><AiOutlineLoading3Quarters className="spin"/>{' '}</>} Create
    </Button>
  );
};

export default CustomButton;