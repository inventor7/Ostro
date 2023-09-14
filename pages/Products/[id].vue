<template>
    <div class=" w-full -mt-6 space-y-4  ">

        <!-- BroadCamp -->
        <div class="flex flex-row justify-between items-center w-full  font-semibold ">
            <div class=" flex flex-row justify-start items-center gap-10 ">

                <!-- Back button -->
                <div @click="router.back()" class=" cursor-pointer bg-primary-600 p-1  rounded-full  ">
                    <svg class=" rotate-180 " width="20" height="20" viewBox="0 0 24 24" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M14.475 12L7.12499 4.65C6.87499 4.4 6.75415 4.10417 6.76249 3.7625C6.77082 3.42083 6.89999 3.125 7.14999 2.875C7.39999 2.625 7.69582 2.5 8.03749 2.5C8.37915 2.5 8.67499 2.625 8.92499 2.875L16.6 10.575C16.8 10.775 16.95 11 17.05 11.25C17.15 11.5 17.2 11.75 17.2 12C17.2 12.25 17.15 12.5 17.05 12.75C16.95 13 16.8 13.225 16.6 13.425L8.89999 21.125C8.64999 21.375 8.35832 21.4958 8.02499 21.4875C7.69165 21.4792 7.39999 21.35 7.14999 21.1C6.89999 20.85 6.77499 20.5542 6.77499 20.2125C6.77499 19.8708 6.89999 19.575 7.14999 19.325L14.475 12Z"
                            fill="#FFFF" />
                    </svg>
                </div>

                <!-- Navigation -->
                <div class=" flex flex-row justify-start items-center  text-sm  gap-4 text-blackich-300 ">
                    <NuxtLink to="/products"><span>All Products</span></NuxtLink>
                    <span>
                        <svg class="  " width="20" height="20" viewBox="0 0 24 24" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M14.475 12L7.12499 4.65C6.87499 4.4 6.75415 4.10417 6.76249 3.7625C6.77082 3.42083 6.89999 3.125 7.14999 2.875C7.39999 2.625 7.69582 2.5 8.03749 2.5C8.37915 2.5 8.67499 2.625 8.92499 2.875L16.6 10.575C16.8 10.775 16.95 11 17.05 11.25C17.15 11.5 17.2 11.75 17.2 12C17.2 12.25 17.15 12.5 17.05 12.75C16.95 13 16.8 13.225 16.6 13.425L8.89999 21.125C8.64999 21.375 8.35832 21.4958 8.02499 21.4875C7.69165 21.4792 7.39999 21.35 7.14999 21.1C6.89999 20.85 6.77499 20.5542 6.77499 20.2125C6.77499 19.8708 6.89999 19.575 7.14999 19.325L14.475 12Z"
                                fill="#5F5F5F" />
                        </svg>
                    </span>
                    <NuxtLink to="/products?type=Shoes"><span>{{ product.type }}</span></NuxtLink>
                    <span>
                        <svg class="  " width="20" height="20" viewBox="0 0 24 24" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M14.475 12L7.12499 4.65C6.87499 4.4 6.75415 4.10417 6.76249 3.7625C6.77082 3.42083 6.89999 3.125 7.14999 2.875C7.39999 2.625 7.69582 2.5 8.03749 2.5C8.37915 2.5 8.67499 2.625 8.92499 2.875L16.6 10.575C16.8 10.775 16.95 11 17.05 11.25C17.15 11.5 17.2 11.75 17.2 12C17.2 12.25 17.15 12.5 17.05 12.75C16.95 13 16.8 13.225 16.6 13.425L8.89999 21.125C8.64999 21.375 8.35832 21.4958 8.02499 21.4875C7.69165 21.4792 7.39999 21.35 7.14999 21.1C6.89999 20.85 6.77499 20.5542 6.77499 20.2125C6.77499 19.8708 6.89999 19.575 7.14999 19.325L14.475 12Z"
                                fill="#5F5F5F" />
                        </svg>
                    </span>
                    <NuxtLink to="/products?brand=Nike"><span class=" text-blackich-100 ">{{ product.brand }}</span>
                    </NuxtLink>
                </div>

            </div>

            <div class=" text-xl font-normal border border-primary-600 rounded-xl text-primary-600  px-5 py-1 ">
                Nike
            </div>
        </div>

        <!-- Product-info -->
        <div class=" flex flex-row justify-start items-start gap-4 h-fit w-full  ">
            <!-- Images -->
            <div id="product-images" class=" flex flex-col justify-start items-center h-screen w-[35%] gap-2 ">
                <div class=" relative h-4/5 w-full object-cover ">
                    <div
                        class=" absolute top-1/2  inset-x-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-row justify-between items-center w-[105%] ">
                        <div class=" p-2 rounded-full text-blackich-200 bg-white border border-gray-300 ">

                            <svg class=" rotate-180 " width="20" height="20" viewBox="0 0 24 24" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M14.475 12L7.12499 4.65C6.87499 4.4 6.75415 4.10417 6.76249 3.7625C6.77082 3.42083 6.89999 3.125 7.14999 2.875C7.39999 2.625 7.69582 2.5 8.03749 2.5C8.37915 2.5 8.67499 2.625 8.92499 2.875L16.6 10.575C16.8 10.775 16.95 11 17.05 11.25C17.15 11.5 17.2 11.75 17.2 12C17.2 12.25 17.15 12.5 17.05 12.75C16.95 13 16.8 13.225 16.6 13.425L8.89999 21.125C8.64999 21.375 8.35832 21.4958 8.02499 21.4875C7.69165 21.4792 7.39999 21.35 7.14999 21.1C6.89999 20.85 6.77499 20.5542 6.77499 20.2125C6.77499 19.8708 6.89999 19.575 7.14999 19.325L14.475 12Z"
                                    fill="#4F4F4F" />
                            </svg>

                        </div>

                        <div class=" p-2 rounded-full text-blackich-200 bg-white border border-gray-300 ">

                            <svg class="  " width="20" height="20" viewBox="0 0 24 24" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M14.475 12L7.12499 4.65C6.87499 4.4 6.75415 4.10417 6.76249 3.7625C6.77082 3.42083 6.89999 3.125 7.14999 2.875C7.39999 2.625 7.69582 2.5 8.03749 2.5C8.37915 2.5 8.67499 2.625 8.92499 2.875L16.6 10.575C16.8 10.775 16.95 11 17.05 11.25C17.15 11.5 17.2 11.75 17.2 12C17.2 12.25 17.15 12.5 17.05 12.75C16.95 13 16.8 13.225 16.6 13.425L8.89999 21.125C8.64999 21.375 8.35832 21.4958 8.02499 21.4875C7.69165 21.4792 7.39999 21.35 7.14999 21.1C6.89999 20.85 6.77499 20.5542 6.77499 20.2125C6.77499 19.8708 6.89999 19.575 7.14999 19.325L14.475 12Z"
                                    fill="#4F4F4F" />
                            </svg>

                        </div>
                    </div>
                    <img class=" w-full object-cover h-full rounded-3xl " src="~/assets/shoes.png" alt="">
                </div>
                <div class=" grid grid-cols-2 grid-rows-3 w-full h-2/3 gap-2 ">
                    <img class=" row-span-2 col-span-1  object-cover  w-full rounded-3xl h-full " src="~/assets/shoes.png"
                        alt="">
                    <img class=" row-span-1 col-span-1 object-cover  w-full rounded-3xl h-full " src="~/assets/shoes.png"
                        alt="">
                    <img class=" row-span-2 col-span-1 object-cover  w-full rounded-3xl h-full " src="~/assets/shoes2.png"
                        alt="">
                    <img class=" row-span-1 col-span-1 object-cover  w-full rounded-3xl h-full " src="~/assets/shoes.png"
                        alt="">
                </div>
            </div>


            <!-- Details -->
            <div class=" space-y-4 ">
                <div
                    class=" flex-1 flex flex-col justify-start items-start gap-4 p-4 font-semibold  border border-gray-300 rounded-3xl w-full  ">

                    <div class=" w-full space-y-6 ">
                        <div class=" flex flex-row justify-between items-center w-full ">
                            <h2 class=" text-4xl font-bold text-blackich-100">{{ product.title }}</h2>
                            <ButtonFavoriteComponent class=" text-5xl p-1 " :prod="product"
                                :is-favorite="product.isFavorite" />
                        </div>
                        <div class=" flex flex-row justify-center items-center w-full text-xl  text-blackich-300 ">
                            <div class=" flex flex-row justify-start items-center text-center   gap-1.5 w-full border-r-2 ">
                                <div class=" flex flex-row justify-start items-center   ">
                                    <Icon class=" text-3xl text-center text-yellow-400  pb-1"
                                        name="material-symbols:star-rounded" />
                                    <Icon class=" text-3xl text-center text-yellow-400  pb-1"
                                        name="material-symbols:star-rounded" />
                                    <Icon class=" text-3xl text-center text-yellow-400  pb-1"
                                        name="material-symbols:star-rounded" />
                                    <Icon class=" text-3xl text-center text-yellow-400  pb-1"
                                        name="material-symbols:star-rounded" />
                                    <Icon class=" text-3xl text-center text-gray-400  pb-1"
                                        name="material-symbols:star-rounded" />
                                </div>
                                <p>(4.5)</p>
                            </div>
                            <p class=" w-full border-r-2 text-center ">+2,500 reviews</p>
                            <p class=" w-full  text-center">+10,000 sales</p>
                        </div>
                    </div>

                    <!-- divider -->
                    <div class=" w-full h-[2px] rounded-full bg-gray-300 my-3 "></div>
                    <!-- divider -->

                    <div class="flex flex-row justify-start items-center w-full  ">

                        <div class=" w-full">
                            <h4 class=" text-blackich-400 text-sm  mb-2 ">Avaible size</h4>
                            <div class=" flex flex-row justify-start items-center gap-2 ">
                                <div
                                    class=" flex flex-col justify-center items-center  p-2 border border-blackich-200 rounded-lg cursor-pointer ">
                                    <span
                                        class=" flex flex-col justify-center items-center h-8 w-8 text-xl text-blackich-200 ">S</span>
                                </div>

                                <div
                                    class=" flex flex-col justify-center items-center  p-2 border border-blackich-200 rounded-lg cursor-pointer ">
                                    <span
                                        class=" flex flex-col justify-center items-center h-8 w-8 text-xl text-blackich-200 ">M</span>
                                </div>

                                <div
                                    class=" flex flex-col justify-center items-center  p-2 border bg-primary-600 border-primary-600 rounded-lg cursor-pointer ">
                                    <span
                                        class=" flex flex-col justify-center items-center h-8 w-8 text-xl text-white ">L</span>
                                </div>

                                <div
                                    class=" relative flex flex-col justify-center items-center  p-2 border border-blackich-500 rounded-lg cursor-pointer ">
                                    <div
                                        class=" w-[130%] h-[2px] bg-blackich-500 rounded-2xl -rotate-45 absolute top-1/2 -translate-y-1/2 inset-x-1/2 -translate-x-1/2  right-0 z-20 ">
                                    </div>
                                    <span
                                        class=" flex flex-col justify-center items-center h-8 w-8 text-xl text-blackich-500 ">
                                        XL
                                    </span>
                                </div>

                            </div>
                        </div>
                        <div class=" w-full">
                            <h4 class=" text-blackich-400 text-sm  mb-2 ">Avaible Color</h4>
                            <div class=" flex flex-row justify-start items-center gap-4 ">

                                <div
                                    class="flex flex-col justify-center items-center bg-primary-600 rounded-full w-12 h-12">
                                    <div
                                        class="flex flex-col justify-center items-center bg-white w-5/6 h-5/6 rounded-full ">
                                        <div class="bg-primary-600 w-3/5 h-3/5 rounded-full">

                                        </div>
                                    </div>
                                </div>

                                <div class="bg-gray-600 w-7 h-7 rounded-full">

                                </div>
                                <div class="bg-sky-600 w-7 h-7 rounded-full">

                                </div>

                            </div>
                        </div>
                    </div>

                    <!-- divider -->
                    <div class=" w-full h-[2px] rounded-full bg-gray-300 my-3 "></div>
                    <!-- divider -->

                    <div class=" w-full space-y-6 ">
                        <h4 class=" text-blackich-400 text-sm  mb-2 ">Description</h4>
                        <p class=" text-sm text-blackich-200  ">
                            The Air Jordan 1 Low OG remakes the classic sneaker with new colors and textures. Premium
                            materials
                            and
                            accents give fresh expression to an all-time favorite.
                        </p>

                    </div>


                    <div class=" w-full ">
                        <div
                            class=" flex flex-row justify-between items-center w-full bg-primary-600 rounded-2xl px-2 py-2 ">
                            <span class=" text-3xl font-mono text-white ">12.5000 DZD</span>
                            <button class=" bg-white to-blackich-200 font-semibold  text-lg p-3 rounded-2xl ">
                                Add to Cart
                            </button>
                        </div>
                    </div>
                </div>

                <!--  complete-the-look  -->
                <div class=" space-y-2 border border-gray-300 rounded-3xl p-4 font-semibold ">
                    <h4 class=" text-blackich-400 text-sm  mb-2 ">Complete the look</h4>
                    <div class=" flex flex-row justify-between items-center gap-4 text-blackich-200 mt-2 ">

                        <div class=" border-gray-300 border  rounded-3xl ">
                            <img src="~/assets/pants.png" alt="">
                            <div class=" flex flex-col justify-start items-start gap-0.5 p-2 ">
                                <h1 class=" text-xl ">Joging Pantlaon</h1>
                                <div class=" flex flex-row justify-start items-center gap-1 ">
                                    <div class=" flex flex-row justify-start items-center ">
                                        <Icon class=" text-xl text-center text-yellow-400  pb-1"
                                            name="material-symbols:star-rounded" />
                                        <Icon class=" text-xl text-center text-yellow-400  pb-1"
                                            name="material-symbols:star-rounded" />
                                        <Icon class=" text-xl text-center text-yellow-400  pb-1"
                                            name="material-symbols:star-rounded" />
                                        <Icon class=" text-xl text-center text-yellow-400  pb-1"
                                            name="material-symbols:star-rounded" />
                                        <Icon class=" text-xl text-center text-gray-400  pb-1"
                                            name="material-symbols:star-rounded" />
                                    </div>
                                    <span class=" text-sm ">
                                        (4.9)
                                    </span>
                                </div>
                                <span class=" text-primary-600 text-lg ">5000 DZD</span>
                            </div>
                        </div>

                        <div class=" border-gray-300 border  rounded-3xl ">
                            <img src="~/assets/pants2.png" alt="">
                            <div class=" flex flex-col justify-start items-start gap-0.5 p-2 ">
                                <h1 class=" text-xl ">Joging Pantlaon</h1>
                                <div class=" flex flex-row justify-start items-center gap-1 ">
                                    <div class=" flex flex-row justify-start items-center ">
                                        <Icon class=" text-xl text-center text-yellow-400  pb-1"
                                            name="material-symbols:star-rounded" />
                                        <Icon class=" text-xl text-center text-yellow-400  pb-1"
                                            name="material-symbols:star-rounded" />
                                        <Icon class=" text-xl text-center text-yellow-400  pb-1"
                                            name="material-symbols:star-rounded" />
                                        <Icon class=" text-xl text-center text-yellow-400  pb-1"
                                            name="material-symbols:star-rounded" />
                                        <Icon class=" text-xl text-center text-gray-400  pb-1"
                                            name="material-symbols:star-rounded" />
                                    </div>
                                    <span class=" text-sm ">
                                        (4.9)
                                    </span>
                                </div>
                                <span class=" text-primary-600 text-lg ">5000 DZD</span>
                            </div>
                        </div>


                        <div class=" border-gray-300 border  rounded-3xl ">
                            <img src="~/assets/pants3.png" alt="">
                            <div class=" flex flex-col justify-start items-start gap-0.5 p-2 ">
                                <h1 class=" text-xl ">Joging Pantlaon</h1>
                                <div class=" flex flex-row justify-start items-center gap-1 ">
                                    <div class=" flex flex-row justify-start items-center ">
                                        <Icon class=" text-xl text-center text-yellow-400  pb-1"
                                            name="material-symbols:star-rounded" />
                                        <Icon class=" text-xl text-center text-yellow-400  pb-1"
                                            name="material-symbols:star-rounded" />
                                        <Icon class=" text-xl text-center text-yellow-400  pb-1"
                                            name="material-symbols:star-rounded" />
                                        <Icon class=" text-xl text-center text-yellow-400  pb-1"
                                            name="material-symbols:star-rounded" />
                                        <Icon class=" text-xl text-center text-gray-400  pb-1"
                                            name="material-symbols:star-rounded" />
                                    </div>
                                    <span class=" text-sm ">
                                        (4.9)
                                    </span>
                                </div>
                                <span class=" text-primary-600 text-lg ">5000 DZD</span>
                            </div>
                        </div>


                        <div class=" border-gray-300 border  rounded-3xl ">
                            <img src="~/assets/pants.png" alt="">
                            <div class=" flex flex-col justify-start items-start gap-0.5 p-2 ">
                                <h1 class=" text-xl ">Joging Pantlaon</h1>
                                <div class=" flex flex-row justify-start items-center gap-1 ">
                                    <div class=" flex flex-row justify-start items-center ">
                                        <Icon class=" text-xl text-center text-yellow-400  pb-1"
                                            name="material-symbols:star-rounded" />
                                        <Icon class=" text-xl text-center text-yellow-400  pb-1"
                                            name="material-symbols:star-rounded" />
                                        <Icon class=" text-xl text-center text-yellow-400  pb-1"
                                            name="material-symbols:star-rounded" />
                                        <Icon class=" text-xl text-center text-yellow-400  pb-1"
                                            name="material-symbols:star-rounded" />
                                        <Icon class=" text-xl text-center text-gray-400  pb-1"
                                            name="material-symbols:star-rounded" />
                                    </div>
                                    <span class=" text-sm ">
                                        (4.9)
                                    </span>
                                </div>
                                <span class=" text-primary-600 text-lg ">5000 DZD</span>
                            </div>
                        </div>


                    </div>
                </div>



                <div class=" border border-gray-300 rounded-3xl p-4 font-semibold ">
                    <h4 class=" text-blackich-400 text-sm  mb-2 ">Shipping</h4>
                    <div class="flex flex-col justify-start items-start w-full gap-4 text-blackich-300">
                        <div class=" flex flex-row justify-between items-center  w-full ">
                            <div class="flex flex-row justify-start items-center gap-2 ">
                                <svg width="24" height="24" viewBox="0 0 31 30" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M19.2479 20.875L21.0091 19.125L16.3544 14.5V8.75H13.8383V15.5L19.2479 20.875ZM15.0964 27.5C13.3561 27.5 11.7207 27.1719 10.19 26.5156C8.65944 25.8594 7.32803 24.9688 6.1958 23.8438C5.06357 22.7188 4.16722 21.3958 3.50675 19.875C2.84629 18.3542 2.51605 16.7292 2.51605 15C2.51605 13.2708 2.84629 11.6458 3.50675 10.125C4.16722 8.60417 5.06357 7.28125 6.1958 6.15625C7.32803 5.03125 8.65944 4.14062 10.19 3.48438C11.7207 2.82812 13.3561 2.5 15.0964 2.5C16.8367 2.5 18.4721 2.82812 20.0027 3.48438C21.5333 4.14062 22.8647 5.03125 23.997 6.15625C25.1292 7.28125 26.0255 8.60417 26.686 10.125C27.3465 11.6458 27.6767 13.2708 27.6767 15C27.6767 16.7292 27.3465 18.3542 26.686 19.875C26.0255 21.3958 25.1292 22.7188 23.997 23.8438C22.8647 24.9688 21.5333 25.8594 20.0027 26.5156C18.4721 27.1719 16.8367 27.5 15.0964 27.5ZM15.0964 25C17.885 25 20.2595 24.026 22.22 22.0781C24.1804 20.1302 25.1606 17.7708 25.1606 15C25.1606 12.2292 24.1804 9.86979 22.22 7.92188C20.2595 5.97396 17.885 5 15.0964 5C12.3077 5 9.9332 5.97396 7.97277 7.92188C6.01233 9.86979 5.03212 12.2292 5.03212 15C5.03212 17.7708 6.01233 20.1302 7.97277 22.0781C9.9332 24.026 12.3077 25 15.0964 25Z"
                                        fill="#4F4F4F" />
                                </svg>
                                <span class="  ">1 Day</span>
                            </div>

                            <select name="wilaya-shipping" id="123"
                                class=" bg-primary-600 text-white border-primary-600 rounded-xl  pr-12 pl-2  outline-none py-1 text-lg ">
                                <option class=" " selected value="Adrar">Adrar</option>
                                <option value="Bejaya">Bejaya</option>
                                <option value="ALger">ALger</option>
                                <option value="Batna">Batna</option>
                                <option value="Tipaza">Tipaza</option>
                            </select>

                        </div>

                        <div class=" flex flex-row justify-start items-center gap-2 ">
                            <svg width="24" height="24" viewBox="0 0 31 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M17.6189 16.25C16.5706 16.25 15.6795 15.8854 14.9456 15.1562C14.2118 14.4271 13.8448 13.5417 13.8448 12.5C13.8448 11.4583 14.2118 10.5729 14.9456 9.84375C15.6795 9.11458 16.5706 8.75 17.6189 8.75C18.6673 8.75 19.5584 9.11458 20.2923 9.84375C21.0261 10.5729 21.393 11.4583 21.393 12.5C21.393 13.5417 21.0261 14.4271 20.2923 15.1562C19.5584 15.8854 18.6673 16.25 17.6189 16.25ZM8.81272 20C8.1208 20 7.52848 19.7552 7.03575 19.2656C6.54302 18.776 6.29666 18.1875 6.29666 17.5V7.5C6.29666 6.8125 6.54302 6.22396 7.03575 5.73438C7.52848 5.24479 8.1208 5 8.81272 5H26.4252C27.1171 5 27.7094 5.24479 28.2021 5.73438C28.6949 6.22396 28.9412 6.8125 28.9412 7.5V17.5C28.9412 18.1875 28.6949 18.776 28.2021 19.2656C27.7094 19.7552 27.1171 20 26.4252 20H8.81272ZM11.3288 17.5H23.9091C23.9091 16.8125 24.1555 16.224 24.6482 15.7344C25.1409 15.2448 25.7333 15 26.4252 15V10C25.7333 10 25.1409 9.75521 24.6482 9.26562C24.1555 8.77604 23.9091 8.1875 23.9091 7.5H11.3288C11.3288 8.1875 11.0824 8.77604 10.5897 9.26562C10.097 9.75521 9.50464 10 8.81272 10V15C9.50464 15 10.097 15.2448 10.5897 15.7344C11.0824 16.224 11.3288 16.8125 11.3288 17.5ZM25.1671 25H3.78059C3.08867 25 2.49635 24.7552 2.00362 24.2656C1.51089 23.776 1.26453 23.1875 1.26453 22.5V8.75H3.78059V22.5H25.1671V25Z"
                                    fill="#4F4F4F" />
                            </svg>

                            <span class="  ">1000 DZD</span>
                        </div>

                        <div class=" flex flex-row justify-start items-center gap-2 ">
                            <svg width="24" height="24" viewBox="0 0 31 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M6.86199 23.0369C5.71833 23.0369 4.74621 22.6169 3.94565 21.777C3.14508 20.9371 2.7448 19.9173 2.7448 18.7174H0V2.87961C0 2.08772 0.268761 1.40981 0.806284 0.845885C1.34381 0.281962 1.98998 0 2.7448 0H21.9584V5.75922H26.0756L30.1928 11.5184V18.7174H27.448C27.448 19.9173 27.0477 20.9371 26.2471 21.777C25.4466 22.6169 24.4744 23.0369 23.3308 23.0369C22.1871 23.0369 21.215 22.6169 20.4144 21.777C19.6139 20.9371 19.2136 19.9173 19.2136 18.7174H10.9792C10.9792 19.9173 10.5789 20.9371 9.77834 21.777C8.97777 22.6169 8.00566 23.0369 6.86199 23.0369ZM6.86199 20.1573C7.25084 20.1573 7.57678 20.0193 7.83983 19.7433C8.10287 19.4673 8.23439 19.1254 8.23439 18.7174C8.23439 18.3095 8.10287 17.9676 7.83983 17.6916C7.57678 17.4156 7.25084 17.2776 6.86199 17.2776C6.47315 17.2776 6.1472 17.4156 5.88416 17.6916C5.62112 17.9676 5.48959 18.3095 5.48959 18.7174C5.48959 19.1254 5.62112 19.4673 5.88416 19.7433C6.1472 20.0193 6.47315 20.1573 6.86199 20.1573ZM2.7448 15.8378H3.84272C4.23156 15.4059 4.67759 15.0579 5.18081 14.794C5.68402 14.53 6.24441 14.398 6.86199 14.398C7.47957 14.398 8.03997 14.53 8.54318 14.794C9.0464 15.0579 9.49242 15.4059 9.88127 15.8378H19.2136V2.87961H2.7448V15.8378ZM23.3308 20.1573C23.7196 20.1573 24.0456 20.0193 24.3086 19.7433C24.5717 19.4673 24.7032 19.1254 24.7032 18.7174C24.7032 18.3095 24.5717 17.9676 24.3086 17.6916C24.0456 17.4156 23.7196 17.2776 23.3308 17.2776C22.9419 17.2776 22.616 17.4156 22.3529 17.6916C22.0899 17.9676 21.9584 18.3095 21.9584 18.7174C21.9584 19.1254 22.0899 19.4673 22.3529 19.7433C22.616 20.0193 22.9419 20.1573 23.3308 20.1573ZM21.9584 12.9582H27.7911L24.7032 8.63882H21.9584V12.9582Z"
                                    fill="#4F4F4F" />
                            </svg>

                            <span class="  ">Yalidine</span>
                        </div>
                    </div>

                    <div class=" h-[2px] rounded-full bg-gray-300 w-full my-4  "></div>
                    <div class=" flex flex-row justify-start items-center gap-2 ">
                        <svg width="18" height="18" viewBox="0 0 31 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M13.864 21.25H16.38V13.75H13.864V21.25ZM15.122 11.25C15.4785 11.25 15.7772 11.1302 16.0184 10.8906C16.2595 10.651 16.38 10.3542 16.38 10C16.38 9.64583 16.2595 9.34896 16.0184 9.10938C15.7772 8.86979 15.4785 8.75 15.122 8.75C14.7656 8.75 14.4668 8.86979 14.2257 9.10938C13.9845 9.34896 13.864 9.64583 13.864 10C13.864 10.3542 13.9845 10.651 14.2257 10.8906C14.4668 11.1302 14.7656 11.25 15.122 11.25ZM15.122 27.5C13.3817 27.5 11.7463 27.1719 10.2157 26.5156C8.68508 25.8594 7.35366 24.9688 6.22143 23.8438C5.0892 22.7188 4.19285 21.3958 3.53239 19.875C2.87192 18.3542 2.54169 16.7292 2.54169 15C2.54169 13.2708 2.87192 11.6458 3.53239 10.125C4.19285 8.60417 5.0892 7.28125 6.22143 6.15625C7.35366 5.03125 8.68508 4.14062 10.2157 3.48438C11.7463 2.82812 13.3817 2.5 15.122 2.5C16.8623 2.5 18.4977 2.82812 20.0283 3.48438C21.5589 4.14062 22.8904 5.03125 24.0226 6.15625C25.1548 7.28125 26.0512 8.60417 26.7116 10.125C27.3721 11.6458 27.7023 13.2708 27.7023 15C27.7023 16.7292 27.3721 18.3542 26.7116 19.875C26.0512 21.3958 25.1548 22.7188 24.0226 23.8438C22.8904 24.9688 21.5589 25.8594 20.0283 26.5156C18.4977 27.1719 16.8623 27.5 15.122 27.5ZM15.122 25C17.9316 25 20.3114 24.0312 22.2613 22.0938C24.2113 20.1562 25.1863 17.7917 25.1863 15C25.1863 12.2083 24.2113 9.84375 22.2613 7.90625C20.3114 5.96875 17.9316 5 15.122 5C12.3124 5 9.93263 5.96875 7.98268 7.90625C6.03273 9.84375 5.05775 12.2083 5.05775 15C5.05775 17.7917 6.03273 20.1562 7.98268 22.0938C9.93263 24.0312 12.3124 25 15.122 25Z"
                                fill="#4F4F4F" />
                        </svg>

                        <span class=" text-xs text-blackich-300 ">the delivery is Free when you spend DZD 8,000 or
                            more.</span>
                    </div>
                </div>
                <!-- Product-Details -->
            </div>

            <!-- Product-info -->
        </div>

        <!-- Reviews -->
        <Reviews />

        <!-- Recomanded Section -->
        <div class=" w-full py-20 space-y-4 ">

            <h2 class=" text-xl  text-blackich-100   ">Recomanded Stuff</h2>
            <div class=" flex flex-row justify-start items-center gap-4 overflow-x-scroll  ">
                <Product v-for="i in 8"  class=" min-w-[300px]" :id="product.id" :product="product" />
            </div>
        </div>

    </div>
</template>

<script setup>
//store
import { useProductsStore } from '~/stores/productsStore'

//store
const { findProductById } = useProductsStore();
const route = useRoute();
const router = useRouter();

//data
let id = ref(route.params.id)
let product = ref(findProductById(id.value));





</script>
