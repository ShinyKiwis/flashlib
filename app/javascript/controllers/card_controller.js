import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["textarea", "form", "modal"]
  connect() {
    this.counter = 1
    console.log("Card Controller connected")
    const textareas = this.textareaTargets
    textareas.forEach(textarea => {
        textarea.setAttribute("style", "height:" + (textarea.scrollHeight) + "px;overflow-y:hidden;");
        textarea.addEventListener("input", this.OnInput, false);
    })

    // Initial question on edit - change the ids
    // const modals = this.modalTargets
    // Array.from(modals).forEach(modal => {
    //   console.log(modal)
    //   Array.from(modal.children).forEach(child => {
    //     const childID = child.getElementsByTagName("textarea")[0].id
    //     child.getElementsByTagName("textarea")[0].id = childID + "-" + this.counter
    //     child.getElementsByTagName("textarea")[0].name = childID + "-" + this.counter
    //     if(childID.includes("answer")) {
    //       this.counter+=1
    //     }
    //   })
    // })
  }

  submit() {
    this.formTarget.submit()
  }

  add() {
    const cloneModal = this.modalTarget.cloneNode(true)
    // Modify the id of the textarea
    Array.from(cloneModal.children).forEach(child => {
      const childID = child.getElementsByTagName("textarea")[0].id
      child.getElementsByTagName("textarea")[0].value = ''
      let type = childID.includes("question") ? "question" : "answer"
      child.getElementsByTagName("textarea")[0].id = type + "-" + this.counter + "-new"
      child.getElementsByTagName("textarea")[0].name = type + "-" + this.counter + "-new"
    })
    this.counter += 1
    this.formTarget.appendChild(cloneModal)
  }

  OnInput() {
    this.style.height = 0;
    this.style.height = (this.scrollHeight) + "px";
  }

  delete(event) {
    const deleteModal = event.target.closest("div").previousElementSibling
    Array.from(deleteModal.children).forEach(child => {
      const childID = child.getElementsByTagName("textarea")[0].id
      if(childID.includes("new")) {
        deleteModal.remove()
        return
      }
      child.getElementsByTagName("textarea")[0].id = childID + "-" + this.counter + "-delete"
      child.getElementsByTagName("textarea")[0].name = childID + "-" + this.counter + "-delete"
    })
    deleteModal.classList.add("hidden")
  }
}
