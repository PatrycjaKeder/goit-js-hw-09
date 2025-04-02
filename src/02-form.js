    
   const localMemory={
     "#email": localStorage.getItem(document.querySelector("input").id),
     "#msg": localStorage.getItem(document.querySelector("textarea").id)
   }
   for (const record in localMemory) {
    if (localMemory[record]===null) {
        continue
    }
    const element = document.querySelector(record)
    element.value=localMemory[record]
  }
    const form =document.querySelector(".feedback-form")
    form.addEventListener("input", (event) => {
        event.preventDefault()
        const currentObject = event.target
        localStorage.setItem(currentObject.id, currentObject.value);
    })
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const mesage = document.querySelector("#mesage");
      const emailValue = event.target.elements.email.value.trim()
      const inputValue = event.target.elements.msg.value.trim()

      if (((emailValue == "") || (inputValue == "")) & (mesage == null)) {
        form.insertAdjacentHTML("beforeend", `<p id="mesage" class="message">All form fields must be filled in!</p>`);
      }

      if ((emailValue != "") & (inputValue != "")) {
        if (mesage != null) mesage.remove();
        console.log("email:", localStorage.getItem(document.querySelector("input").id))
        console.log("input:",localStorage.getItem(document.querySelector("textarea").id))
        localStorage.removeItem(document.querySelector("input").id);
        localStorage.removeItem(document.querySelector("textarea").id);
        form.reset();
      }
    

    })