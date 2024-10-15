import {render, screen} from "@testing-library/react";

import { GifItem } from "../../src/components/GifItem";

describe('Pruebas en GifItem', () => {

    const title = "Hola";
    const url = "https://giphy.com/embed/hs67xo8fGYfx5KlBgV";

    test('Debe de hacer match con el Snapshot', () => {
        const {container} = render(<GifItem  title={title} url={url}/>);
        expect(container).toMatchSnapshot();
    });

    test('Debe de mostrar la imagen con el URL y el ALT indicado', () => {
        render(<GifItem  title={title} url={url}/>);
        // screen.debug();

        // expect(screen.getByRole('img').src).toBe(url);
        // expect(screen.getByRole('img').alt).toBe(title);

        const {src, alt} = screen.getByRole('img');

        expect(src).toBe(url);
        expect(alt).toBe(title);
    });

    test('Debe de mostrar el título en el componente', () => {
        render(<GifItem  title={title} url={url}/>);

        expect(screen.getByText(title)).toBeTruthy();
    })
})