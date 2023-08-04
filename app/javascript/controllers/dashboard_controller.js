import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["modal", "overlay"]
  connect() {
    console.log("Dashboard controller connected")
  }

  show() {
    this.modalTarget.classList.remove("hidden")
    this.overlayTarget.classList.remove("hidden")
  }

  hide() {
    this.modalTarget.classList.add("hidden")
    this.overlayTarget.classList.add("hidden")
  }
}
