import { Product } from "../product/product.model";
import { Injectable } from "@angular/core";
import { AngularFirestore, AngularFirestoreCollection } from "@angular/fire/firestore";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class FirebaseProductsRepository {

  productCollectionRef: AngularFirestoreCollection<Product>;
  products: Observable<Product[]>;

  constructor(private db: AngularFirestore) {
    this.productCollectionRef = db.collection<Product>('/products');
    this.products = this.productCollectionRef.valueChanges();
  }

  getProducts() {
    return this.products;
  }
}