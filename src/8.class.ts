/*
 * @Desc: 类
 * @Author: John.Guan
 * @Date: 2019-08-02 14:14:48
 * @Last Modified by: John.Guan
 * @Last Modified time: 2019-08-02 15:04:40
 */

// interface Point {
//   x: number
//   y: number
// }

// interface Point3d extends Point {
//   z: number
// }

// let point3d: Point3d = {
//   x: 1,
//   y: 2,
//   z: 111
// }

class Point {
  x: number
  y: number
}

interface Point3d extends Point {
  z: number
}

let point3d: Point3d = {
  x: 1,
  y: 2,
  z: 111
}
