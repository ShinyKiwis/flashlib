import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ['question', 'answer', 'state', 'current']
  connect() {
    this.currentQuestion = 0
    this.size = +this.data.get('size')
    console.log(this.size)
    this.questionTarget.classList.remove("hidden")
  }

  reveal() {
    this.stateTarget.textContent = 'A'
    this.questionTargets[this.currentQuestion].classList.add("hidden")
    this.answerTargets[this.currentQuestion].classList.remove("hidden")
  }

  next() {
    this.questionTargets[this.currentQuestion].classList.add("hidden")
    this.answerTargets[this.currentQuestion].classList.add("hidden")
    this.currentTarget.textContent = Math.min(this.size, +this.currentTarget.textContent + 1)
    this.currentQuestion = Math.min(this.size-1, this.currentQuestion+1)
    this.questionTargets[this.currentQuestion].classList.remove("hidden")
    this.stateTarget.textContent = 'Q'
  }

  previous() {
    this.questionTargets[this.currentQuestion].classList.add("hidden")
    this.answerTargets[this.currentQuestion].classList.add("hidden")
    this.currentQuestion = Math.max(0, this.currentQuestion-1)
    this.questionTargets[this.currentQuestion].classList.remove("hidden")
    this.stateTarget.textContent = 'Q'
    this.currentTarget.textContent = Math.max(1,+this.currentTarget.textContent - 1)
  }
}
