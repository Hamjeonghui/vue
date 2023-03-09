<template>
    <TopBox v-bind:user-data="userData"/>
    <div id="contentWrap">
        <ContentBox v-bind:user-data="userData"/>
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
            return {
                userData:
                    {
                        name: "황금독수리온세상을놀라게하다",
                        profile: "https://img.icons8.com/pastel-glyph/2x/gender-neutral-user.png",
                        friends: [
                            {
                                name: "웰시콕이",
                                profile: "https://img.icons8.com/pastel-glyph/2x/gender-neutral-user.png",
                                phone: "01012345678"
                            }, {
                                name: "시바놈",
                                profile: "https://img.icons8.com/pastel-glyph/2x/gender-neutral-user.png",
                                phone: "01198765432"
                            }
                        ]
                    }
            }
        }
    }
</script>

<style>
    body {
        margin: 0px;
        background: #F2C6C2;
    }

    input {
        background: #F2C6C2;
        border: none;
        border-radius: 20px;
        color: #86A69D;
        height: 25px;
        padding: 0px 10px 0px 10px;
    }

    .hoverStyle:hover {
        cursor: pointer;
        background: #F28585;
    }

    hr {
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