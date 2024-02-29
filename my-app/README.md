# React基础API 
# 创建项目 1.建立脚手架npm create-react-app xxx    2.运行项目 npm start
# 
# 核心概念
# ReactDOM. render(视图结构，承载容器)    创建hello word时里面用到的参数
#### JSX 语法  => javascript + xml

# 1.XML 相对应html 更严格
# 2. JSX语法例子，<div>Hello React:{ log }</div>
# 1.在遇到label标签时，解析成html 
# 2.遇到 {}时，解析成js 语法
# 3.<ul>
#         {
#            names.map(function(ele,index){
#                return <li>{ele}</li>
#          })}
#  </ul>
# 4.条件渲染 conditional render
# 5. Rending lists  & key 列表渲染

# 6. 组件 & Props
# 6.1 组件渲染容器： 一个容器下只能存在一个根元素
# 6.2 组建的复用：在一个文件下，可以多次复用
# 6.3 组件之间的数据传递，Props,看代码例子

# 7. State & 生命周期
# 7.1 this.state = {}
# 7.2 this.setState({})
