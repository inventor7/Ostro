<template>
    <div class="  flex flex-row justify-around items-center w-full h-full ">
       
        <form @submit.prevent="handleSubmit()" class=" space-y-8 w-full flex  flex-col justify-center items-start ">
            <h2 class=" text-start w-full text-5xl text-primary-600 font-extrabold">Register</h2>
            <div class="w-4/5 space-y-4 ">
                <div class=" space-y-1 w-full  ">
                    <input v-model="form.firstName" autocomplete="cc-family-name"
                        class=" w-full outline-none py-2 px-2 text-blackich-100 text-base border-[1.5px] border-gray-300 rounded-xl "
                        placeholder="First Name" type="text">
                    <p v-show="errors.firstName" v-for="er in errors.firstName" class=" -mt-2  text-xs text-red-600 ">
                        {{ er }}</p>
                </div>
                <div class=" space-y-1 w-full  ">
                    <input v-model="form.lastName" autocomplete="cc-given-name"
                        class=" w-full outline-none py-2 px-2 text-blackich-100 text-base border-[1.5px] border-gray-300 rounded-xl "
                        placeholder="Last Name" type="text">
                    <p v-show="errors.lastName" v-for="er in errors.lastName" class=" -mt-2  text-xs text-red-600 ">
                        {{ er }}</p>
                </div>

                <div class=" space-y-1 w-full ">
                    <input v-model="form.email" autocomplete="email"
                        class=" w-full outline-none py-2 px-2 text-blackich-100 text-base border-[1.5px] border-gray-300 rounded-xl "
                        placeholder="Email" type="email">
                    <p v-show="errors.email" v-for="er in errors.email" class=" -mt-2  text-xs text-red-600 ">
                        {{ er }}</p>

                </div>

                <div class=" space-y-1 w-full  ">
                    <input v-model="form.password" autocomplete="new-password"
                        class=" w-full outline-none py-2 px-2 text-blackich-100 text-base border-[1.5px] border-gray-300 rounded-xl "
                        placeholder="Password" type="password">
                    <p v-show="errors.password" v-for="er in errors.password" class=" -mt-2  text-xs text-red-600 ">{{ er }}
                    </p>

                </div>

                <div class=" space-y-1 w-full  ">
                    <input v-model="form.password_confirmation" autocomplete="new-password"
                        class=" w-full outline-none py-2 px-2 text-blackich-100 text-base border-[1.5px] border-gray-300 rounded-xl "
                        placeholder="Confirm your password" type="password">
                </div>
            </div>
            <div class="w-4/5 space-y-3  ">
                <button class=" text-xl w-full  bg-primary-600 text-white rounded-xl  py-2 transition-default  ">
                    <span v-if="!pend">
                        Register
                    </span>
                    <span class=" animate-pulse " v-else>
                        Loading...
                    </span>
                </button>
                <p class=" text-center text-blackich-400 text-sm ">Alreasy have an account ? <span
                        class=" text-primary-600  ">Sign
                        in</span> </p>
            </div>

        </form>

        <div class="w-full ">
            <img src="~/assets/SignUp.png" alt="">
        </div>
    </div>
</template>

<script setup>
import { useAuthStore } from '~/stores/authStore'
import { useAlertStore } from '~/stores/alertStore';

//data
const pend = ref(false)
const { isLoggedIn, errors, user } = toRefs(useAuthStore())
const form = ref({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    password_confirmation: ''
})


//functions
const { register, login, logout } = useAuthStore()
const { doAlert } = useAlertStore()

const handleSubmit = async () => {
    pend.value = true
    const { data, error, status, pending } = await register(form.value)
    pend.value = pending.value
    if (status.value === "success") {
        isLoggedIn.value = true;
        user.value = data.value.data.user;
        doAlert('success', 'Registred', `welcome ${user.value.firstName} , now you are on of us :3`, 4000)
        navigateTo("/");
    } else {
        errors.value = error.value.data.errors;
    }

}


definePageMeta({
    layout: 'custom'
})
</script>
