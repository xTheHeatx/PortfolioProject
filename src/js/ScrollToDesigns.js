function ScrollToDesigns() {



    const button = document.getElementById('button-go')


    button.addEventListener('click', () => {



        const width = window.screen.availWidth
        const height = window.screen.availHeight

        const designs = document.getElementById('designs')


        designs.classList.remove('hide')

        designs.classList.add('rendered')

        if (width <= 3840 && height <= 2160) {
            window.scrollTo({ top: 2430, behavior: 'smooth' })
        }

        if (width <= 1920 && height <= 1080) {
            window.scrollTo({ top: 1220, behavior: 'smooth' })
        }

        if (width <= 1360 && height <= 768) {
            window.scrollTo({ top: 860, behavior: 'smooth' })
        }

        if (width <= 1280 && height <= 720) {
            window.scrollTo({ top: 820, behavior: 'smooth' })
        }

        if (width <= 415) {
            window.scrollTo({ top: 952, behavior: 'smooth' })
        }

        if (width <= 395) {
            window.scrollTo({ top: 950, behavior: 'smooth' })
        }

        if (width <= 380) {
            window.scrollTo({ top: 950, behavior: 'smooth' })
        }






    })

}

export default ScrollToDesigns