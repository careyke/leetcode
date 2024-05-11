/*
 * @lc app=leetcode.cn id=232 lang=typescript
 *
 * [232] 用栈实现队列
 * 思路：
 * 1. 栈A负责push元素
 * 2. 当需要出栈时，将栈A的元素转移到栈B，然后从栈B出栈
 * 3. 如果栈B没有元素，就从栈A转移一次
 */

// @lc code=start
class MyQueue {
    private pushStack: number[]
    private popStack: number[]

    constructor() {
        this.pushStack = [];
        this.popStack = [];
    }

    push(x: number): void {
        this.pushStack.push(x);
    }

    pop(): number {
        if (this.popStack.length) {
            return this.popStack.pop() as number
        }
        this.transform();
        return this.popStack.pop() as number
    }

    peek(): number {
        if (this.popStack.length) {
            return this.popStack[this.popStack.length - 1]
        }
        this.transform();
        return this.popStack[this.popStack.length - 1]
    }

    empty(): boolean {
        return this.popStack.length === 0 && this.pushStack.length === 0;
    }

    transform(): void {
        while (this.pushStack.length) {
            this.popStack.push(this.pushStack.pop() as number)
        }
    }
}

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
// @lc code=end

