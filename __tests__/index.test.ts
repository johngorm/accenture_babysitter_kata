import path from 'path';
import babysitter from '../src/babysitter';
import { spawn } from 'child_process';
jest.spyOn(global.console, 'log');
describe('babysitter kata program', () => {
  test('asks user for input', () => {
    const testAppFilePath = path.join(
      process.cwd(),
      'dist/src/babysitter.ts'
    );
    const testApp = spawn('node', [testAppFilePath])
    testApp.on('message', data => {
      console.log(data);
    });
  });
});