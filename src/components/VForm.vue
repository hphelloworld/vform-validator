<template>
  <form :action="action" :method="method" @submit.prevent="submitForm($event)">
    <slot></slot>
  </form>
</template>
  
<script>
export default {
  name: 'vform',
  data() {
    return {
      checkdata: {},
      checksuccess: false
    }
  },
  props: {
    action: String,
    method: {
      type: String,
      default: 'get'
    },
    submit: Function
  },
  methods: {
    submitForm(e) {
      this.checkdata = {};
      for (let i = 0, l = this.$children.length; i < l; i++) {
        let elv = this.$children[i];
        if (elv.name == 'vinput' && elv.type != 'submit') {
          elv.check(elv.$el);
          this.checkdata[elv.$el.name] = elv.val;
          if (elv.status !== 'success') {
            this.checksuccess = false;
            elv.tips()
            break;
          } else {
            this.checksuccess = true;
          }
        }
      }
      this.submit({
        status: this.checksuccess,
        data: this.checkdata
      });
    }
  }
}
</script>
