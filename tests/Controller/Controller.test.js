import testCreateBlock from './testCreateBlock'
import testDefaultBlock from './testDefaultBlock'

describe('Controller CRUD', () => {
    it('user can create a block', testCreateBlock)
})

describe('User requests the creation of a block', () => {
    it('a default block exists', testDefaultBlock)
    it('if there\'s a preset, block is created by it, otherwise default block is returned', () => { })
    it('a default block is automatically stored in the database', () => { })
})


describe.skip('A block stored in the database', () => {
    it('can be sent to the gui', () => { })
    it('can be renamed', () => { })
    it('can have its content updated', () => { })
    it('can be deleted', () => { })
})

describe.skip('Block themes', () => {
    it('blocks from the dashboard have a default theme if none\'s been set by the user', () => { })
    it('default theme can be modified by the user', () => { })
    it('a set of themes is available for the user to choose from', () => { })
})

describe.skip('A block position in the dashboard', () => {
    it('has a default position (column[0,1 or 2], row[0, 1, or 2]) to be shown in', () => { })
    it('can have its position modified by the user', () => { })
    it('if screen only has space for one column, blocks are ordered by column (user might change this in settings later)', () => { })
    it('order of blocks when screen is smaller can be changed, and that works', () => { })
})