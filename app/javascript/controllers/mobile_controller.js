import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["sidebar", "content"]
  connect() {
    console.log("Mobile Controller connected")
    this.isToggle = false
  }

  toggle() {
    if(this.isToggle) {
      this.sidebarTarget.classList.add("w-0")
      this.sidebarTarget.classList.remove("w-full")
      this.contentTarget.classList.add("hidden")
      this.isToggle = false
    }else {
      this.sidebarTarget.classList.add("w-full")
      this.sidebarTarget.classList.remove("w-0")
      this.contentTarget.classList.remove("hidden")
      this.contentTarget.classList.add("flex")
      this.isToggle = true
    }
  } 
}
