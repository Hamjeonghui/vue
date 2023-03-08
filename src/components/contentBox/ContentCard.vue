<template>
    <!-- 게시글 1개 -->
    <div v-for="i in data" :key="i" class="box">
        <!-- 글제목 -->
        <div>
            {{i.writer}}
        </div>
        <!-- /글제목 -->

        <!-- 글본문 -->
        <div>
            {{i.text}}
            <div id="imgWrap">
                <img :src="i.imageSrc" />
            </div>
        </div>
        <!-- /글본문 -->

        <!-- 댓글 및 좋아요 -->
        <div>
        </div>
        <!-- /댓글 및 좋아요 -->
    </div>
    <!-- /게시글 1개 -->
</template>

<script>
    export default {
        name: "ContentCard",
        props: {
            data: Object
        },
        data() {
            return {
                conData: this.props
            }
        }
    }
</script>

<style scoped>
    .box {
        width: 100%;
        margin-top: 15px;
        border-radius: 3px;
        background: #F2E8DF;
        box-shadow: 0px 0.05px 5px 0px #F28585;
        padding: 10px 10px 10px 10px;
        box-sizing: border-box;
    }

    #imgWrap{
        display: flex;
        justify-content: center;
    }
</style>