<script>
  import { Router, Link, Route } from "svelte-routing";
  import "../node_modules/bootstrap/dist/css/bootstrap.css"; // need to update rollup config
  import "../node_modules/@fortawesome/fontawesome-free/css/all.css";

  import HeaderNav from "./shared/HeaderNav.svelte";
  import Heroes from "./heroes/Heroes.svelte";
  import Villains from "./villains/Villains.svelte";
  import EditHero from "./heroes/EditHero.svelte";
  import EditVillain from "./villains/EditVillain.svelte";

  export let name;
</script>

<style>
  h1 {
    color: purple;
  }
</style>

<Router url="">
  <HeaderNav />
  <div class="container" />
  <Route path="/">
    <Heroes />
  </Route>
  <Route path="/edit-hero/:id">
    <EditHero />
  </Route>
  <Route path="/villains">
    <Villains />
  </Route>
  <Route path="/edit-villain/:id">
    <EditVillain />
  </Route>
</Router>
