<template>
    <div id="header">
        <div id="logo">
            <img @click="test" src="../assets/logo.png" alt="로고 이미지"/>
            <input style="text" v-bind:value="userName"/>
        </div>
        <div id="common-topService">
            <ul>
                <li v-for="item in commonitems" :key="item">
                    <img :src="item.image" :alt="item.title"/>
                </li>
            </ul>
        </div>
        <div id="login-topService">
            <ul>
                <li v-for="item in serviceitem" :key="item">
                    <img :src="item.image" :alt="item.title" />
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'TopBox',
        props: {
            userData: Object
        },
        data() {
            return {
                userName: this.userData.name+"님, 반가와요",
                commonitems: [
                    {
                        id: 1,
                        image: require('../assets/free-icon-font-home-3917033.svg'),
                        title: 'home'
                    },
                    {
                        id: 2,
                        image: require('../assets/free-icon-font-book-open-reader-7720173.svg'),
                        title: 'book'
                    },
                    {
                        id: 3,
                        image: require('../assets/free-icon-font-album-9083439.svg'),
                        title: 'album'
                    },
                    {
                        id: 4,
                        image: require('../assets/free-icon-font-head-side-thinking-5069176.svg'),
                        title: 'headset'
                    },
                ],
                serviceitem: [
                    {
                        id: 1,
                        image: 'https://img.icons8.com/ios-glyphs/512/squared-menu.png',
                        title: 'menu'
                    },
                    {
                        id: 2,
                        image: 'https://img.icons8.com/ios-filled/512/chat-message.png',
                        title: 'message'
                    },
                    {
                        id: 3,
                        image: 'https://img.icons8.com/ios-glyphs/512/filled-appointment-reminders.png',
                        title: 'bell'
                    },
                    {
                        id: 4,
                        image: 'https://img.icons8.com/pastel-glyph/2x/gender-neutral-user.png',
                        title: 'profile'
                    }
                ]
            };
        },
        methods: {
        }
    };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    #header {
        display: flex;
        justify-content: space-between;
    }

    #logo {
        padding: 5px 5px 5px 15px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    #logo > img {
        width: 30px;
        height: 30px;
    }

    #logo > input {
        margin-left: 2px;
    }

    #common-topService{
        display: flex;
        align-items: center;
    }
    ul {
        list-style: none;
        padding: 0px;
    }

    li {
        float: left;
    }
    #common-topService img {
        width: 30px;
        height: 30px;
        margin: 0px 35px 0px 10px;
    }
    #login-topService {
        display: flex;
        align-items: center;
    }
    #login-topService img {
        width: 20px;
        height: 20px;
        margin: 0px 5px 0px 2px;
    }
</style>
