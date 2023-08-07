import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["modal", "overlay", "option", 'optionoverlay']
  static values = {
    id: String
  }

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

  show_option(event) {
    const optionID = event.target.getAttribute("data-deck-id-value")
    this.optionTargets.forEach(option => {
      if(option.getAttribute("data-deck-id-value") == optionID){
        option.classList.remove("hidden")
      }
    })
    this.optionoverlayTarget.classList.remove("hidden")
  }

  hide_option(event) {
    const optionID = event.target.closest("div").getAttribute("data-deck-id-value")
    console.log(optionID)
    this.optionTargets.forEach(option => {
      if(option.getAttribute("data-deck-id-value") == optionID){
        option.classList.add("hidden")
      }
    })
    this.optionoverlayTarget.classList.add("hidden")
  }
}
