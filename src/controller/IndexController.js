import bodyParser from 'body-parser';
import { route, POST, before } from 'awilix-router-core';

@route('/')
export default class IndexController {

    /**
     * @param {Object} container
     * @param {ReleaseRequestPipeline} container.releaseRequestPipeline 
     */
    /* constructor({ service }) {
        this.service = service;
    } */

    constructor() {
        
    }

    @POST()
    @before([bodyParser.json()])
    async create(request, res) {
        const {
            parameter
        } = request.body;

        res.status(201).send();
    }

}