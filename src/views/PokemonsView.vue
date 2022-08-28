<script setup>
import { RouterLink } from 'vue-router';
import { useGetData } from '@/composables/getData'

const { data, getData, loading, error } = useGetData()
getData("https://pokeapi.co/api/v2/pokemon")

</script>

<template>
	<div class="container">
		<div class="row mb-2">
			<div class="col">
				<h1>Pokemons</h1>
			</div>
			<div class="col mt-2">
				<button :disabled="!data?.previous" class="btn btn-warning me-2" @click="getData(data.previous)">
					Previous
				</button>
				<button :disabled="!data?.next" class="btn btn-primary" @click="getData(data.next)">
					Next
				</button>
			</div>
		</div>
		<p v-if="loading">Cargando información...</p>
		<div class="alert alert-danger mt-2" v-if="error">{{error}}</div>
		<div v-if="data">
			<ul class="list-group">
				<li class="list-group-item" v-for="(poke, i) in data.results" :key="i">
					<router-link :to="`/pokemons/${poke.name}`">
						{{ poke.name }}
					</router-link>
				</li>
			</ul>		
		</div>
	</div>
</template>