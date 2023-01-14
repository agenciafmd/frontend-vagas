import { menuDataType } from './data';

export type action = {
  type?: string;
  payload?: boolean;
};

export const menuReducer = (state: menuDataType, action: action) => {
  switch (action.type) {
    case 'TRIGGER':
      return { ...state, toggle: !state.toggle };

    default:
      return { ...state };
  }
};
