import { Split } from "./Split";

export class PercentSplit extends Split {
    percent;

    PercentSplit(user, percent) {
        super(user);
        this.percent = percent;
    }

    getAmount() {
        return amount;
    }

    getPercent() {
        return percent;
    }
}