import React from "react";

function InputArea(props) {
  return (
    <div className="form">
      <input onChange={props.inputValue} type="text" value={props.getText} />
      <button onClick={props.updateItem}>
        <span>Add</span>
      </button>
    </div>
  );
}

export default InputArea;
