import { useState } from 'react';
import Eye from './eye.svg';
import './style.css';

export const Input = ({
  type,
  size,
  variant,
  rightLogo,
  rightLogoOnClick,
  onChange,
}) => {

  const [value, setvalue] = useState('');
  const [show, setshow] = useState(false)

  onChange = (e) => {
    setvalue(e.target.value)
  }

  rightLogoOnClick = () => {
    setshow(!show)
  }


  return (
    <div className="inputContainer">
      {/* Add Right Logo */}
      <input className={`input`}
        value={value}
        type={show ? type : 'password'}
        style={{
          fontSize: size,
          border: variant
        }}
        id={variant == 'outline' ? 'outline' : variant == 'flushed' ? 'flushed' : 'filled'}
        onChange={onChange}

      />
      <img className="eye" src={Eye}onClick={rightLogoOnClick} /><br/>
        <h1>{value}</h1>
    </div>
  );
};
