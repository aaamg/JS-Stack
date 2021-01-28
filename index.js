/* Array Method */
// stack
var stack = []

// push
stack.push("cat")
stack.push("dog")
stack.push("fish")

// pop
stack.pop()

// peek
stack[stack.length - 1]

/* Class Method */
// stack
class Stack {
  constructor() {
    this.storage = {}
    this.size = 0
  }

  // push
  push(element) {
    this.size++
    this.storage[this.size] = element
  }

  // pop
  pop(element) {
    let removed = this.storage[this.size]
    delete this.storage[this.size]
    this.size --
    return removed
  }

  // peek 
  peek() {
    return this.storage[this.size]

  }
}

const stack = new Stack()

stack.push("cat")
stack.push("dog")
stack.push("fish")