import Controller from "../../controller";
import responses from "../../controller/responses";
import { Block } from "../../model";

const request = {
    method: 'create',
    model: {
        type: 'block',
        specs: {
            title: 'my first block',
            content: 'this block has no features yet.'
        }
    }
}

export default function () {
    expect(Controller.requestHandler(request)).toEqual(responses.success)
}