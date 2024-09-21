//const Manager = require('./manager');

class Employee{
    constructor(name, salary, title, manager){
        this.name = name;
        this.salary = salary;
        this.title = title;
        this.manager = manager || null;
        this.addToManager();
    }

    addToManager(){
        if(this.manager !== null){
            const newManger = this.manager;
            newManger.addEmployee(this);
        }
    }

    calculateBonus(multiplier){
        let bonus;
        if(this.employees === undefined){
            bonus = this.salary * multiplier;
            return bonus;
        }else{
            bonus = this._totalSubSalary(this.employees) * multiplier;
            return bonus ;
        }
    }


    _totalSubSalary(arr) {
        let sum = this.salary;
    
        for (const element of arr) {
            if (element.employees !== undefined) {
                sum += this._totalSubSalary(element.employees); 
            } else {
                sum += element.salary; 
            }
        }
    
        return sum;
    }
}


module.exports = Employee;
