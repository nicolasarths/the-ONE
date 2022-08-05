import Controller from '../controller'
import { Block, Database } from '../model'

beforeEach(() => Database.dropAll())

describe('Controller', () => {
    it('can create a default block', () => {
        expect(Controller.createDefaultBlock()).toBe(undefined)
        expect(Database.retrieve()).toEqual([new Block()])
    })
    it('is possible to get stored blocks', () => {
        Controller.createDefaultBlock()
        Controller.createDefaultBlock()
    
        expect(Controller.loadBlocks()).toEqual([new Block(), new Block()])
    })
    it('', () => {

    })
})