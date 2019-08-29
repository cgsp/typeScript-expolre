/*
 * @Desc: 泛型
 * @Author: John.Guan
 * @Date: 2019-08-27 17:32:15
 * @Last Modified by: John.Guan
 * @Last Modified time: 2019-08-28 20:05:20
 */

function gsp<T>(arg: T): T {
  return arg
}

interface GspI {
  <T>(arg: T): T
}

let mygsp1: <T>(arg: T) => T = gsp

let mygsp2: GspI = gsp
