

export const getGifs = async( category) =>{

        const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI( category ) }&limit=500&api_key=mVLMZ8JDE645lYqdRJZnoIp3fn0xDOE1`
        const resp = await fetch( url );
        const { data } = await resp.json();

        const gifs = data.map(img => {
            return{
                id: img.id,
                title: img.title,
                url: img.images?.downsized.url   //Signo de interrogacion por si no viene nada
            }
        })

        return gifs;


    }