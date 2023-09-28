import { useState, useRef } from "react";
import { InfoInterface } from "./info";

let clickTime: string = "";

export function Url() {
  const [state, setState] = useState(``);
  const [stateInfo, setStateInfo] = useState<InfoInterface>({
    url: "",
    size: "",
    date: "",
  });
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <div className="url">
      <h1>welcome to QR </h1>
      <img src={state} alt="" />
      <input placeholder="enter url" ref={inputRef}></input>
      <button
        onClick={() => {
          clickTime = new Date().toLocaleString();
          if (inputRef.current) {
            const inputValueRef = inputRef.current.value;
            setState(
              `https://api.qrserver.com/v1/create-qr-code/?data=${inputValueRef}&size=300x300`
            );
          }
        }}
      >
        Get QR
      </button>
      <button
        onClick={() => {
          setStateInfo({
            url: `${state}`,
            size: `300x300`,
            date: `${clickTime}`,
          });
        }}
      >
        info
      </button>
      <p>
        `{stateInfo.url} {stateInfo.size} {stateInfo.date}`
      </p>
    </div>
  );
}
