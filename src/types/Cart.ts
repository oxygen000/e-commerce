import { ProductType } from "./Products"

export interface CardResType{
    cartId : string,
    message : string,
    status : string,
    numOfCartItems : number,
    data:{
        totalCartPrice : number,
        products : CartItemType[]
    }

}


export interface CartItemType {
    count : number,
    price : number,
    product : ProductType
}