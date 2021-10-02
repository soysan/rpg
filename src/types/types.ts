import { Dispatch } from "react";

export type Data = {
  name: string;
  className: "hero" | "mage" | "warrior";
  gender: "male" | "female";
  trait: "everyman" | "bat out of hell" | "lucky devil" | "brave" | "tomboy";
  strength: number;
  agility: number;
  resilience: number;
  wisdom: number;
  luck: number;
};

export type ContextType = {
  state: Data;
  dispatch: Dispatch<ActionType>;
}

export type ClassVal = "hero" | "mage" | "warrior";

export type TraitVal = "everyman" | "bat out of hell" | "brave" | "lucky devil" | "tomboy";

export type Pics = {
  malehero: string;
  malemage: string;
  malewarrior: string;
  femalehero: string;
  femalemage: string;
  femalewarrior: string;
};

export type PicKeys = "malehero" | "malemage" | "malewarrior" | "femalehero" | "femalemage" | "femalewarrior";



export type ActionType = { type: "name", value: string } | { type: "class", value: string } | { type: "gender", value: string } | { type: "trait", value: string } | { type: "strength", value: number } | { type: "agility", value: number } | { type: "resilience", value: number } | { type: "wisdom", value: number } | { type: "luck", value: number };
