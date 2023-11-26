import { Component, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
   value: any;
   value1: any;
   value2: any;

  values: any;
  constructor(private _httpService: HttpClient) {
      
   }

   calServiceOne(){
   let Primex: HTMLInputElement = document.getElementById('textbox') as HTMLInputElement;
   let Primey: HTMLInputElement = document.getElementById('textbox-icon') as HTMLInputElement;
   console.log(Primex.value);
   console.log(Primey.value);
   let urltemp="http://localhost:55007/API/PrimeNumber?x="+Primex.value+"&y="+Primey.value;
    return this._httpService.get<any>(urltemp).subscribe(response => {
      console.log(response)
      this.value = response;
     });


   }

   calServiceTwo(){
    let Fibx: HTMLInputElement = document.getElementById('textbox1') as HTMLInputElement;
    let Fiby: HTMLInputElement = document.getElementById('textbox-icon1') as HTMLInputElement;
    console.log(Fibx.value);
    console.log(Fiby.value);
    let urltemp1="http://localhost:55007/API/Fibonacchi?x="+Fibx.value+"&y="+Fiby.value;
    return this._httpService.get<any>(urltemp1).subscribe(response => {
      console.log(response)
      this.value1 = response;
     });


   }

   calServiceThree(){
    let Ranx: HTMLInputElement = document.getElementById('textbox2') as HTMLInputElement;
    let Rany: HTMLInputElement = document.getElementById('textbox-icon2') as HTMLInputElement;
    console.log(Ranx.value);
    console.log(Rany.value);
    let urltemp2="http://localhost:55007/API/RandonNumber?x="+Ranx.value+"&y="+Rany.value;
    return this._httpService.get<any>(urltemp2).subscribe(response => {
      console.log(response)
      this.value2 = response;
     });


   }


}
