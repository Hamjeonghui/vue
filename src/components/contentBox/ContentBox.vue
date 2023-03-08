<template>
    <!-- 연락처 -->
    <div id="rightBox">
    </div>
    <!-- /연락처 -->

    <!-- 콘텐츠 -->
    <div id="middleBox">
        <PopWrite v-bind:pop-check="openPop" @closePop="openPop=false" />
        <!-- 게시글작성-->
        <div class="boxWrap">
            <div class="video box">
                <div id="videoTop" class="borderBtm insideIcon">
                    <p class="hoverStyle">스토리</p>
                    <p class="hoverStyle">릴스</p>
                    <p class="hoverStyle">룸스</p>
                </div>
                <div id="videoBottom">
                    <p>친구 및 가족과 모든 일상을 공유해보세요.</p>
                    <p>스토리는 24시간 후에 사라집니다.</p>
                    <p>답장 및 공감은 공개되지 않습니다.</p>
                </div>
            </div>
            <div class="info box">
            </div>
            <div class="write box">
                <div class="insideIcon borderBtm">
                    <img src="https://img.icons8.com/pastel-glyph/2x/gender-neutral-user.png" alt="profile"/>
                    <input @click="popOfWrite()" class="writeBox hoverStyle" type="text" :value="userName" readonly/>
                </div>
                <div class="insideIcon">
                    <p class="hoverStyle">라이브 방송</p>
                    <p class="hoverStyle">사진/동영상</p>
                    <p class="hoverStyle">기분/활동</p>
                </div>
            </div>
        </div>
        <!-- /게시글작성 -->

        <!-- 게시글조회 -->
        <div class="content boxWrap">
            <ContentCard v-bind:data="conData"/>
        </div>
        <!-- /게시글조회 -->
    </div>
    <!-- /콘텐츠 -->

    <!-- 개인창 -->
    <div id="leftBox">
    </div>
    <!-- /개인창 -->
</template>

<script>
    import ContentCard from "@/components/contentBox/ContentCard";
    import PopWrite from "@/components/contentBox/PopWrite";

    export default {
        name: "ContentBox",
        components: {
            ContentCard,
            PopWrite
        },
        props: {
            name: String
        },methods :{
            popOfWrite: function(){
                this.openPop=true;
            },
            closePop: function(){
                this.openPop=false;
            }
        },
        data() {
            return {
                openPop: false,
                userName: this.name + "님, 무슨 생각을 하고 계신가요?",
                conData: [
                    {
                        writer: "김대현",
                        text: "어쩌구저쩌구",
                        imageSrc: "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Ft1.daumcdn.net%2Fcfile%2Ftistory%2F998C26415D1B512A08"
                    },
                    {
                        writer: "이정수",
                        text: "욜래쑐래",
                        imageSrc: "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Ft1.daumcdn.net%2Fcfile%2Ftistory%2F99A1F0415D1B512C0E"
                    }
                ]
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
    }

    .boxWrap {
        width: 100%;
    }

    #middleBox {
        width: 40%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .insideIcon {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    #videoTop {
        padding: 0px 30px 0px 30px;
    }

    #videoTop > p {
        text-align: center;
        width: 40%;
    }

    #videoBottom {
        padding: 0px 0px 5px 30px;
    }

    #rightBox {
        width: 20%;
    }

    #leftBox {
        width: 20%;
    }

    img[alt='profile'] {
        width: 50px;
        height: 50px;
    }

    .writeBox {
        width: 80%;
        height: 30px;
    }

    .borderBtm {
        border-bottom: #F2C6C2 thin solid;
    }
</style>