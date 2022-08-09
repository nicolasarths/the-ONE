import { Controller, responses, createRequest } from '.'

export default it('returns a success response to creation requests', () => {
    expect(Controller.handle(createRequest) ).toEqual(responses.success)
})