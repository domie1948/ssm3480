const base = {
    get() {
        return {
            url : "http://localhost:8080/ssm933ag/",
            name: "ssm933ag",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/ssm933ag/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "游戏销售系统"
        } 
    }
}
export default base
