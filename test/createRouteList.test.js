const createRouteList = require('../utils/createRouteList');
const config = require('./fixtures/config');
const data = require('./fixtures/data.markdown');
const slugOutput = require('./fixtures/slugList.output');
const slugOutput2 = require('./fixtures/slugList.1post.output');
const slugOutput_4post = require('./fixtures/slugList.4postPerPage.output');

describe(`createRouteList`, () => {
  test('19 Post should output 4 page (5 post per page)', () => {
    const slugList = createRouteList(data, config.postPerPage, config.routes[0], config.indexTemplate);
    expect(slugList.length).toBe(slugOutput.length);
    expect(slugList[0]).toEqual(slugOutput[0]);
    expect(slugList[1]).toEqual(slugOutput[1]);
    expect(slugList[2]).toEqual(slugOutput[2]);
    expect(slugList[3]).toEqual(slugOutput[3]);
  });

  test('1 Post should output 1 page (5 post per page)', () => {
    const slugList = createRouteList(data, config.postPerPage, config.routes[1], config.indexTemplate);
    expect(slugList.length).toBe(slugOutput2.length);
    expect(slugList[0]).toEqual(slugOutput2[0]);
  });

  test('19 Post should output 5 page (4 post per page)', () => {
    const slugList = createRouteList(data, 4, config.routes[0], config.indexTemplate);
    expect(slugList.length).toBe(slugOutput_4post.length);
    expect(slugList[0]).toEqual(slugOutput_4post[0]);
    expect(slugList[1]).toEqual(slugOutput_4post[1]);
    expect(slugList[2]).toEqual(slugOutput_4post[2]);
    expect(slugList[3]).toEqual(slugOutput_4post[3]);
    expect(slugList[4]).toEqual(slugOutput_4post[4]);
  });
});
