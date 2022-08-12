import { RequestHandler, responses, createRequest, JSONcreateRequest } from '.'

export default

it('returns a success response to creation requests', () => {
    expect(RequestHandler.handle(createRequest)).toEqual(responses.success)
})
it('accepts json', () => {
    expect(RequestHandler.handle(JSONcreateRequest)).toEqual(responses.success)
})