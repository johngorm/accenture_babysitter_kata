"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const child_process_1 = require("child_process");
jest.spyOn(global.console, 'log');
describe.skip('babysitter kata program', () => {
    test('asks user for input', () => {
        const programPath = path_1.default.join(process.cwd(), 'babysitter');
        const babysitterApp = child_process_1.spawn('node', [programPath]);
        babysitterApp.stdout.on('data', data => {
            expect(global.console).toHaveBeenCalledWith('Enter number:');
            babysitterApp.kill('SIGINT');
        });
    });
});
//# sourceMappingURL=index.test.js.map