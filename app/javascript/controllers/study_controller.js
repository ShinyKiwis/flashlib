import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ['question', 'answer', 'state', 'current']
  connect() {
    this.currentQuestion = 0
    this.questionTarget.classList.remove("hidden")
  }

  reveal() {
    console.log("MEEP")
    console.log(this.questionTargets[this.currentQuestion])
    this.stateTarget.textContent = 'A'
    this.questionTargets[this.currentQuestion].classList.add("hidden")
    this.answerTargets[this.currentQuestion].classList.remove("hidden")
  }
}
