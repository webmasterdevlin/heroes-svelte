<script>
    import { onMount } from "svelte";
    import Icon from 'fa-svelte'
    import { faPlus, faSave, faChevronLeft } from '@fortawesome/free-solid-svg-icons'
    onMount(() => {});
    function handleClickAdd () {
        alert('handleClickAdd')
    }
    function handleClickCancel () {
        alert('handleClickCancel')
    }
    function handleClickSave () {
        alert('handleClickSave')
    }
</script>
<style>

</style>
<section>
    <div class="d-flex flex-row justify-content-start">
    <button on:click={handleClickAdd} type="button" class="btn btn-info mx-1">
        <Icon icon={faPlus} ></Icon> Add New
    </button>

        {#if true}
            <button on:click={handleClickCancel} type="button" class="btn btn-outline-warning mx-1">
                <Icon icon={faChevronLeft} ></Icon> Cancel
            </button>
        {/if}

    </div>
        {#if true}
                <div class="card my-3" style="width:auto">
                <form on:submit|preventDefault={handleClickSave} class="card-header">
                    <section class="d-flex flex-row">
                        <div class="mt-3 mr-3">
                            <label for="firstName">First Name</label>
                            <input name="firstName"
                                    id="firstName"
                                    required="required"
                                    type="text"
                                    class="form-control" />
                        </div>
                        <div class="mt-3 ml-3">
                            <label for="lastName">Last Name</label>
                            <input name="lastName"
                                    id="lastName"
                                    type="text"
                                    class="form-control" />
                        </div>
                    </section>
                    <label for="house" class="mt-3">
                        House
                    </label>
                    <input name="house"
                            id="house"
                            type="text"
                            class="form-control" />
                    <label for="knownAs" class="mt-3">
                        Known as
                    </label>
                    <input name="knownAs"
                            id="knownAs"
                            type="text"
                            class="form-control" />
                    <button on:click={handleClickSave}  class="btn btn-success mt-3">
                        <Icon icon={faSave} ></Icon>
                        Save
                    </button>
                </form>
            </div>
            {/if}
</section>
