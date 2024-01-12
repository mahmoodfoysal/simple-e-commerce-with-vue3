<script setup>
import { toRefs } from 'vue';

const props = defineProps({
    receivedProductByFilter: {
        type: Object,
        default: null
    }
})

const {receivedProductByFilter} = toRefs(props)
console.log(receivedProductByFilter);
</script>

<template>
<h1>Hello World</h1>
</template>

<style scoped>

</style>