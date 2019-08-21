import { writable, readable, derived, get } from "svelte/store";

const initialState = {
  villains: [],
  villain: {
    id: "",
    firstName: "",
    lastName: "",
    house: "",
    knownAs: ""
  },
  isLoading: false,
  error: ""
};

export const villainStore = writable(initialState);
