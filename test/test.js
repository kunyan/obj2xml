(function() {
    'use strict';

    const obj2xml = require('../lib/obj2xml');

    const jim = {
        name: "Jim",
        age: 12,
        parent: {
            name: "Mike",
            age: 45,
        },
    };

    const mike = {
        name: "Jim",
        age: 45,
        child: {
            name: "Jim",
            age: 12,
        }
    };

    const person = {
        name: 'kyan',
        age: 28,
        company: 'RedHat Inc.',
    };

    const persons = [jim, mike];

    console.log(obj2xml('person', person));
    console.log(obj2xml('person', jim));
    console.log(obj2xml('person', mike));
    console.log(obj2xml('persons', persons));
})();
