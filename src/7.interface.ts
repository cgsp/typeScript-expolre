/*
 * @Desc: 接口初探
 * @Author: John.Guan
 * @Date: 2019-07-27 22:52:08
 * @Last Modified by: John.Guan
 * @Last Modified time: 2019-07-28 13:03:15
 */

class Control {
  private state: any
}

interface SelectableControl extends Control {
  select()
}

class Button extends Control implements SelectableControl {
  select() {}
}

class TextBox extends Control {
  select() {}
}

class Im implements SelectableControl {
  private state: any
  select() {}
}
