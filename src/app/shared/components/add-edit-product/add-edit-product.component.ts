import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ProductService } from 'src/app/features/services/product.service';


@Component({
  selector: 'app-add-edit-product',
  templateUrl: './add-edit-product.component.html',
  styleUrls: ['./add-edit-product.component.scss']
})
export class AddEditProductComponent implements OnInit {


  productForm:any=FormGroup
  action:string='Add'
  dialogAction:string=''
  imagePath:any=''


  constructor(private fb:FormBuilder,@Inject(MAT_DIALOG_DATA) public dialogData:any,
  private dialogref:MatDialogRef<AddEditProductComponent>,private productService:ProductService){}

  ngOnInit(): void {

    this.productForm=this.fb.group({
      title:[null,[Validators.required]],
      price:[null,[Validators.required]],
      rating:[null,[Validators.required]],
      stock:[null,[Validators.required]],
      brand:[null,[Validators.required]],
      category:[null,[Validators.required]],
      discountPercentage:[null,[Validators.required]],
      description:[null,[Validators.required]],
      image:[null,[]],

    })


    if(this.dialogData.action==='Edit'){
      this.action="Update"
      this.dialogAction='Edit'
      this.imagePath=this.dialogData.data.images[0]
      this.productForm.patchValue(this.dialogData.data)

    } 
  
  }


  submit(){
    if(this.dialogAction==="Edit"){
      this.Edit()

     
    }else{
      this.Add()
    }

  }



  Add(){
    var formData=this.productForm.value

    var data={
      
      title:formData.title,
      description:formData.description,
      price:formData.price,
      category:formData.category,
      rating:formData.rating,
      brand:formData.brand,
      discountPercentage:formData.discountPercentage,
      stock:formData.stock

    }

    this.productService.createProduct(data).subscribe(res=>{
      setTimeout(() => {
        alert('added successfully')

        
      }, 2000);

      this.dialogref.close()

    })




  }

  Edit(){

    var formData=this.productForm.value

    var data={
      title:formData.title,
      description:formData.description,
      price:formData.price,
      category:formData.category,
      rating:formData.rating,
      brand:formData.brand,
      discountPercentage:formData.discountPercentage,
      stock:formData.stock,

    }

    this.productService.updateProduct(data,this.dialogData.data.id).subscribe(res=>{

      setTimeout(() => {
        alert('updated successfully')

        
      }, 2000);
      
      this.dialogref.close()
    })



  }


}
