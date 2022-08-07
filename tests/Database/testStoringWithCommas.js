import { Database } from "../../model"
import mock from "../testHelpers/mock"

const r = mock.randomValues
const o = mock.mockBlocksOfRandomValues()

export default it('is possible to add multiple data at once using commas', () => {
    Database.store(r[0], r[1], r[2], r[3], r[4], r[5])
    expect(Database.retrieve()).toEqual([o[0], o[1], o[2], o[3], o[4], o[5]])
})
