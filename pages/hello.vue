<template>
  <div>
    <div class="content">
      <h1>Hello, {{ loggedUser ? loggedUser.email : 'friend' }}!</h1>
      <p>
        This is a super simple example of how to use <a href="https://github.com/nuxt/nuxt.js" target="_blank">Nuxt.js</a> and <a href="https://auth0.com" target="_blank">Auth0</a> together.
      </p>
      <p v-if="!isAuthenticated">
        You're not authenticated yet. Maybe you want to <nuxt-link to="/auth/login" class="link">sign in</nuxt-link> and see what happens?
      </p>
      <p v-else>
        Now that you're authenticated, maybe you should try going to our <nuxt-link to="/secret" class="link">super secret page</nuxt-link>!
      </p>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  // auth: true,
  computed: mapGetters([
    'isAuthenticated',
    'loggedUser'
  ]),
  mounted: function() {
    console.log(this.$store.state.auth.user)
  }
}

</script>