<template>
    <router-view>
    <div id="wrap">
        와 !
    </div>
    </router-view>
</template>

<script>
    import axios from 'axios';

    export default {
        name: "YEBO",
        data() {
            return {
                data: []
            };
        },
        created() {
            this.fetchData();
        },
        methods: {
            async fetchData() {
                try {
                    const response = await axios.get('/ask');
                    this.data = response.data; // 받아온 데이터를 Vue의 data에 저장합니다.
                    console.log(this.data)
                } catch (error) {
                    console.error(error);
                }
            }
        }

    }
</script>

<style scoped>

</style>