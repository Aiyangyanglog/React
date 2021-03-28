## 特点：
* 声明式开发
* 可以与其他框架并存
* 组件化
* 单向数据流
* 视图层框架
* 函数式编程

## 分析
* 1.state数据
* 2.JSX模板
* 3.数据+模板 结合，生成真实的DOM，来显示
* 4.state 发生改变
* 5.数据+模板 结合，生成真实的DOM替换与原始的DOM

* 缺陷：
* 第一次生成了一个完整的DOM片段
* 第二次生成了一个完整的DOM片段
* 第二次的DOM替换第一次的DOM,非常耗性能

* 1.state数据
* 2.JSX模板
* 3.数据+模板 结合，生成真实的DOM，来显示
* 4.state 发生改变
* 5.数据+模板 结合，生成真实的DOM，并不直接替换原始的DOM
* 6.新的DOM和原始的DOM做比对，找差异
* 7.找出input框发生了变化
* 8.只用新的DOM中的input元素，替换老的DOM中的input元素

* 缺陷：
* 性能提升并不明显

## 虚拟DOM
* 1.state数据

* 2.JSX模板

* 3.生成虚拟DOM(虚拟DOM就是一个js对象，用它来描述真实的DOM)
* <div id='abc'><span>hello world</span></div>

* 4.用虚拟DOM的结构生成真实的DOM，来显示
* ['div',{id: 'abc'},['span',{},'hello world']]

* 5.state发生变化

* 6.数据+模板 生成新的虚拟DOM(极大的提升了性能)
* ['div',{id: 'abc'},['span',{},'bye bye']]

* 7.比较原始虚拟DOM和新的虚拟DOM的区别，找到区别是span中的内容(极大的提升了性能)

* 8.直接操作DOM,改变span中的内容

* 优点：
* 1.性能提升了
* 2.他使得跨端应用得以实现， React Native

* diff 
* setSate(异步)多次执行，只会生成一个虚拟DOM
* 同层比对
* 加key值，不要用index当key值


* 生命周期函数指在某一时刻组件自动调用执行的函数
* 1.Initialization(constructor里面初始化props,state)
* 2.Mounting(componentWillMount,render,componentDidMount)
* 3.Updation
* props改变(componentWillReceiveProps=>shouldComponentUpdate(true)=>componentWillUpdate=>render=>componentDidUpdate)
* state改变(shouldComponentUpdate(true)=>componentWillUpdate=>render=>componentDidUpdate)
* 4.Unmounting(componentWillUnmount)

* ajax请求放到componentDidMount里面比较合适
