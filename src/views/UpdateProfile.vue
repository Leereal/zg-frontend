<template>
  <div>
    <div class="intro-y flex items-center mt-8">
      <h2 class="text-lg font-medium mr-auto">
        Update Profile
      </h2>
    </div>
    <div class="grid grid-cols-12 gap-6">
      <!-- BEGIN: Profile Menu -->
      <MiniProfile />
      <!-- END: Profile Menu -->
      <div class="col-span-12 lg:col-span-8 xxl:col-span-9">
        <!-- BEGIN: Display Information -->
        <div class="intro-y box lg:mt-5">
          <div
            class="flex items-center p-5 border-b border-gray-200 dark:border-dark-5"
          >
            <h2 class="font-medium text-base mr-auto">
              Display Information
            </h2>
          </div>
          <div class="p-5">
            <div class="grid grid-cols-12 gap-5">
              <div class="col-span-12 xl:col-span-4">
                <div
                  class="border border-gray-200 dark:border-dark-5 rounded-md p-5"
                >
                  <div
                    class="w-40 h-40 relative image-fit cursor-pointer zoom-in mx-auto"
                  >
                    <img
                      class="rounded-md"
                      alt="Midone Tailwind HTML Admin Template"
                      :src="require(`@/assets/images/${$f()[0].photos[0]}`)"
                    />
                    <Tippy
                      tag="div"
                      content="Remove this profile photo?"
                      class="w-5 h-5 flex items-center justify-center absolute rounded-full text-white bg-theme-6 right-0 top-0 -mr-2 -mt-2"
                    >
                      <xIcon class="w-4 h-4" />
                    </Tippy>
                  </div>
                  <div class="w-40 mx-auto cursor-pointer relative mt-5">
                    <button
                      type="button"
                      class="button w-full bg-theme-1 text-white"
                    >
                      Change Photo
                    </button>
                    <input
                      type="file"
                      class="w-full h-full top-0 left-0 absolute opacity-0"
                    />
                  </div>
                </div>
              </div>
              <div class="col-span-12 xl:col-span-8">
                <div>
                  <label>Display Name</label>
                  <input
                    type="text"
                    class="input w-full border bg-gray-100 cursor-not-allowed mt-2"
                    placeholder="Input text"
                    :value="$f()[0].users[0].name"
                    disabled
                  />
                </div>
                <div class="mt-3">
                  <label>Nearest MRT Station</label>
                  <div class="mt-2">
                    <TailSelect
                      v-model="select"
                      :options="{
                        search: true,
                        classNames: 'w-full',
                      }"
                    >
                      <option value="1">
                        Admiralty
                      </option>
                      <option value="2">
                        Aljunied
                      </option>
                      <option value="3">
                        Ang Mo Kio
                      </option>
                      <option value="4">
                        Bartley
                      </option>
                      <option value="5">
                        Beauty World
                      </option>
                    </TailSelect>
                  </div>
                </div>
                <div class="mt-3">
                  <label>Postal Code</label>
                  <div class="mt-2">
                    <TailSelect
                      v-model="select"
                      :options="{
                        search: true,
                        classNames: 'w-full',
                      }"
                    >
                      <option value="1">
                        018906 - 1 STRAITS BOULEVARD SINGA...
                      </option>
                      <option value="2">
                        018910 - 5A MARINA GARDENS DRIVE...
                      </option>
                      <option value="3">
                        018915 - 100A CENTRAL BOULEVARD...
                      </option>
                      <option value="4">
                        018925 - 21 PARK STREET MARINA...
                      </option>
                      <option value="5">
                        018926 - 23 PARK STREET MARINA...
                      </option>
                    </TailSelect>
                  </div>
                </div>
                <div class="mt-3">
                  <label>Address</label>
                  <textarea
                    class="input w-full border mt-2"
                    placeholder="Adress"
                  >
10 Anson Road, International Plaza, #10-11, 079903 Singapore, Singapore</textarea
                  >
                </div>
                <button
                  type="button"
                  class="button w-20 bg-theme-1 text-white mt-3"
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
        <!-- END: Display Information -->
        <!-- BEGIN: Personal Information -->
        <div class="intro-y box lg:mt-5">
          <div
            class="flex items-center p-5 border-b border-gray-200 dark:border-dark-5"
          >
            <h2 class="font-medium text-base mr-auto">
              Personal Information
            </h2>
          </div>
          <div class="p-5">
            <div class="grid grid-cols-12 gap-5">
              <div class="col-span-12 xl:col-span-6">
                <div>
                  <label>Email</label>
                  <input
                    type="text"
                    class="input w-full border bg-gray-100 cursor-not-allowed mt-2"
                    placeholder="Input text"
                    :value="$f()[0].users[0].email"
                    disabled
                  />
                </div>
                <div class="mt-3">
                  <label>Name</label>
                  <input
                    type="text"
                    class="input w-full border mt-2"
                    placeholder="Input text"
                    :value="$f()[0].users[0].name"
                    disabled
                  />
                </div>
                <div class="mt-3">
                  <label>ID Type</label>
                  <select class="input w-full border mt-2">
                    <option>IC</option>
                    <option>FIN</option>
                    <option>Passport</option>
                  </select>
                </div>
                <div class="mt-3">
                  <label>ID Number</label>
                  <input
                    type="text"
                    class="input w-full border mt-2"
                    placeholder="Input text"
                    value="357821204950001"
                  />
                </div>
              </div>
              <div class="col-span-12 xl:col-span-6">
                <div>
                  <label>Phone Number</label>
                  <input
                    type="text"
                    class="input w-full border mt-2"
                    placeholder="Input text"
                    value="65570828"
                  />
                </div>
                <div class="mt-3">
                  <label>Address</label>
                  <input
                    type="text"
                    class="input w-full border mt-2"
                    placeholder="Input text"
                    value="10 Anson Road, International Plaza, #10-11, 079903 Singapore, Singapore"
                  />
                </div>
                <div class="mt-3">
                  <label>Bank Name</label>
                  <div class="mt-2">
                    <TailSelect
                      v-model="select"
                      :options="{
                        search: true,
                        classNames: 'w-full',
                      }"
                    >
                      <option value="1">
                        SBI - STATE BANK OF INDIA
                      </option>
                      <option value="1">
                        CITI BANK - CITI BANK
                      </option>
                    </TailSelect>
                  </div>
                </div>
                <div class="mt-3">
                  <label>Bank Account</label>
                  <input
                    type="text"
                    class="input w-full border mt-2"
                    placeholder="Input text"
                    value="DBS Current 011-903573-0"
                  />
                </div>
              </div>
            </div>
            <div class="flex justify-end mt-4">
              <a href="" class="text-theme-6 flex items-center">
                <Trash2Icon class="w-4 h-4 mr-1" /> Delete Account
              </a>
              <button
                type="button"
                class="button w-20 bg-theme-1 text-white ml-auto"
              >
                Save
              </button>
            </div>
          </div>
        </div>
        <!-- END: Personal Information -->
      </div>
    </div>
  </div>
</template>

<script>
import MiniProfile from "@/components/MiniProfile";
export default {
  components: {
    MiniProfile
  },
  data() {
    return {
      select: "1",
    };
  },
};
</script>
