class Group {
    id;
    name;
    members;
    expenses;

    Group(id, name) {
        this.id = id;
        this.name = name;
        this.members = new Map();
        this.expenses = new Map();
    }

    addMember(user) {
        members.add(user);
    }

    addExpense(expense) {
        expenses.add(expense);
    }

    getId() {
        return id;
    }

    getName() {
        return name;
    }

    getMembers() {
        return members;
    }

    getExpenses() {
        return expenses;
    }
}