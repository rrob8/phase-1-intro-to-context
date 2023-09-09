// Your code here

function createEmployeeRecord (array) {
    
const testEmployee = {}
    
testEmployee.firstName = array[0]
testEmployee.familyName = array[1]
testEmployee.title = array[2]
testEmployee.payPerHour = array[3]
testEmployee.timeInEvents = []
testEmployee.timeOutEvents = []

//    const firstName = document.createElement('p')
    
//     const body = document.querySelector('body')
//     body.append(firstName)
//     firstName.textContent = array[0]
// 
console.log(`results of createEmployeeRecord: ${testEmployee}`)
return testEmployee
}


function createEmployeeRecords (allEmployees) {
    const employeeRecords = []
 for (let i=0 ; i<allEmployees.length; i++) {
    
  const newEmployeeRecord = createEmployeeRecord(allEmployees[i])
    employeeRecords.push(newEmployeeRecord)
 }
 
 return employeeRecords
}

function createTimeInEvent (employeeRecord, time) {
    let date = time.split(" ")[0]
   let hour = time.split(" ")[1]
   hour = parseInt(hour)
    let timeIn = {
        'type':'TimeIn',
        'date':date,
        'hour': hour
}

    let newEvent = employeeRecord.timeInEvents.push(timeIn)
    
    
    return employeeRecord
}
let Byron = createEmployeeRecord(["Byron", "Poodle", "Mascot", 15])
let carl = createEmployeeRecord(["Carl", "Stanley", "Worker", 25])
let eric = createEmployeeRecord(["Eric", "Morton", "Manager", 55])


//console.log(Byron.timeInEvents[0])

function createTimeOutEvent (employeeRecord, time) {
   let date = time.split(" ")[0]
   let hour = time.split(" ")[1]
   hour = parseInt(hour)
   
    let timeOut = {
    'type':"TimeOut",
    'date': date,
    'hour': hour
   }

   employeeRecord.timeOutEvents.push(timeOut)
    return employeeRecord
}


createTimeInEvent(Byron, '2014-02-28 1400')
createTimeOutEvent(Byron, "2014-02-28 1700")

createTimeInEvent(Byron, '2014-02-29 1400')
createTimeOutEvent(Byron, "2014-02-29 1700")


createTimeInEvent(carl, '2014-02-28 1400')
createTimeOutEvent(carl, "2014-02-28 1700")

createTimeInEvent(eric, '2014-02-29 1400')
createTimeOutEvent(eric, "2014-02-29 1700")

function hoursWorkedOnDate (employeeRecord, date) {
   
    let timeIn = ''
    let timeOut = ''
    for (let day of employeeRecord.timeInEvents) {
        if (day.date === date ) {
           timeIn = day.hour
           console.log(timeIn) 
        }
    }

    for (let day of employeeRecord.timeOutEvents) {
        
        if (day.date === date ) {
           timeOut = day.hour
           console.log(timeOut) 
        }
    }

    let hoursWorked = timeOut - timeIn
    hoursWorked = hoursWorked/100
    return hoursWorked
    }

hoursWorkedOnDate(Byron, '2014-02-28')

wagesEarnedOnDate(Byron,'2014-02-28' )

function wagesEarnedOnDate (employeeRecord, date) {
   let hours = hoursWorkedOnDate(employeeRecord, date)
   let rate = employeeRecord.payPerHour
   
    let wagesEarned = rate * hours
    console.log(`wages earned:${wagesEarned}`)
    return wagesEarned
}

function allWagesFor (employeeRecord ) {
    let timesIn = []
    let timesOut =[]
    let totalPay = 0
    employeeRecord.timeInEvents.forEach((time) =>{
        console.log(time)   
        timesIn.push(time) 
    })

    
    employeeRecord.timeOutEvents.forEach((time) =>{
        timesOut.push(time)
    })
    console.log(timesOut) 
     timesIn.forEach((inTime)=> {
        for (let outTime of timesOut) {
            if (outTime.date === inTime.date) {
                let pay = wagesEarnedOnDate(employeeRecord, outTime.date)
                console.log(`allWagesFor:${pay}`)
                totalPay = totalPay + pay
            }
        }
     })
     console.log(totalPay)
    return totalPay
}

allWagesFor(eric)

function calculatePayroll (arrayOfEmployees) {
    let initialValue =0
    let payroll = arrayOfEmployees.reduce((accumulator, currentValue)=> accumulator + allWagesFor(currentValue), initialValue);
    console.log(`total payroll is: ${payroll}`)
    return payroll
}
let arrayOfEmployees = [carl,eric, Byron]
calculatePayroll(arrayOfEmployees)


