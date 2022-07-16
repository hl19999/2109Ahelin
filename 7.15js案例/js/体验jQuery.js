//第一种入口函数表达方式
// $(function(){//入口函数
//     console.log($('div'));//000(整个div标签)
// })
//第二种入口函数表达方式
$(document).ready(function(){
    console.log($('div'));//000(整个div标签)
})
//入口函数的作用:先把html的代码执行完成之后在执行入口函数的代码