const clickHandler = (e) => {
    const $slide = e.target.closest('.slide')
    if ($slide) {
        document.querySelectorAll('.slide').forEach(node => node.classList.remove('slide--active'))
        $slide.classList.add('slide--active')
    }
}
document.addEventListener('click', clickHandler)