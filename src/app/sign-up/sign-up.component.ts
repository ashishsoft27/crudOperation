import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ServiceCrudService } from '../service-crud.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  formData!: FormGroup;
  constructor(private fb: FormBuilder, private httpData: ServiceCrudService) { }

  ngOnInit() {
    this.createStructure();
  }
  createStructure() {
    this.formData = this.fb.group({
      'name': ['', []],
      'mobno': ['', []],
      'email': ['', []],
      'pass': ['', []]
    })
  }
  signup() {
    console.log(this.formData.value)
    this.httpData.postDataToServer('users', this.formData.value).subscribe(
      (response: any) => {
        console.log(response)
      },
      (error) => {

      }

    )
  }
}
