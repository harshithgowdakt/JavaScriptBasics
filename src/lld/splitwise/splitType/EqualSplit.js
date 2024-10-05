import { Split } from "./Split";

export class EqualSplit extends Split {
    EqualSplit(user) {
        super(user);
    }

    getAmount() {
        return amount;
    }

    setAmount(amount) {
        this.amount = amount;
    }
}
