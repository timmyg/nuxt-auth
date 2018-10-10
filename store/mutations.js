/* Mutations:
  - cannot directly call (call with commit)
  - think of it like event registration
  - invoke with store.commit(...)
  - must be synchronous
  - are synchronous transactions
*/
export default {
  SET_USER (state, user) {
    state.user = user || null
  }
}
