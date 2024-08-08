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

export const mentState = atom({
  key: 'mentState',
  default: undefined
});

export const nameState = atom({
  key: 'nameState',
  default: '아무개'
});

export const scoreState = atom({
  key: 'scoreState',
  default: {
    1: { 'Not': 0, 'Rarely': 1, 'Occasionally': 2, 'Frequently': 3, 'frequently': 4 },
    2: { 'Not': 0, 'Rarely': 1, 'Occasionally': 2, 'Frequently': 3, 'frequently': 4 },
    3: { 'Not': 0, 'Rarely': 1, 'Occasionally': 2, 'Frequently': 3, 'frequently': 4 },
    4: { 'Not': 4, 'Rarely': 3, 'Occasionally': 2, 'Frequently': 1, 'frequently': 0 },
    5: { 'Not': 4, 'Rarely': 3, 'Occasionally': 2, 'Frequently': 1, 'frequently': 0 },
    6: { 'Not': 0, 'Rarely': 1, 'Occasionally': 2, 'Frequently': 3, 'frequently': 4 },
    7: { 'Not': 4, 'Rarely': 3, 'Occasionally': 2, 'Frequently': 1, 'frequently': 0 },
    8: { 'Not': 4, 'Rarely': 3, 'Occasionally': 2, 'Frequently': 1, 'frequently': 0 },
    9: { 'Not': 0, 'Rarely': 1, 'Occasionally': 2, 'Frequently': 3, 'frequently': 4 },
    10: { 'Not': 0, 'Rarely': 1, 'Occasionally': 2, 'Frequently': 3, 'frequently': 4 },
  }
})
