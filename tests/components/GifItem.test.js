import {render} from "@testing-library/react";

import { GifItem } from "../../src/components/GifItem";

describe('Pruebas en GifItem', () => {

    test('Debe de hacer match con el Snapshot', () => {
        const {container} = render(<GifItem title="Titulo" url="https://giphy.com/embed/hs67xo8fGYfx5KlBgV"/>);
        expect(container).toMatchSnapshot();
    })
})