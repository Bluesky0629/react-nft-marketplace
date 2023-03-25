import { INCREMENT, DECREASE } from "../types/count.types";

export function incrementAction() {
  return {
    type: INCREMENT
  };
}

export function decreaseAction() {
  return {
    type: DECREASE
  };
}
