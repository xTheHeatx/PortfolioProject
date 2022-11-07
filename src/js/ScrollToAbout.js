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

        // Desctop

        if (width === 3840 && height === 2160) {
            window.scrollTo({ top: 4845, behavior: 'smooth' })
        }

        if (width === 2560 && height === 1440) {
            window.scrollTo({ top: 3230, behavior: 'smooth' })
        }

        if (width === 1920 && height === 1080) {
            window.scrollTo({ top: 2430, behavior: 'smooth' })
        }

        if (width === 1600 && height === 900) {
            window.scrollTo({ top: 2020, behavior: 'smooth' })
        }

        if (width === 1536 && height === 864) {
            window.scrollTo({ top: 1950, behavior: 'smooth' })
        }

        if (width === 1440 && height === 900) {
            window.scrollTo({ top: 975, behavior: 'smooth' })
        }

        if (width === 1366 && height === 768) {
            window.scrollTo({ top: 1725, behavior: 'smooth' })
        }

        if (width === 1360 && height === 768) {
            window.scrollTo({ top: 1720, behavior: 'smooth' })
        }

        if (width <= 1280 && height <= 720) {
            window.scrollTo({ top: 1620, behavior: 'smooth' })
        }

        // Mobile



    })


}


export default ScrollToAbout