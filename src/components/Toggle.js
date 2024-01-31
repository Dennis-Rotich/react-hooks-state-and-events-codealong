import React, {useState} from "react";

function Toggle() {
  const  [isToggledOn, setIsToggleOn] = useState(false);
  const color = isToggledOn ? "red":"white";
  function handleClick(){
    setIsToggleOn((isToggledOn)=> !isToggledOn)
  }
  return(
    <button style={{background:color}} onClick={handleClick}>{isToggledOn ? 'ON':'OFF'}</button>
  )
}

export default Toggle;
