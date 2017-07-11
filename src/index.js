const VInput = require('./components/VInput.vue')
const VForm = require('./components/VForm.vue')

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