import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { formArrayNameProvider } from '@angular/forms/src/directives/reactive_directives/form_group_name';
import { UsernameCustomerValidations } from './usernameCustomer.validations';

@Component({
  selector: 'signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent {

  form = new FormGroup({

    // Nested form group.
    account: new FormGroup({
      // Initialize a key value for our controls.
      username: new FormControl('',[
        Validators.required,
        Validators.minLength(3),
        UsernameCustomerValidations.cannotContainSpace],
      UsernameCustomerValidations.shouldBeUnique
        ),
      password: new FormControl('',Validators.required)
    })
  });
  /*
   Property to avoid noisy lenght in our html file
   example of noisy: 
  
    form.get('property_field').validatorsAttribute as touched or invalid, valid, etc.

    to avoid this we use our property in our html file declaring our property in out ts file
    like below 
  */
  get username(){
    return this.form.get('account.username');
  }

  get password()
  {
    return this.form.get('account.password');
  }

login(){
  this.form.setErrors({
    invalidLogin:true
  });
}

}
