let t1:[number,string,boolean]=[10,"John",true];
console.log(t1);

let add:[x:number,y:string]=[10,"Durvesh"];
console.log(add);

let product:any=[101,"Speaker",2000];
console.log("Product :"+product[0]);

product.push(101,"Shoes",900);
console.log(product);

product.unshift(100,"Bag",500);
console.log(product);

product.pop(100);
console.log(product);