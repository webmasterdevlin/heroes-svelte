<script>
  import { onMount } from "svelte";
  import Icon from "fa-svelte";
  import { createEventDispatcher } from "svelte";
  import {
    faPlus,
    faSave,
    faChevronLeft
  } from "@fortawesome/free-solid-svg-icons";

  export let isShowNewItemForm;
  export let handleOnSubmit;
  export let handleShowNewItemForm;

  export let newItemForm = {}; // Exposes to bind to the parent component

  onMount(() => {});
</script>

<style>

</style>

<section>
  <div style="width: 50vw; padding-top: 20px">
    <div class="d-flex flex-row justify-content-start">
      <button
        on:click={handleShowNewItemForm}
        type="button"
        class="btn btn-info mx-1">
        <Icon icon={faPlus} />
        Add New
      </button>

      {#if isShowNewItemForm}
        <button
          on:click={handleShowNewItemForm}
          type="button"
          class="btn btn-outline-warning mx-1">
          <Icon icon={faChevronLeft} />
          Cancel
        </button>
      {/if}

    </div>
    {#if isShowNewItemForm}
      <div class="card my-3" style="width:auto">
        <form class="card-header">
          <section class="d-flex flex-row">
            <div class="mt-3 mr-3">
              <label for="firstName">First Name</label>
              <!-- bind:value means pass the value of the input to the heroForm.firstName property, which then will be passed to the parent component -->
              <!-- That's why I created the export let newItemForm component -->
              <input
                bind:value={newItemForm.firstName}
                name="firstName"
                id="firstName"
                required="required"
                type="text"
                class="form-control" />
            </div>
            <div class="mt-3 ml-3">
              <label for="lastName">Last Name</label>
              <input
                bind:value={newItemForm.lastName}
                name="lastName"
                id="lastName"
                type="text"
                class="form-control" />
            </div>
          </section>
          <label for="house" class="mt-3">House</label>
          <input
            bind:value={newItemForm.house}
            name="house"
            id="house"
            type="text"
            class="form-control" />
          <label for="knownAs" class="mt-3">Known as</label>
          <input
            bind:value={newItemForm.knownAs}
            name="knownAs"
            id="knownAs"
            type="text"
            class="form-control" />
          <button
            on:click|preventDefault={handleOnSubmit}
            type="button"
            class="btn btn-success mt-3">
            <Icon icon={faSave} />
            Save
          </button>
        </form>
      </div>
    {/if}
  </div>
</section>
