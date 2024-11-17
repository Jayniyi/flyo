<script setup>
import HeroBg from '@/assets/img/illustration-intro.png'
import Access from '@/assets/img/icon-access-anywhere.svg'
import Security from '@/assets/img/icon-security.svg'
import Collaboration from '@/assets/img/icon-collaboration.svg'
import Store from '@/assets/img/icon-any-file.svg'
import Productive from '@/assets/img/illustration-stay-productive.png'

import { defineProps } from 'vue'
defineProps({
  title: {
    type: String,
    default: '   All your in one secure location, accessible anywhere.',
  },
})
</script>
<template>
  <div>
    <img :src="HeroBg" alt="" srcset="" class="w-96 m-auto mt-10" />
    <h1 class="text-white text-center p-8 sm:text-xs md:text-2xl">
      {{ title }}
    </h1>
    <div
      class="hidden md:block bg-custom-image bg-cover bg-center min-h-screen bg-no-repeat mb-5 -mt-10"
    >
      <p class="text-center text-white p-7">
        Flyo store all your most important files in one secure location.
      </p>
      <p class="text-center text-white">
        Access them whenever you need,share and collaborate with <br />
        friends family, and co-workers.
      </p>
      <div class="mb-4 relative -bottom-24">
        <button
          class="flex ease-in-out duration-300 justify-center m-auto text-white bg-button-pdf p-2 rounded-2xl md:mt-10 mt-5 w-44 hover:bg-button-hover"
        >
          Read More
        </button>
      </div>
      <div class="mt-28 md:flex text-white sm:block justify-center m-auto px-5 gap-16">
        <div>
          <div class="text-center">
            <div class="flex justify-center m-auto">
              <img :src="Access" alt="" srcset="" />
            </div>
            <h2 class="py-2 font-bold">Access your files,anywhere</h2>
            <p class="text-xs">
              The ability to use smart phone ,tablet, or computer <br />
              to access your account means your files follow you <br />
              anywhere
            </p>
          </div>
        </div>
        <div>
          <div class="text-center">
            <div class="flex justify-center m-auto">
              <img :src="Security" alt="" srcset="" />
            </div>
            <h2 class="py-2 font-bold">Security you can trust</h2>
            <p class="text-xs">
              2-factor authentication and user-controlled encryption are <br />
              just a couple of the Security fearures we allow to help <br />
              secure your file
            </p>
          </div>
        </div>
      </div>
      <div class="mt-20 md:flex text-white sm:block justify-center m-auto px-5 gap-16">
        <div>
          <div class="text-center">
            <div class="flex justify-center m-auto">
              <img :src="Collaboration" alt="" srcset="" />
            </div>
            <h2 class="py-2 font-bold">Real-time collaboration</h2>
            <p class="text-xs">
              Secure share files and folder with friends,family and <br />
              colleages for live collaboration. No email attachments <br />
              required
            </p>
          </div>
        </div>
        <div>
          <div class="text-center">
            <div class="flex justify-center m-auto">
              <img :src="Store" alt="" srcset="" />
            </div>
            <h2 class="py-2 font-bold">Security you can trust</h2>
            <p class="text-xs">
              2-factor authentication and user-controlled encryption are <br />
              just a couple of the Security fearures we allow to help <br />
              secure your file
            </p>
          </div>
        </div>
      </div>

      <div class="container">
        <div class="md:flex ml-24 mt-24 md:gap-5">
          <div>
            <img :src="Productive" alt="" srcset="" class="md:96" />
          </div>
          <div class="text-white pr-20 md:w-9/12">
            <h1  class="text-2xl pb-4">Stay Productive, <br />wherevere you are</h1>
            <p class="py-4">
              Never let location be an issues when accesing your files, Flyo has you 
              covered for all your files storage needs
            </p>
            <p class=" pb-4">Securely  share filea and folder with friends, family and colleages for live <br> collaboration.No email attachments  required </p>
            <a href="#" class=" underline underline-offset-auto">See how flyo works</a>
          </div>
        </div>
      </div>
    </div>
    <div class="md:hidden bg-mobile-bg-curvy bg-cover bg-center min-h-screen bg-no-repeat mb-5">
      <p class="text-center text-white p-7">
        Flyo store all your most important files in one secure location.
      </p>
      <p class="text-center text-white">
        Access them whenever you need,share and collaborate with <br />
        friends family, and co-workers.
      </p>
      <div class="mb-4">
        <button
          class="flex ease-in-out duration-300 justify-center m-auto text-white bg-button-pdf p-2 rounded-2xl mt-5 w-44 hover:bg-button-hover"
        >
          Read More
        </button>
      </div>
      <div class="mt-10 text-white sm:block justify-center m-auto px-5 gap-16">
        <div class="mb-10">
          <div class="text-center">
            <div class="flex justify-center m-auto">
              <img :src="Access" alt="" srcset="" />
            </div>
            <h2 class="py-2 font-bold">Access your files,anywhere</h2>
            <p class="text-xs">
              The ability to use smart phone ,tablet, or computer <br />
              to access your account means your files follow you <br />
              anywhere
            </p>
          </div>
        </div>
        <div class="">
          <div class="text-center">
            <div class="flex justify-center m-auto">
              <img :src="Security" alt="" srcset="" />
            </div>
            <h2 class="py-2 font-bold">Security you can trust</h2>
            <p class="text-xs">
              2-factor authentication and user-controlled encryption <br />
              are just a couple of the Security fearures we allow to help secure your file
            </p>
          </div>
        </div>
      </div>
      <div class="mt-20 md:flex text-white sm:block justify-center m-auto px-5 gap-16">
        <div>
          <div class="text-center">
            <div class="flex justify-center m-auto">
              <img :src="Collaboration" alt="" srcset="" />
            </div>
            <h2 class="py-2 font-bold">Real-time collaboration</h2>
            <p class="text-xs">
              Secure share files and folder with friends,family and <br />
              colleages for live collaboration. No email attachments required
            </p>
          </div>
        </div>
        <div class="mt-10">
          <div class="text-center">
            <div class="flex justify-center m-auto">
              <img :src="Store" alt="" srcset="" />
            </div>
            <h2 class="py-2 font-bold">Security you can trust</h2>
            <p class="text-xs">
              2-factor authentication and user-controlled encryption are <br />
              just a couple of the Security fearures we allow to help
            </p>
          </div>
        </div>
      </div>
      
      <div class="container">
        <div class=" ml-10 mt-10 md:gap-5 text-center">
          <div>
            <img :src="Productive" alt="" srcset="" class="w-80 m-auto" />
          </div>
          <div class="text-white pr-20 md:w-9/12">
            <h1  class="text-2xl pb-4 pt-10">Stay Productive, wherevere you are</h1>
            <p class="py-4">
              Never let location be an issues when accesing your files, Flyo has you 
              covered for all your files storage needs
            </p>
            <p class=" pb-4">Securely  share filea and folder with friends, family and colleages for live <br> collaboration.No email attachments  required </p>
            <a href="#" class=" underline underline-offset-auto">See how flyo works</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
