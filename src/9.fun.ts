/*
 * @Desc:
 * @Author: John.Guan
 * @Date: 2019-08-15 16:23:57
 * @Last Modified by: John.Guan
 * @Last Modified time: 2019-08-15 17:11:22
 */

function pickCard(x: { suit: string; card: number }[]): number
function pickCard(x: number): { suit: string; card: number }

function pickCard(x): any {
  // 如果喂入数组，就返回数字
  if (Array.isArray(x)) {
    return 1
  }
  // 如果喂入数字，就返回对象i
  if (typeof x === 'number') {
    return {
      suit: '红心',
      card: 1
    }
  }
}

pickCard(1)
pickCard([])
