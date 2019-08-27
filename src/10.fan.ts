/*
 * @Desc: 泛型
 * @Author: John.Guan
 * @Date: 2019-08-27 17:32:15
 * @Last Modified by: John.Guan
 * @Last Modified time: 2019-08-27 18:47:35
 */

class BeeKeeper {
  hasMask: boolean
}

class LionKeeper {
  nametag: string
}

class Animal {
  numLength: number
}

class Bee extends Animal {
  keeper: BeeKeeper
}

class Lion extends Animal {
  keeper: LionKeeper
}

function createInstanceByFactory<T extends Animal>(
  CConstructor: new () => T
): T {
  return new CConstructor()
}

createInstanceByFactory(Bee).keeper.hasMask
createInstanceByFactory(Lion).keeper.nametag
