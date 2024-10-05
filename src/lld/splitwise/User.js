class User {
    id;
    name;
    email;


    User(id, name, email) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.balances = new Map();
    }

    getId() {
        return id;
    }

    getName() {
        return name;
    }

    getEmail() {
        return email;
    }

    getBalances() {
        return balances;
    }
}