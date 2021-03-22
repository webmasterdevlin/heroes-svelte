<script>
  import { onMount, onDestroy } from "svelte";
  import Icon from "fa-svelte";
  import { faEdit, faEraser } from "@fortawesome/free-solid-svg-icons";
  import NewItemForm from "../shared/NewItemForm.svelte";
  import { villainStore } from "./villain.store.js";
  import { navigate } from "svelte-routing";

  let isShowNewItemForm = false;
  let villainForm = {
    firstName: "",
    lastName: "",
    house: "",
    knownAs: ""
  };

  let villainFormReset = {
    firstName: "",
    lastName: "",
    house: "",
    knownAs: ""
  };

  async function onSubmit() {
    await villainStore.createVillain(villainForm);
  }

  function showNewItemForm() {
    isShowNewItemForm = !isShowNewItemForm;
  }

  /*
  Extra setup for not using auto-subscriptions ($ prefix is the auto-subscriptions).
  Will emit properties (1 or more) that changed.
  for some reason, there will be no reactions in the component if the local variable and the parameter of the anonymous arrow functions have the same names.
  This is the reason I had to renamed the parameters.
  */
  // let villains;
  // let isLoading;
  // const subscription = villainStore.subscribe(
  //   ({ villains: newVillains, isLoading: newIsLoading }) => {
  //     villains = newVillains;
  //     isLoading = newIsLoading;
  //   }
  // );
  // onDestroy(subscription);

  onMount(async () => {
    await villainStore.loadVillains();
  });

  function handleClickEdit(id) {
    navigate(`/edit-villain/${id}`, { replace: true });
  }

  async function handleClickDelete(id) {
    await villainStore.removeVillain(id);
  }
</script>

<style>

</style>

<!-- The newItemForm object of the child component sends it properties to the villainForm object of the parent component -->
<main class="container">
  <NewItemForm
    {isShowNewItemForm}
    bind:newItemForm={villainForm}
    handleOnSubmit={onSubmit}
    handleShowNewItemForm={showNewItemForm} />
  {#if $villainStore.isLoading}
    <div style="display:flex; flex-direction: row; justify-content: center">
      <div
        class="spinner-border"
        style="width: 9rem; height: 9rem; color: purple"
        role="status">
        <span class="sr-only">Loading...</span>
      </div>
    </div>
  {:else}
    {#each $villainStore.villains as villain}
      <div data-testid="card" class="card mt-3" style="width: auto;">
        <div class="card-header">
          <h3 class="card-title">{villain.firstName} {villain.lastName}</h3>
          <h5 class="card-subtitle mb-2 text-muted">{villain.house}</h5>
          <p class="card-text">{villain.knownAs}</p>
        </div>
        <section class="card-body">
          <div class="row">
            <button
              on:click={() => handleClickEdit(villain.id)}
              class="btn btn-primary card-link col text-center">
              <Icon icon={faEdit} />
              Edit
            </button>
            <button
              on:click={() => handleClickDelete(villain.id)}
              class="btn btn-outline-danger card-link col text-center">
              <Icon icon={faEraser} />
              Delete
            </button>
          </div>
        </section>
      </div>
    {/each}
  {/if}
</main>
