import { render, screen } from "@testing-library/react"
import { GifExpertApp } from "../src/gifExpertApp"




describe('testing GifExpertApp Component', () => { 
    const title = 'Gif tool'
    test('should show the proper title', () => {
        render(<GifExpertApp />)
        expect(screen.getByText(title).innerHTML ).toEqual('Gif tool')
        screen.debug()
    })
 })