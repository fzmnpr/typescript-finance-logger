import {HasFormatter} from "../Interfaces/HasFormatter.js";

/*  
    1. register a list container (ul) in the constructor
    2. create a render method to render a new li to the container
    --accepts arguments : invoiceer and amount, a heading, a position
    --create the html template(li , h4, p)
    --create a new li tempelate to the start/end of the list

*/

export class ListTemplate{
    constructor(private container : HTMLUListElement){};
    render(item : HasFormatter, heading : string , pos: 'start' | 'end'){
        const li = document.createElement('li');
        const h4 = document.createElement('h4');
        h4.innerText = heading;
        li.append(h4);
        const p = document.createElement('p');
        p.innerText = item.format();
        li.append(p);
        if(pos === 'start'){
            this.container.prepend(li);
        }else{
            this.container.append(li);
        }
    }
}

