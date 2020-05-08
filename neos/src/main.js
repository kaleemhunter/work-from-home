import Vue from "vue";
import App from "./App.vue";
import router from "./router";

// Including jQuery and Bootstrap 4
// import jQuery from "jquery";
// global.jQuery = jQuery;
// require("bootstrap");
// require("./assets/css/style.css");
// import "bootstrap/dist/css/bootstrap.css";


Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
