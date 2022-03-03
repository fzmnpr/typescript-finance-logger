import { Invoice } from "./classes/Invoice";
import { ListTemplate } from "./classes/ListTemplate";
import { Payment } from "./classes/Payment";
import { RemoveItem } from "./classes/RemoveItem";
import { HasFormatter } from "./Interfaces/HasFormatter";

const form = document.querySelector("form") as HTMLFormElement;
const type = document.querySelector("#type") as HTMLSelectElement;
const toFrom = document.querySelector("#toFrom") as HTMLInputElement;
const details = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;
const alert = document.querySelector(".alert") as HTMLDivElement;

//list template instance:(! say to the compiler that the ul is going to be found in the document and it's not null)
const ul = document.querySelector("ul")!;
const list = new ListTemplate(ul);

form.addEventListener("submit", (e: Event) => {
  e.preventDefault();
  //using tuples:
  let values:[string , string , number];
  values=[toFrom.value, details.value, amount.valueAsNumber]
  let doc : HasFormatter;
  if(toFrom.value && details.value && amount.valueAsNumber){
    switch (type.value) {
      case "invoice":
        doc = new Invoice(...values);
        break;
      case "payment":
        doc = new Payment(...values);
        break;
      default:
          return
    }
    list.render(doc, type.value, "end");
  }else{
    alert.classList.remove("d-none");
    setTimeout(() => {
      alert.classList.add("d-none");
    }, 3000);
  }
  const removeItem = new RemoveItem();
  removeItem.remove();
});