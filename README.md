### WorkShop - 1

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

### 代码质量
* `eslint` - 默认支持, 使用`eslint --init`开启详细配置
* `--coverage` - 生成测试覆盖率报告
* `yarn add sonar-scanner` - SonarQube为开源仓库提供免费服务
* `yarn add coveralls` - 和travis集成


mocha
nyc


cross-env

CI:travisCI
COVERALLs:coveralls
SonaCloud