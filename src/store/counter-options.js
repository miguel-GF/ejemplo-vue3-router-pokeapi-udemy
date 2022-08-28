import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', {
    // datos reactivos
    state: () => ({
        count: 0
    }),
    // métodos
    actions: {
        increment() {
            this.count ++
        }
    },
    // propiedades computadas
    getters: {
        double: (state) => state.count * 2
    }
})