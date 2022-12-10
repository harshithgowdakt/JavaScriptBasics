
type ContactName = string;
type ContactBirthDate = Date | string | number;

/**
 * replace enum with type alise
 */
type ContactStatus = "active" | "inactive" | "new";


interface Contact {
    id: number;
    name: ContactName;
    brithDate?: ContactBirthDate;
    status: ContactStatus;
}

interface Address {
    line1: string;
    line2: string;
    province: string;
    region: string;
    postalCode: string;
}

type AddressableContact = Contact & Address;

function getBirthDate(contact: Contact) {
    if (typeof contact.brithDate === "number") {
        return new Date(contact.brithDate);
    } else if (typeof contact.brithDate === "string") {
        return Date.parse(contact.brithDate);
    }
    return contact.brithDate;
}

let primaryContact: Contact = {
    id: 1,
    name: "harshith",
    status: "new"
}