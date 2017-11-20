var book = require('../libs/gradeBook').book;

exports['setUp'] = function(callback) {
    book.reset();
    callback();
};

exports['Give a right grade'] = function(test) {
    book.addGrade(100);
    book.addGrade(0);
    var grade = book.getFinalGrade();

    test.equals(grade, "F");
    test.done();
};

exports['Can add a new grade'] = function(test) {
    book.addGrade(7);
    var count = book.getTotalCountOfGrades();

    test.equals(count, 1);
    test.done();
};

exports['Average is correct'] = function(test) {
    book.addGrade(10);
    book.addGrade(20);
    book.addGrade(30);

    test.equals(book.getAverage(), 20);
    test.done();
};