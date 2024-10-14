import { useState } from 'react';

export const AddCategory = ({onNewCategory}) => {

    const [inputValue, setInputValue] = useState('')

    const onInputChange = (event) => {
        setInputValue(event.target.value);
    }

    const onSubmit = (event) => {
        event.preventDefault();
        const cleanInputValue = inputValue.trim();

        if(!(cleanInputValue.length <= 1))
            onNewCategory(cleanInputValue);

        // setCategories((categories) => [inputValue, ...categories]);

        setInputValue('');
    }

    return (
        // <form onSubmit={(event) => onSubmit(event)}> FORMA LARGA
        <form onSubmit={onSubmit}>
            <input 
                type="text"
                placeholder="Buscar gifs"
                value={inputValue}
                onChange={onInputChange}
            />
        </form>
    )
}