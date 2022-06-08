


export const SwitchButton = (props) => {
  const {toggleButton,switchIcon} = props;
  return(
    <div>
      <button onClick={toggleButton}>切り替え</button>
      <p>{DisplayTypeMessage(switchIcon)}</p>
    </div>
  );
}

const DisplayTypeMessage = (isList) => {
  if (isList){
    return("a")
  } else {
    return ("b")
  }
  // return switchIcon ? "a" : "b";
}
