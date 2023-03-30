const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,

  // npm run build 타겟 디렉토리
  outputDir: '../backend/src/main/resources/static',

  // npm run serve 개발 진행시에 포트가 다르기때문에 프록시 설정
  devServer: {
    proxy: {
      '/': {
        target: "http://localhost:8081",
        changeOrigin: true
      },
      '/ask': {
        target: "http://localhost:8081",
        changeOrigin: true,
        pathRewrite: {"^/ask":""}
      },
    }
  },

  // build시 index.html의 src들이 /로 시작하게 되는데,
  // 이때 이 /가 삭제되어야 정상참조 된다.
  // 이는 이미지 참조시에도 동일시 적용되어야하는 부분이므로 모든 src는 /를 없앨 필요가 있다.

})
