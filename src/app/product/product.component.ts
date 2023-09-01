import { Component } from '@angular/core';
import { ServiceCrudService } from '../service-crud.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  prodList:any;

  constructor(private serviceData:ServiceCrudService ){}

  
}
