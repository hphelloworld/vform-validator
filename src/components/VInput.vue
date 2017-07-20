<template>
  <select v-if="type=='select'" :value="value" @change="valchange($event)">
    <slot></slot>
  </select>
  <textarea v-else-if="type=='textarea'" :value="value" @input="checkmethod=='input'?valchange($event):''" @change="checkmethod=='change'?valchange($event):''">
  </textarea>
  <input v-else-if="type=='radio'||type=='checkbox'"  :value="value" :type="type" @change="valchange($event)">
  <input v-else :type="type" :value="value" @input="checkmethod=='input'?valchange($event):''" @change="checkmethod=='change'?valchange($event):''">
</template>
  
<script>
export default {
  name: 'vinput',
  data() {
    return {
      name: 'vinput',
      // 内置验证规则
      checkreg: {
        "*": /[\w\W]+/,
        "*6-16": /^[\w\W]{6,16}$/,
        "n": /^\d+$/,
        "n6-16": /^\d{6,16}$/,
        "s": /^[\u4E00-\u9FA5\uf900-\ufa2d\w\.\s]+$/,
        "s6-18": /^[\u4E00-\u9FA5\uf900-\ufa2d\w\.\s]{6,18}$/,
        "p": /^[0-9]{6}$/,
        "m": /^1[3|4|5|7|8][0-9]{9}$/,
        "e": /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/,
        "url": /^(\w+:\/\/)?\w+(\.\w+)+.*$/,
        "money": /^-?[1-9]+(\.\d+)?$|^-?0(\.\d+)?$|^-?[1-9]+[0-9]*(\.\d+)?$/,
        "f": /^[0-9]+(.[0-9]{0,9})?$/
      },
      elment: '',
      status: '',
      tipmsg: '',
      val: []
    }
  },
  props: {
    // 表单类型
    type: {
      type: String,
      default: 'text'
    },
    value: {
      type: [String, Number, Boolean, Array],
      default: ''
    },
    // 验证规则，可以使用内置的验证规则，或自定义的正则和方法，使用方法时需同步返回true或false来表示验证成功与否
    validate: [String, Function, RegExp],
    // 规定何时验证，可以是change或input，当type类型为radio，checkbox或select时使用change
    checkmethod: String,
    // 验证后的回调函数，会返回一个对象参数，elment代表验证的元素dom，value验证值，status验证后的状态，tipmsg提示语
    tipsFuc: Function,
    // 验证错误时的提示语
    errormsg: {
      type: String,
      default: ''
    },
    // 验证为空值时的提示语
    nullmsg: {
      type: String,
      default: ''
    },
    // 验证通过时的提示语
    successmsg: {
      type: String,
      default: ''
    }
  },
  methods: {
    tips() {
      if (Object.prototype.toString.call(this.tipsFuc) == '[object Function]') {
        this.tipsFuc({
          elment: this.elment,
          value: this.val,
          status: this.status,
          tipmsg: this.tipmsg
        });
      }
    },
    valchange(e) {
      this.check(e.target)
      this.tips()
    },
    check(el) {
      this.elment = el;
      let val = [];
      if (el.type == 'radio' || el.type == 'checkbox') {
        let input_name = el.name;
        let parent_form;
        let elm = el;
        do {
          elm = elm.parentNode;
          parent_form = elm;
        } while (parent_form.nodeName != 'FORM');
        let all_input = parent_form.querySelectorAll('input[name=' + input_name + ']');
        [].forEach.call(all_input, (e) => {
          if (e.checked) {
            if (e.type == 'radio') {
              this.val = e.value;
            } else {
              this.val.push(e.value)
            }
          }
        })
      } else {
        this.val = el.value;
        this.$emit('input', this.val);
      }
      if (this.validate == undefined) {
        this.status = 'success';
        this.tipmsg = this.successmsg;
        return;
      };
      if (this.val.toString().trim() == '') {
        this.status = 'empty';
        this.tipmsg = this.nullmsg;
        return;
      }
      let validate_type = Object.prototype.toString.call(this.validate);
      switch (validate_type) {
        case '[object String]':
          this.regcheck(this.checkreg[this.validate])
          break;
        case '[object RegExp]':
          this.regcheck(this.validate)
          break;
        case '[object Function]':
          let check_bl = this.validate(this.val);
          if (!check_bl) {
            this.status = 'error';
            this.tipmsg = this.errormsg;
          } else {
            this.status = 'success';
            this.tipmsg = this.successmsg;
          }
          break;
      }
    },
    regcheck(reg) {
      if (!reg.test(this.val)) {
        this.status = 'error';
        this.tipmsg = this.errormsg;
      } else {
        this.status = 'success';
        this.tipmsg = this.successmsg;
      }
    }
  }
}
</script>
