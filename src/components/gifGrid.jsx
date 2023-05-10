import { GifItem } from "./GifItem"
import { useFetchGifs } from "../hooks/useFetchGifs"


export const GifGrid = ({ category }) => {

    const { images, loading } = useFetchGifs(category)

    // const [images, setImages] = useState([])
    // const getImg = async () => {
    //     const newImg = await getGifs( category );
    //     setImages(newImg)
    // }

    // console.log()

    // useEffect(() => {
    //     getImg();
    // }, [])


    return (
        <>
            <h3>{category}</h3>
            {
                loading && (<h2>Loading...</h2>)
            }
            <div className="card-grid">
                {
                    images.map(((img) =>
                        <GifItem
                            key={img.id}
                            {...img}
                        />
                    ))
                }

            </div>

        </>
    )
}
