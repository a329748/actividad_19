const app = Vue.createApp({})

app.component('light-bulb', {
	props: ['room'],
	data() {
		return {
			status: false,
		}
	},
	template: `
		<div class="inner-container">
		<h3>{{room}}</h3>
		<img :src="status ? 'media/focoOn.png' : 'media/focoOff.png'"
		@click="status = !status">
		</div>
	`
})

const vm = app.mount('#app')