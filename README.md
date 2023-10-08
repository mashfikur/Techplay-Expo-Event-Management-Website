# TechPlay Expo

This is a event management website that arranges and successfully organizes events. This project is completely responsive to any kind of device and capable of user authentication with firebase and third party autorization like **Google** and **Github**.

**Technologies Used :** React, React router DOM , Firebase , Tailwind CSS , Daisy UI etc.

**Live Website Link :**  [TechPlay Expo](https://techplay-expo.web.app/)

# Features
- Secure User Authentication With Firebase ,Google & Github.
- Login & Logout method implemented with dispalying user data.
- Company Services introduced and service details showed in dynamic URL.
- Private Route with user authorization and redirection.
- Career section and Jobs section included with search functionality.
- Interactive and easy to use forms to maintain and collect user data.
- AOS animation implemented for more visually appealing look.


#




<div align="center">
  <img height="60" src="https://edurev.gumlet.io/AllImages/original/ApplicationImages/CourseImages/944e5d47-8c55-4a89-91e5-22ab5f2798fc_CI.png">
  <h1>MCQ TEST</h1>
</div>

###### 1. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let greeting;
greetign = {};
console.log(greetign);
```

- A: `{}`
- B: `ReferenceError: greetign is not defined`
- C: `undefined`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: A

<i>First a variable is declared using let keyword called 'greeting' without assigning any value to it . Then an empty object value is assigned to a global variable called 'greetign' and we are printing that value in our console , so the result is an empty object. In javaScript we can declare variables without let ,var, const , they are called global variables . </i>

</p>
</details>

###### 2. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sum(a, b) {
  return a + b;
}

sum(1, "2");
```

- A: `NaN`
- B: `TypeError`
- C: `"12"`
- D: `3`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: C

<i>Here a fucntion is taking two parametes and is adding them together . Value 'a' is a valid number but 'b' is a string . We can not add a number and string , so javascript here converted the number into a string value and then concatenated those values together . So the value we expected would be 3 but the answer is "12".</i>

</p>
</details>

###### 3. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
const food = ["🍕", "🍫", "🥑", "🍔"];
const info = { favoriteFood: food[0] };

info.favoriteFood = "🍝";

console.log(food);
```

- A: `['🍕', '🍫', '🥑', '🍔']`
- B: `['🍝', '🍫', '🥑', '🍔']`
- C: `['🍝', '🍕', '🍫', '🥑', '🍔']`
- D: `ReferenceError`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: A

<i>First There is array containing the foods . Then a new object is created which has a property called "favoriteFood" and the value is the first item of the array . Then the value is being reassigned . But we are printing the array here , which is not being modified . The "info" object here is accessing the items of "food" array and only it's value is being modified . So the result will be the same as beginning.</i>

</p>
</details>

###### 4. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sayHi(name) {
  return `Hi there, ${name}`;
}

console.log(sayHi());
```

- A: `Hi there,`
- B: `Hi there, undefined`
- C: `Hi there, null`
- D: `ReferenceError`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: B

<i>sayHi() is a function which is taking a parameter . A parameter is like a variable inside the function block scope , so when we called the function but didn't provdied a value , the name variable was undefined.Because it was declared but never assigned a value to it.
</i>

</p>
</details>

###### 5. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let count = 0;
const nums = [0, 1, 2, 3];

nums.forEach((num) => {
  if (num) count += 1;
});

console.log(count);
```

- A: 1
- B: 2
- C: 3
- D: 4

<details><summary><b>Answer</b></summary>
<p>

#### Answer: C

<i>Here we have a variable called "count" with a value of 0 and an array of numbers called "num" . A forEach() method is used to loop through the elements of the array and the condition is  for every items in the array the "count" variable will be incremented by 1. But as we know 0 in javascript is a falsy value. So the if() scope will not handle falsy values it only handles truthy values . So according to the condition the valid number of items in the array is 3 and the variable will be incremented 3 times. So the incremented value of "count" is 3.</i>

</p>
</details>
