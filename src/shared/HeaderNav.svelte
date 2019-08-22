<script>
  import { onMount } from "svelte";
  import { Router, Link, Route } from "svelte-routing";
  import Icon from "fa-svelte";
  import { faCube, faLink } from "@fortawesome/free-solid-svg-icons";
  import { getTotalHeroes } from "../heroes/hero.store.js";
  import { getTotalVillains } from "../villains/villain.store.js";

  onMount(() => {});
</script>

<style>
  .computed {
    margin: 1rem;
    color: purple;
    font-size: 24px;
  }
</style>

<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <span class="navbar-brand">
    <Icon icon={faCube} />
    React Tour of Heroes
  </span>
  <button
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
    style="width: 100%; height: auto; display: flex; flex-direction: row;
    justify-content: space-between; align-items: center;">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item ml-3">
        <Link class="nav-link" to="/">Heroes</Link>
      </li>
      <li class="nav-item ml-3">
        <Link class="nav-link" to="/villains">Villains</Link>
      </li>
    </ul>
    <span class="computed">Total heroes: {$getTotalHeroes}</span>
    <span class="computed">Total villains: {$getTotalVillains}</span>
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
  </div>
</nav>
