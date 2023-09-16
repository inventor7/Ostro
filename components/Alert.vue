<template>
    <div v-if="status" class="  flex flex-col items-end w-full h-fit">
        <div class=" font-semibold w-full space-y-1 h-full text-white  rounded-md p-2 " :class="{
            'bg-primary-600': type === 'success',
            'bg-red-600': type === 'danger',
            'bg-sky-600': type === 'info',
            'bg-yellow-600': type === 'warning',
        }">
            <div class=" flex flex-row justify-between items-center w-full ">
                <h2 class=" text-lg">{{ title }}</h2>
                <Icon class=" cursor-pointer " @click="$emit('closeAlert')" name="material-symbols:close-rounded"
                    size="18px" />
            </div>
            <p class=" text-xs ">{{ message }}</p>
        </div>
    </div>
</template>

<script setup>

const props = defineProps({
    title: String,
    message: String,
    type: String,
    status: Boolean
})
const emits = defineEmits(['closeAlert'])
</script>
