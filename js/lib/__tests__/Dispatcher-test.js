jest.autoMockOff();

describe('Dispatcher', function () {

  var dispatcher;
  var callbackA;
  var callbackB;

  beforeEach(function () {
    var Dispatcher = require('../Dispatcher');
    dispatcher = new Dispatcher();
    callbackA = jest.genMockFunction();
    callbackB = jest.genMockFunction();
  });

  it('should return callbacks indexes', function () {
    expect(dispatcher.register(callbackA)).toBe(0);
    expect(dispatcher.register(callbackB)).toBe(1);
  });

  it('should execute all callbacks', function () {
    dispatcher.register(callbackA);
    dispatcher.register(callbackB);

    var payload = { actionType: 'some-action' };
    dispatcher.dispatch(payload);

    expect(callbackA.mock.calls.length).toBe(1);
    expect(callbackA.mock.calls[0][0]).toBe(payload);

    expect(callbackB.mock.calls.length).toBe(1);
    expect(callbackB.mock.calls[0][0]).toBe(payload);
  });

});
