import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import { BootstrapVue } from 'bootstrap-vue'
import firebase from "firebase"

// Import Bootstrap an BootstrapVue CSS files (order is important)
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap-vue/dist/bootstrap-vue.css"
// Make BootstrapVue available throughout your project
Vue.config.productionTip = false;
Vue.use(BootstrapVue)

// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyAKYt7OeM42CmCCFLybzH-mpdjWHhgD4lo",
    authDomain: "vue10-e886e.firebaseapp.com",
    projectId: "vue10-e886e",
    storageBucket: "vue10-e886e.appspot.com",
    messagingSenderId: "102816770025",
    appId: "1:102816770025:web:a58f834ff86894e3cc4d78",
    measurementId: "G-FYR91VCFWY"
  
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
 