const createRouteList = require('../utils/createRouteList');
const config = require('./fixtures/config');
const data = require('./fixtures/data.markdown');
const slugOutput = require('./fixtures/slugList.output');
const slugOutput2 = require('./fixtures/slugList.1post.output');
const slugOutput_4post = require('./fixtures/slugList.4postPerPage.output');
const slugMultipleRoutesOUtput = require('./fixtures/slugList.multipleRoutes.output');

describe(`createRouteList`, () => {
  console.log = jest.fn(); // disable console.log during test
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

  test('Multiple Routes 5 post per page (4 post per page)', () => {
    const routesList = config.routes;
    let allRequests = [];
    routesList.forEach((route) => {
      const slugList = createRouteList(data, config.postPerPage, route, config.indexTemplate);
      allRequests = [...allRequests, ...slugList];
    });


    const slugList = createRouteList(data, 4, config.routes[0], config.indexTemplate);
    expect(allRequests.length).toBe(slugMultipleRoutesOUtput.length);
    expect(allRequests[0]).toEqual(slugMultipleRoutesOUtput[0]);
    expect(allRequests[1]).toEqual(slugMultipleRoutesOUtput[1]);
    expect(allRequests[2]).toEqual(slugMultipleRoutesOUtput[2]);
    expect(allRequests[3]).toEqual(slugMultipleRoutesOUtput[3]);
    expect(allRequests[4]).toEqual(slugMultipleRoutesOUtput[4]);
  });
});
