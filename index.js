

// Write your solution in this file!
const employee = { name: "Sam" , streetAddress: "11street" }
function updateEmployeeWithKeyAndValue(employee, key, value) {
    const newEmployee = { ...employee };
    newEmployee[key] = value;
    return newEmployee;
  }
  const updatedEmployee = updateEmployeeWithKeyAndValue(employee, "name", "Malak");
updatedEmployee.name;

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
employee[key]= value
return employee
}
const desUpdatedEmployee = destructivelyUpdateEmployeeWithKeyAndValue (employee, "streetAddress", "12street")
desUpdatedEmployee.streetAddress

function deleteFromEmployeeByKey(employee, key){
    const anotherNewEmployee = {...employee}
    delete anotherNewEmployee[key]
    return anotherNewEmployee
}
const delUpEmp = deleteFromEmployeeByKey(employee, "streetAddress")
delete delUpEmp.streetAddress

function destructivelyDeleteFromEmployeeByKey(employee, key){
delete employee[key]
return employee
}
const desDel = destructivelyDeleteFromEmployeeByKey(employee, "name")
