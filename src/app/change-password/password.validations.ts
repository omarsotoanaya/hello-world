import { AbstractControl, ValidationErrors } from '@angular/forms';
import { promise } from 'protractor';

export class Password{
    static validateOldPassword(control:AbstractControl) : Promise<ValidationErrors | null>
    {
        return new Promise((resolve,reason)=>{
            setTimeout(()=>{
                if(control.value != '123'){
                    resolve({validateOldPassword:true});
                }else{
                    resolve(null);
                }              
            },2000);
        });
    }
}
