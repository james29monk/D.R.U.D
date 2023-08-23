const express = require('express')
const app = express()
const winston = require('winston');
const port = 3000;
app.use(express.json());



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

//
// If we're not in production then log to the `console` with the format:
// `${info.level}: ${info.message} JSON.stringify({ ...rest }) `
//
if (process.env.NODE_ENV !== 'production') {
  logger.add(new winston.transports.Console({
    format: winston.format.simple(),
  }));
}


app.all('*', (req, res, next) => {
    logger.log({
      level: 'info',
      method: req.method,
      url: req.url,
      body: req.body,
      params: req.params,
      timestamp: new Date().toLocaleString()
    });
    next()
  })




 
 


const findAverage = (grades) =>{
    let sum = 0
    for(i = 0; i < grades.length; i++){
       sum = sum + grades[i]
    }
    gradeAverage = sum / grades.length
    return gradeAverage
}


let students = [
   {firstName: 'JD', lastName: 'Monk', year:'freshman', grades : [82,98,100], average: null, letterGrade: null},
   {firstName: 'Deron', lastName: 'Fambro', year:'sophmore',grades : [80,80,70], average: null, letterGrade: null},
   {firstName: 'Jordan', lastName:'Williams' , year: 'junior',grades : [80,100,100], average: null, letterGrade: null},
   {firstName: 'John', lastName: 'Nguyen',year:'senior',grades : [90,100,100], average: null, letterGrade: null}
]

for(i = 0; i < students.length; i++){
  students[i].id = i + 1

}


 




// for (let i = 0; i < students.length; i++) {
//     students[i].id = generateRandomNineDigitId();
// }




// function generateRandomNineDigitId() {
//     const min = 100000000; 
//     const max = 999999999; 
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// }

//Create a CRUD API that manages students. 
//Each student should have a first name, last name, grade(numeric 0-100), class (freshman, sophmore, etc), and id (9 digit number auto generated).
// For each endpoint, ensure that incorrect input is caught and return the appropriate error message. 
//For example, if you expect a number and received a string this should output the appropriate status code.

findAverageandLetter = () => {   
    for(let k = 0; k < students.length; k++){
        let returnedAverage = findAverage(students[k].grades)
        students[k].average = returnedAverage
        let returnedLetterGrade = assignLetter(returnedAverage)
        students[k].letterGrade = returnedLetterGrade
        console.log(students[k])
    }      
}

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
  
app.get('/main', function (req, res) {
  res.send(students)
    indAverageandLetter()
})

app.post('/update', (req, res) => {
  //keys = ['firstName', 'lastName','year','grades', 'average', letterGrade']
  // const invalidKeys=keys.filter(keys=>!keys.include(keys))
  // if (invalidKeys.length>0){logger.error('Invalid Key', invalidKeys)
  // return res.status(400).json({ error: 'Unauthorized keys in request.' });


  
  const newStudent = {
    "firstName": req.body.firstName, "lastName": req.body.lastName,
    "grades": req.body.grades, "letterGrade": req.body.letterGrade,
    "year":req.body.year , "id": req.body.id }

    students.push(newStudent)
    console.log("141",newStudent)
    findAverageandLetter()

    if(newStudent == newStudent){

        res.send(`Added info 
        ${newStudent.firstName} 
        ${newStudent.lastName} 
        ${newStudent.year} 
        ${newStudent.letterGrade}
        ${newStudent.grades}
        ${newStudent.id}`);
        
    }
    
    else(newStudent !== newStudent)
        logger.error({
            level: 'error',
            method: req.method,
            url: req.url,
            body: req.body,
            params: req.params,
            timestamp: new Date().toLocaleString()
        })

    
        
    }
    

    

  )




app.delete('/delete/:id', (req, res) => {
  const idToDelete = req.params.id;
  let deletedStudent = null;
  
  for (let i = 0; i < students.length; i++) {
    if (students[i].id == idToDelete) {
      deletedStudent = students.splice(i, 1)[0];
      break; 
    }
  }
  
  if (deletedStudent) {
    res.send(`Successfully deleted student with ID ${idToDelete}`);
  } else { 
    logger.error({
        level: 'error',
        method: req.method,
        url: req.url,
        body: req.body,
        params: req.params,
        timestamp: new Date().toLocaleString()
      });
    res.status(404).send(`Student with ID ${idToDelete} not found.`);
  }
  findAverageandLetter()
});






app.put('/:id', (req, res) => {
  
    let id = req.params.id;
    let updatedGrade = req.body.grades;
    students[id].grades.push(updatedGrade)
    let studentArr = false
  
   
   for(i=0; i < students.length; i++){
   
    if(id == students[i].id){
      studentArr = true
      students.grade = updatedGrade
    }
  }
  
  if(studentArr == false){
    logger.error({
        level: 'error',
        method: req.method,
        url: req.url,
        body: req.body,
        params: req.params,
        timestamp: new Date().toLocaleString(),
        message: `Cannot update stats. No student was found with the id `
      });
  }
  findAverageandLetter()
  res.send(`Here is the updated data ${updatedGrade}`)
  
  })



app.listen(port, ()=>{
    console.log('The server is running!')
} )


logger.info('This is an informational message.');
logger.warn('This is a warning message.');
logger.error('This is an error message.');




