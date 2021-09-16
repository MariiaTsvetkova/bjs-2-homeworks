function Student(name, gender, age) { // создаем функцию конструктор
    this.name = name;
    this.gender = gender;
    this.age = age;

}
const student1 = new Student('Tony', 'male', 37);   // экземпляры
const student2 = new Student('Hanna', 'female', 24);
const student3 = new Student('Bob', 'male', 31);

Student.prototype.setSubject = function (subjectName) { // устанавливает студенту предмет
  this.subject = subjectName;
}

Student.prototype.addMark = function (mark) {  // добавляет по одной оценке 
  if (this.marks === undefined) {
    this.marks = [];
  } 
  this.marks.push(mark);
}

Student.prototype.addMarks = function (...marks) { //добавляет сразу несколько оценок
  if (this.marks === undefined) {
    this.marks = [];
  }
  marks.forEach((item) =>{
    this.marks.push(item)
  });
}

Student.prototype.getAverage = function (marks) {  // считает среднюю оценку
  if (this.marks.length === 0) {
    return 0;
  }
  let sum = 0;
  this.marks.forEach((item) => {
    sum += item;
    ;
  })
  return sum / this.marks.length;
}

Student.prototype.exclude = function (reason) {  //исключает студента и пишет причину
  delete this.marks;  
  delete this.subject;

  this.excluded = reason;
}