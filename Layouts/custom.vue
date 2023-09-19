<template>
    <div class=" relative bg-slate-100 w-full h-screen overflow-hidden flex flex-col justify-center items-center ">
        <img class="h-[20 absolute -right-20 -z-0 " src="~/assets/bubble-signup.png" alt="">
        <ButtonBack class=" absolute top-8 left-8 " />
               
                <div class=" z-10 w-9/12 h-5/6 " >
                     <slot />   
                </div>
    </div>
</template>
 
<script setup>

</script>
