import React from "react";
import Button from "./Button";

const ButtonList = () => {
  return (
    <div className="flex">
      <Button name="All" />
      <Button name="Gaming" />
      <Button name="Cricket" />
      <Button name="Football" />
      <Button name="Live" />
      <Button name="Music" />
      <Button name="E-Sports" />
      <Button name="UEFA Champions League" />
      <Button name="Primier League" />
      <Button name="Formula 1" />
      
    </div>
  );
};

export default ButtonList;
