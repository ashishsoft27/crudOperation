import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { ServiceCrudService } from '../service-crud.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  logindata!: FormGroup;
  isNewUser: boolean = false;
  user!: string;
  constructor(private fb: FormBuilder, private serviceData:ServiceCrudService, private router: Router) { }

  ngOnInit() {
    this.createStructure();
  }
  createStructure() {
    this.logindata = this.fb.group({

      'emailid': [''],
      'password': ['']
    })
  }
  login() {

    const endPoint = "users?emailid=" + this.logindata.value.emailid + "&&password=" + this.logindata.value.password;
    console.log(endPoint)
    this.serviceData.getDataFromServer(endPoint).subscribe((el: any) => {
      if (el && el.length > 0) {
        console.log(el)
        this.isNewUser = true
        console.log("success")
        this.router.navigate(['/home'])
      }
      else {
        this.isNewUser = false;
        console.log("failuere")
      }
    })

    //   for(var i=0;i<el.length;i++){
    //     console.log(this.logindata.value.emailid)
    //     console.log(this.logindata.value.password)
    //     if(el[i].email==this.logindata.value.emailid && el[i].pass==this.logindata.value.password)
    //     {
    //       this.isNewUser=true;
    //       this.user=el[i].name;
    //       break;
    //     }
    //     else{
    //       this.isNewUser=false;
    //     }
    //   }

    // if(this.isNewUser==true){
    //   this.router.navigate(['/home'])
    // }
  }
}
