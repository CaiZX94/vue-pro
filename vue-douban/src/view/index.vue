<template>
    <div class="wrap">
        <Header @search='search'></Header>
        <mainNav></mainNav>
        <router-view></router-view>
        <search v-show="showSearchBar" @closeSearchBar='closeSearchBar'></search>
    </div>
</template>

<script>
    import Header from '@/components/header.vue'
    import mainNav from '@/components/mainNav.vue'
    import search from '@/components/search.vue'
    export default {
        components:{
            Header,
            mainNav,
            search,
        },
        data() {
            return {
                showSearchBar:false,
            }
        },
        methods:{
            search(){
                this.showSearchBar = true;
            },

            closeSearchBar(){
                this.showSearchBar = false;
            }
        }
    }
</script>

<style scoped>

</style>