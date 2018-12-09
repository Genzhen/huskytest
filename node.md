 "test":"npm run test && npm run & ",串行  并行

  "test": "npm-run-all test:*",//全部执行
  "test": "npm-run-all --parallel test:*",//并行

  npm有hooks  
  "pretest":"echo 44"   //会在test之前跑
  比如先执行lint，  "pretest":"npm-run-all lint"
  
  npm run env
  test:'echo $npm_config_init_version' //可以将变量输出

  可以在package.json中进行config配置

  scripty   
# sudo chmod -R a+x scripts 要加权限


  shell。js
  chalk
  const {exec} require('shell.js')

  chalk.green("hi my")

 prod: node scripts/prod.js 
 exec("echo 1")


 githooks

 commit:"npm-run-all lint:* "
 husky && lintstaged设钩子

 https://segmentfault.com/a/1190000009546913