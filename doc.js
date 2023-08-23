let students = [
    {firstName: 'JD', lastName: 'Monk', year:'freshman',grades : [82,98,100]}, 
    {firstName: 'Deron', lastName: 'Fambro', year:'sophmore',grades : [80,80,70]}, 
    {firstName: 'Jordan', lastName:'Williams' , year: 'junior',grades : [80,100,100]}, 
    {firstName: 'John', lastName: 'Nguyen',year:'senior',grades : [90,100,100]}
]

const findAdverage = () =>{
    for(i = 0; i < students.length; i++){
        let student = students[i];
        let sumGrade = 0;
        for(j = 0; j < students.grades.length; j++){
            sumGrade += student.grades[j]
        }
        let averageGrade = sumGrade / students.grades.length
    }
    // console.log(findAdverage(students))
    console.log(averageGrade)
    return averageGrade
}







