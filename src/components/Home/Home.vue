<script setup>
import HomeSlider from '../HomePages/HomeSlider.vue';
import Products from '../Products/Products.vue';

import { toRefs } from 'vue'; 

const props = defineProps({
    receivedProductByFilter: {
        type: Array,
        default: null
    }
})

</script>

<template>
    <HomeSlider></HomeSlider>
    <Products></Products>
</template>

<style scoped>

</style>