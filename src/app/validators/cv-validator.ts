import { FormControl , ValidatorFn, ValidationErrors  } from "@angular/forms";
const type : String[] = ['pdf'] ; 


export  const  requiredFileType =   ( file: File) : any   => {
    return  (control: FormControl)  : null | ValidationErrors => {

      if ( file ) {
        const extension = file.name.split('.')[1].toLowerCase();
        if (  ! type.includes(extension.toLowerCase()) ) {
          return {
            requiredFileType: true
          };
        }
        
        return null;
      }
  
      return null; 
    };
  }