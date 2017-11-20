var express = require('express');
var gradeBook = require('./gradeBook').book;

var app = express();

app.get('/', function(req, res) {
    res.send('Hello, World!');
});

app.get('/grades', function(req, res) {
    gradeBook.reset();
    var grades = req.query.scores.split(',');

    for(var i = 0; i < grades.length; i++) {
        gradeBook.addGrade(parseInt(grades[i]));
    }

    var average = gradeBook.getAverage();
    var letter = gradeBook.getFinalGrade();
    res.send('Your grade is: ' + average + ' letter is: ' + letter);
});

app.listen(3000);