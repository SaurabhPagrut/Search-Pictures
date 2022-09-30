let searchImages = async (Access_Key, query) => {
    try{
        let res = await fetch(`https://api.unsplash.com/search/photos/?query=${query}&per_page=40&orientation=squarish&client_id=${Access_Key}`);
        let data = await res.json();
        return data;
    }
    catch (err){
        console.log(err);
    }
}

export default searchImages;