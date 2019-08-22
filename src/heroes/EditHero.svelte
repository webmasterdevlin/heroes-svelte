<script>
  import { onMount } from "svelte";
  import { heroStore } from "./heroStore.js";

  onMount(() => {});
</script>

<style>

</style>

<main>
  {#if $heroStore.isLoading}
    <div style="display: flex; flex-direction: row; justify-content: center;">
      <div
        class="spinner-border"
        style="width: 9rem; height: 9rem; color: purple ;"
        role="status">
        <span class="sr-only">Loading...</span>
      </div>
    </div>
  {:else}
    <main class="container" style="width: auto">
      <h2>Edit Hero</h2>
      <form class="card-header">
        <section class="d-flex flex-row">
          <div class="mt-3 mr-3 input-width">
            <label htmlFor="firstName">First Name</label>
            <input
              name="firstName"
              type="text"
              id="firstName"
              class="form-control" />
          </div>
          <div class="mt-3 ml-3 input-width">
            <label>Last Name</label>
            <input
              name="lastName"
              type="text"
              id="lastName"
              class="form-control" />
          </div>
        </section>
        <label class="mt-3">House</label>
        <input name="house" type="text" id="house" class="form-control" />
        <label class="mt-3">Known as</label>
        <input name="knownAs" type="text" id="knownAs" class="form-control" />
        <button type="submit" class="btn btn-info mt-3">Update</button>
        <button type="button" class="btn btn-outline-secondary mt-3 ml-3">
          Back
        </button>
      </form>
    </main>
  {/if}
</main>
