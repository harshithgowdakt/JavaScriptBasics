interface Contact {
    id: number;
    name: string;
}

function clone(source: Contact): Contact {
    return Object.apply({}, source);
}

const a: Contact = { id: 1, name: "harshith" };
const b: Contact = clone(a);