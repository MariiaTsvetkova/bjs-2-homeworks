class PrintEditionItem {
    #state

    constructor(name, releaseDate, pagesCount) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 100;
        this.type = null;
    }

    fix() {
        this.state = this.#state *= 1.5;
    }

    set state(value) {
        if (!this.#isNumber(value)) {
            throw new Error("State should be a number");
        }

        if (value < 0) {
            this.#state = 0;
            return;
        }

        if (value > 100) {
            this.#state = 100;
            return;
        }

        this.#state = value;
    }

    get state() {
        return this.#state;
    }

    #isNumber(value) {
        return typeof(value) === 'number' && !isNaN(value);
    }
}

class Magazine extends PrintEditionItem{
    constructor(name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.type = "magazine";
    }
}

class Book extends PrintEditionItem{
    constructor(author, name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.author = author;
        this.type = "book";
    }
}

class NovelBook  extends Book{
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "novel";
    }
}

class FantasticBook  extends Book{
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "fantastic";
    }
}

class DetectiveBook  extends Book{
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "detective";
    }
}


class Library {
    constructor(name) {
        this.name = name;
        this.books = [];
    }

    addBook(book) {
        Library.#validateBook(book);

        if (book.state > 30) {
            this.books.push(book);
        }
    }

    findBookBy(type, value) {
        let result = this.books.find(book => book[type] === value);
        return result === undefined ? null : result;
    }

    giveBookByName(bookName) {
        const type = 'name';
        const booksAmount = 1;
        let book = this.findBookBy(type, bookName);

        if (book === null) {
            return null;
        }

        let index = this.books.indexOf(book);

        return this.books.splice(index, booksAmount)[0];
    }

    static #validateBook(book) {
        const typeCheck = book instanceof PrintEditionItem;
        if (!typeCheck) {
            throw new Error("Invalid argument: book should be instance of  PrintEditionItem");
        }
    }
}

class Student {
    #name;
    #subjects;

    constructor(name) {
        this.#name = name;
        this.#subjects = [];
    }

    getName() {
        return this.#name
    }


    addMark(grade, subject) {
        let concreteSubject = this.#getSubjectOrDefault(subject);

        if (concreteSubject === null) {
            concreteSubject = this.#addNewSubject(subject);
        }

        concreteSubject.addGrade(grade);
        return concreteSubject.getCountOfGrades();
    }

    getAverageBySubject(subject) {
        let concreteSubject = this.#getSubjectOrDefault(subject);

        if (concreteSubject === null) {
            return 0;
        }

        return concreteSubject.getAverage();
    }

    getAverage() {
        const length = this.#subjects.length;
        if (length === 0) {
            return 0;
        }

        return this.#subjects.reduce(function (sum, current) {
            return sum + current.getAverage();
            }, 0) / length;
    }

    #getSubjectOrDefault(subjectName) {
        for (let subject of this.#subjects) {
            if (subject.name === subjectName) {
                return subject;
            }
        }

        return null;
    }

    #addNewSubject(subjectName) {
        const subject = new Subject(subjectName);
        this.#subjects.push(subject);

        return subject;
    }
}

class Subject {
    #name;
    #grades;

    constructor(name) {
        this.name = name;
        this.#grades = [];
    }

    get name() {
        return this.#name;
    }

    set name(name) {
        this.#name = name;
    }

    addGrade(grade) {
        if (Subject.#validateGrade(grade)) {
            this.#grades.push(grade);
            return;
        }
        throw new Error('Grade should be a number between 1 and 5');
    }

    getCountOfGrades() {
        return this.#grades.length;
    }

    getAverage() {
        const length = this.#grades.length;

        return length === 0 ?
            0 : this.#getSumOfGrades() / length;
    }

    #getSumOfGrades() {
        let result = 0;
        this.#grades.forEach(grade => {
            result += grade;
        });
        return result;
    }

    static #validateGrade(grade) {
        return typeof(grade) === 'number' && grade >=1 && grade <= 5;
    }
}
