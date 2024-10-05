class Transaction {
    id;
    sender;
    receiver;
    amount;


    constructor(id, sender, receiver, amount) {
        this.id = id;
        this.sender = sender;
        this.receiver = receiver;
        this.amount = amount;
    }
}