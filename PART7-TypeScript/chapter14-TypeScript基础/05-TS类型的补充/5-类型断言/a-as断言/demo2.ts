class Person {}

class Student extends Person {
    studying(): void {
        console.log("Studying...");
    }
}

function sayHello(person: Person): void {
    const student = person as Student // 使用 as 断言将 person 断言为 Student 类型
    student.studying(); // 调用 Student 的方法
}

const student = new Student();
sayHello(student);
