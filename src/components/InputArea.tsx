import React, { useState, useContext, useRef } from "react";
import { UserContext } from "../contexts/context";
import { ClassVal, TraitVal } from "../types/types";
import "./InputArea.css";

const classOptions: ClassVal[] = ["hero", "mage", "warrior"];

const traitOptions: TraitVal[] = ["everyman", "bat out of hell", "brave", "lucky devil", "tomboy"];

const InputArea = (): JSX.Element => {
  const { dispatch } = useContext(UserContext);

  const [isMale, setIsMale] = useState(true);
  const nameValue = useRef<HTMLInputElement | null>(null);

  const DetermineName = (e: React.KeyboardEvent): void => {
    if (e.key !== "Enter") return;
    const inputName = nameValue.current?.value;
    dispatch({ type: "name", value: inputName! });
  };
  const FocusOutHandler = () => {
    const inputName = nameValue.current?.value;
    dispatch({type: "name", value: inputName!});
  }

  const ToggleGenderHandler = () => {
    setIsMale(!isMale);
    const gender = !isMale ? "male" : "female";
    dispatch({ type: "gender", value: gender });
  };

  const ClassHandler = (value: ClassVal) => {
    dispatch({ type: "class", value: value });
  };

  const TraitHandler = (value: TraitVal) => {
    dispatch({ type: "trait", value: value });
  };

  return (
    <>
      <div className="in-container">
        <h2>入力エリア</h2>
        <div className="nameWrap">
          <label>
            <h3>Name</h3>
          </label>
          <input type="text" ref={nameValue} onKeyUp={(e) => DetermineName(e)} onBlur={FocusOutHandler} className="nameInput input" />
        </div>

        <label>
          <h3>Gender</h3>
        </label>
        <div>
          <label>
            <span>Man</span>
          </label>
          <input className='input' type="radio" checked={isMale} onChange={ToggleGenderHandler} />
          <label>
            <span>Woman</span>
          </label>
          <input className='input' type="radio" checked={!isMale} onChange={ToggleGenderHandler} />
        </div>

        <label>
          <h3>Class</h3>
        </label>
        <div>
          <select onChange={(e) => ClassHandler(e.target.value as ClassVal)} className="selectOp">
            {classOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>

        <label>
          <h3>Traits</h3>
        </label>
        <div>
          <select onChange={(e) => TraitHandler(e.target.value as TraitVal)} className="selectOp">
            {traitOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      </div>
    </>
  );
};

export default InputArea;
