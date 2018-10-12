<template>
  <div>
    <div class="content">
      <p>You can only see this secret page if you are logged in</p>
      <b-button variant="success" @click="callServerless">get message from serverless backend</b-button>
      <br>
      <br>
      <pre v-if="response">{{ response | pretty }}</pre>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return { response: null }
    },
    methods: {
      async callServerless() {
        const response = await this.$axios.$get('/hello')
        console.log({response})
        this.response = response
      }
    }
  }
</script>