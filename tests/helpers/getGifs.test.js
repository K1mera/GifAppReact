import { getGifs } from "../../src/helpers/getGifs";


describe('testinng gif API', () => { 
    test('should return a gifs array', async() => { 
        const gifs = await getGifs('League of Legends');
        expect( gifs.length ).toBeGreaterThan( 0 );
        expect( gifs[0] ).toEqual({
            id: expect.any( String ),
            title: expect.any(String),
            url: expect.any(String),
        })
     })
 })