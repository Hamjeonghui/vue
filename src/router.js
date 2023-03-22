import { createWebHistory, createRouter } from "vue-router";
import MainPage from "@/views/MainPage";
import Home from "@/views/Home";
import ErrorPage from "@/views/ErrorPage";


const router = createRouter({
    history : createWebHistory(),
    routes : [ // path별 component를 추가한다.
        { path : "/", name : "main", component : MainPage },
        { path : "/home", name : "home", component : Home },
        { path : "/error", name : "not-found", component : ErrorPage },
    ]
});

export default router;