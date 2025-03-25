import filterMovie from './filter.js';

describe('filter array', () => {
    test("keep movies with 'man", () => {
        const original = [
            {
                id: 1,
                dataName: 'spiderman',
                src: './assets/spiderman.jpg',
                title: 'Spiderman'
            },
            {
                id: 2,
                dataName: 'joker',
                src: './assets/joker.jpg',
                title: 'Joker'
            },
            {
                id: 3,
                dataName: 'ironman',
                src: './assets/ironman.jpg',
                title: 'ironman'
            }
        ];
        const filtered = [
            {
                id: 1,
                dataName: 'spiderman',
                src: './assets/spiderman.jpg',
                title: 'Spiderman'
            },
            {
                id: 3,
                dataName: 'ironman',
                src: './assets/ironman.jpg',
                title: 'ironman'
            }
        ];
        expect(filterMovie(original, 'man')).toEqual(filtered);
    });
});
