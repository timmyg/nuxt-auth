<template>
    <header>
        <b-navbar variant="faded" type="light" toggleable>
            <b-navbar-toggle target="nav_dropdown_collapse"></b-navbar-toggle>
            <b-collapse is-nav id="nav_dropdown_collapse">
                <b-navbar-nav>
                    <b-nav-item to="/">
                        <span class="text-brand name">my app</span>
                    </b-nav-item>
                    <b-nav-item to="/hello">welcome</b-nav-item>
                </b-navbar-nav>
                <b-navbar-nav class="ml-auto">
                    <b-nav-item v-if="!isAuthenticated" to="/auth/login" right>Sign in</b-nav-item>                     
                    <b-nav-item-dropdown v-if="isAuthenticated" no-caret right>
                        <template slot="button-content">
                            <img class="profile rounded-circle" :src="loggedUser.picture">
                        </template>
                        <b-dropdown-item to="/auth/logout">Sign out</b-dropdown-item>
                    </b-nav-item-dropdown>
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>
    </header>
</template>


<script>
import { mapGetters } from 'vuex'

export default {
 computed: mapGetters(['isAuthenticated', 'loggedUser'])
};
</script>

<style lang="scss" scoped>
    img.profile {
        height: 40px;
    }
</style>
