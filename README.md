### WorkShop - 2
页面开发完成后因为环境依赖等原因, 我们需要自行测试代码的可用性, 测试成为一个重要环节.

### less
定义变量/定义函数/结构清晰

### 测试
* 单元测试
  * `yarn add chai` - 进行结果的判定
  * `yarn add enzyme` - 渲染react元素
  * `yarn add enzyme-adapter-react-16` - react工具, 需要添加`setupTests.js`文件
  * `yarn add sinon` - mock对象
* 集成测试
  * `yarn add axios` - http request (需要设置 proxy 转发)
  * `yarn add mountebank` - mock后端服务