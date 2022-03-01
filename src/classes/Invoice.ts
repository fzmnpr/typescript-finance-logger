import {HasFormatter} from '../Interfaces/HasFormatter.js';

//this class is going to follow the structure of the interface HasFormatter
export class Invoice implements HasFormatter {
    constructor(
    readonly client : string
     , private details : string 
     , public amount : number
     ){}
    format(){
        return `${this.client} ows ${this.amount} for ${this.details}`
    }
}