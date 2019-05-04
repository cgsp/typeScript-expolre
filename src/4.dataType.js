/*
 * @Desc: ts的数据类型
 * @Author: John.Guan
 * @Date: 2019-05-04 11:13:58
 * @Last Modified by: John.Guan
 * @Last Modified time: 2019-05-04 12:16:26
 */
/**
 * 布尔类型
 */
var bol = false;
/**
 * 数字类型
 */
// 2进制
var binaryLiteral = 20;
// 8进制
var octalLiteral = 20;
// 10进制
var decLiteral = 20;
// 16进制
var hexLiteral = 0x14;
/**
 * 字符串与模板字符串
 */
var sex = 'gsp';
sex = '17';
/**
 * 数组
 */
var arr1 = [1, 2, 23];
var arr2 = [1.3, 4];
/**
 * 元组
 */
var xArr = ['1', 1];
xArr[0].substr(1); // 可以用，因为第1项是string
// xArr[1].substr(1) // 报错，因为第2项是number
// xArr[3] = '1' // 之前版本是，后面的项，必须是string或者number才不报错，现在版本，无论怎么写，都报错
/**
 * 枚举
 */
var Color;
(function (Color) {
    Color[Color["green"] = 0] = "green";
    Color[Color["red"] = 1] = "red";
    Color[Color["blue"] = 2] = "blue";
})(Color || (Color = {}));
var color = Color.blue;
console.log(color); // 2
var Color1;
(function (Color1) {
    Color1[Color1["green"] = 0] = "green";
    Color1[Color1["red"] = 1] = "red";
    Color1[Color1["blue"] = 2] = "blue";
})(Color1 || (Color1 = {}));
var color1 = Color1.blue;
console.log(color1); // 2
var Color2;
(function (Color2) {
    Color2[Color2["green"] = 3] = "green";
    Color2[Color2["red"] = 4] = "red";
    Color2[Color2["blue"] = 8] = "blue";
})(Color2 || (Color2 = {}));
var color2 = Color2.blue;
console.log(color2); // 8
var Color3;
(function (Color3) {
    Color3["green"] = "gsp";
    Color3["red"] = "gyp";
    Color3[Color3["blue"] = 1111] = "blue";
})(Color3 || (Color3 = {}));
var color3 = Color3.red;
console.log(Color3); // { '1111': 'blue', green: 'gsp', red: 'gyp', blue: 1111 }
console.log(Color3[1111]); // 'blue'
console.log(typeof Color3[1111]); // 'string'
console.log(Color3['blue']); // '1111'
console.log(typeof Color3['blue']); // 'number'
console.log(color3); // 'gyp'
/**
 * any类型
 */
var gsp = false;
gsp = 'sex';
gsp = null;
gsp = { name: 12 };
/**
 * void类型
 */
// 直接定义变量的类型，意义不大，而且只能定义null和undefined，不能报错
// let no: void = false // 报错
var no = null; // 就这里有意义
var no1 = undefined; // 就这里有意义
// 函数没返回值
var noFn = function () {
    console.log(111);
};
// 函数返回null
var noFn1 = function () {
    return null;
};
// 函数返回null
var noFn2 = function () {
    return undefined;
};
// 函数返回布尔
var noFn3 = function () {
    return false;
};
/**
 * null和undefined类型
 */
// 下面可以看出,null和undefined可以互相赋值，因为这2个类型，是所有类型的子类型
var u = undefined;
// u = null
// u = 1 报错
// let n: null = null
// n = undefined
// n = 1 报错
// 可以看出下面是没报错的，null和undefined可以互相赋值，因为这2个类型，是所有类型的子类型
// 但是如果编译的时候，开启 tsx xxx.ts --strictNullChecks，就会报错
var num = 3;
// num = null // 没报错，编译也没报错
// num = undefined // 没报错，编译也没报错
var num1 = 3;
// num1 = null
num1 = undefined;
/**
 * 一个变量有多种类型怎么写
 */
var xx = false;
xx = 1;
xx = '111';
