function ScrollToAbout() {

    const button = document.getElementById('to-about')



    button.addEventListener('click', () => {

        const width = window.screen.availWidth
        const height = window.screen.availHeight

        const about = document.getElementById('about')
        const footer = document.getElementById('footer')




        about.classList.remove('hide')

        about.classList.add('rendered')


        footer.classList.remove('hide')

        footer.classList.add('rendered')

        if (width <= 3840 && height <= 2160) {
            window.scrollTo({ top: 4365, behavior: 'smooth' })
        }

        if (width <= 1920 && height <= 1080) {
            window.scrollTo({ top: 2200, behavior: 'smooth' })
        }

        if (width <= 1360 && height <= 768) {
            window.scrollTo({ top: 1545, behavior: 'smooth' })
        }

        if (width <= 1280 && height <= 720) {
            window.scrollTo({ top: 1455, behavior: 'smooth' })
        }

        if (width <= 380) {
            window.scrollTo({ top: 1950, behavior: 'smooth' })
        }

        if (width <= 395) {
            window.scrollTo({ top: 1950, behavior: 'smooth' })
        }

        if (width <= 415) {
            window.scrollTo({ top: 1952, behavior: 'smooth' })
        }



    })


}


export default ScrollToAbout