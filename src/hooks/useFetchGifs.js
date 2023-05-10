import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";




export const useFetchGifs = (category) => {

    const [images, setImages] = useState([])
    const [loading, setLoading] = useState( true)

    const getImg = async () => {
        const newImg = await getGifs(category);
        setImages(newImg)
        setLoading(false)
    }

    useEffect(() => {
        getImg();
    }, [])

    return {
        images,
        loading
    }
}
