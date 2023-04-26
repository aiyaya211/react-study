# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

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
**props**:`上级=>下级` 只读，不能修改（和vue一样 数据流单向） 
10. 更新界面信息  
因为props是单向数据流，不能在组件中被修改，所以当我们实际开发中需要改变变量的时候，就需要用到另一种react的数据存储模式了➡️`state`
在react中，当组件渲染完毕之后，再修改组件中的变量，不会使组件重新渲染，要让变量修改后重新渲染组件，才能让页面根据变量更新，state相当于一个变量 在react中state中的数据被进行了劫持（类似于vue中的data）
它包含两部分,第一个元素是初始值，直接修改不会触发组件的重新渲染，第二个元素是一个以set开头的方法，可以用来修改state,调用后触发组件的重新渲染  
```javascript
    const {val, setCount} = useState(1)
```  
11. useRef  
获取dom信息，类似于vue中的ref属性，在react中需要引入`useRef`，获取当前需要操作的dom对象，组件重新渲染不会重新生成useRef对象  
12. 类组件  
 类组件中可以直接通过this访问到父组件传过来的props，可以直接在类组件中定义state 获取到state中的数据 类似于vue中的data，通过setState来修改state中的值，获取dom 通过React.createRef();









    






