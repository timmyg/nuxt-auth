<template>
  <section class="container">
    <div>
      <h1 class="title">
        login
      </h1>
    </div>
  </section>
</template>

<script>
export default {
  mounted: function() {
    this.$auth.loginWith('auth0')
  }
}
</script>
