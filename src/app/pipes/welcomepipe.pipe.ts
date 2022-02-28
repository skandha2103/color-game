import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'welcomepipe'
})
export class WelcomepipePipe implements PipeTransform {


  transform(name:string): string {
    if(name[0]=="s" || name[0]=="S"){
      return "Mr " + name;
    }
    else if(name){
      return "Miss "+ name;
    }
    else
      return name;
  }

}
