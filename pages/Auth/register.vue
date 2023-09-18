<template>
    <div class=" flex flex-row justify-around items-center w-full h-full ">
        <form @submit.prevent="handleSubmit()" class=" space-y-8 w-full flex  flex-col justify-center items-center ">
            <h2 class=" text-5xl text-primary-600 font-extrabold">Register</h2>
            <div class="w-4/5 mx-auto space-y-4 ">
                <div class=" space-y-1 w-full  ">
                    <h3 class=" to-blackich-400 text-sm ">Name</h3>
                    <input v-model="form.name" autocomplete="username"
                        class=" w-full outline-none py-1.5 px-2 text-blackich-100 text-base border-[1.5px] border-gray-300 rounded-xl "
                        placeholder="Ait Ayoub" type="text">
                    <p v-show="errors.name" v-for="er in errors.name" class=" -mt-2  text-xs text-red-600 ">
                        {{ er }}</p>
                </div>

                <div class=" space-y-1 w-full ">
                    <h3 class=" to-blackich-400 text-sm ">Email</h3>
                    <input v-model="form.email" autocomplete="email"
                        class=" w-full outline-none py-1.5 px-2 text-blackich-100 text-base border-[1.5px] border-gray-300 rounded-xl "
                        placeholder="ayb@gmail.com" type="email">
                    <p v-show="errors.email" v-for="er in errors.email" class=" -mt-2  text-xs text-red-600 ">
                        {{ er }}</p>

                </div>

                <div class=" space-y-1 w-full font-semibold ">
                    <h3 class=" to-blackich-400 text-sm ">Password</h3>
                    <input v-model="form.password" autocomplete="new-password"
                        class=" w-full outline-none py-1.5 px-2 text-blackich-100 text-base border-[1.5px] border-gray-300 rounded-xl "
                        placeholder="******" type="password">
                    <p v-show="errors.password" v-for="er in errors.password" class=" -mt-2  text-xs text-red-600 ">{{ er }}
                    </p>

                </div>

                <div class=" space-y-1 w-full font-semibold ">
                    <h3 class=" to-blackich-400 text-sm ">Confirme Password</h3>
                    <input v-model="form.password_confirmation" autocomplete="new-password"
                        class=" w-full outline-none py-1.5 px-2 text-blackich-100 text-base border-[1.5px] border-gray-300 rounded-xl "
                        placeholder="*******" type="password">
                </div>
            </div>
            <div class="w-4/5 space-y-3  ">
                <button class=" text-xl w-full  bg-primary-600 text-white rounded-xl  py-2  ">
                    Register
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
const { isLoggedIn, errors, user } = toRefs(useAuthStore())
const form = ref({
    name: '',
    email: '',
    password: '',
    password_confirmation: ''
})


//functions
const { register, login, logout } = useAuthStore()
const { doAlert } = useAlertStore()

const handleSubmit = async () => {
    //validatuing the form
    //name between 3 to 
    await register(form.value)
    if (isLoggedIn.value) {
        doAlert('success', 'Registred', `welcome ${user.value.name} , now you are on of us :3`, 4000)
    }
}


definePageMeta({
    layout: 'custom'
})
</script>
