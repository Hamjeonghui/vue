<template>

    <TopBox v-bind:user-data="userData"/>
    <div id="contentWrap">
        <ContentBox v-bind:user-data="userData"/>
    </div>

</template>

<script>
    import TopBox from '../components/TopBox.vue'
    import ContentBox from "@/components/contentBox/ContentBox";

    export default {
        name: 'MainPage',
        components: {
            TopBox,
            ContentBox
        },
        data() {
            return {
                userData:
                    {
                        name: "황금독수리온세상을놀라게하다",
                        profile: "data:image/jpeg;base64,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",
                        friends: [
                            {
                                name: "웰시콕이",
                                profile: "https://img.icons8.com/pastel-glyph/2x/gender-neutral-user.png",
                                phone: "01012345678"
                            }, {
                                name: "시바놈",
                                profile: "https://img.icons8.com/pastel-glyph/2x/gender-neutral-user.png",
                                phone: "01198765432"
                            }, {
                                name: "피그",
                                profile: "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Ft1.daumcdn.net%2Fcfile%2Ftistory%2F995FA0415D1B512D35",
                                phone: "01098761234"
                            }, {
                                name: "브로콜리",
                                profile: "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Ft1.daumcdn.net%2Fcfile%2Ftistory%2F99059E355D1B55420D",
                                phone: "01198765432"
                            }, {
                                name: "김비굴",
                                profile: "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Ft1.daumcdn.net%2Fcfile%2Ftistory%2F99C43E355D1B554316",
                                phone: "01084641354"
                            }, {
                                name: "최푸들",
                                profile: "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Ft1.daumcdn.net%2Fcfile%2Ftistory%2F995BF7355D1B55430A",
                                phone: "01684689513"
                            }, {
                                name: "허숙희",
                                profile: "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Ft1.daumcdn.net%2Fcfile%2Ftistory%2F99CB253A5D1B5D7F18",
                                phone: "01045611368"
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

    .hoverStyle {
        border-radius: 10px;
        transition: background-color 0.3s;
        transition-timing-function: cubic-bezier(0.000, -0.005, 0.000, 0.995);
    }
    .hoverStyle:hover {
        cursor: pointer;
        background: #F28585;
    }
    .hoverStyle:active{
        background: #EA6969;
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
    .insideIcon {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .profileImg{
        width: 50px;
        height: 50px;
        margin: 10px 10px 10px 10px;
        border-radius: 100px;
    }
</style>