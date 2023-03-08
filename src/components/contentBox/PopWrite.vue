<template>
    <!-- 모달 구현을 위한 배경 포함 화면 -->
    <div id="popback" v-if="popCheck==true" @dblclick="$emit('closePop')">
        <!-- 팝업 영역 -->
        <div id="pop">

            <div class="header borderBtm">
                <h1>게시물 작성하기</h1>
                <img @click="$emit('closePop')" id="close" src="https://img.icons8.com/color/512/close-window.png" alt="닫기버튼" />
            </div>
            <div class="content">
                <div class="writer">

                </div>
                <div class="write">
                    <input type="text" style="background: #F2B263; width: 97%" />
                </div>
            </div>
            <div class="button"></div>

        </div>
        <!-- /팝업 영역 -->
    </div>
    <!-- /모달 구현을 위한 배경 포함 화면 -->
</template>

<script>
    export default {
        name: "PopWrite",
        props: {
            popCheck: Boolean
        }
    }
</script>

<style scoped>
    #popback {
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
        background: rgba(134, 166, 157, 0.8);
        width: 100%;
        height: 100%;
        top: 0;
    }
    #pop {
        background: #F2B263;
        width: 65%;
    }
    .header{
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .header > h1{
        width: 90%;
        text-align: center;
    }
    #close{
        width: 50px;
        height: 50px;
    }
    #close:hover{
        cursor: pointer;
    }
</style>