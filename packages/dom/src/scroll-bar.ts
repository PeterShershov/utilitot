export function scrollBarWidth() {
    const scrollDiv = document.createElement('div');

    scrollDiv.style.height = '100px';
    scrollDiv.style.width = '100px';
    scrollDiv.style.overflow = 'scroll';
    scrollDiv.style.position = 'absolute';
    scrollDiv.style.top = '-9999px';

    document.body.appendChild(scrollDiv);

    const scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;

    document.body.removeChild(scrollDiv);

    return scrollbarWidth;
}
