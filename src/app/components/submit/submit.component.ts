import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-submit',
  templateUrl: './submit.component.html',
  styleUrls: ['./submit.component.css']
})
export class SubmitComponent implements OnInit {

  constructor(private formbuilder:FormBuilder,private router:Router) { }

  public loanregex = /^\$\d+(?:.(\d+))?$/;
  //public numericValidation = /^[^a-z ]\ *([.0-9])*\d/;
  //public postalCodeValidation= /\d{6}/;
  
  registerForm: FormGroup | any ;
  submitted = false;

  ngOnInit(): void {
    this.registerForm = this.formbuilder.group({
      firstName :['',[Validators.required,Validators.maxLength(255)]],
      middleName :['',[Validators.maxLength(255)]],
      lastName : ['',[Validators.required,Validators.maxLength(255)]],
      email : ['', [Validators.email, Validators.required]],
      dob : ['', [Validators.required,Validators.pattern('^(?:(?:10|12|0?[13578])/(?:3[01]|[12][0-9]|0?[1-9])/(?:1[8-9]\\d{2}|[2-9]\\d{3})|(?:11|0?[469])/(?:30|[12][0-9]|0?[1-9])/(?:1[8-9]\\d{2}|[2-9]\\d{3})|0?2/(?:2[0-8]|1[0-9]|0?[1-9])/(?:1[8-9]\\d{2}|[2-9]\\d{3})|0?2/29/[2468][048]00|0?2/29/[3579][26]00|0?2/29/[1][89][0][48]|0?2/29/[2-9][0-9][0][48]|0?2/29/1[89][2468][048]|0?2/29/[2-9][0-9][2468][048]|0?2/29/1[89][13579][26]|0?2/29/[2-9][0-9][13579][26])$')]],
      maritalStatus : ['',Validators.required],
      ssnNumber : ['',Validators.required],
      loanAmount : ['',[Validators.required,Validators.pattern(this.loanregex)]],
      loanPurpose : ['',Validators.required],
      description : [''],
      address1 : ['',[Validators.required,Validators.maxLength(255)]],
      optAddress : ['',[Validators.maxLength(255)]],
      city : ['',Validators.required,Validators.maxLength(255)],
      state : ['',[Validators.required,Validators.maxLength(255)]],
      postalCode : ['',[Validators.required,Validators.pattern("^\\d{6}$")]],
      
      homePhone:['',[Validators.required,Validators.pattern("^[0-9]{3,4}[-][0-9]{6,7}$")]],
      officePhone:['',[Validators.pattern("^\\d{10}$")]],
      mobileNumber:['',[Validators.required,Validators.pattern("^[0-9]{2}[+][ ][0-9]{10}$")]],
      
      employerName :['',[Validators.required,Validators.maxLength(255)]],
      annualSalary : ['',[Validators.required,Validators.pattern(this.loanregex)]], 
      designation : ['',[Validators.maxLength(255)]],
      password: ['',[Validators.required, Validators.minLength(6)]],
      confirmPassword:['',Validators.required],
      acceptTandC :[false,Validators.requiredTrue],
    });
  }

  get h(){
    return this.registerForm.controls;
  }

  onSubmit(){
    this.submitted = true;
    if(this.registerForm.invalid){
       return;
  }

  alert("Success Signup\n"+ JSON.stringify(this.registerForm.value));
  console.table(this.registerForm.value);
  console.log(this.registerForm);
 
  this.router.navigateByUrl('/confirm');

  }

  onReset(){
    this.submitted = false;
    this.registerForm.reset();
    
  }

}
