### WorkShop - 3
在开发完成过后需要提交我们的代码, 为了保证代码的可用性和质量, 我们通常会引入一些工具来review我们的代码.

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
* `eslint` - 语法检测, 默认开启, 使用`eslint --init`开启详细配置
* `--coverage` - 生成测试覆盖率报告
* `yarn add sonar-scanner` - SonarQube为开源仓库提供免费服务, 包括代码规范/坏味道/bug/...
* `yarn add coveralls` - 测试覆盖率检测
* travisCI - 持续集成

[![Build Status](https://travis-ci.org/Anddd7/react-workshop-extension.svg?branch=workshop-3)](https://github.com/Anddd7/react-workshop-extension)

[![Sonar](https://sonarcloud.io/api/project_badges/measure?project=react-workshop-extension&metric=ncloc)](https://github.com/Anddd7/react-workshop-extension)