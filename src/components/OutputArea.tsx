import React, { memo, useContext, VFC } from "react";
import { UserContext } from "../contexts/context";
import { pics } from "../contexts/pics";
import { PicKeys } from "../types/types";
import "./OutputArea.css";

const OutputArea: VFC = memo(() => {
  const { state } = useContext(UserContext);
  const { name, gender, className, trait, strength, agility, resilience, wisdom, luck } = state;
  const picKey = (gender + className) as PicKeys;

  return (
    <>
      <div className="out-container">
        <h2>表示エリア</h2>
        <div className="out-wrap">
          <div className="picBox out-item">
            <img className="pic" src={pics[picKey]} alt={className} />
          </div>
          <div className="box out-item">
            <h3>Name : {name}</h3>
            <h3>Class : {className}</h3>
            <h3>Gender : {gender}</h3>
            <h3>Traits : {trait}</h3>
          </div>
          <div className="box out-item">
            <h3>Strength : {strength}</h3>
            <h3>Agility : {agility}</h3>
            <h3>Resilience : {resilience}</h3>
            <h3>Wisdom : {wisdom}</h3>
            <h3>Luck : {luck}</h3>
          </div>
        </div>
      </div>
    </>
  );
});

export default OutputArea;
