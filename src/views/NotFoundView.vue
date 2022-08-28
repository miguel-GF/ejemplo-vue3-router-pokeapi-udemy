<script setup>
import { useRouter } from 'vue-router';

const router = useRouter()

const back = () => {
    router.back()
}

</script>
<template>
    <h5>Not Found</h5>
    <h1>404</h1>
    <button @click="back" class="mt-4 btn btn-outline-secondary">
        Regresar
    </button>
</template>