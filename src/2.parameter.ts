// 规定必须是string的
var sex: string = '12'
sex = '13'

// 规定必须是number的
var num: number = 13
num = 14

// 规定必须是布尔的
var bol: boolean = false
bol = true

// 规定是数组
var arr: boolean[] = [true, false]
var arr1: Array<boolean> = [true, false]
var arr2: string[] = ['1', '2']
var arr3: Array<string> = ['str', 'str']
var arr4: number[] = [1, 2]
var arr5: Array<number> = [3.4, 12]
var arr6: any[] = [1, 2, 'www']
var arr7: Array<any> = [1.3, 1, true]

// 规定是对象
var obj: { name: string } = { name: 'gsp' }
class Stock {

}
var getStock: Stock = () => {
  return new Stock()
}

// 类型推断机制
var gsp = 'gsp'

// 方法返回值--不需要返回值，但是写了return,就会报错
function test(): void {
  return '1'
}

var gsp1 = (): string => {
  return '1'
}

// 方法参数的类型
function test1(name: string): number {
  console.log(name)
  return 1
}

test1('gsp')

var test2 = (name: string): number => {
  console.log(name)
  return 12
}

test2('gsp')

// 自定义参数类型
class Person {
  name: string;
  age: number;
}

var person: Person = new Person()
person.age = 18
person.name = 'gsp'

// 方法参数的可选参数
function test3(a: any, b?: string, c: number = 13) {
  console.log(a)
  console.log(b)
  console.log(c)
}

test3('a')

