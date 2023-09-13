<template>
    <div id="footer"
        class="flex flex-col justify-start items-start gap-4 text-white bg-primary-600 mx-auto w-[98%] inset-x-1/2 p-10 mb-6 rounded-3xl bottom-0">
        <div id="up-section" class=" flex flex-row justify-between items-end w-full ">
            <div id="logo">
                <img class="h-12" src="~/assets/Ostro-white.svg" alt="Logo">
            </div>

            <div  >
                <p class=" text-sm mb-2 text-white/80 " >Follow us</p>
                <div id="links" class="flex flex-row justify-between items-center  gap-4 ">
                    <div id="fb-link" class="text-icon ">
                        <Icon name="bxl:facebook-circle" size="16px" />
                        Facebook
                    </div>
                    <div id="x-link" class="text-icon">
                        <Icon name="bxl:twitter" size="16px" />
                        Twiter
                    </div>
                    <div id="tiktok-link" class="text-icon">
                        <Icon name="bxl:tiktok" size="16px" />
                        Tiktok
                    </div>
                    <div id="insa-link" class="text-icon">
                        <Icon name="bxl:instagram-alt" size="16px" />
                        Instgram
                    </div>
                </div>
            </div>

        </div>

        <div class=" bg-white/70 rounded-full h-1 w-full "></div>

        <div id="down-section" class="text-white flex flex-row justify-start items-center">
            <img class=" h-4 " src="~/assets/Ostro-white.svg" alt="">
            <div id="copy-right" class="">
                © 2021 Ostro. All rights reserved.
            </div>
        </div>
    </div>
</template>

<script setup>

</script>
