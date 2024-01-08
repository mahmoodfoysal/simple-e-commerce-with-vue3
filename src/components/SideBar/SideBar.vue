<script setup>

</script>

<template>
<div id="accordion-color" data-accordion="collapse" data-active-classes="bg-blue-100 dark:bg-gray-800 text-blue-600 dark:text-white">
  <h2 id="accordion-color-heading-1">
    <button type="button" class="flex items-center justify-between w-full p-2 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-800 dark:border-gray-700 dark:text-gray-400 hover:bg-blue-100 dark:hover:bg-gray-800 gap-3" data-accordion-target="#accordion-color-body-1" aria-expanded="false" aria-controls="accordion-color-body-1">
      <span>Women's & Girls' Fashion</span>
      <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5"/>
      </svg>
    </button>
  </h2>
  <div id="accordion-color-body-1" class="hidden" aria-labelledby="accordion-color-heading-1">
    <div class="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
        <ul>
            <li>Traditional</li>
            <li>Muslim</li>
            <li>Weares</li>
            <li>Western</li>
        </ul>
    </div>
  </div>
  <h2 id="accordion-color-heading-2">
    <button type="button" class="flex items-center justify-between w-full p-2 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-800 dark:border-gray-700 dark:text-gray-400 hover:bg-blue-100 dark:hover:bg-gray-800 gap-3" data-accordion-target="#accordion-color-body-2" aria-expanded="false" aria-controls="accordion-color-body-2">
      <span>Products</span>
      <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5"/>
      </svg>
    </button>
  </h2>
  <div id="accordion-color-body-2" class="hidden" aria-labelledby="accordion-color-heading-2">
    <div class="p-5 border border-b-0 border-gray-200 dark:border-gray-700">
        <ul>
            <li>Traditional</li>
            <li>Muslim</li>
            <li>Weares</li>
            <li>Western</li>
        </ul>
    </div>
  </div>
  <h2 id="accordion-color-heading-3">
    <button type="button" class="flex items-center justify-between w-full p-2 font-medium rtl:text-right text-gray-500 border border-gray-200 focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-800 dark:border-gray-700 dark:text-gray-400 hover:bg-blue-100 dark:hover:bg-gray-800 gap-3" data-accordion-target="#accordion-color-body-3" aria-expanded="false" aria-controls="accordion-color-body-3">
      <span>Products</span>
      <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5"/>
      </svg>
    </button>
  </h2>
  <div id="accordion-color-body-3" class="hidden" aria-labelledby="accordion-color-heading-3">
    <div class="p-5 border border-t-0 border-gray-200 dark:border-gray-700">
        <ul>
            <li>Traditional</li>
            <li>Muslim</li>
            <li>Weares</li>
            <li>Western</li>
        </ul>
    </div>
  </div>
</div>


</template>

<style scoped>

</style>