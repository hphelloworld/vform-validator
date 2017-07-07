const VInput = require('../src/components/VInput.vue')
const VForm = require('../src/components/VForm.vue')
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