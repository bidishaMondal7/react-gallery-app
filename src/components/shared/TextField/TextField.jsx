import React from 'react';

function TextField(props) {
  const inputValue = props.inputValue;
  const onChange = props.onChange;
  return (
    <input type="text" value={inputValue} onChange={onChange}>
      Input
    </input>
  );
}

export default TextField;
