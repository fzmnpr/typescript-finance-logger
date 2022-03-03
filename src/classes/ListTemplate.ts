import {HasFormatter} from "../Interfaces/HasFormatter.js";
export class ListTemplate{
    constructor(public container : HTMLUListElement){};
    render(item : HasFormatter, heading : string , pos: 'start' | 'end'){
        const li = document.createElement('li');
        const div = document.createElement('div');
        const h4 = document.createElement('h4');
        const p = document.createElement('p');
        const deleteSpan = document.createElement('span');
        let id = Math.floor(Math.random() * 100);
        h4.innerText = heading;
        li.append(div);
        li.append(deleteSpan);
        li.setAttribute('id', `item-${id}`);
        deleteSpan.classList.add('delete');
        deleteSpan.setAttribute('id', `item-${id}`);
        div.append(h4);
        p.innerText = item.format();
        div.append(p);
        if(pos === 'start'){
            this.container.prepend(li);
        }else{
            this.container.append(li);
        }
    }
}

