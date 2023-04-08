import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from  '@angular/forms';
import {Router} from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  error:boolean = false;
  Login: FormGroup;
  constructor(private formBuilder: FormBuilder, private router: Router) {
    this.createContactForm();
  }
  createContactForm(){
    this.Login = this.formBuilder.group({
      username: [''],  
      password: ['']
    });
  }

  onSubmit() {
    if(this.Login.value.username !='tes' && this.Login.value.password != 'tes') {
      this.router.navigate(['dashboard']);
    } else {
      this.error = true;
      setTimeout(()=>{                           // <<<---using ()=> syntax
        this.error = false;
      }, 3000);
      
    }
  }
}