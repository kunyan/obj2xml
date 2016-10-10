obj2xml
===

##### Object to XML

```javascript
const obj2xml = require('obj2xml');

const person = {
  name: 'kyan',
  age: 28,
  company: 'RedHat Inc.',
  getAge: function() {
    return this.age;
  }
};

const xml = obj2xml('person', person);
```
output:
```xml
<person name="kyan" age="28" company="RedHat Inc."></person>
```

##### Array to XML

```javascript
const obj2xml = require('obj2xml');

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

const persons = [jim, mike];

const xml = obj2xml('persons', persons);
```

```xml
<persons count="2">
    <person name="Jim" age="12">
        <parent name="Mike" age="45"></parent>
    </person>
    <person name="Jim" age="45">
        <child name="Jim" age="12"></child>
    </person>
</persons>
```
