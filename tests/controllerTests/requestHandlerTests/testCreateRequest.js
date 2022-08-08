import { responses, mockCreateRequest } from '.'

export default it('returns a success response to creation requests', () => {
    expect(mockCreateRequest()).toEqual(responses.success)
})