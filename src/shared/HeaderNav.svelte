<script>
  import { onMount } from "svelte";
  import { Router, Link, Route } from "svelte-routing";
  import Icon from "fa-svelte";
  import { faCube, faLink } from "@fortawesome/free-solid-svg-icons";
  import { getTotalHeroes } from "../heroes/hero.store.js";
  import { getTotalVillains } from "../villains/villain.store.js";

  let navIsCollapse = true;

  onMount(() => {});

  function toggleNavBar() {
    navIsCollapse = !navIsCollapse;
  }
</script>

<style>
  .computed {
    margin: 1rem;
    color: purple;
    font-size: 24px;
  }

  .btn:focus {
    box-shadow: none;
  }
</style>

<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <span class="navbar-brand">
    <Icon icon={faCube} />
    Svelte Tour of Heroes
  </span>
  <button
    on:click={() => toggleNavBar()}
    class="navbar-toggler"
    type="button"
    data-toggle=" collapse"
    data-target="#navbarSupportedContent"
    aria-controls=" navbarSupportedContent"
    aria-expanded="false"
    aria-label=" Toggle navigation">
    <span class="navbar-toggler-icon" />
  </button>

  <div
    class={navIsCollapse ? 'collapse navbar-collapse' : 'navbar-collapse'}
    id="navbarSupportedContent">
    <div
      style="width: 100%; height: auto; display: flex; flex-direction: row;
      justify-content: space-between; align-items: center;">
      <section>
        <ul class="navbar-nav mr-auto">
          <li class="nav-item ml-3">
            <Link data-testid="nav-heroes" to="/">
              <button type="button" class="btn btn-default nav-button">
                Heroes
              </button>
            </Link>
          </li>
          <li class="nav-item ml-3">
            <Link data-testid="nav-villains" to="/villains">
              <button type="button" class="btn btn-default">Villains</button>
            </Link>
          </li>
        </ul>
      </section>
      <section>
        <span class="computed">Total heroes: {$getTotalHeroes}</span>
        <span class="computed">Total villains: {$getTotalVillains}</span>
      </section>
      <section>
        <ul class="navbar-nav my-2 my-lg-0">
          <li class="nav-item">
            <a
              class="nav-link"
              rel="noopener noreferrer"
              target="_blank"
              href="https://twitter.com/DevlinDuldulao">
              <Icon icon={faLink} />
              <span>Twitter</span>
            </a>
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              rel="noopener noreferrer"
              target="_blank"
              href="https://github.com/webmasterdevlin">
              <Icon icon={faLink} />
              <span>Github</span>
            </a>
          </li>
        </ul>
      </section>
    </div>
  </div>
</nav>
