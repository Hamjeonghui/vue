<template>
    <div>
        <div class="insideIcon hoverStyle">
            <img class="profileImg" :src="userData.profile" alt="profile" />
            <p>{{userData.name}}</p>
        </div>

        <div class="insideIcon hoverStyle" v-for="i in selectService" :key="i">
            <img class="profileImg" :src="i.imageSrc" :alt="i.name"/>
            <p>{{i.name}}</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "LeftBox",
        props: {
            userData: Object
        },
        data() {
            return {
                more: {
                    name: "more",
                    imageSrc: "https://img.icons8.com/ios-glyphs/512/plus-math.png"
                },
                selectService: [
                    {
                        id: 1,
                        name: "친구",
                        imageSrc: "https://img.icons8.com/external-anggara-glyph-anggara-putra/512/external-friend-email-interface-anggara-glyph-anggara-putra.png"
                    },
                    {
                        id: 2,
                        name: "저장됨",
                        imageSrc: "https://img.icons8.com/windows/512/filled-bookmark-ribbon.png"
                    },
                    {
                        id: 3,
                        name: "페이지",
                        imageSrc: "https://img.icons8.com/ios-filled/512/flag.png"
                    },
                    {
                        id: 4,
                        name: "최신",
                        imageSrc: "https://img.icons8.com/ios-filled/512/new.png"
                    },
                    {
                        id: 5,
                        name: "그룹",
                        imageSrc: "https://img.icons8.com/ios-filled/512/groups.png"
                    },
                    {
                        id: 6,
                        name: "Whatch",
                        imageSrc: "https://img.icons8.com/ios-filled/512/youtube-play.png"
                    },
                    {
                        id: 7,
                        name: "과거의 오늘",
                        imageSrc: "https://img.icons8.com/ios-filled/512/time-machine.png"
                    },
                    {
                        id: 8,
                        name: "이벤트",
                        imageSrc: "https://img.icons8.com/ios-filled/512/event-accepted.png"
                    },
                    {
                        id: 9,
                        name: "즐겨찾기",
                        imageSrc: "https://img.icons8.com/ios-filled/512/filled-star.png"
                    }
                ]
            }
        }
    }
</script>

<style scoped>
    .insideIcon{
        margin: 0px 0px 0px 10px;
        justify-content: flex-start;
    }
</style>