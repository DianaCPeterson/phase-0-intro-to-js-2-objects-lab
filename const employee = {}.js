const employee = {}

employee.name = Maggie;

employee.streetAddress = 100;

employee;



function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value)
employee[key] = value; 

return employee;