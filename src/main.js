import Vue from "vue";
import Vuex from "vuex";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./global-components";
import "./utils";
import "./libs";
import 'vue-search-select/dist/VueSearchSelect.css';//CSS for search dropdown

import Swal from 'sweetalert2'
import { Form, HasError, AlertError } from 'vform'

window.Swal = Swal;
window.Form = Form;

Vue.component(HasError.name, HasError)
Vue.component(AlertError.name, AlertError)

// Midone Theme
import "./assets/sass/app.scss";

Vue.config.productionTip = false;

Vue.prototype.$appName = 'ZG Medical Aid'
Vue.use(Vuex);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
