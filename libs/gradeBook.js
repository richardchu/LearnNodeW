var gradeBook = {
    _grades: [],

    reset: function() {
        this._grades = [];
    },

    getFinalGrade: function() {
        var average = this.getAverage();
        if (average >= 90) {
            return "A";
        } else if (average >= 80) {
            return "B";
        } else if (average >= 70) {
            return "C";
        } else if (average >= 60) {
            return "D";
        }
        return "F";
    },

    addGrade: function(grade) {
        this._grades.push(grade);
    },

    getTotalCountOfGrades: function() {
        return this._grades.length;
    },

    getAverage: function() {
        var total = 0;
        for(var i = 0; i < this._grades.length; i++) {
            total += this._grades[i];
        }
        return total / this._grades.length;
    },

}

exports.book = gradeBook;