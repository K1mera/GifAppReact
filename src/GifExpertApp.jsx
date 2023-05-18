import { useState } from "react";
import { AddCategory, GifGrid } from "./components";


export const GifExpertApp = () => {

    const [categories, setCategories] = useState([]);

    // console.log(categories);
    const onAddCategory = (newCategory) => {
        if (categories.includes(newCategory)) return;
        // categories.push( newCategory )
        // setCategories([...categories, category])
        setCategories([ newCategory, ...categories ])
    };
 

    return (
        <>
            {/* title */}
            <h1>Gif tool</h1>

            {/* input */}
            <AddCategory
                // setCategories={ setCategories }
                onNewCategory={(event) => onAddCategory(event)}
            // currentCategories = {categories}
            />


            {/* gif list */}

            {categories.map((category) =>
            (
                <GifGrid
                    key={category}
                    category={category}
                />
            )
            )}


        </>

    )
}