<script setup>
import HomeSlider from '../HomePages/HomeSlider.vue';
import Products from '../Products/Products.vue';
import { toRefs, defineProps } from 'vue';

const props = defineProps({
    receivedProductByFilter: {
        type: Object,
        default: null
    },
    productInfo: {
    type: Array,
    default: null
  }
})
const { productInfo } = toRefs(props);
console.log(productInfo);

const {receivedProductByFilter} = toRefs(props);


</script>

<template>
    <HomeSlider></HomeSlider>
    <Products 
    :productInfo="productInfo"
    :products="receivedProductByFilter"></Products>
</template>

<style scoped>

</style>