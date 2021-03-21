const dietaryRestrictions = ["None", "Vegetarian", "Vegan"];

class Person {
    constructor(name) {
        this.name = name;
        this.attending = false;
        this.dietRestriction = dietaryRestrictions[0];
        this.drinking = false;
    }

    setAttending(attending) {
        this.attending = attending;
    }

    setDietRestriction(dietRestriction) {
        this.dietRestriction = dietRestriction;
    }

    setDrinking(drinking) {
        this.drinking = drinking;
    }
}

class FamilyUnit {
    constructor(people) {
        this.people = people;
        this.wantPhysicalInvitation = false;
    }

    addPerson(person) {
        this.people.push(person);
    }

    containsPersonWithName(name) {
        let containsPersonWithName = false;
        this.people.forEach((person) => {
            console.log(person.name);
            if (person.name === name) {
                containsPersonWithName = true;
            }
        });
        return containsPersonWithName;
    }
}

const names = [
    ["Kevin Steel", "Susie Steel", "Ashley Steel", "Athena Steel"],
    ["Christopher Nauert", "Chris Nauert"],
];

export const people = [];
export const familyUnits = [];

names.forEach((family) => {
    let familyPeople = [];
    family.forEach((familyMember) => {
        let familyPerson = new Person(familyMember);
        people.push(familyPerson);
        familyPeople.push(familyPerson);
    });
    familyUnits.push(new FamilyUnit(familyPeople));
});
