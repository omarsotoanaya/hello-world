import { AbstractControl, ValidationErrors } from '@angular/forms';


export class UsernameCustomerValidations
{
    static cannotContainSpace(control: AbstractControl) : ValidationErrors | null
    {
        if((control.value as string).indexOf(' ') >= 0)
        {
            return {cannotContainSpace:true};
        }
        return null;
    }

    static shouldBeUnique(control : AbstractControl) : Promise<ValidationErrors | null>
    {
        return new Promise((resolve, reason) => {
            setTimeout(()=> {
                if(control.value === 'Omar'){
                    resolve ({shouldBeUnique:true});
                }
                resolve (null);
            },2000);
        });
    }
}