// Getters:
//  - computed properties for stores
export default {
  isAuthenticated (state) {
    return !!state.auth.user
  },
  loggedUser (state) {
    return state.auth.user
  }
}
