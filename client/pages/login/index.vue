<template>
  <div class="">
    <div>
      <img
        class="mx-auto h-12 w-auto"
        src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
        alt="Your Company"
      />
      <h2
        class="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900"
      >
        Sign in to your account
      </h2>
    </div>
    <form class="mt-8 space-y-6" action="#" method="POST">
      <input type="hidden" name="remember" value="true" />
      <div class="-space-y-px rounded-md shadow-sm">
        <custom-input
          v-model="username"
          name="email"
          type="email"
          placeholder="Email"
          custom-class="rounded-t-md"
        />

        <custom-input
          v-model="password"
          name="password"
          type="password"
          placeholder="Password"
          custom-class="rounded-b-md"
        />
      </div>
      <div>
        <button
          type="submit"
          class="group relative flex w-full justify-center rounded-md bg-indigo-600 py-2 px-3 text-sm font-semibold text-white hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          @click.prevent="handleSubmit()"
        >
          <span class="absolute inset-y-0 left-0 flex items-center pl-3">
            <svg
              class="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z"
                clip-rule="evenodd"
              />
            </svg>
          </span>
          Sign in
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import { GET_TOKEN } from '@/store/auth/actionTypes'
import CustomInput from '@/components/Shared/CustomInput/CustomInput.vue'

export default {
  components: {
    CustomInput,
  },
  layout: 'login',
  data: () => ({
    username: '',
    password: '',
  }),
  methods: {
    ...mapActions([GET_TOKEN]),
    async handleSubmit() {
      await this.GET_TOKEN({ username: this.username, password: this.password })
      this.username = ''
      this.password = ''
      this.$router.push('/')
    },
  },
}
</script>

<style></style>
