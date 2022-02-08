# Usage

```ts
import ezew from "ezew";

class Item(){
    id: number;

    construnctor(id:number){ 
        this.id = id;
    }
}

const items:Item[] = []
const items2:Item[] = []
const itemId = 0;

function addItem(id:number){
    const item = new Item(id);
    items.push(item);
    items2.push(item);
    return item;
}

function removeItem(id:number){
    items[id] = undefined;
}

(()=>{
    const a = addItem(itemId++)
    const b = addItem(itemId++)
    const c = addItem(itemId++)
})()

ezew.addEventWatcher("RemoveItem", (item:Item)=>{
    // Remove from items
    items[item.id] = undefined;

    // Remove from items2
    items2[item.id] = undefined;
})

ezew.dispatchEvenet("RemoveItem", this.items[0]);
ezew.dispatchEvenet("RemoveItem", this.items[1]);
ezew.dispatchEvenet("RemoveItem", this.items[2]);
```
