class OrderedLinkedList extends LinkedList {
    constructor() {
        super()
    }

    append(value) {
        const newNode = new Node(value)

        if (this.head == null || this.head.content >= value) {
            newNode.next = this.head;
            this.head = newNode;

        } else {
            
            let i = this.head
            while (i.next != null && i.next.content < value)
                i = i.next
                newNode.next = i.next;
                i.next = newNode;
        }
    }

    insert(position, value) {
        this.append(value)
        throw new Error("Não é permitido inserir na posição em listas ordenadas")
    }
}