export const fetchApi = async () => {
    const res = await fetch('https://fakestoreapi.com/products', {
        method: "GET",
    });
    return await res.json();
}
