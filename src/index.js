const VInput = require('./components/VInput.vue')
const VForm = require('./components/VForm.vue')
let VueForm;
VueForm = {
  install: (Vue) => {
    Vue.mixin({
      components: {
        VInput,
        VForm
      }
    })
  }
}
module.exports = VueForm