import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {

    const [categories, setCategories] = useState([]);

    // const onAddCategory = () => {
    //     // OPCIÓN 1:
    //     // const newCategories = [...categories];
    //     // newCategories.push('Zodiac Knights');

    //     // OPCIÓN 2:
    //     // const newCategories = categories.concat(['Zodiac Knights']);

    //     // setCategories(newCategories);

    //     // OPCIÓN 3:

    //     //setCategories(categories.concat(['Zodiac Knights']));
    //     // setCategories([...categories, 'Zodiac Knights']);
    // }

    const onAddCategory = (newCategory) => {
        // console.log(newCategory);

        if(!categories.find((value) => value === newCategory))
            setCategories([newCategory, ...categories]);
    }

    const onDeleteCategory = (categoryDeleted) => {
        const newCategories = categories.filter(cat => cat != categoryDeleted);
        setCategories(newCategories);
    }

    return (
        <>
            <h1>GifExpertApp</h1>
            <AddCategory 
                // setCategories={setCategories}
                //onNewCategory={ (value) => onAddCategory(value)} FORMA LARGA
                onNewCategory={ onAddCategory }
            />
            {/* <button onClick={() => onAddCategory()}>Agregar</button> */}
            {
                categories.map((cat) => (
                    // <div key={cat}>
                    //     <h3>{cat}</h3>
                    //     <li>{cat}</li>
                    // </div>
                    <GifGrid 
                        key={cat} 
                        category={cat}
                        onDelete={ onDeleteCategory }
                    />
                ))
            }
        </>
    )
}
