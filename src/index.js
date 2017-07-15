import VInput from './components/VInput.vue'
import VForm from './components/VForm.vue'
module.exports = {
  install: (Vue) => {
    Vue.mixin({
      components: {
        VInput,
        VForm
      }
    })
  }
}
