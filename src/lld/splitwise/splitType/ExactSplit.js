import { Split } from "./Split";

export class ExactSplit extends Split {
     ExactSplit( user,  amount) {
        super(user);
        this.amount = amount;
    }

    getAmount() {
        return amount;
    }
}