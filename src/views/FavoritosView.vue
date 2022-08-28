<script setup>
import { useFavoritosStore } from '@/store/favoritos.js'
import { storeToRefs } from 'pinia';
import { RouterLink } from 'vue-router';

const useFavoritos = useFavoritosStore()

const { favoritos } = storeToRefs(useFavoritos)
const { remove } = useFavoritos

</script>

<template>
    <h1>Favoritos</h1>
    <p v-if="favoritos.length < 1">Sin favoritos</p>
    <ul v-else class="list-group">
        <li class="list-group-item" v-for="poke in favoritos" :key="poke.id">
            <div>
                {{ poke.name }}
            </div>
            <router-link :to="`/pokemons/${poke.name}`" class="btn btn-sm btn-secondary me-2">
                Ver mas info
            </router-link>
            <div @click="remove(poke.id)" class="btn btn-sm btn-danger">
                Eliminar
            </div>
        </li>
    </ul>
</template>