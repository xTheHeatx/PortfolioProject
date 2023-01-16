function ScrollToDesigns() {

    const button = document.getElementById('button-go')

    button.addEventListener('click', () => {

        const designs = document.getElementById('designs')

        designs.classList.remove('hide')
        designs.classList.add('rendered')

        window.scrollTo({ top: 5000, behavior: 'smooth' })

        const top = document.getElementById('top')

        setTimeout(() => {
            top.classList.add('hide')

        }, 700);

    })

}

export default ScrollToDesigns