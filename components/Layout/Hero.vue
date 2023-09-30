<template>
    <img class="absolute z-0 top-0 right-0 h-2/3  " src="~/assets/bubble-up.svg" alt="">
    <img class="absolute z-0 -bottom-64 left-0 h-4/5 rota   " src="~/assets/bubble.svg" alt="">

    <div id="hero-container"
        class="flex flex-col  -mt-24 justify-end  items-center w-full h-screen  text-blackich-100 ">

        <div id="center-container" class="flex   flex-col justify-between items-center h-[45%] w-2/3 ">
            <div id="Slug" class=" flex flex-col justify-center items-center gap-4 ">
                <img class=" h-20 " src="~/assets/Ostro.svg" alt="">
                <p id="p-slug" class=" font-semibold text-base tracking-[0.25em]  ">Where style meets youthful spirit</p>
            </div>
           <InputsSearchHero :isSearchHero="true" class="shadow-xl border-t-[1px] " />
        </div>

        <div class=" w-1/2 h-1/4 flex flex-col justify-center items-center " >
            <div id="filter-container" class=" flex flex-row justify-between items-center w-full ">
                <div id="filter-1"  class="text-icon border-[1px] rounded-md px-2 py-0.5 " >
                    <Icon name="mingcute:coat-line" size="24px" />
                    <span class=" text-lg ">Jacket</span>
                </div>
                <div id="filter-2" class="text-icon border-[1px] rounded-md px-2 py-0.5 " >
                    <Icon name="icon-park-outline:clothes-pants" size="24px" />
                    <span class=" text-lg ">Pants</span>
                </div>
                <div id="filter-3"  class="text-icon border-[1px] rounded-md px-2 py-0.5 " >
                    <Icon name="fluent-emoji-high-contrast:running-shoe" size="24px" />
                    <span class=" text-lg ">Shoes</span>
                </div>
                <div id="filter-4"  class="text-icon border-[1px] rounded-md px-2 py-0.5 " >
                    <Icon name="icon-park-outline:clothes-hoodie" size="24px" />
                    <span class=" text-lg ">Hoodies</span>
                </div>
                <div id="filter-5"  class="text-icon border-[1px] rounded-md px-2 py-0.5 " >
                    <Icon name="mingcute:t-shirt-line" size="24px" />
                    <span class=" text-lg ">T-shirts</span>
                </div>
            </div>
        </div>

        


    </div>
</template>

<script>


</script>
