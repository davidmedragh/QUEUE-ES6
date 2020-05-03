class Queue {
    
    /**
     * 
     * @param  {...any} items 
     */
    constructor(...items){
        this.reverse = false;
        this.queue = [...items]
    }

    /**
     * add the items to the queue respecting the sens
     * @param  {...any} items 
     */
    enqueue(...items){
        return this.reverse
            ? this.queue.unshift(...items)
            : this.queue.push(...items);
    }

    /**
     * dequeue an element from the queue respecting the sens
     */
    dequeue() {
        return this.reverse
        ? this.queue.pop()
        : this.queue.shift();
    }

}
console.log("create queue with [1,2,3]");
queue = new Queue(1,2,3);
console.log("The content of the created queue is " + queue.queue);
// we enqueue david , 4,5,6 to the que
console.log("we enqueue david , 4,5,6 to the que ==> " + queue.enqueue('david' , 4,5,6));
console.log("New content of the queue is " + queue.queue);
// we dequeue on normal sens
console.log(queue.dequeue() + " dequeued from the queue");
console.log("The new queue content is ==>"+queue.queue)
//we inverse the sens and enqueue david
queue.reverse = true;
console.log('as we reversed the sens david enqueued ont the begining of the queue its new size is ==> ',queue.enqueue('david'))
console.log('The  new content  of the queue is ==> ' + queue.queue);
console.log ('as we reversed the sens then we remove the last from the queue ' + queue.dequeue() );
console.log('The  new content  of the queue is ==> ' + queue.queue);