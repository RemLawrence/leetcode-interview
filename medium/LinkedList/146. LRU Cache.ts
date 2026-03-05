// Lessons learned:
// 1. LinkedList structure can be very simple; even an interface + POJO can work
// 2. Break down the task and make it modular 
// 3. set up dummy head & tail node is often benefitial
// 4. The reason to use Double Linked List is for add/remove with O(1) time. AND O(1) access to tail.prev
// 5. The reason to use HashMap is for get remove/get with O(1) time
// 6. Make sure to provide support for the case of updating existing node with the same key
interface Node {
    key: number;
    value: number;
    prev: Node | null;
    next: Node | null;
}

class LRUCache {
    private counter: number;
    private capacity: number;
    private map: Map<number, Node>;
    private head: Node;
    private tail: Node;

    constructor(capacity: number) {
        // Counter to keep track of the number of current nodes registered
        this.counter = 0;
        // Keep the max capacity in place
        this.capacity = capacity;
        // head node
        this.head = {
            key: 0,
            value: 0,
            prev: null,
            next: null
        };
        // tail node
        this.tail = {
            key: 0,
            value: 0,
            prev: null,
            next: null
        }
        // link head & tail
        this.tail.prev = this.head;
        this.head.next = this.tail;

        // the lookup hashmap which stores <key, Node> pair
        this.map = new Map<number, Node>();
    }

    addNode(node: Node) {
        // register it as head.next, tucking it in
        node.prev = this.head;
        node.next = this.head.next;
        this.head.next.prev = node;
        this.head.next = node;
    }

    removeNode(node: Node) {
        node.prev!.next = node.next;
        node.next!.prev = node.prev;
        node.next = null;
        node.prev = null;
    }

    moveToHead(node: Node) {
        this.removeNode(node);
        this.addNode(node);
    }

    put(key: number, value: number): void {
        // update existing node
        // this means no node need to be removed
        // no need to update the map
        if (this.map.has(key)) {
            const existingNode = this.map.get(key);
            existingNode.value = value;
            this.moveToHead(existingNode);
            return null;
        }

        const input: Node = {
            key,
            value,
            prev: null,
            next: null
        }

        // register the node as MRU
        this.addNode(input);
        this.map.set(key, input);

        if (this.counter + 1 > this.capacity) {
            // remove the LRU node
            const nodeToRemove = this.tail.prev;
            this.map.delete(nodeToRemove.key)
            this.removeNode(this.tail.prev);
        } else {
            this.counter = this.counter + 1;

        }
        return null;
    }

    get(key: number): number {
        if (!this.map.has(key)) return -1;
        const nodeToGet = this.map.get(key);
        this.moveToHead(nodeToGet);
        return nodeToGet.value
    }
}

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
