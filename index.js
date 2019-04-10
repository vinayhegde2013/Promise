import Employee from './Employee';
import Manager from './Manager';
import Directory from './Directory';

let directory = new Directory();
Promise.all([
    directory.add(new Employee("GTS0006", "Vinay Hegde", "mymail@gmail.com")),
    directory.add(new Manager("GTS0001", "Some Name", "mail@gmail.com", ["GTS0006"]))
]).then( () => {
    console.log("Added successfully");
    directory.print();
    directory.find("GTS0007")
    .then(e => e.print())
    .catch(str => console.log(str));
}).catch(str => {
    console.log(str);
});

console.log("Doing something else important");
