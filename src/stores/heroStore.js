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
    console.log(e);
    alert(e.message);
  }
  heroStore.update(state => (state = { ...state, isLoading: false }));
}

export async function loadHeroById(updatedHero) {
  try {
    const hero = await getHeroById(i);
    heroStore.update(state => (state.hero = hero));
  } catch (e) {
    console.log(e.message);
    alert(e.message);
  }
}

export async function removeHero(id) {
  try {
    await deleteHero(id);
    heroStore.update(state => {
      state.heroes = state.heroes.filter(h => h.id === id);
    });
  } catch (e) {
    console.log(e.message);
    alert(e.message);
  }
}

export async function updateHero(updatedHero) {
  try {
    await putHero(updatedHero);
    heroStore.update(state => {
      const index = state.heroes.findIndex(h => h.id === updatedHero.id);
      state.heroes[index] = updatedHero;
    });
  } catch (e) {}
}
