<script setup>

import { useRoute, useRouter } from 'vue-router';
import { useGetData } from '@/composables/getData'

const route = useRoute()
const router = useRouter()

const { getData, data, loading, error } = useGetData()

const back = () => {
	router.push('/pokemons')
}

getData(`https://pokeapi.co/api/v2/pokemon/${route.params.name}`)

</script>

<template>
		<p v-if="loading">Cargando información...</p>
		<div class="alert alert-danger mt-2" v-if="error">{{error}}</div>
		<div v-if="data">
			<img :src="data.sprites?.front_default" alt="" />
			<h1>Poke name: {{ $route.params.name }}</h1>
			<button @click="back" class="btn btn-outline-primary">Volver</button>
		</div>
		<div v-else>
			<h1>No existe el pokemon</h1>
			<button @click="back" class="btn btn-outline-primary">Volver</button>
		</div>
</template>