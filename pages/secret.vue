<template>
  <div>
    <div class="content">
      <p>You should only see this secret page if you are logged in</p>
      <p><button @click="callServerless">Get Message from serverless backend</button></p>
      <p v-if="msg">response: {{ msg }}</p>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return { msg: "" }
    },
    methods: {
      async callServerless() {
        const res = await this.$axios.$get('http://localhost:9000' + '/hello')
        this.msg = res.msg
      }
    }
  }
</script>