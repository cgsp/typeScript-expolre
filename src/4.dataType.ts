/* 
 * @Desc: ts的数据类型
 * @Author: John.Guan 
 * @Date: 2019-05-04 11:13:58 
 * @Last Modified by: John.Guan
 * @Last Modified time: 2019-05-04 12:34:36
 */

/** 
 * 布尔类型
 */
let bol: boolean = false

/**
 * 数字类型
 */
// 2进制
let binaryLiteral: number = 0b10100
// 8进制
let octalLiteral: number = 0o24
// 10进制
let decLiteral: number = 20
// 16进制
let hexLiteral: number = 0x14

/**
 * 字符串与模板字符串
 */
let sex: string = 'gsp'
sex = '17'

/**
 * 数组
 */
let arr1: number[] = [1, 2, 23]
let arr2: Array<number> = [1.3, 4]

/**
 * 元组
 */
let xArr: [string, number] = ['1', 1]
xArr[0].substr(1) // 可以用，因为第1项是string
// xArr[1].substr(1) // 报错，因为第2项是number
// xArr[3] = '1' // 之前版本是，后面的项，必须是string或者number才不报错，现在版本，无论怎么写，都报错

/**
 * 枚举
 */
enum Color {
  'green',
  'red',
  'blue'
}

let color: Color = Color.blue
console.log(color) // 2

enum Color1 {
  green,
  red,
  blue
}

let color1: Color1 = Color1.blue
console.log(color1) // 2

enum Color2 {
  green = 3,
  red = 4,
  blue = 8
}

let color2: Color2 = Color2.blue
console.log(color2) // 8

enum Color3 {
  green = 'gsp',
  red = 'gyp',
  blue = 1111
}

let color3: Color3 = Color3.red
console.log(Color3) // { '1111': 'blue', green: 'gsp', red: 'gyp', blue: 1111 }
console.log(Color3[1111]) // 'blue'
console.log(typeof Color3[1111]) // 'string'
console.log(Color3['blue']) // '1111'
console.log(typeof Color3['blue']) // 'number'
console.log(color3) // 'gyp'

/**
 * any类型
 */
let gsp: any = false
gsp = 'sex'
gsp = null
gsp = { name: 12 }

/**
 * void类型
 */
// 直接定义变量的类型，意义不大，而且只能定义null和undefined，不能报错
// let no: void = false // 报错
let no: void | null = null // 就这里有意义
let no1: void | undefined = undefined // 就这里有意义
// 函数没返回值
let noFn = (): void => {
  console.log(111)
}

// 函数返回null
let noFn1 = (): void | null => {
  return null
}

// 函数返回null
let noFn2 = (): void | undefined => {
  return undefined
}

// 函数返回布尔
let noFn3 = (): boolean => {
  return false
}

/**
 * null和undefined类型
 */
// 下面可以看出,null和undefined可以互相赋值，因为这2个类型，是所有类型的子类型
let u: undefined = undefined
// u = null
// u = 1 报错
// let n: null = null
// n = undefined
// n = 1 报错

// 可以看出下面是没报错的，null和undefined可以互相赋值，因为这2个类型，是所有类型的子类型
// 但是如果编译的时候，开启 tsx xxx.ts --strictNullChecks，就会报错
let num: number = 3
// num = null // 没报错，编译也没报错
// num = undefined // 没报错，编译也没报错

let num1: number | null | undefined = 3
// num1 = null
num1 = undefined

/**
 * 一个变量有多种类型怎么写
 */

let xx: string | number | boolean = false
xx = 1
xx = '111'



/**
 * object类型
 */
// 声明一个create函数
declare function create(o: object | null): void

create(null)
create({ name: 12 })

/**
 * 类型推断机制升级
 */
let someValue: any = 'this is hahhaha'
// 如果上面这么写了，IDE里面，就没办法直接 someValue. 之后出来length这个属性了
// 通过下面这么写，可以让其有length属性
// 强制转换的方法1
let strLength: number = (<string>someValue).length
// 强制转换的方法2
let strLength1: number = (someValue as string).length
