import Vue from 'vue';
import App from './app.vue';
import VFormValidator from '../production'
Vue.use(VFormValidator);
new Vue({
  el:"#app",
  template:'<App />',
  components:{
    App
  }
});
