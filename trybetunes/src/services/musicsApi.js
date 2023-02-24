
const getMusics = async (id) => {
    const response = await fetch(`https://my-cors-proxy.herokuapp.com/https://itunes.apple.com/lookup?id=${id}&entity=song`);
    const data = await response.json();
    return data.results
};

export default getMusics;