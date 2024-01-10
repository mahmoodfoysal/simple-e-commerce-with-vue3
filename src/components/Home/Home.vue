<script setup>
import HomeSlider from '../HomePages/HomeSlider.vue';
import Products from '../Products/Products.vue';
import { toRefs } from 'vue'; 

const props = defineProps({
    receivedProductByFilter: {
        type: Object,
        default: null,
    }
})

const {receivedProductByFilter} = toRefs(props);



</script>

<template>
    <HomeSlider></HomeSlider>
    <Products 
    :products="receivedProductByFilter"></Products>
</template>

<style scoped>

</style>