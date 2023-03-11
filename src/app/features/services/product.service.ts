import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ApiPaths } from 'src/app/enumAPIs';
import { environment } from 'src/app/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  URL=environment.baseUrl


  constructor(private http:HttpClient) { }

  getProducts(){

    // there is enum for api paths
    let url=`${this.URL}/${ApiPaths.getProducts}`
    return this.http.get(url)
  }
 

  getProductById(id:any){
    let url=`${this.URL}/${ApiPaths.getProducts}/${id}`
    return this.http.get(url)


  }

  createProduct(data:any){
    let url=`${this.URL}/${ApiPaths.getProducts}/add`
    return this.http.post(url,data)


  }

  updateProduct(data:any,id:any){
    let url=`${this.URL}/${ApiPaths.getProducts}/${id}`

    return this.http.put(url,data);


  }

  deleteProduct(id:any){
    let url=`${this.URL}/${ApiPaths.getProducts}/${id}`

    return this.http.delete(url);


  }

  paginateProducts(){
    let url=`${this.URL}/${ApiPaths.paginate}`
    return this.http.get(url)


  }
  
}
