// Ques:1 Create 2 objects - parent and child. Attach methods to parent and use those methods in child object using parents prototype

obj1={name: "Rahul Yadav", rollNo: "1", Class: "9th",
Details: function() {
return (`The name is: ${this.name}, roll no. is ${this.rollNo} and the class is: ${this.Class}`);
}}
obj2={name: "Prathmesh", rollNo: "2", Class: "10th"}
obj2.__proto__=obj1;

console.log(obj2.Details());


//Ques 2: Write code to explain prototype chaining

console.log(obj2.__proto__.__proto__);



//Ques 3: Add a method to calculate sum of all elements in Array in array's protype, use that method to calculate sum for multiple arrays

let sumOfArray={
    add: function(elementOfArray)
    {
        let sum=0;
        for(let i of elementOfArray)
        {
            sum+=i;
        }
        console.log(`sum of elements are = ${sum}`);
    }
}

Array.__proto__ = sumOfArray;

arrOne =[1,2,3,4,5,6,7]
arrTwo =[8,9,10,11,12,13]
arrThree =[14,15,16,17,18,19,20]

Array.add(arrOne);
Array.add(arrTwo);
Array.add(arrThree);



// Ques 4: Write a JavaScript function to retrieve all the names of object's own and inherited properties.

var keys = [];
for(var key in obj2)
keys.push(key)
console.log(keys);


// 0: "name"
// 1: "rollNo"
// 2: "Class"
// 3: "Details"



