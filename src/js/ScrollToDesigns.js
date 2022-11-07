function ScrollToDesigns() {



    const button = document.getElementById('button-go')


    button.addEventListener('click', () => {



        const width = window.screen.availWidth
        const height = window.screen.availHeight

        const designs = document.getElementById('designs')


        designs.classList.remove('hide')

        designs.classList.add('rendered')


        // Desctop

        if (width <= 3840 && height <= 2160) {
            window.scrollTo({ top: 2430, behavior: 'smooth' })
        }

        if (width <= 2560 && height <= 1440) {
            window.scrollTo({ top: 1620, behavior: 'smooth' })
        }

        if (width <= 1920 && height <= 1080) {
            window.scrollTo({ top: 1220, behavior: 'smooth' })
        }

        if (width <= 1600 && height <= 900) {
            window.scrollTo({ top: 1020, behavior: 'smooth' })
        }

        if (width <= 1536 && height <= 864) {
            window.scrollTo({ top: 975, behavior: 'smooth' })
        }

        if (width <= 1440 && height <= 900) {
            window.scrollTo({ top: 975, behavior: 'smooth' })
        }

        if (width <= 1366 && height <= 768) {
            window.scrollTo({ top: 870, behavior: 'smooth' })
        }

        if (width <= 1360 && height <= 768) {
            window.scrollTo({ top: 860, behavior: 'smooth' })
        }

        if (width <= 1280 && height <= 720) {
            window.scrollTo({ top: 810, behavior: 'smooth' })
        }

        // Mobile



    })

}

export default ScrollToDesigns