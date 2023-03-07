<template>
    <TopBox v-bind:name="name"/>
    <div id="contentWrap">
        <ContentBox v-bind:name="name"/>
    </div>
</template>

<script>
    import TopBox from './components/TopBox.vue'
    import ContentBox from "@/components/contentBox/ContentBox";

    export default {
        name: 'App',
        components: {
            TopBox,
            ContentBox
        },
        data() {
            return{
                name: "김잭슨"
            }
        }
    }
</script>

<style>
    body {
        margin: 0px;
        background: #F2C6C2;
    }
    input{
        background: #F2C6C2;
        border: none;
        border-radius: 20px;
        color: #86A69D;
        height: 25px;
        padding: 0px 10px 0px 10px;
    }
    hr{
        border-color: #F28585;
        border-width: thin;
    }
    #header {
        background: #F2E8DF;
        box-shadow: 0px 0.05px 5px 0px #F28585;
    }
    #contentWrap {
        display: flex;
        justify-content: space-between;
    }
</style>