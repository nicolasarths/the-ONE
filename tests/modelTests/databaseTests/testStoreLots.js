import { Database, mock } from '.'

export default it('is possible to add multiple data at once using commas', () => {
    Database.storeLots(mock.randomValues)
    expect(Database.retrieve()).toEqual(mock.mockBlocksOfRandomValues())
})