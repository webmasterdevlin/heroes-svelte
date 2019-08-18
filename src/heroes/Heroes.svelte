<script>
    import { onMount } from 'svelte'
    import Icon from 'fa-svelte'
    import { faEdit, faEraser } from '@fortawesome/free-solid-svg-icons'
    import { getHeroes } from './hero-service'
    import NewItemForm from '../shared/NewItemForm.svelte'

    export let heroes = []
    onMount(async () => {
    heroes = (await getHeroes()).data
        console.log(heroes)
    })

    function handleClickEdit () {
        alert('handleClickEdit')
    }

    function handleClickDelete () {
        alert('handleClickDelete')
    }
</script>
<style>

</style>

<div class="container-fluid">
    <NewItemForm ></NewItemForm>
    {#if heroes.length === 0}
       <div style="display:flex; flex-direction: row; justify-content: center">
           <div class="spinner-border" style="width: 9rem; height: 9rem; color: purple" role="status">
               <span class="sr-only">Loading...</span>
           </div>
       </div>
    {:else}
        {#each heroes as hero}
                   <div class="card mt-3" style="width: auto;">
                        <div class="card-header">
                            <h3 class="card-title">{ hero.firstName } { hero.lastName }</h3>
                            <h5 class="card-subtitle mb-2 text-muted">{ hero.house }</h5>
                            <p class="card-text">{ hero.knownAs }</p>
                        </div>
                        <section class="card-body">
                            <div class="row">
                                <button on:click={handleClickEdit} class="btn btn-primary card-link col text-center">
                                    <Icon icon={faEdit} ></Icon>
                                    Edit
                                </button>
                                <button on:click={handleClickDelete} class="btn btn-outline-danger card-link col text-center">
                                    <Icon icon={faEraser} ></Icon>
                                    Delete
                                </button>
                            </div>
                        </section>
                    </div>
        {/each}
    {/if}
</div>
