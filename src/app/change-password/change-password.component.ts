import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Password } from './password.validations';
import { formArrayNameProvider } from '@angular/forms/src/directives/reactive_directives/form_group_name';


@Component({
  selector: 'change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent {

  form = new FormGroup({

    oldPassword:new FormControl('',[
      Validators.required],
    Password.validateOldPassword)

});

get oldPassword(){
return this.form.get('oldPassword');
}
}
