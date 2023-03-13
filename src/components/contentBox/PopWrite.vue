<template>
    <!-- 모달 구현을 위한 배경 포함 화면 -->
    <div id="popback" v-if="popCheck==true">
        <!-- 팝업 영역 -->
        <div id="pop">

            <div class="header borderBtm">
                <h1>게시물 작성하기</h1>
                <img @click="$emit('closePop')" id="close" src="https://img.icons8.com/color/512/close-window.png"
                     alt="닫기버튼"/>
            </div>
            <div class="content">
                <div class="writer">
                    <img class="profileImg" :src="userData.profile"
                         alt="profile"/>
                    <div>
                        <h3>{{userData.name}}</h3>
                        <p>{{thisTime}}</p>
                    </div>
                </div>
                <div class="write">
                    <textarea :placeholder="userName" id="writeInput"></textarea> <!-- 개행을 위한 태그 -->
                </div>
            </div>
            <div class="button">
                <button>게시</button>
            </div>

        </div>
        <!-- /팝업 영역 -->
    </div>
    <!-- /모달 구현을 위한 배경 포함 화면 -->
</template>

<script>
    export default {
        name: "PopWrite",
        props: {
            popCheck: Boolean,
            userData: Object
        },
        data() {
            return {
                userName: this.userData.name+"님, 무슨 생각을 하고 계신가요?",
                thisTime: new Date()
            }
        },
        created (){ //DOM이 생성되기 전에 메서드 실행
            this.thisTime=this.formatOfTime(this.thisTime)
        },
        methods: {
            /*
                작업자: 함정희
                input: Date Type 변수
                output: YYYY/MM/DD HH24:Mi
                기능: 인자로 제공된 변수을 format된 문자열로 반환
            */
            formatOfTime: function (thisTime) {
                let fmt; // thisTime formatting
                let morethan = 0; // function for comparison

                // 년
                fmt = thisTime.getFullYear() + "/"

                // 월
                morethan = (thisTime.getMonth() + 1)
                if (morethan < 10) {
                    morethan = "0" + morethan
                }
                fmt += morethan + "/"

                // 일
                morethan = thisTime.getDate()
                if (morethan < 10) {
                    morethan = "0" + morethan
                }
                fmt += morethan + " "

                //시
                morethan = thisTime.getHours()
                if (morethan < 10) {
                    morethan = "0" + morethan
                }
                fmt += morethan + ":"

                //분
                morethan = thisTime.getMinutes()
                if (morethan < 10) {
                    morethan = "0" + morethan
                }
                fmt += morethan

                thisTime=fmt

                return thisTime
            }
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
        padding: 10px 10px 10px 10px;
        background: #F2B263;
        width: 65%;
    }

    .header {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .header > h1 {
        width: 90%;
        text-align: center;
    }

    #close {
        width: 50px;
        height: 50px;
    }

    #close:hover {
        cursor: pointer;
    }

    .button {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 10px 0px 10px 0px;
    }

    .button > button {
        border: none;
        border-radius: 10px;
        width: 95%;
        height: 40px;
        background: #86A69D;
    }

    .button > button:hover {
        cursor: pointer;
    }

    .button > button:active {
        background: #86A09D;
    }

    .writer {
        display: flex;
        justify-content: flex-start;
        align-items: center;
    }

    .write {
        display: flex;
        justify-content: center;
    }

    #writeInput {
        background: #F2B263;
        width: 97%;
        height: 400px;
        border-radius: 0px;
        border: none;
        color: #F2E8DF;
        font-size: 20px;
        resize: none;
        padding: 10px 0px 10px 0px;
    }
</style>