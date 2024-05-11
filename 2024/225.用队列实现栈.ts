/*
 * @lc app=leetcode.cn id=225 lang=typescript
 *
 * [225] 用队列实现栈
 * 思路：使用两个队列来模拟栈的操作。关键点在于“先进后出”的特性
//  * 使用两个队列A和B，A负责入栈，B负责出栈
//  * 1. 入栈时，和队列A的 push 操作一致
//  * 2. 出栈时，将队列A的元素转移到队列B，只剩最后一个元素。
//  * 3. A和B交替操作
 * 更好的思路：一个主队列，一个副队列。
 * 1. 在入栈的时候，先塞入副队列，
 * 2. 然后将主队列里面的数据push到副队列
 * 3. 切换主副队列，交替执行。这时主队列的数据就是一个栈。
 */

// @lc code=start
// class MyStack {
//     private pushQueue: number[]
//     private popQueue: number[]

//     constructor() {
//         this.pushQueue = [];
//         this.popQueue = [];
//     }

//     push(x: number): void {
//         if (this.popQueue.length) {
//             this.pushQueue.push(this.popQueue.shift() as number);
//         }
//         this.popQueue.push(x);
//     }

//     pop(): number | undefined {
//         if (!this.popQueue.length) {
//             return;
//         }
//         const res = this.popQueue.shift();
//         while (this.pushQueue.length > 1) {
//             this.popQueue.push(this.pushQueue.shift() as number)
//         }
//         const tepm = this.popQueue;
//         this.popQueue = this.pushQueue;
//         this.pushQueue = tepm;

//         return res;
//     }

//     top(): number | undefined {
//         if (this.popQueue.length) {
//             return this.popQueue[0]
//         }
//     }

//     empty(): boolean {
//         return this.popQueue.length === 0
//     }
// }

// 两个队列
class MyStackWithTwoQueues {
    private mainQueue: number[]
    private copyQueue: number[]

    constructor() {
        this.mainQueue = [];
        this.copyQueue = [];
    }

    push(x: number): void {
        this.copyQueue.push(x);
        while (this.mainQueue.length) {
            this.copyQueue.push(this.mainQueue.shift() as number)
        }

        // 交换
        const temp = this.copyQueue;
        this.copyQueue = this.mainQueue;
        this.mainQueue = temp;
    }

    pop(): number | undefined {
        return this.mainQueue.shift()
    }

    top(): number | undefined {
        return this.mainQueue[0]
    }

    empty(): boolean {
        return this.mainQueue.length === 0
    }
}

// 一个队列 - 时间上表现不理想，不如两个队列
class MyStack {
    private queue: number[]

    constructor() {
        this.queue = [];
    }

    push(x: number): void {
        let num = this.queue.length;
        this.queue.push(x);

        while (num > 0) {
            this.queue.push(this.queue.shift() as number);
            num--;
        }
    }

    pop(): number | undefined {
        return this.queue.shift()
    }

    top(): number | undefined {
        return this.queue[0]
    }

    empty(): boolean {
        return this.queue.length === 0
    }
}

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */
// @lc code=end

