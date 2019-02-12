import {Component} from '@angular/core'

@Component({
    selector: 'my-employee',
    templateUrl: 'app/Employee/employee.component.html'
})
export class EmployeeComponent {
    firstName: string = "Raghu"
    lastName: string = "Rawat"
    gender: string = "Male"
    age: number = 27
}