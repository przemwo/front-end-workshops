import { Module } from 'cerebral';

const app = Module({
    state: {
        foo: 'foo from app module'
    },
    signals: {
        clicked: [
            () => console.log('clicked from app module!')
        ]
    }
});
export default app;