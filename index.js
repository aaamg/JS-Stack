// /* Array Method */
// // stack
// var stack = []

// // push
// stack.push("cat")
// stack.push("dog")
// stack.push("fish")

// // pop
// stack.pop()

// // peek
// stack[stack.length - 1]

/* Class Method */
// stack
class Stack {
  constructor() {
    this.storage = {}
    this.size = 0
  }

  // push
  push(element) {
    this.storage[this.size] = element
    this.size++
  }

  // pop
  pop() {
    let removed = this.storage[this.size]
    delete this.storage[this.size]
    this.size --
    return removed
  }

  // peek 
  peek() {
    return this.storage[this.size]

  }

  // isEmpty & size
  isEmpty() {
    if(this.size === 0){
      return `Stack is empty`
    } else {
      return `Stack has ${this.size} elements`
    }
  }

}

const stack = new Stack()

stack.push("cat")
stack.push("dog")
stack.push("fish")

stack.pop()

stack.isEmpty()