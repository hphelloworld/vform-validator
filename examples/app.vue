<template>
	<v-form :submit="submitForm">
		<div>
			<v-input type="text" name="username" v-model="username" checkmethod="change" nullmsg="empty" errormsg="error" successmsg="success" validate="s6-18" :tipsFuc="tips"></v-input>
		</div>
		<div>
			<v-input type="select" name="userage" :validate="checkval" :tipsFuc="tips" checkmethod="change">
				<option value="10">10</option>
				<option value="20">20</option>
				<option value="30">30</option>
				<option value="40">40</option>
				<option value="50">50</option>
			</v-input>
		</div>
		<div>
			<v-input type="textarea" name="phone" checkmethod="input" :tipsFuc="tips" v-model="textarea" validate="s" placeholder="test"></v-input>
		</div>
		<div>
			<v-input type="radio" name="gender" validate="*" value="0" :tipsFuc="tips"></v-input>man
			<v-input type="radio" name="gender" validate="*" value="1" :tipsFuc="tips"></v-input>women
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
import VInput from "../src/components/VInput"
import VForm from "../src/components/VForm"
export default {
	data() {
		return {
			username: 'foo',
			textarea: '',
			user: {
				name: '',
				email: ''
			}
		}
	},
	components: {
		VInput,
		VForm
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

<style>

</style>
