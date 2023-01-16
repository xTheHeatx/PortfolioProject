function ScrollToAbout() {

    const button = document.getElementById('to-about')

    button.addEventListener('click', () => {

        const about = document.getElementById('about')
        const footer = document.getElementById('footer')

        about.classList.remove('hide')
        about.classList.add('rendered')

        footer.classList.remove('hide')
        footer.classList.add('rendered')

        window.scrollTo({ top: 5000, behavior: 'smooth' })

        const designs = document.getElementById('designs')

        setTimeout(() => {
            designs.classList.add('hide')

        }, 700);

    })


}

export default ScrollToAbout