<template>
  <div>
    <section
      @dblclick="$emit('close')"
      class="z-20 h-screen w-screen bg-gray-500 fixed top-0 left-0 opacity-50"
    ></section>
    <!-- <div id="modal" class="flex w-full"> -->
    <div id="modal" class=" absolute inset-0 max-h-screen">
      <div class="preview flex h-full">
        <div
          id="modal-preview"
          class="intro-y m-auto bg-white rounded shadow p-5"
        >
          <form @submit.prevent id="modal-form">
            <div class="modal__content">
              <div
                class="flex items-center px-5 py-5 sm:py-3 border-b-2 border-gray-200 dark:border-dark-5"
              >
                <h2 class="font-medium text-base mr-auto">
                  {{ title }}
                </h2>
              </div>
              <div>               
                <slot></slot>            
              </div>
              <div
                v-if="isLoading"
                class="col-span-6 sm:col-span-3 xl:col-span-2 flex flex-col justify-end items-center"
              >
                <LoadingIcon icon="three-dots" class="w-8 h-8" />
              </div>
              <div
                v-else
                class="px-5 py-3 text-right border-t-2 border-gray-200 dark:border-dark-5"
              >
                <button
                  type="button"
                  class="button w-20 border text-gray-700 dark:border-dark-5 dark:text-gray-300 mr-1"
                  @click="$emit('close')"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  class="button w-20 bg-theme-1 text-white"
                  @click.prevent="$emit('submit-form')"
                >
                  Save
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["title"],
  computed: {
    isLoading() {
      return this.$store.getters.isLoading;
    },
  },
};
</script>
