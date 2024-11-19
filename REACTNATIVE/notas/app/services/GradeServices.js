let grades = [{ subject: 'Matemáticas', grade: 9.5 }, { subject: 'Física', grade: 9.2 }]

export const saveGrade = (grade) => {
    grades.push(grade);
    //console.log("Arreglo", grades);
}

export const getGrades = () => {
    return grades;
}

export const updateGrade = (nota) => {
    let gradeRetrieved = find(nota.subject);
    if (gradeRetrieved != null) {
        gradeRetrieved = { ...gradeRetrieved, grade: nota.grade };
        let index = grades.findIndex(item => item.subject === nota.subject);
        if (index !== -1) {
            grades[index] = gradeRetrieved;
        }
    }
}


const find = (subject) => {
    for (let i = 0; i < grades.length; i++) {
        if (grades[i].subject == subject) {
            return grades[i];
        }
    }
    return null;
}