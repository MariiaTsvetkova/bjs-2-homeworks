//  Задача 1

function parseCount(value) {
    let num = Number.parseInt(value);
    if (Number.isNaN(num)) throw new Error("Невалидное значение");
    return num;
    
}

function validateCount(value) {
    try {
        return parseCount(value); 
    } catch(error) {
        return error;
    }
}

// Задача 2

class Triangle {
    constructor(a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;
        if ((a + b < c) || (a + c < b) || (b + c < a)) throw new Error("Треугольник с такими сторонами не существует");
    }

    getPerimeter() {
        return this.a + this.b + this.c;
    }

    getArea() {
        const p = this.getPerimeter() / 2;
        const area = Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c)).toFixed(3);
        return +area;

    }
}

function getTriangle(a, b, c) {
    try {
        return new Triangle(a, b, c);
    } catch(error) {
        const message = 'Ошибка! Треугольник не существует';
        return {
            getPerimeter() {
                return message },
            getArea() {
                return message }
        }
    }
}
