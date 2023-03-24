import axios from "axios"; // ajax대신

// 해당 파일에서 전체 컴포에서 공통적으로 사용할 데이터 바인딩처리 로직을 관리한다.
// 기본 CRUD는 일반적으로 전체 컴포에서 일어나므로, 이곳에 정의하는 것이 맞다.
// 파일 생성 후 main.js에 import를 해줄 필요가 있다.
export default {
    methods: {
        async $api(url, method, data){
            return (
                await axios({method: method, url, data}).catch(e => {
                    console.log(e)
                })
            ).data;
        }
    }
}