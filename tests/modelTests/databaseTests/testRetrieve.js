import { Database, mock } from '.'

export default it('is possible to retrieve all data by not passing any arguments to retrieve()', () => {
    mock.randomValues.forEach(data => Database.store(data))
    expect(Database.retrieve()).toEqual(mock.mockBlocksOfRandomValues())
})