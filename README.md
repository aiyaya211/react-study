# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

## React学习知识点

1. `React.createElement('div', {}, 'hello aiyaya');` 
用于创建一个react元素，
参数：
    1. 元素名（组件名 html标签小写），
    2. 属性（在设置事件时，需要改成驼峰命名法）
    3. 元素子元素（内容））

2. `ReactDOM.createRoot(document.getElementById('root'))`
创建一个根元素

3. `render()`
将react元素渲染到根元素中，根元素中所有的内容都会被替换  
重复调用render函数只渲染变更部分 
每当调用render()方法的时候，页面就会发生重新渲染（diff）

4. `jsx`  
jsx就是React.createElement()的语法糖，jsx在执行之前都会被babel转换为js代码 
可以看待babel的官网测试一波
![babel](https://aiyaya122.oss-cn-hangzhou.aliyuncs.com/babel.jpg)  
注意事项⚠️：
    - jsx不是字符串，不需要加引号
    - jsx中html标签应该小写开头，react组件应该大写开头
    - jsx中有且仅有一个根元素
    - jsx的标签必须正确结束
    - jsx通过{}插入表达式 类似vue
    - 属性可以直接在标签中设置

5. 循环列表 
设置唯一性`key`
```javascript
let list = ['香蕉', '苹果', '橘子'];
// 用map遍历生成新数组
let listDiv = <ul>{list.map(item => <li key={item}>{item}</li>)}</ul>
// 生成一个dom元素
const root = ReactDOM.createRoot(document.getElementById('root'));
// 渲染
root.render(listDiv)
```
6. 工程化  
spa只有一个容器dom，那就是`index.html`  
项目目录结构  
![目录](https://aiyaya122.oss-cn-hangzhou.aliyuncs.com/%E7%9B%AE%E5%BD%95.jpg)  
手动创建的`react`项目结构  
运行项目启动命令 在本地启动一个服务  
```bash
npx react-scripts start
```  
`package.json`中将命令集成
```json
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
```
7. 组件化  
react有两种组件创建方式  
*函数式组件：*  
    --函数式组件就是返回jsx的普通函数  
    --组件的首字母大写  
*类组件*  
    --类组件必须要继承React.component  
    --相比较函数组件，类组件编写较麻烦  

8. 事件  
在react事件需要通过元素属性来设置  
和原生js不同，在react中事件的属性需要使用驼峰命名法  
`onclick => onClick`  
属性值不能直接执行代码，而是需要一个回调函数  
9. 传参数  
在函数组件中，属性就相当于是函数的参数，可以通过参数来访问  
可以在函数组件的形参中定义一个props，props指向的是一个对象  
它包含了父组件中传递的所有参数  
**props**:`上级=>下级`








    






