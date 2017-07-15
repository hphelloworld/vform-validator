# vform-validator
Form validation for Vue.js

## Install

[NPM](https://www.npmjs.com/)
```sh
npm install vform-validator --save-dev
```

## Quick Start

#### main.js

``` javascript
import Vue from 'vue'
import VFormValidator from 'vform-validator'

Vue.use(VFormValidator)
```

#### App.vue

```html
<template>
  <v-form :submit="submitForm">
    <div>
      <v-input type="text" name="username" checkmethod="blur" nullmsg="empty" errormsg="error" successmsg="success" validate="s6-18"></v-input>
    </div>
    <div>
      <v-input type="select" name="userage" :validate="checkval" :tipsFuc="tips" checkmethod="change" validate="*">
        <option value="10">10</option>
        <option value="20">20</option>
        <option value="30">30</option>
        <option value="40">40</option>
        <option value="50">50</option>
      </v-input>
    </div>
    <div>
      <v-input type="textarea" name="url" checkmethod="input" validate="url" placeholder="test"></v-input>
    </div>
    <div>
      <v-input type="radio" name="gender" validate="*" value="0"></v-input>man
      <v-input type="radio" name="gender" validate="*" value="1"></v-input>women
    </div>
    <div>
      <v-input type="checkbox" name="sports" :tipsFuc="tips" value="0"></v-input>0
      <v-input type="checkbox" name="sports" :tipsFuc="tips" value="1"></v-input>1
      <v-input type="checkbox" name="sports" :tipsFuc="tips" value="2"></v-input>2
      <v-input type="checkbox" name="sports" :tipsFuc="tips" value="3"></v-input>3
      <v-input type="checkbox" name="sports" :tipsFuc="tips" value="4"></v-input>4
    </div>
    <div>
      <v-input type="submit"></v-input>
    </div>
  </v-form>
</template>

<script>
export default {
  data() {
    return {
      user: {
        name: '',
        email: ''
      }
    }
  },
  methods: {
    submitForm(data) {
      console.log(data);
    },
    checkval(val) {
      if (val < 30) {
        return false;
      } else {
        return true;
      }
    },
    tips(data) {
      console.log(data);
    }
  }
}
</script>
```


#### Attributes

* type: The type of form

* validate: Form validation method(String,RegExp or Function)

* checkmethod: Form validation timing(change or input)

* errormsg: Verify the wrong prompt

* nullmsg: Verification is empty

* successmsg: Verification of successful prompts

#### Methods

* tipsFuc: Validation of the callback

* submit: Form submission of the callback