<script>
  import { onMount, onDestroy } from "svelte";
  import Icon from "fa-svelte";
  import { faEdit, faEraser } from "@fortawesome/free-solid-svg-icons";
  import NewItemForm from "../shared/NewItemForm.svelte";
  import { heroStore } from "../stores/heroStore.js";
  import { navigate } from "svelte-routing";

  let isShowNewItemForm = false;
  let heroForm = {
    firstName: "",
    lastName: "",
    house: "",
    knownAs: ""
  };

  let heroFormReset = {
    firstName: "",
    lastName: "",
    house: "",
    knownAs: ""
  };

  function onSubmit() {
    heroStore.createHero(heroForm);
    heroForm = heroFormReset;
  }

  function showNewItemForm() {
    isShowNewItemForm = !isShowNewItemForm;
  }

  /* 
  Extra setup for not using auto-subscriptions.
  Will emit properties (1 or more) that changed.
  for some reason, there will be no reactions in the component if the local variable and the parameter of the anonymous arrow functions have the same names.
  This is the reason I had to renamed the parameters.
  */
  // let heroes;
  // let isLoading;
  // const subscription = heroStore.subscribe(
  //   ({ heroes: newHeroes, isLoading: newIsLoading }) => {
  //     heroes = newHeroes;
  //     isLoading = newIsLoading;
  //   }
  // );
  // onDestroy(subscription);

  onMount(async () => {
    await heroStore.loadHeroes();
  });

  function handleClickEdit(id) {
    navigate(`/edit-hero/${id}`, { replace: true });
  }

  async function handleClickDelete(id) {
    await heroStore.removeHero(id);
  }
</script>

<style>

</style>

<!-- The newItemForm object of the child component sends it properties to the heroForm object of the parent component -->
<div class="container">
  <NewItemForm
    {isShowNewItemForm}
    bind:newItemForm={heroForm}
    handleOnSubmit={onSubmit}
    handleShowNewItemForm={showNewItemForm} />
  {#if $heroStore.isLoading}
    <div style="display:flex; flex-direction: row; justify-content: center">
      <div
        class="spinner-border"
        style="width: 9rem; height: 9rem; color: purple"
        role="status">
        <span class="sr-only">Loading...</span>
      </div>
    </div>
  {:else}
    {#each $heroStore.heroes as hero}
      <div class="card mt-3" style="width: auto;">
        <div class="card-header">
          <h3 class="card-title">{hero.firstName} {hero.lastName}</h3>
          <h5 class="card-subtitle mb-2 text-muted">{hero.house}</h5>
          <p class="card-text">{hero.knownAs}</p>
        </div>
        <section class="card-body">
          <div class="row">
            <button
              on:click={() => handleClickEdit(hero.id)}
              class="btn btn-primary card-link col text-center">
              <Icon icon={faEdit} />
              Edit
            </button>
            <button
              on:click={() => handleClickDelete(hero.id)}
              class="btn btn-outline-danger card-link col text-center">
              <Icon icon={faEraser} />
              Delete
            </button>
          </div>
        </section>
      </div>
    {/each}
  {/if}
</div>
