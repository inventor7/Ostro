<template>
  <div v-if="isVisible"
    class=" absolute inset-0 z-50 flex flex-col justify-center items-center  bg-black/25 w-full h-full ">
    <div
      class=" flex flex-col justify-between items-start w-1/3 h-fit gap-6 max-h-[70vh]  bg-white rounded-2xl font-semibold  p-4">
      <div id="modal-title">
        <p class=" text-2xl text-blackich-100  ">{{ title }}</p>
      </div>

      <div id="modal-body  ">
        <p class=" text-sm text-blackich-200 ">{{ body }}</p>
      </div>

      <div id="modal-action" class="flex flex-row justify-end items-center gap-4 w-full ">
        <button @click="modalStore.isModal = false" v-if="isCancelButton" class=" px-4 py-1 rounded-lg text-xl " :class="{
          'bg-primary-600 text-white ': cancelButtonCollor === 'primary',
          'bg-red-600 text-white ': cancelButtonCollor === 'danger',
          'bg-gray-300/50 text-blackich-200  ': cancelButtonCollor === 'base',
          'bg-sky-600 text-white ': cancelButtonCollor === 'info'
        }">
          {{ cancelButton }}
        </button>

        <button @click="modalStore.doneAction()" class=" px-4 py-1  rounded-lg text-xl " :class="{
          'bg-primary-600 text-white': doneButtonColor === 'primary',
          'bg-red-600 text-white ': doneButtonColor === 'danger',
          'bg-gray-300/50 text-blackich-200 ': doneButtonColor === 'base',
          'bg-sky-600 text-white ': doneButtonColor === 'info'
        }">
          {{ doneButton }}
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';
import { useModalStore } from '~/stores/modalStore';

//store
const modalStore = useModalStore();





defineProps({
  isVisible: {
    type: Boolean,
    default: false
  },
  title: String,
  body: String,
  cancelButton: String,
  isCancelButton: {
    type: Boolean,
    default: true
  },
  cancelButtonCollor: {
    type: String,
    default: 'base'
  },
  doneButton: String,
  doneButtonColor: {
    type: String,
    default: 'primary'
  }
})
</script>



<style></style>
