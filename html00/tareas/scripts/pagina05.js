export function imagen(id) {
    const componente = `<figure>
        <img src='https://picsum.photos/id/${id}/200/200' alt='x'>
        <figcaption>John</figcaption>
    </figure>`;
    return componente;
}

export const Picture = (id) => {
    return `
        <figure>
            <img src="https://picsum.photos/id/${id}/200/200" alt="x">
            <figcaption>Jane</figcaption>
        </figure>
    `;
};
