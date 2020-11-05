<template>
  <div>
    <div class="intro-y flex items-center mt-8">
      <h2 class="text-lg font-medium mr-auto">
        Profile
      </h2>
    </div>
    <div class="grid grid-cols-12 gap-6">
      <!-- BEGIN: Profile Menu -->
      <MiniProfile />
      <!-- END: Profile Menu -->
      <div class="col-span-12 lg:col-span-8 xxl:col-span-9">
        <!-- BEGIN: Table Row States -->
        <div class="intro-y box mt-5">
          <div
            class="flex flex-col sm:flex-row items-center p-5 border-b border-gray-200"
          >
            <h2 class="font-medium text-base mr-auto">
              My System Roles
            </h2>
          </div>
          <div id="row-states-table" class="p-5">
            <div class="preview">
              <div class="overflow-x-auto">
                <table class="table">
                  <thead>
                    <tr>                      
                      <th
                        class="border-b-2 dark:border-dark-5"
                      >
                        Roles
                      </th>
                      <th
                        class="border-b-2 dark:border-dark-5"
                      >
                        First Name
                      </th> 
                      <th
                        class="border-b-2 dark:border-dark-5"
                      >
                        Status
                      </th>                     
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="role in roles" :key="role.id"  class="bg-theme-1 text-white"> 
                      <td class="border-b dark:border-dark-5">
                        {{role.name}}
                      </td> 
                      <td class="border-b dark:border-dark-5">
                        <div
                          class="w-full sm:w-auto flex items-center sm:ml-auto mt-3 sm:mt-0"
                        >
                          <div class="mr-3">
                            Switch To Use {{role.name}} Roles
                          </div>
                          <input
                            data-target="#row-states-table"
                            class="show-code input input--switch bg-green-300 border"
                            type="checkbox"
                          />
                        </div>
                      </td>
                      <td class="border-b dark:border-dark-5">
                        INACTIVE
                      </td>  
                    </tr>                    
                  </tbody>
                </table>
              </div>
            </div>
            <div class="source-code hidden">
              <button
                data-target="#copy-row-states-table"
                class="copy-code button button--sm border flex items-center text-gray-700 dark:border-dark-5 dark:text-gray-300"
              >
                <FileIcon class="w-4 h-4 mr-2" /> Copy example code
              </button>
              <div class="overflow-y-auto h-64 mt-3">
                <Highlight id="copy-row-states-table" class="source-preview">
                  <code
                    class="text-xs p-0 rounded-md html pl-5 pt-8 pb-4 -mb-10 -mt-10"
                  >
                    <textarea>
                      <div class="overflow-x-auto">
                        <table class="table">
                          <thead>
                            <tr>
                              <th
                                class="border-b-2 dark:border-dark-5 whitespace-no-wrap"
                              >
                                #
                              </th>
                              <th
                                class="border-b-2 dark:border-dark-5 whitespace-no-wrap"
                              >
                                First Name
                              </th>
                              <th
                                class="border-b-2 dark:border-dark-5 whitespace-no-wrap"
                              >
                                Last Name
                              </th>
                              <th
                                class="border-b-2 dark:border-dark-5 whitespace-no-wrap"
                              >
                                Username
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr class="bg-theme-1 text-white">
                              <td class="border-b dark:border-dark-5">1</td>
                              <td class="border-b dark:border-dark-5">
                                Angelina
                              </td>
                              <td class="border-b dark:border-dark-5">Jolie</td>
                              <td class="border-b dark:border-dark-5">
                                @angelinajolie
                              </td>
                            </tr>
                            <tr class="bg-theme-6 text-white">
                              <td class="border-b dark:border-dark-5">2</td>
                              <td class="border-b dark:border-dark-5">Brad</td>
                              <td class="border-b dark:border-dark-5">Pitt</td>
                              <td class="border-b dark:border-dark-5">
                                @bradpitt
                              </td>
                            </tr>
                            <tr class="bg-theme-11 text-white">
                              <td class="border-b dark:border-dark-5">3</td>
                              <td class="border-b dark:border-dark-5">Charlie</td>
                              <td class="border-b dark:border-dark-5">Hunnam</td>
                              <td class="border-b dark:border-dark-5">
                                @charliehunnam
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </textarea>
                  </code>
                </Highlight>
              </div>
            </div>
          </div>
        </div>
        <!-- END: Table Row States -->
        <!-- BEGIN: Announcement -->
        <div class="intro-y box mt-5">
          <div
            class="flex items-center px-5 py-3 border-b border-gray-200 dark:border-dark-5"
          >
            <h2 class="font-medium text-base mr-auto">
              Announcement
            </h2>
            <button
              class="slick-navigator button px-2 border relative flex items-center text-gray-700 dark:text-gray-300 mr-2"
              @click="prevAnnouncement"
            >
              <ChevronLeftIcon class="w-4 h-4" />
            </button>
            <button
              class="slick-navigator button px-2 border relative flex items-center text-gray-700 dark:text-gray-300"
              @click="nextAnnouncement"
            >
              <ChevronRightIcon class="w-4 h-4" />
            </button>
          </div>
          <VueSlickCarousel
            ref="announcement"
            :arrows="false"
            :dots="false"
            class="py-5"
          >
            <div class="px-5">
              <div class="font-medium text-lg">
                Midone Admin Template
              </div>
              <div class="text-gray-700 dark:text-gray-600 mt-2">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s.
              </div>
              <div class="flex items-center mt-5">
                <div
                  class="px-3 py-2 bg-theme-14 dark:bg-dark-5 dark:text-gray-300 text-theme-10 rounded font-medium"
                >
                  02 June 2021
                </div>
                <button
                  class="button justify-center block bg-gray-200 dark:bg-dark-5 dark:text-gray-300 text-gray-600 ml-auto"
                >
                  View Details
                </button>
              </div>
            </div>
            <div class="px-5">
              <div class="font-medium text-lg">
                Midone Admin Template
              </div>
              <div class="text-gray-700 dark:text-gray-600 mt-2">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s.
              </div>
              <div class="flex items-center mt-5">
                <div
                  class="px-3 py-2 bg-theme-14 dark:bg-dark-5 dark:text-gray-300 text-theme-10 rounded font-medium"
                >
                  02 June 2021
                </div>
                <button
                  class="button justify-center block bg-gray-200 dark:bg-dark-5 dark:text-gray-300 text-gray-600 ml-auto"
                >
                  View Details
                </button>
              </div>
            </div>
            <div class="px-5">
              <div class="font-medium text-lg">
                Midone Admin Template
              </div>
              <div class="text-gray-700 dark:text-gray-600 mt-2">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s.
              </div>
              <div class="flex items-center mt-5">
                <div
                  class="px-3 py-2 bg-theme-14 dark:bg-dark-5 dark:text-gray-300 text-theme-10 rounded font-medium"
                >
                  02 June 2021
                </div>
                <button
                  class="button justify-center block bg-gray-200 dark:bg-dark-5 dark:text-gray-300 text-gray-600 ml-auto"
                >
                  View Details
                </button>
              </div>
            </div>
          </VueSlickCarousel>
        </div>
        <!-- END: Announcement -->
        <!-- BEGIN: Projects -->
        <div class="intro-y box mt-5">
          <div
            class="flex items-center px-5 py-3 border-b border-gray-200 dark:border-dark-5"
          >
            <h2 class="font-medium text-base mr-auto">
              Projects
            </h2>
            <button
              class="slick-navigator button px-2 border relative flex items-center text-gray-700 dark:text-gray-300 mr-2"
              @click="prevNewProjects"
            >
              <ChevronLeftIcon class="w-4 h-4" />
            </button>
            <button
              class="slick-navigator button px-2 border relative flex items-center text-gray-700 dark:text-gray-300"
              @click="nextNewProjects"
            >
              <ChevronRightIcon class="w-4 h-4" />
            </button>
          </div>
          <VueSlickCarousel
            ref="projects"
            :arrows="false"
            :dots="false"
            class="py-5"
          >
            <div class="px-5">
              <div class="font-medium text-lg">
                Midone Admin Template
              </div>
              <div class="text-gray-700 dark:text-gray-600 mt-2">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s.
              </div>
              <div class="mt-5">
                <div class="flex">
                  <div class="text-gray-700 dark:text-gray-600 mr-auto">
                    Pending Tasks
                  </div>
                  <div class="font-medium">
                    20%
                  </div>
                </div>
                <div
                  class="w-full h-1 mt-2 bg-gray-400 dark:bg-dark-1 rounded-full"
                >
                  <div class="w-1/2 h-full bg-theme-1 rounded-full" />
                </div>
              </div>
            </div>
            <div class="px-5">
              <div class="font-medium text-lg">
                Midone Admin Template
              </div>
              <div class="text-gray-700 dark:text-gray-600 mt-2">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s.
              </div>
              <div class="mt-5">
                <div class="flex">
                  <div class="text-gray-700 dark:text-gray-600 mr-auto">
                    Pending Tasks
                  </div>
                  <div class="font-medium">
                    20%
                  </div>
                </div>
                <div
                  class="w-full h-1 mt-2 bg-gray-400 dark:bg-dark-1 rounded-full"
                >
                  <div class="w-1/2 h-full bg-theme-1 rounded-full" />
                </div>
              </div>
            </div>
            <div class="px-5">
              <div class="font-medium text-lg">
                Midone Admin Template
              </div>
              <div class="text-gray-700 dark:text-gray-600 mt-2">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s.
              </div>
              <div class="mt-5">
                <div class="flex">
                  <div class="text-gray-700 dark:text-gray-600 mr-auto">
                    Pending Tasks
                  </div>
                  <div class="font-medium">
                    20%
                  </div>
                </div>
                <div
                  class="w-full h-1 mt-2 bg-gray-400 dark:bg-dark-1 rounded-full"
                >
                  <div class="w-1/2 h-full bg-theme-1 rounded-full" />
                </div>
              </div>
            </div>
          </VueSlickCarousel>
        </div>
        <!-- END: Projects -->
        <!-- BEGIN: Today's Schedule -->
        <div class="intro-y box mt-5">
          <div
            class="flex items-center px-5 py-3 border-b border-gray-200 dark:border-dark-5"
          >
            <h2 class="font-medium text-base mr-auto">
              Today's Schedule
            </h2>
            <button
              class="slick-navigator button px-2 border text-white relative flex items-center text-gray-700 dark:text-gray-300 mr-2"
              @click="prevTodaysSchedule"
            >
              <ChevronLeftIcon class="w-4 h-4" />
            </button>
            <button
              class="slick-navigator button px-2 border text-white relative flex items-center text-gray-700 dark:text-gray-300"
              @click="nextTodaysSchedule"
            >
              <ChevronRightIcon class="w-4 h-4" />
            </button>
          </div>
          <VueSlickCarousel
            ref="todays-schedule"
            :arrows="false"
            :dots="false"
            class="py-5"
          >
            <div class="px-5 text-center sm:text-left">
              <div class="font-medium">
                Developing rest API with Laravel 7
              </div>
              <div
                class="text-theme-1 dark:text-theme-10 font-medium text-lg mt-2"
              >
                11:15AM - 12:30PM
              </div>
              <div class="flex flex-col sm:flex-row items-center mt-5">
                <div class="flex items-center text-gray-600">
                  <MapPinIcon class="hidden sm:block w-4 h-4 mr-2" />
                  1396 Pooh Bear Lane, New Market
                </div>
                <button
                  class="button button--sm justify-center block bg-gray-200 dark:bg-dark-5 dark:text-gray-300 text-gray-600 sm:ml-auto mt-3 sm:mt-0"
                >
                  View On Map
                </button>
              </div>
            </div>
            <div class="px-5 text-center sm:text-left">
              <div class="font-medium">
                Developing rest API with Laravel 7
              </div>
              <div
                class="text-theme-1 dark:text-theme-10 font-medium text-lg mt-2"
              >
                11:15AM - 12:30PM
              </div>
              <div class="flex flex-col sm:flex-row items-center mt-5">
                <div class="flex items-center text-gray-600">
                  <MapPinIcon class="hidden sm:block w-4 h-4 mr-2" />
                  1396 Pooh Bear Lane, New Market
                </div>
                <button
                  class="button button--sm justify-center block bg-gray-200 dark:bg-dark-5 dark:text-gray-300 text-gray-600 sm:ml-auto mt-3 sm:mt-0"
                >
                  View On Map
                </button>
              </div>
            </div>
            <div class="px-5 text-center sm:text-left">
              <div class="font-medium">
                Developing rest API with Laravel 7
              </div>
              <div
                class="text-theme-1 dark:text-theme-10 font-medium text-lg mt-2"
              >
                11:15AM - 12:30PM
              </div>
              <div class="flex flex-col sm:flex-row items-center mt-5">
                <div class="flex items-center text-gray-600">
                  <MapPinIcon class="hidden sm:block w-4 h-4 mr-2" />
                  1396 Pooh Bear Lane, New Market
                </div>
                <button
                  class="button button--sm justify-center block bg-gray-200 dark:bg-dark-5 dark:text-gray-300 text-gray-600 sm:ml-auto mt-3 sm:mt-0"
                >
                  View On Map
                </button>
              </div>
            </div>
          </VueSlickCarousel>
        </div>
        <!-- END: Today's Schedule -->
        <!-- BEGIN: Top Products -->
        <div class="intro-y box mt-5">
          <div
            class="flex items-center p-5 border-b border-gray-200 dark:border-dark-5"
          >
            <h2 class="font-medium text-base mr-auto">
              Top Products
            </h2>
            <div class="dropdown ml-auto">
              <a class="dropdown-toggle w-5 h-5 block" href="javascript:;">
                <MoreHorizontalIcon
                  class="w-5 h-5 text-gray-700 dark:text-gray-300"
                />
              </a>
              <div class="dropdown-box w-40">
                <div class="dropdown-box__content box dark:bg-dark-1 p-2">
                  <a
                    href=""
                    class="flex items-center block p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"
                  >
                    <Edit2Icon class="w-4 h-4 mr-2" /> New Chat
                  </a>
                  <a
                    href=""
                    class="flex items-center block p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"
                  >
                    <TrashIcon class="w-4 h-4 mr-2" /> Delete
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="p-5">
            <div
              class="boxed-tabs nav-tabs justify-center flex flex-col sm:flex-row text-gray-700 dark:text-gray-300"
            >
              <a
                data-toggle="tab"
                data-target="#laravel"
                href="javascript:;"
                class="w-full sm:w-20 mb-2 sm:mb-0 py-2 rounded-md box dark:bg-dark-5 text-center sm:mx-2 active"
              >
                <BoxIcon class="w-6 h-6 mb-2 mx-auto" /> Laravel
              </a>
              <a
                data-toggle="tab"
                data-target="#symfony"
                href="javascript:;"
                class="w-full sm:w-20 mb-2 sm:mb-0 py-2 rounded-md box dark:bg-dark-5 text-center sm:mx-2"
              >
                <InboxIcon class="w-6 h-6 mb-2 mx-auto" />
                Symfony
              </a>
              <a
                data-toggle="tab"
                data-target="#bootstrap"
                href="javascript:;"
                class="w-full sm:w-20 mb-2 sm:mb-0 py-2 rounded-md box dark:bg-dark-5 text-center sm:mx-2"
              >
                <ActivityIcon class="w-6 h-6 mb-2 mx-auto" />
                Bootstrap
              </a>
            </div>
            <div class="tab-content mt-8">
              <div id="laravel" class="tab-content__pane active">
                <div class="flex flex-col sm:flex-row items-center">
                  <div class="mr-auto">
                    <a href="" class="font-medium">Wordpress Template</a>
                    <div class="text-gray-600 mt-1">
                      HTML, PHP, Mysql
                    </div>
                  </div>
                  <div class="w-full sm:w-auto flex items-center mt-3 sm:mt-0">
                    <div class="bg-theme-18 text-theme-9 rounded px-2 mr-5">
                      +20%
                    </div>
                    <div
                      class="w-full sm:w-40 h-1 bg-gray-400 dark:bg-dark-1 rounded-full"
                    >
                      <div class="w-1/2 h-full bg-theme-1 rounded-full" />
                    </div>
                  </div>
                </div>
                <div class="flex flex-col sm:flex-row items-center mt-5">
                  <div class="mr-auto">
                    <a href="" class="font-medium">Laravel Template</a>
                    <div class="text-gray-600 mt-1">
                      PHP, Mysql
                    </div>
                  </div>
                  <div class="w-full sm:w-auto flex items-center mt-3 sm:mt-0">
                    <div class="bg-theme-18 text-theme-9 rounded px-2 mr-5">
                      +55%
                    </div>
                    <div
                      class="w-full sm:w-40 h-1 bg-gray-400 dark:bg-dark-1 rounded-full"
                    >
                      <div class="w-2/3 h-full bg-theme-1 rounded-full" />
                    </div>
                  </div>
                </div>
                <div class="flex flex-col sm:flex-row items-center mt-5">
                  <div class="mr-auto">
                    <a href="" class="font-medium">Tailwind HTML Template</a>
                    <div class="text-gray-600 mt-1">
                      HTML, CSS, JS
                    </div>
                  </div>
                  <div class="w-full sm:w-auto flex items-center mt-3 sm:mt-0">
                    <div class="bg-theme-18 text-theme-9 rounded px-2 mr-5">
                      +40%
                    </div>
                    <div
                      class="w-full sm:w-40 h-1 bg-gray-400 dark:bg-dark-1 rounded-full"
                    >
                      <div class="w-3/4 h-full bg-theme-1 rounded-full" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- END: Top Products -->
        <!-- BEGIN: Work In Progress -->
        <div class="intro-y box mt-5">
          <div
            class="flex items-center px-5 py-5 sm:py-0 border-b border-gray-200 dark:border-dark-5"
          >
            <h2 class="font-medium text-base mr-auto">
              Work In Progress
            </h2>
            <div class="dropdown ml-auto sm:hidden">
              <a class="dropdown-toggle w-5 h-5 block" href="javascript:;">
                <MoreHorizontalIcon
                  class="w-5 h-5 text-gray-700 dark:text-gray-300"
                />
              </a>
              <div class="nav-tabs dropdown-box w-40">
                <div class="dropdown-box__content box dark:bg-dark-1 p-2">
                  <a
                    href="javascript:;"
                    data-toggle="tab"
                    data-target="#new"
                    class="block p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"
                    >New</a
                  >
                  <a
                    href="javascript:;"
                    data-toggle="tab"
                    data-target="#last-week"
                    class="block p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"
                    >Last Week</a
                  >
                </div>
              </div>
            </div>
            <div class="nav-tabs ml-auto hidden sm:flex">
              <a
                data-toggle="tab"
                data-target="#work-in-progress-new"
                href="javascript:;"
                class="py-5 ml-6 active"
                >New</a
              >
              <a
                data-toggle="tab"
                data-target="#work-in-progress-last-week"
                href="javascript:;"
                class="py-5 ml-6"
                >Last Week</a
              >
            </div>
          </div>
          <div class="p-5">
            <div class="tab-content">
              <div id="work-in-progress-new" class="tab-content__pane active">
                <div>
                  <div class="flex">
                    <div class="text-gray-700 dark:text-gray-300 mr-auto">
                      Pending Tasks
                    </div>
                    <div class="font-medium">
                      20%
                    </div>
                  </div>
                  <div
                    class="w-full h-1 mt-2 bg-gray-400 dark:bg-dark-1 rounded-full"
                  >
                    <div class="w-1/2 h-full bg-theme-1 rounded-full" />
                  </div>
                </div>
                <div class="mt-5">
                  <div class="flex">
                    <div class="text-gray-700 dark:text-gray-300 mr-auto">
                      Completed Tasks
                    </div>
                    <div class="font-medium">
                      2 / <span class="text-gray-600">20</span>
                    </div>
                  </div>
                  <div
                    class="w-full h-1 mt-2 bg-gray-400 dark:bg-dark-1 rounded-full"
                  >
                    <div class="w-1/4 h-full bg-theme-1 rounded-full" />
                  </div>
                </div>
                <div class="mt-5">
                  <div class="flex">
                    <div class="text-gray-700 dark:text-gray-300 mr-auto">
                      Tasks In Progress
                    </div>
                    <div class="font-medium">
                      42
                    </div>
                  </div>
                  <div
                    class="w-full h-1 mt-2 bg-gray-400 dark:bg-dark-1 rounded-full"
                  >
                    <div class="w-3/4 h-full bg-theme-1 rounded-full" />
                  </div>
                </div>
                <a
                  href=""
                  class="button w-40 mx-auto justify-center block bg-gray-200 dark:bg-dark-5 dark:text-gray-300 text-gray-600 mt-5"
                  >View More Details</a
                >
              </div>
            </div>
          </div>
        </div>
        <!-- END: Work In Progress -->
        <!-- BEGIN: Latest Tasks -->
        <div class="intro-y box mt-5">
          <div
            class="flex items-center px-5 py-5 sm:py-0 border-b border-gray-200 dark:border-dark-5"
          >
            <h2 class="font-medium text-base mr-auto">
              Latest Tasks
            </h2>
            <div class="dropdown ml-auto sm:hidden">
              <a class="dropdown-toggle w-5 h-5 block" href="javascript:;">
                <MoreHorizontalIcon
                  class="w-5 h-5 text-gray-700 dark:text-gray-300"
                />
              </a>
              <div class="nav-tabs dropdown-box w-40">
                <div class="dropdown-box__content box dark:bg-dark-1 p-2">
                  <a
                    href="javascript:;"
                    data-toggle="tab"
                    data-target="#new"
                    class="block p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"
                    >New</a
                  >
                  <a
                    href="javascript:;"
                    data-toggle="tab"
                    data-target="#last-week"
                    class="block p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"
                    >Last Week</a
                  >
                </div>
              </div>
            </div>
            <div class="nav-tabs ml-auto hidden sm:flex">
              <a
                data-toggle="tab"
                data-target="#latest-tasks-new"
                href="javascript:;"
                class="py-5 ml-6 active"
                >New</a
              >
              <a
                data-toggle="tab"
                data-target="#latest-tasks-last-week"
                href="javascript:;"
                class="py-5 ml-6"
                >Last Week</a
              >
            </div>
          </div>
          <div class="p-5">
            <div class="tab-content">
              <div id="latest-tasks-new" class="tab-content__pane active">
                <div class="flex items-center">
                  <div class="border-l-2 border-theme-1 pl-4">
                    <a href="" class="font-medium">Create New Campaign</a>
                    <div class="text-gray-600">
                      10:00 AM
                    </div>
                  </div>
                  <input
                    class="input input--switch ml-auto border"
                    type="checkbox"
                  />
                </div>
                <div class="flex items-center mt-5">
                  <div class="border-l-2 border-theme-1 pl-4">
                    <a href="" class="font-medium">Meeting With Client</a>
                    <div class="text-gray-600">
                      02:00 PM
                    </div>
                  </div>
                  <input
                    class="input input--switch ml-auto border"
                    type="checkbox"
                  />
                </div>
                <div class="flex items-center mt-5">
                  <div class="border-l-2 border-theme-1 pl-4">
                    <a href="" class="font-medium">Create New Repository</a>
                    <div class="text-gray-600">
                      04:00 PM
                    </div>
                  </div>
                  <input
                    class="input input--switch ml-auto border"
                    type="checkbox"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- END: Latest Tasks -->
        <!-- BEGIN: General Statistics -->
        <div class="intro-y box mt-5">
          <div
            class="flex items-center px-5 py-3 border-b border-gray-200 dark:border-dark-5"
          >
            <h2 class="font-medium text-base mr-auto">
              General Statistics
            </h2>
            <div class="dropdown ml-auto">
              <a
                class="dropdown-toggle w-5 h-5 block sm:hidden"
                href="javascript:;"
              >
                <MoreHorizontalIcon
                  class="w-5 h-5 text-gray-700 dark:text-gray-300"
                />
              </a>
              <button
                class="dropdown-toggle button font-normal border dark:border-dark-5 text-white relative items-center text-gray-700 dark:text-gray-300 hidden sm:flex"
              >
                Export <ChevronDownIcon class="w-4 h-4 ml-2" />
              </button>
              <div class="dropdown-box w-40">
                <div class="dropdown-box__content box dark:bg-dark-1">
                  <div
                    class="px-4 py-2 border-b border-gray-200 dark:border-dark-5 font-medium"
                  >
                    Export Tools
                  </div>
                  <div class="p-2">
                    <a
                      href=""
                      class="flex items-center block p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"
                    >
                      <PrinterIcon
                        class="w-4 h-4 text-gray-700 dark:text-gray-300 mr-2"
                      />
                      Print
                    </a>
                    <a
                      href=""
                      class="flex items-center block p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"
                    >
                      <ExternalLinkIcon
                        class="w-4 h-4 text-gray-700 dark:text-gray-300 mr-2"
                      />
                      Excel
                    </a>
                    <a
                      href=""
                      class="flex items-center block p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"
                    >
                      <FileTextIcon
                        class="w-4 h-4 text-gray-700 dark:text-gray-300 mr-2"
                      />
                      CSV
                    </a>
                    <a
                      href=""
                      class="flex items-center block p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"
                    >
                      <ArchiveIcon
                        class="w-4 h-4 text-gray-700 dark:text-gray-300 mr-2"
                      />
                      PDF
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="p-5">
            <div class="flex flex-col sm:flex-row items-center">
              <div class="flex flex-wrap sm:flex-no-wrap mr-auto">
                <div class="flex items-center mr-5 mb-1 sm:mb-0">
                  <div class="w-2 h-2 bg-theme-11 rounded-full mr-3" />
                  <span>Author Sales</span>
                </div>
                <div class="flex items-center mr-5 mb-1 sm:mb-0">
                  <div class="w-2 h-2 bg-theme-1 rounded-full mr-3" />
                  <span>Product Profit</span>
                </div>
              </div>
              <div class="dropdown mt-3 sm:mt-0 mr-auto sm:mr-0">
                <button
                  class="dropdown-toggle button font-normal border dark:border-dark-5 text-white relative flex items-center text-gray-700 dark:text-gray-300"
                >
                  Filter by Month
                  <ChevronDownIcon class="w-4 h-4 ml-2" />
                </button>
                <div class="dropdown-box w-40">
                  <div
                    class="dropdown-box__content box dark:bg-dark-1 p-2 overflow-y-auto h-32"
                  >
                    <a
                      href=""
                      class="flex items-center block p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"
                      >January</a
                    >
                    <a
                      href=""
                      class="flex items-center block p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"
                      >February</a
                    >
                    <a
                      href=""
                      class="flex items-center block p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"
                      >March</a
                    >
                    <a
                      href=""
                      class="flex items-center block p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"
                      >June</a
                    >
                    <a
                      href=""
                      class="flex items-center block p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"
                      >July</a
                    >
                  </div>
                </div>
              </div>
            </div>
            <div class="report-chart mt-8">
              <ReportLineChart :height="290" />
            </div>
          </div>
        </div>
        <!-- END: General Statistics -->
      </div>
    </div>
  </div>
</template>

<script>
import VueSlickCarousel from "vue-slick-carousel";
import ReportLineChart from "@/components/ReportLineChart";
import MiniProfile from "@/components/MiniProfile";

export default {
  components: {
    ReportLineChart,
    VueSlickCarousel,
    MiniProfile,
  },
  computed:{  
    roles() {
      // let roles = this.$store.getters.currentUser.roles
      return this.$store.getters.currentUser.roles;     
    },
  },
  methods: {
    prevAnnouncement() {
      this.$refs["announcement"].prev();
    },
    nextAnnouncement() {
      this.$refs["announcement"].next();
    },
    prevNewProjects() {
      this.$refs["new-projects"].prev();
    },
    nextNewProjects() {
      this.$refs["new-projects"].next();
    },
    prevTodaysSchedule() {
      this.$refs["todays-schedule"].prev();
    },
    nextTodaysSchedule() {
      this.$refs["todays-schedule"].next();
    },
  }, 
};
</script>
