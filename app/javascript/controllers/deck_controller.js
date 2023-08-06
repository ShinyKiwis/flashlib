import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["modal", "overlay", "option"]

  connect() {
  }
  show() {
    this.modalTarget.classList.remove("hidden")
    this.overlayTarget.classList.remove("hidden")
  }

  hide() {
    this.modalTarget.classList.add("hidden")
    this.overlayTarget.classList.add("hidden")
  }

  show_option() {
    this.optionTarget.classList.remove("hidden")
    this.overlayTarget.classList.remove("hidden")
  }

  hide_option() {
    this.optionTarget.classList.add("hidden")
    this.overlayTarget.classList.add("hidden")
  }
}
