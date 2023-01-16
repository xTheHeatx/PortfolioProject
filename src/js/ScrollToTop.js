function ScrollToTop() {

    const button = document.getElementById('to-top')

    button.addEventListener('click', () => {

        const top = document.getElementById('top')
        const designs = document.getElementById('designs')
        const about = document.getElementById('about')
        const footer = document.getElementById('footer')

        top.classList.remove('hide')
        designs.classList.remove('hide')

        window.scrollTo({ top: 0, behavior: 'smooth' })

        setTimeout(() => {
            about.classList.add('hide')
            designs.classList.add('hide')
            footer.classList.add('hide')

        }, 700);

    })

}

export default ScrollToTop