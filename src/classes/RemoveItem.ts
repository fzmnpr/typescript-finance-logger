
export class RemoveItem {
    constructor(){}
    remove(){
      const removeBtn = document.querySelectorAll(".delete")
      removeBtn.forEach(btn => {
        btn.addEventListener("click", (e: Event) => {
          e.preventDefault();
          const id = (e.target as Element).getAttribute("id");
          const item = document.getElementById(id!);
          if(item)item!.remove();
        });
      });
    }
  }