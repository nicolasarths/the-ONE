//Type ``npm run test Block`` to run tests

import {Block} from '../../../model'

let newBlock
beforeEach(() => newBlock = new Block())

describe('Instantiation of a block', () => {
    it('can be instantiated', () => {
        expect(newBlock).toBeInstanceOf(Block)
    })
    it('has a default title of "new block"', () => {
        expect(newBlock.title).toBe('New Block')
    })
    it('does not have any content', () => {
        expect(newBlock.content).toBeFalsy()
    })
})

describe('Block methods', () => {
    it('is possible to rename', () => {
        const newTitle = 'Renamed block'
        expect(newBlock.rename(newTitle)).toBeTruthy()
        expect(newBlock.title).toBe(newTitle)
    })
    it('is possible to add content', () => {
        const paragraph = 'A paragraph'
        expect(newBlock.write(paragraph)).toBeTruthy()
        expect(newBlock.content).toBe(paragraph)
    })
    it('is possible to update content', () => {
        const paragraph = 'A modified paragraph'
        expect(newBlock.write(paragraph)).toBeTruthy()
        expect(newBlock.content).toBe(paragraph)
    })
    it('is possible to delete content', () => {
        newBlock.write('Something')
        newBlock.eraseContent()
        expect(newBlock.content).toBeFalsy
    })
})