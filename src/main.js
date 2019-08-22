import App from "./App.svelte";
import "../node_modules/bootstrap/dist/css/bootstrap.css"; // need to update rollup config
import "../node_modules/@fortawesome/fontawesome-free/css/all.css";

const app = new App({
  target: document.body,
  props: {
    name: "world"
  }
});

export default app;
