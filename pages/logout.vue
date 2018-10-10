<script>
export default {
  auth: false,
  mounted: async function() {
    await this.$auth.logout()
  }
}
</script>
