import "./assets/css/main.css";
// import "animate.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "flowbite";
import { createApp } from "vue";
import { createPinia } from "pinia";
import VueLazyload from "vue-lazyload";

import App from "./App.vue";
import router from "./router";

const app = createApp(App);

// const loadimage = require("./assets/imgs/loading-.gif");
// const loadimage = import "./assets/imgs/loading-.gif";

app.use(createPinia());
app.use(router);
app.use(VueLazyload, {
	preLoad: 1.3,
	// error: errorimage,
	// loading: loadimage,
	attempt: 1,
});

app.mount("#app");
