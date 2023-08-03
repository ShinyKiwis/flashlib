import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["sidebar", "expand", "shrink", "content"]
  connect() {
    console.log("Sidebar Controller connected")
  }

  handleMediumExpand() {
    this.sidebarTarget.classList.remove("md:w-28")
    this.sidebarTarget.classList.add("md:w-72")
    this.expandTarget.classList.add("hidden")
    this.shrinkTarget.classList.remove("hidden")
    this.shrinkTarget.classList.add("flex")
  }

  handleSmallExpand() {
    this.sidebarTarget.classList.remove("w-24")
    this.sidebarTarget.classList.add("w-72")
  }

  expand() {
    this.handleMediumExpand()
    this.handleSmallExpand()
    this.contentTargets.forEach(element => {
      element.classList.remove("hidden")
    })
  }

  handleMediumShrink() {
    this.sidebarTarget.classList.remove("md:w-72")
    this.sidebarTarget.classList.add("md:w-28")
    this.expandTarget.classList.remove("hidden")
    this.shrinkTarget.classList.add("hidden")
  }

  handleSmallShrink() {
    this.sidebarTarget.classList.remove("w-72")
    this.sidebarTarget.classList.add("w-24")
  }

  shrink() {
    this.handleMediumShrink()
    this.handleSmallShrink()
    this.contentTargets.forEach(element => {
      element.classList.add("hidden")
    })
  }
}
