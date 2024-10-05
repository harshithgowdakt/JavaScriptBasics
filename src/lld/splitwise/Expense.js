class Expense {
    id;
    amount;
    description;
    paidBy;
    splits;

    Expense(id, amount, description,  paidBy) {
        this.id = id;
        this.amount = amount;
        this.description = description;
        this.paidBy = paidBy;
        this.splits = [];
    }

    addSplit( split) {
        splits.add(split);
    }

    getId() {
        return id;
    }

    getAmount() {
        return amount;
    }

    getDescription() {
        return description;
    }

    getPaidBy() {
        return paidBy;
    }

    getSplits() {
        return splits;
    }
}