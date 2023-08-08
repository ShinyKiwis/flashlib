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

    // Initial question on edit
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
      child.getElementsByTagName("textarea")[0].id = childID + "-" + this.counter
      child.getElementsByTagName("textarea")[0].name = childID + "-" + this.counter
    })
    this.counter += 1
    this.formTarget.appendChild(cloneModal)
  }

  OnInput() {
    this.style.height = 0;
    this.style.height = (this.scrollHeight) + "px";
  }
}
