import { atom } from "recoil";

export const addressState = atom({
  key: 'addressState',
  default: []
});

export const latitudeState = atom({
  key: 'latitudeState',
  default: undefined
});

export const longitudeState = atom({
  key: 'longitudeState',
  default: undefined
});

export const coordinatesState = atom({
  key: 'coordinatesState',
  default: []
});

export const totalScoreState = atom({
  key: 'totalScoreState',
  default: 0
});