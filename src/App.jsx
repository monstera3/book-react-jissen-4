import { ColoredMessage } from "./components/ColoredMessage";
import {useState} from "react";
import { StyledComponents } from "./components/StyledComponents";
import { SwitchButton } from "./components/SwitchButton";

export const App = () =>{

  //stateの定義
  const [num, setNum] = useState(0);

  const onClickButton = () => {
    setNum(num + 1);
  };

  return (
    <>
      <ColoredMessage color="blue">お元気ですか</ColoredMessage>
      <ColoredMessage color="pink">元気です</ColoredMessage>
      <button onClick={onClickButton}>ボタン</button>
      <p>{num}</p>
      <StyledComponents />
      <SwitchButton />
    </>
  );

};
