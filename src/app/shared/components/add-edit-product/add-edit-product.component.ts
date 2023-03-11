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
  base64:any=''


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
      image:[null],

    })


    if(this.dialogData.action==='Edit'){

      // if we opened the edit form  we get the image if the product directly in th base64

      this.base64=this.dialogData.data.images[0]

      // on opening the edit form we set the header of the form to edit 
      // and we set the submit button to update
      this.action="Update"
      this.dialogAction='Edit'
      this.productForm.patchValue(this.dialogData.data)

    } 
  
  }



  //submiting form
  submit(){
    if(this.dialogAction==="Edit"){

      this.Edit()

     
    }else{
      this.Add()
    }

  }


// adding product
  Add(){
    var formData=this.productForm.value


// data that will be submitted to the addAPI
    var data={
      
      title:formData.title,
      description:formData.description,
      price:formData.price,
      category:formData.category,
      rating:formData.rating,
      brand:formData.brand,
      discountPercentage:formData.discountPercentage,
      stock:formData.stock,
      // image as base 64 is a very big response entity so we will set it as small string
      images:"image"

    }

    this.productService.createProduct(data).subscribe(res=>{
      setTimeout(() => {
        alert('added successfully')

        
      }, 2000);

      this.dialogref.close()

    })


  }




// editing product
  Edit(){

    var formData=this.productForm.value


    // data that will be submitted to the editAPI

    var data={
      title:formData.title,
      description:formData.description,
      price:formData.price,
      category:formData.category,
      rating:formData.rating,
      brand:formData.brand,
      discountPercentage:formData.discountPercentage,
      stock:formData.stock,
      images:"image"

    }

    this.productService.updateProduct(data,this.dialogData.data.id).subscribe(res=>{

      // success response

      setTimeout(() => {
        alert('updated successfully')

        
      }, 2000);
      
      this.dialogref.close()
    })



  }


// get image from the pc
  getImagePath(event:any){
    const file=event.target.files[0]
    const reader=new FileReader()
    reader.readAsDataURL(file)
    reader.onload=()=>{
      this.base64=reader.result
      this.productForm.get('image').setValue(this.base64)
    }


  }


}
