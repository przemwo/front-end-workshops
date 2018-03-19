import { Controller } from 'cerebral';
import { app } from './modules';
import Devtools from "cerebral/devtools";

const controller = Controller(
    app, {
        devtools: Devtools({ host: "localhost:8585" })
    }
);
export default controller;