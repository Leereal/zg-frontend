<template>
    <div class="col-span-12 xl:col-span-6 mt-6">
      <div class="intro-y flex items-center h-10">
        <h2 class="text-lg font-medium truncate mr-5">
          Weekly Best Brand Ambassadors
        </h2>
      </div>
      <div class="mt-5">
        <div
          v-for="(faker, fakerKey) in $_.take($f(), 4)"
          :key="fakerKey"
          class="intro-y"
        >
          <div class="box px-4 py-4 mb-3 flex items-center zoom-in">
            <div
              class="w-10 h-10 flex-none image-fit rounded-md overflow-hidden"
            >
              <img
                alt="Midone Tailwind HTML Admin Template"
                :src="require(`@/assets/images/${faker.photos[0]}`)"
              />
            </div>
            <div class="ml-4 mr-auto">
              <div class="font-medium">{{ faker.users[0].name }}</div>
              <div class="text-gray-600 text-xs">
                {{ faker.dates[0] }}
              </div>
            </div>
            <div
              class="py-1 px-2 rounded-full text-xs bg-theme-9 b text-white cursor-pointer font-medium"
            >
              137 Clients Registered
            </div>
          </div>
        </div>
        <a
          href=""
          class="intro-y w-full block text-center rounded-md py-4 border border-dotted border-theme-15 dark:border-dark-5 text-theme-16 dark:text-gray-600"
          >View More</a
        >
      </div>
    </div>
</template>

<script>
export default {};
</script>

<style></style>
