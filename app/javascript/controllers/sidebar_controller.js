import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["sidebar", "expand", "shrink", "content", "fclass", "prompt"]
  connect() {
    console.log("Sidebar Controller connected")
    if(document.cookie.includes('sidebarFull=true')) {
      this.expand()
    }else {
      this.shrink()
    }
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
    this.fclassTargets.forEach(element => {
      element.classList.remove("hidden")
    })
    this.promptTargets.forEach(element => {
      element.classList.remove("group-hover:block")
    })
    document.cookie = "sidebarFull=true;"
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
    document.cookie = "sidebarFull=false;"
    this.contentTargets.forEach(element => {
      element.classList.add("hidden")
    })
    this.fclassTargets.forEach(element => {
      element.classList.add("hidden")
    })
    this.promptTargets.forEach(element => {
      element.classList.add("group-hover:flex")
    })
  }
}
