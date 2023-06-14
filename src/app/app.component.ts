import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MyServiceService } from './my-service.service';
import { ConditionalExpr, IfStmt } from '@angular/compiler';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [MyServiceService]

})
export class AppComponent {
  title = 'frontend';
  inputData: string="";
  successMessage:any={};
  errorMessage = "";
  isLoggedIn: boolean = false;

  constructor(private http: HttpClient,private myService: MyServiceService) { }

  ngOnInit(): void {

  }

  data={};

  sendData() {
    // Make an HTTP request to send data to the backend
    this.successMessage={};
    this.errorMessage="";
    this.isLoggedIn=false;
    var arr:any=[]
    if(this.inputData.length>0){
       arr = this.inputData.split(",");
    }
    console.log(arr)

    this.myService.checkDataInDatabase(arr)
    .subscribe(
      (result:any) => {
        if(result.length>0){
          this.isLoggedIn=true;
        }
          this.successMessage = result
          console.log(this.successMessage);

      },      (error:any) => {
        this.isLoggedIn=false
        this.errorMessage = "Not Found"
      }
    );


  }
}
