import { writable, readable, derived, get } from "svelte/store";
import {
  getHeroes,
  getHeroById,
  deleteHero,
  putHero
} from "../heroes/hero-service";

const initialState = {
  heroes: [],
  hero: {
    id: "",
    firstName: "",
    lastName: "",
    house: "",
    knownAs: ""
  },
  isLoading: false,
  error: ""
};

export const heroStore = writable(initialState);

export async function loadHeroes() {
  // update will bubble up the values to the subscribers
  heroStore.update(state => (state = { ...state, isLoading: true }));
  try {
    const res = (await getHeroes()).data;
    heroStore.update(state => (state = { ...state, heroes: res }));
  } catch (e) {
    alert(e.message);
  }
  heroStore.update(state => (state = { ...state, isLoading: false }));
}

export async function loadHeroById(updatedHero) {
  try {
    const hero = await getHeroById(i);
    heroStore.update(state => (state.hero = hero));
  } catch (e) {
    alert(e.message);
  }
}

export async function removeHero(id) {
  const confirmation = confirm("You sure you want to delete this?");
  if (!confirmation) return;

  let previousHeroes;
  heroStore.update(state => {
    previousHeroes = state.heroes;
    const updatedHeroes = state.heroes.filter(h => h.id !== id);
    return (state = { ...state, heroes: updatedHeroes }); // need to return the state only
  });
  try {
    await deleteHero(id);
  } catch (e) {
    alert(e.message);
    heroStore.update(state => (state = { ...state, heroes: previousHeroes }));
  }
}

export async function updateHero(updatedHero) {
  try {
    await putHero(updatedHero);
    heroStore.update(state => {
      const index = state.heroes.findIndex(h => h.id === updatedHero.id);
      state.heroes[index] = updatedHero;
    });
  } catch (e) {
    alert(e.message);
  }
}
