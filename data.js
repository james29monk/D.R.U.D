// Each student should have a first name, last name, grade(numeric 0-100), class (freshman, sophmore, etc), and id (9 digit number auto generated). For each endpoint, ensure that incorrect input is caught and return the appropriate error message. For example, if you expect a number and received a string this should output the appropriate status code.

//Mock db for right now
let students = [
    {firstName: 'JD', lastName: 'Monk', year:'freshman'}, 
    {firstName: 'Deron', lastName: 'Fambro', year:'sophmore',}, 
    {firstName: 'Jordan', lastName:'Williams' , year: 'junior'}, 
    {firstName: 'John', lastName: 'Nguyen',year:'senior'}]


for (let i = 0; i < students.length; i++) {
    students[i].id = generateRandomNineDigitId();
}


function generateRandomNineDigitId() {
    const min = 100000000; 
    const max = 999999999; 
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(students);


//assigning grades to an average
function assignLetter(averageGrade){
  if (averageGrade>=90){
    return "A";
  }else if (averageGrade>=80){
    return "B";
  }else if (averageGrade>=71){
    return "C";
  }else if(averageGrade==70){
    return "D"
  }else{averageGrade<=69}{
    return "F"
  }
}

// const AverageGrade=getAverageGrade();
// function getAverageGrade(studentId){
//   const findStudent=students.find(student=>student.id === studentId);
//   if(!students){
//     return "error";
//   }
//   const averageGrade=students.grade.reduce((sum,grade)=> sum + grade,0);
//   return averageGrade/students.grades.length;
// }
//having trouble accessing the specific student id in the parameters
//logger message goes here



const logger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  defaultMeta: { service: 'user-service' },
  transports: [
    //
    // - Write all logs with importance level of `error` or less to `error.log`
    // - Write all logs with importance level of `info` or less to `combined.log`
    //
    new winston.transports.File({ filename: 'error.log', level: 'error' }),
    new winston.transports.File({ filename: 'combined.log' }),
  ],
});
if (process.env.NODE_ENV !== 'production') {
    logger.add(new winston.transports.Console({
      format: winston.format.simple(),
    }));
}

//
// If we're not in production then log to the `console` with the format:
// `${info.level}: ${info.message} JSON.stringify({ ...rest }) `
//
if (process.env.NODE_ENV !== 'production') {
  logger.add(new winston.transports.Console({
    format: winston.format.simple(),
  }));
}




app.put('/updated/:id', (req, res) => {
  let id = req.params.id;
  let updatedData = {
      "firstName": req.body.firstName, "lastName": req.body.lastName,
      "grades": req.body.grades, "lGrade": req.body.lGrade,
      "year":req.body.year , "id": req.body.id }
  let updatedStudent = null;

  for (let i = 0; i < students.length; i++) {
      if (id == students[i].id) {
          students[i].year = updatedData;
          updatedStudent = students[i];
          break; 
      }
  }
  for (let i = 0; i < students.length; i++) {
     
  if (updatedStudent) {
      res.send(`Successfully updated data for student with ID ${id}. New year: ${updatedStudent.year}`);
  } else {
      res.status(404).send(`Student with ID ${id} not found.`);
  }
}
});


let updatedStudent = null;
let averageGrade = [];
let total = 0;
let length = 0

console.log(students[0].grades);

for (let i = 0; i < students.length; i++) {
    if(id==students[i].id){
        students[i]=updatedData
    }
    // let grades = [];
    // for (let a = 0; a < students[i].grades.length; a++) {
    //     grades.push(students[i].grades[a])
    //     //total = students[i].grades[a] + total;
    //     //console.log("147", students[i].grades.length);
    // }
    // total = grades[i]+total
    // console.log("163",total)
    // length = students[i].grades.length
}
// let gradeAvg = total / length;
// console.log("167",gradeAvg);

// for (let i = 0; i < students.length; i++) {
//     if (id == students[i].id) {
//         students[i].year = updatedData.year;
//         updatedStudent = students[i];
//         break;
//     }
// }



