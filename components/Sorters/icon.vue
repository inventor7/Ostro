<template>
    <svg :class="{ 'opacity-0': !isActive, 'opacity-100': isActive }" width="8" height="16"
        viewBox="0 0 12 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path v-if="!acsending"
            d="M0.946319 13.2961H10.305C11.1465 13.2961 11.5673 14.9175 10.9735 15.8629L6.29416 23.3129C5.92453 23.9013 5.32683 23.9013 4.96113 23.3129L0.277839 15.8629C-0.315928 14.9175 0.104821 13.2961 0.946319 13.2961Z"
            fill="#228d73" />
        <path v-if="acsending"
            d="M0.946319 10.4581H10.305C11.1465 10.4581 11.5673 8.83666 10.9735 7.89133L6.29416 0.441352C5.92453 -0.147133 5.32683 -0.147133 4.96113 0.441352L0.277839 7.89133C-0.315928 8.83666 0.104821 10.4581 0.946319 10.4581Z"
            fill="#228d73" />
    </svg>
</template>

<script setup>
defineProps({
    isActive: Boolean,
    acsending: Boolean
})
</script>

