import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-student-reg-reactive-form',
  templateUrl: './student-reg-reactive-form.component.html',
  styleUrls: ['./student-reg-reactive-form.component.css']
})
export class StudentRegReactiveFormComponent implements OnInit,AfterViewInit {

  studentForm:FormGroup = new FormGroup({
    firstName: new FormControl('',[Validators.required, Validators.minLength(2)]),
    middleName:new FormControl('',[Validators.required, Validators.minLength(2)]),
    lastName:new FormControl('',[Validators.required, Validators.minLength(2)]),
    fullName:new FormControl(''),
    dob:new FormControl('',[Validators.required, Validators.minLength(2)]),
    age:new FormControl('',[Validators.required, Validators.minLength(2)]),
    licenceNo:new FormControl(''),
    country:new FormControl('',[Validators.required, Validators.minLength(2)]),
    state:new FormControl(''),
    identityType:new FormControl(''),
    cardNo:new FormControl(''),
  })

  ngOnInit(): void {
      this.studentForm.controls['firstName'].valueChanges.subscribe((_res: any)=>{
        // debugger;
        this.createFullName();
      })
      this.studentForm.controls['middleName'].valueChanges.subscribe((_res: any)=>{
        // debugger;
        this.createFullName();
      })
      this.studentForm.controls['lastName'].valueChanges.subscribe((_res: any)=>{
        // debugger;
        this.createFullName();
      })
  }

  ngAfterViewInit(): void {
      this.studentForm.controls['dob'].valueChanges.subscribe((res: string | number | Date)=>{
        // debugger;
        const selectDob=new Date(res);
        const dobYear= selectDob.getFullYear();
        const currentYear =new Date().getFullYear();
        // this.studentForm.age= currentYear-dobYear;
        const age=currentYear-dobYear;
        this.studentForm.controls['age'].setValue(age);
        if(age>18){
          this.studentForm.controls['licenceNo'].setValidators(Validators.required);
        }else{
          this.studentForm.controls['licenceNo'].removeValidators(Validators.required);
        }
      })

      this.studentForm.controls['country'].valueChanges.subscribe((res: string)=>{
        if(res==='India'){
          this.studentForm.controls['state'].setValidators(Validators.required);
        }else{
          this.studentForm.controls['state'].removeValidators(Validators.required);
        }
      })

      this.studentForm.controls['identityType'].valueChanges.subscribe((res: string)=>{
        if(res==='Aadhar Card'){
          this.studentForm.controls['cardNo'].setValidators(Validators.pattern('^[2-9]{1}[0-9]{3}\\s[0-9]{4}\\s[0-9]{4}$'));
        }else{
          this.studentForm.controls['cardNo'].setValidators(Validators.pattern('^[A-Za-z]{5}[0-9]{4}[A-Za-z]$')); 
        }
      })
  }
      
      //   createFullName() {
      //     const firstName = this.studentForm.controls['firstName'].value;
      //     const middleName = this.studentForm.controls['middleName'].value;
      //     const lastName = this.studentForm.controls['lastName'].value;
          
      //     console.log("First Name:", firstName);
      //     console.log("Middle Name:", middleName);
      //     console.log("Last Name:", lastName);
          
      //     const fullName = firstName + ' ' + middleName + ' ' + lastName;
      //     console.log("Full Name:", fullName);
          
      //     this.studentForm.get('fullName')?.setValue(fullName);
      // }

  createFullName() {
    const firstName = this.studentForm.controls['firstName'].value;
    const middleName = this.studentForm.controls['middleName'].value;
    const lastName = this.studentForm.controls['lastName'].value;
    
    // Ensure middle name is only added if it's not empty
    let fullName = firstName;
    if (middleName) {
      fullName += ' ' + middleName;
    }
    fullName += ' ' + lastName;
    
    this.studentForm.controls['fullName'].setValue(fullName);
  }
  // ye dekh ye first middle or last name likhe to full aye but last name hi arha h 
  
onSubmit(): void{
  console.log(this.studentForm.value); 
  this.studentForm.reset();

}
}


