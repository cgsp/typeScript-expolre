interface Animal {
  eat()
  doSex()
  name: string
}

class Tiger implements Animal {
  name
  eat() {
    console.log('老虎吃饭')
  }
  doSex() {
    console.log('老虎做爱')
  }
}