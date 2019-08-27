/*
 * @Desc: 泛型
 * @Author: John.Guan
 * @Date: 2019-08-27 17:32:15
 * @Last Modified by: John.Guan
 * @Last Modified time: 2019-08-27 17:41:04
 */
// 泛型变量，通常用 T 表示
// 下面的意思：
// <T> 声明一下， 可以捕获用户输入的参数的类型
// (arg: T): T 传入什么类型，返回什么类型
function identity(arg) {
    return arg;
}
var output = identity('gsp');
console.log(output);
var output1 = identity('gsp1');
console.log(output1);
