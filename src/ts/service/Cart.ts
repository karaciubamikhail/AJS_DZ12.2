import Buyable from '../domain/Buyable';

export default class Cart {
    private _items: Buyable[] = [];

    add(item: Buyable): void {
        this._items.push(item);
    }

    get items(): Buyable[] {
        return [...this._items]; 
    }

    purchaseАmount(): number {
        let initial = 0;
        let amount = this._items.reduce((acc, currentValue) => {
            return acc + currentValue.price
        },initial)
        return amount
    }

    purchaseDiscount(discount: number): number {
        let initial = 0;
        let amount = this._items.reduce((acc, currentValue) => {
            return acc + currentValue.price
        },initial)
        return amount * (1 - discount / 100)
    }

    deleteItem(id : number){
        let deleteable = this._items.findIndex(item => item.id == id);
        this._items.splice(deleteable,1);
    }
}