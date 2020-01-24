import {Action} from 'overmind';

export const increment: Action<number> = ({state}, incrementBy) => {
  state.counter += incrementBy;
};

export const decrement: Action<number> = ({state}, decrementBy) => {
  state.counter -= decrementBy;
};
