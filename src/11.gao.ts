/*
 * @Desc: 交叉类型
 * @Author: John.Guan
 * @Date: 2019-08-29 19:39:04
 * @Last Modified by: John.Guan
 * @Last Modified time: 2019-08-29 20:48:44
 */

type Easing = 'ease-in' | 'ease-out' | 'ease-in-out'

class UIElement {
  animate(x: number, y: number, easing: Easing) {
    if (easing === 'ease-in') {
    }
    if (easing === 'ease-out') {
    }
    if (easing === 'ease-in-out') {
    }
  }
}

let button = new UIElement()

button.animate(1, 2, '')
