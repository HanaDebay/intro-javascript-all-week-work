// let userName = {
//     firstName: "Hana",
//     secondName: "Debay"
// };

// const person1 = new Person() //instantiate 
// console.log(person1)// it will return an empty object  Person{} that shows it is created using Person Class


class Furniture{
    constructor(produtName,price,stock){
        this.produtName = produtName;
        this.price = price;
        this.stock =stock;
    };
    sell(){
     console.log(`Sold: ${this.stock}`);
    }

}
//inherit using the keyword extends
class  Chair extends Furniture{
      constructor(produtName,price,stock,material){
        super(produtName,price,stock);
        this.material = material;   //additional charactersitcs
    };
    
    showMaterial(){
        console.log(`${this.produtName} made of ${this.material}`)
    }

     deliveryTime(){
        console.log("Delivery is in two days")
    }
}
let officeChair = new Chair("Office Chair", 250, 10,"Leather")
let chair = new Furniture("Office Chair", 250, 10);
let table = new Furniture("Dining Table", 800,5);
chair.sell();
table.sell();
console.log(chair);
console.log(table);
