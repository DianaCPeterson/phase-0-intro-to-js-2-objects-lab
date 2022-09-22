const employee = {}

employee.name = Sam;

employee.streetAddress = 100;

employee;

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
employee[key] = value; 

return employee;

}

function updateEmployeeWithKeyAndValue(employee, key, value) {
    const copyEmployee = { ...employee };
    copyEmployee[key] = value;
    return copyEmployee;

}

function deleteFromEmployeeByKey(employee, key) {
    const copyEmployee_delete = { ...employee };
    delete copyEmployee_delete[key];
    return copyEmployee_delete
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {

    delete employee[key];
    return employee;



      }

