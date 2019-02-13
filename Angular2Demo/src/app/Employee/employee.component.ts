import {Component} from '@angular/core'

@Component({
    selector: 'my-employee',
    templateUrl: 'app/Employee/employee.component.html',
    styleUrls: ['app/Employee/employee.component.css']
})
export class EmployeeComponent {
    firstName: string = "Raghu"
    lastName: string = "Rawat"
    gender: string = "Male"
    age: number = 27

    getFullName(): string {
        return (this.firstName + " " + this.lastName )
    }
}