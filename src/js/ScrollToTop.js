function ScrollToTop() {



    const button = document.getElementById('to-top')


    button.addEventListener('click', () => {



        window.scrollTo({ top: 0, behavior: 'smooth' })


    })



}



export default ScrollToTop