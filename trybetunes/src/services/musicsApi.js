
export const getMusics = async (id) => {
    const response = await fetch(`https://my-cors-proxy.herokuapp.com/https://itunes.apple.com/lookup?id=${id}&entity=song`);
    const data = await response.json();
    return data.results
};

export const getAlbumsByGenre = async (name) => {
    const response = await fetch(`https://my-cors-proxy.herokuapp.com/https://itunes.apple.com/search?term=${name}&entity=album`);
    const data = await response.json();
    return data.results
};
