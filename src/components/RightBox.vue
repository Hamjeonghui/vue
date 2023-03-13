<template>
    <div>
        <h3>연락처</h3>
        <div class="insideIcon hoverStyle" v-for="i in userData.friends" :key="i">
            <img class="profileImg" :src="i.profile" alt="profile" />
            <p>{{i.name}}</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "RightBox",
        props: {
            userData: Object
        }
    }
</script>

<style scoped>
    .insideIcon{
        justify-content: flex-start;
    }
    h3{
        margin-left: 20px;
    }
</style>