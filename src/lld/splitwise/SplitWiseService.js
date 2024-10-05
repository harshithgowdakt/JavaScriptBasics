import { ExactSplit } from "./splitType/ExactSplit";
import { PercentSplit } from "./splitType/PercentSplit";
import { EqualSplit  } from "./splitType/EqualSplit";


class SplitwiseService {
    static instance = null;
    users = new Map();
    groups = new Map();
    static TRANSACTION_ID_PREFIX = "TXN";
    static transactionCounter = 0;

    constructor() {
        if (SplitwiseService.instance) {
            return SplitwiseService.instance;
        }
        SplitwiseService.instance = this;
    }

    static getInstance() {
        if (!SplitwiseService.instance) {
            SplitwiseService.instance = new SplitwiseService();
        }
        return SplitwiseService.instance;
    }

    addUser(user) {
        this.users.set(user.id, user);
    }

    addGroup(group) {
        this.groups.set(group.id, group);
    }

    addExpense(groupId, expense) {
        const group = this.groups.get(groupId);
        if (group) {
            group.addExpense(expense);
            this.splitExpense(expense);
            this.updateBalances(expense);
        }
    }

    splitExpense(expense) {
        const totalAmount = expense.amount;
        const splits = expense.splits;
        const totalSplits = splits.length;

        const splitAmount = totalAmount / totalSplits;
        for (const split of splits) {
            if (split instanceof EqualSplit) {
                split.amount = splitAmount;
            } else if (split instanceof PercentSplit) {
                split.amount = (totalAmount * split.percent) / 100;
            }
        }
    }

    updateBalances(expense) {
        for (const split of expense.splits) {
            const paidBy = expense.paidBy;
            const user = split.user;
            const amount = split.amount;

            if (paidBy !== user) {
                this.updateBalance(paidBy, user, amount);
                this.updateBalance(user, paidBy, -amount);
            }
        }
    }

    updateBalance(user1, user2, amount) {
        const key = this.getBalanceKey(user1, user2);
        user1.balances.set(
            key,
            (user1.balances.get(key) || 0) + amount
        );
    }

    getBalanceKey(user1, user2) {
        return `${user1.id}:${user2.id}`;
    }

    settleBalance(userId1, userId2) {
        const user1 = this.users.get(userId1);
        const user2 = this.users.get(userId2);

        if (user1 && user2) {
            const key = this.getBalanceKey(user1, user2);
            const balance = user1.balances.get(key) || 0;

            if (balance > 0) {
                this.createTransaction(user1, user2, balance);
                user1.balances.set(key, 0);
                user2.balances.set(this.getBalanceKey(user2, user1), 0);
            } else if (balance < 0) {
                this.createTransaction(user2, user1, Math.abs(balance));
                user1.balances.set(key, 0);
                user2.balances.set(this.getBalanceKey(user2, user1), 0);
            }
        }
    }

    createTransaction(sender, receiver, amount) {
        const transactionId = this.generateTransactionId();
        const transaction = new Transaction(transactionId, sender, receiver, amount);
        // Process the transaction
        // ...
    }

    generateTransactionId() {
        SplitwiseService.transactionCounter++;
        return SplitwiseService.TRANSACTION_ID_PREFIX + String(SplitwiseService.transactionCounter).padStart(6, '0');
    }
}