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
      checkdata: [],
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
        elv.check(elv.$el);
        this.checkdata[elv.$el.name] = elv.checkdata.value;
        if (elv.checkdata.status !== 'success') {
          this.checksuccess = false;
          elv.tips()
          break;
        } else {
          this.checksuccess = true;
        }
      }
      if (this.checksuccess) {
        this.submit(this.checkdata);
      }
    }
  }
}
</script>
