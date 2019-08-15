/*
 * @Desc: 函数
 * @Author: John.Guan
 * @Date: 2019-08-14 19:11:27
 * @Last Modified by: John.Guan
 * @Last Modified time: 2019-08-15 11:51:01
 */

function buildName3(firstName: string, ...rest: Array<string>) {
  return firstName + ' ' + rest.join(' ')
}

console.log(buildName3('guan', '1', '2')) // 'guan 1 2'
