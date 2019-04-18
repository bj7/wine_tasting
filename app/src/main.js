import Vue from "vue";
import Buefy from "buefy";
import "buefy/dist/buefy.css";
import "@fortawesome/fontawesome-free/css/all.css";
import App from "./App.vue";

Vue.use(Buefy);
Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
