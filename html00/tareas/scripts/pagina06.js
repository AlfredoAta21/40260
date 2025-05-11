export const picture = (id, name) => {
    const url = `https://picsum.photos/id/${id}/200/200`;
    return `
        <figure>
            <img src="${url}" alt="${name}" class="redonda">
            <figcaption>${name}</figcaption>
        </figure>
    `;
};

export function addToggleClassToImages() {
    const lista = document.querySelectorAll('img');
    for (let i = 0; i < lista.length; i++) {
        lista[i].addEventListener('click', function() {
            this.classList.toggle('redonda');
        });
    }
}
