import { Product } from "../product/product.model";
import { Injectable } from "@angular/core";
import { AngularFirestore } from "@angular/fire/firestore";

@Injectable({
  providedIn: 'root'
})
export class ProductsRepository {

  products = [
    new Product("Samsung Galaxy s8", 10, "Smartphone for everyone.", 3000, "https://www.jbhifi.com.au/FileLibrary/ProductResources/Images/210671-L-LO.jpg"),
    new Product("iPhone X", 15, "Ugly phone bleh.", 4000, "https://switch.com.my/wp-content/uploads/2017/11/iphonex_spacegray-600x600.png"),
    new Product("LG g7", 0, "Anyone still buying this one?", 2000, "https://image.coolblue.be/422x390/products/1030988"),
    new Product("Xiaomi Pocophone F1", 10, "Graphite Black is one of a kind.", 3000, "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,xiaomi-pocophone-f1-664-gb-graphite-black-446183,2018/8/pr_2018_8_25_10_8_43_401_00.jpg"),
    new Product("Nokia 6.1", 15, "Microsoft child.", 1300, "https://www.91-img.com/pictures/123551-v7-nokia-6-2018-mobile-phone-large-1.jpg"),
    new Product("HTC U Ultra 4", 7, "This is description.", 1900, "https://a.allegroimg.com/original/0cfcc4/bc548ec3445ba1a71cf99339cc5a"),
    new Product("Huawei Y7 Prime", 17, "So it is cheap, but is it good?.", 800, "https://image.ceneostatic.pl/data/products/64920815/i-huawei-y7-prime-2018-dual-sim-niebieski.jpg"),
    new Product("Sony Xperia XZ2", 11, "Rotation?", 2400, "https://image.ceneostatic.pl/data/products/68646553/i-sony-xperia-xz2-premium-czarny.jpg"),
    new Product("Samsung Galaxy s8", 10, "Smartphone for everyone.", 3000, "https://www.jbhifi.com.au/FileLibrary/ProductResources/Images/210671-L-LO.jpg")
  ]

  constructor(private db: AngularFirestore) { }

  getProducts() {
    return this.db.collection<Product>('/products').valueChanges();
  }

  // getProductByName(name: String) {
    // var products = this.db.collection('/products', ref => ref.where("name", '==', name).limit(1)).get().subscribe()
    // 
  // }

  addProduct(product: Product) {
    this.db.collection<Product>('/products').add(product);
  }

  // updateProduct(product: Product) {
    // var productsTemp = this.db.co
    // 
    // productsTemp.filter(it => it.name == product.name)
  // }

  removeProduct(productName: string) {
    this.products = this.products.filter(it => it.name != productName);
  }
}