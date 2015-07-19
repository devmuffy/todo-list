jest.autoMockOff();

describe('Dispatcher', function () {

  var Dispatcher = require('../Dispatcher');
  var callbackA;
  var callbackB;

  beforeEach(function () {
    callbackA = jest.genMockFunction();
    callbackB = jest.genMockFunction();
  });

  it('should return callbacks indexes', function () {
    expect(Dispatcher.register(callbackA)).toBe(0);
    expect(Dispatcher.register(callbackB)).toBe(1);
  });

  it('should execute all callbacks', function () {
    Dispatcher.register(callbackA);
    Dispatcher.register(callbackB);

    var payload = { actionType: 'some-action' };
    Dispatcher.dispatch(payload);

    expect(callbackA.mock.calls.length).toBe(1);
    expect(callbackA.mock.calls[0][0]).toBe(payload);

    expect(callbackB.mock.calls.length).toBe(1);
    expect(callbackB.mock.calls[0][0]).toBe(payload);
  });

});
