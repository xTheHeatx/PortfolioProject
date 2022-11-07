import ScrollToDesigns from "./ScrollToDesigns.js";
import ScrollToAbout from "./ScrollToAbout.js"
import ScrollToTop from './ScrollToTop.js'

const scrollPosition = window.scrollY

console.log(scrollPosition)

if (scrollPosition !== 0) {

    window.scrollTo({ top: 0, behavior: 'smooth' })
}

ScrollToDesigns()

ScrollToAbout()

ScrollToTop()


