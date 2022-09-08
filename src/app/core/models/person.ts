export class Person {
  id?: number;
  firstName: string;
  lastName: string;
  userName: string;
  city: string;
  department: string;

  constructor(id: number = null, firstName: string = '',lastName: string = '',userName: string = '',city: string = '', department: string = '') {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.userName = userName;
    this.city = city;
    this.department = department;
  }
}

