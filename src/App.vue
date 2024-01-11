<script setup>
import SideBar from './components/SideBar/SideBar.vue';
import Home from './components/Home/Home.vue';
import NavigationBar from './components/Shared/NavigationBar/NavigationBar.vue';
import Footer from './components/Shared/Footer/Footer.vue';
import vue from '@heroicons/vue';
import { ref } from 'vue';

// loading data from json file 
import products from '/data/products.json';


// declare all ref here 
const productInfo = ref(null);
const receivedProductByFilter = ref(null);

// reactivation json data 
productInfo.value = products;

const handleReceivedProductByFilter = (product) => {
  receivedProductByFilter.value = product;
}

</script>

<template>
<!-- navbar  -->
<NavigationBar></NavigationBar>
<router-view></router-view>
  <div class="grid sm:grid-cols-12 md:grid-cols-12 lg:grid-cols-12 gap-3 mt-2">
    <div class="sm:col-span-12 md:col-span-6 lg:col-span-3">
      <!-- sidebar  -->
      <SideBar 
      :productInfo="productInfo"
      @product-by-filter-receive="handleReceivedProductByFilter"
      ></SideBar>
    </div>
    <div class="sm:col-span-12 md:col-span-6 lg:col-span-9">
      <Home 
      :receivedProductByFilter="receivedProductByFilter"></Home>
    </div>
  </div>
  <Footer></Footer>
</template>

<style scoped></style>
