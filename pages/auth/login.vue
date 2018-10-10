<template>
  <div id="auth0-lock"/>
</template>

<script>
export default {
  auth: false,
  mounted () {
    return this.$auth.login()
  }
}
</script>