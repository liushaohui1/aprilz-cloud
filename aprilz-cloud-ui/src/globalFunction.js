//全局函数 ，挂载到Vue实例上
export default function install (Vue) {
  /**
   * checkIsLogin(params) 页面内某些功能需要用户登录时调用,调用示例如下
   * let res = this.checkIsLogin(this.$route.fullPath);
   * if(res === true) {
   *  // 做些什么......
   * }
   * 其中，参数为当前页面的全部路由fullPath（即包括query等参数）
   */
  //  检测用户登录状态并做相应的跳转
  Vue.prototype.checkIsLogin = function (params) {
    if (this.$store.getters.isLogin == false) { // 未登录时自动跳转到登录页面，并将当前页面的路由作为query传递给登陆页面
      this.$router.push({ path: '/login', query: { Rurl: params } });
    } else {
      return true
    }
  };
  //  加载缩略图
  Vue.prototype.downloadImgMin = function (row) {
    let fileUrl = row.fileUrl

    if (row.fileUrl && row.isOss != 1) {
        // 本地磁盘存储
        let index = row.fileUrl.lastIndexOf('.')
        fileUrl = '/resource' + row.fileUrl.substr(0, index) + '_min' + row.fileUrl.substr(index)
    }
    return fileUrl
  };
  /**
   * 当然，你还可以在这里封装并挂载更多的全局函数在这里，示例同上
   */
  //获取文件下载路径
  Vue.prototype.getDownloadFilePath = function (row) {
    let fileUrl = row.fileUrl
    let isOSS = row.isOss
    if (isOSS == 1) { //阿里云OSS对象存储
    } else { //本地磁盘存储
      fileUrl = '/resource' + fileUrl;
    }
    return fileUrl
  };
  //文件查看大图
  Vue.prototype.getViewFilePath = function (row) {
    let fileUrl = row.fileUrl
    let isOSS = row.isOss
    if (isOSS == 1) { //阿里云OSS对象存储

    } else { //本地磁盘存储
      //fileUrl = "api" + fileUrl;
      fileUrl = '/resource' + row.fileUrl;
    }

    console.log('1111111111111==========' + fileUrl)
    return fileUrl
  };
}
