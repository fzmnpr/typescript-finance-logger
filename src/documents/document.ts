
import { Invoice } from "../classes/Invoice";
import { Payment } from "../classes/Payment";
import { HasFormatter } from "../Interfaces/HasFormatter";

//interface :
interface IsPerson {
    name: string;
    age: number;
    speak(a: string): void;
    spend(a: number): number;
  }
  const me: IsPerson = {
    name: "mario",
    age: 30,
    speak(text: string): void {
      console.log(text);
    },
    spend(amount: number): number {
      console.log("I spent " + amount);
      return amount;
    },
  };
  console.log(me)
  //we can use the structure of the interface to create a variable:
  let someone: IsPerson;
  //we an use IsPerson as a parameter type in a function:
  const greetPerson = (person: IsPerson)=>{
    console.log("hello " + person.name);
  }
  greetPerson(me);
  //------------------------------------------------------------------
  const inOne = new Invoice("mario", "website", 250);
  const inTow = new Invoice("luigi", "website", 5500);
  let invoices: Invoice[] = [];
  invoices.push(inOne);
  invoices.push(inTow);
  //to have a more secure code we use the copy of the interface:
  let docOne : HasFormatter;
  let docTow : HasFormatter;
  
  //because docOne and docTow are using the interface HasFormatter and invoices and payments using the interface HasFormatter, we can use them in the same way:
  docOne = new Invoice("yoshi", "web work", 250);
  docTow = new Payment("mario", "web work", 250);
  
  
  //only objects that implement the interface HasFormatter can be added to the array:
  let docs : HasFormatter[] = [];
  docs.push(docOne);
  docs.push(docTow);
//------------------------------------------------------------------
//Generics:
//we can use generics to create a function that can capture any of properties in the fuction
const addUld = <T extends object>(obj : T) => {
    let uid = Math.floor(Math.random() * 100);
    return {...obj, uid};
  }
  //now if want to access adUild.name we can use the following:
  let doc3 = addUld({name: "yoshi", age: 30});
  console.log(doc3.age);
  
  //with interface:
  interface Resources<T>{
    uid: number;
    resourceName: string;
    //data has a flexible and generic type
    data : T;
  }
  const doc5: Resources<string[]> = {
    uid: 1,
    resourceName: 'fatemeh',
    //we have to pass string array to the data property
    data : ['fatemeh', 'yoshi', 'mario'],
  }
  const doc6: Resources<object> = {
    uid: 1,
    resourceName: 'fatemeh',
    //we have to pass object to the data property
    data : {name: 'fatemeh'},
  }
  //------------------------------------------------------------------
  //ENUMS:
  enum ResourceType {BOOK , AUTHOR , FILM, DIRECTOR, PERSON, COMPANY};
  interface Resources1<T>{
    uid: number;
    resourceType: ResourceType;
    data : T;
  }
  const doc8: Resources1<object> = {
    uid: 1,
    //HERE THE ResourceType REPRESENTS THE INDEX OF FILM:
    resourceType: ResourceType.FILM,
    data : {name: 'fatemeh'},
  }
  //CONSOLE LOG WOULD BE LIKE THIS: {
  //  uid: 1,
  //  resourceType: 2,
  //  data: {name: 'fatemeh'}
  //}
  //------------------------------------------------------------------
  //tuples:
  let arr = ['hi' , 5 , true];
  //NOT ERROR=> arr[0] = 'false';

  let tup:[string, number, boolean] = ['hi', 5, true];
    //Error=> tup[0] = false;