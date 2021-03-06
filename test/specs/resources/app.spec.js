'use strict';

var config = require('../../intialize/config');
var userToken = config.USER_TOKEN;

var chai = require('chai');
var expect = chai.expect;

var pinterest = require('../../../lib')(userToken);

describe('GetUserOwnInfo', function () {
  it('It should get the logged in user\'s information', async function () {
    var data = {};
    try {
      var response = await pinterest.users.getUserOwnInfo(data).catch(error => {
        if (error) {
          console.log('error ', error);
          return;
        }
      });
      console.log('response', response);
      expect(response).to.be.a('object');
    } catch (error) {
      console.log('error ', error);
      expect(response).to.be.a(undefined);
    }
  });
});

describe('GetUserBoards', function () {
  it('It should get the logged in user\'s boards', async function () {
    var data = {};
    try {
      var response = await pinterest.users.getUserBoards(data).catch(error => {
        if (error) {
          console.log('error ', error);
          return;
        }
      });
      console.log('response', response);
      expect(response).to.be.a('object');
    } catch (error) {
      console.log('error ', error);
      expect(response).to.be.a(undefined);
    }
  });
});

describe('GetUserBoardSuggestions', function () {
  it('It should get the logged in user\'s board suggestions', async function () {
    var data = {
      pin: '806144402026290934'
    };
    try {
      var response = await pinterest.users.getUserBoardSuggestions(data).catch(error => {
        if (error) {
          console.log('error ', error);
          return;
        }
      });
      console.log('response', response);
      expect(response).to.be.a('object');
    } catch (error) {
      console.log('error ', error);
      expect(response).to.be.a(undefined);
    }
  });
});

describe('GetUserPins', function () {
  it('It should get the logged in user\'s Pins', async function () {
    var data = {};
    try {
      var response = await pinterest.users.getUserPins(data).catch(error => {
        if (error) {
          console.log('error ', error);
          return;
        }
      });
      console.log('response', response);
      expect(response).to.be.a('object');
    } catch (error) {
      console.log('error ', error);
      expect(response).to.be.a(undefined);
    }
  });
});

describe('SearchUserBoards', function () {
  it('It should Search the logged in user\'s Boards', async function () {
    var data = {
      query: 'board 1',
      fields: 'counts,id,name,url'
    };
    try {
      var response = await pinterest.users.searchUserBoards(data).catch(error => {
        if (error) {
          console.log('error ', error);
          return;
        }
      });
      console.log('response', response);
      expect(response).to.be.a('object');
    } catch (error) {
      console.log('error ', error);
      expect(response).to.be.a(undefined);
    }
  });
});

describe('SearchUserPins', function () {
  it('It should Search the logged in user\'s Pins', async function () {
    var data = {
      query: 'test',
      fields: 'id,board,link,note,url'
    };
    try {
      var response = await pinterest.users.searchUserPins(data).catch(error => {
        if (error) {
          console.log('error ', error);
          return;
        }
      });
      console.log('response', response);
      expect(response).to.be.a('object');
    } catch (error) {
      console.log('error ', error);
      expect(response).to.be.a(undefined);
    }
  });
});

describe('FollowBoard', function () {
  it('It should follow the specified board by the authenticated user', async function () {
    var data = {
      board: '4teebeat/bodybuilding-t-shirts'
    };
    try {
      var response = await pinterest.users.followBoard(data).catch(error => {
        if (error) {
          console.log('error ', error);
          return;
        }
      });
      console.log('response', response);
      expect(response).to.be.a('object');
    } catch (error) {
      console.log('error ', error);
      expect(response).to.be.a(undefined);
    }
  });
});

describe('FollowUser', function () {
  it('It should follow the specified user by the authenticated user', async function () {
    var data = {
      user: '4teebeat'
    };
    try {
      var response = await pinterest.users.followUser(data).catch(error => {
        if (error) {
          console.log('error ', error);
          return;
        }
      });
      console.log('response', response);
      expect(response).to.be.a('object');
    } catch (error) {
      console.log('error ', error);
      expect(response).to.be.a(undefined);
    }
  });
});

describe('GetUserFollowers', function () {
  it('It should return the users that follow the logged in user', async function () {
    var data = {
      fields: 'id,first_name,last_name,url'
    };
    try {
      var response = await pinterest.users.getUserFollowers(data).catch(error => {
        if (error) {
          console.log('error ', error);
          return;
        }
      });
      console.log('response', response);
      expect(response).to.be.a('object');
    } catch (error) {
      console.log('error ', error);
      expect(response).to.be.a(undefined);
    }
  });
});

describe('GetUserFollowingBoards', function () {
  it('It should get the Boards that the logged in user follows', async function () {
    var data = {
      fields: 'id,name,url'
    };
    try {
      var response = await pinterest.users.getUserFollowingBoards(data).catch(error => {
        if (error) {
          console.log('error ', error);
          return;
        }
      });
      console.log('response', response);
      expect(response).to.be.a('object');
    } catch (error) {
      console.log('error ', error);
      expect(response).to.be.a(undefined);
    }
  });
});

describe('GetUserFollowingInterests', function () {
  it('It should return the Interests the logged in user follows', async function () {
    var data = {
      fields: 'id,name'
    };
    try {
      var response = await pinterest.users.getUserFollowingInterests(data).catch(error => {
        if (error) {
          console.log('error ', error);
          return;
        }
      });
      console.log('response', response);
      expect(response).to.be.a('object');
    } catch (error) {
      console.log('error ', error);
      expect(response).to.be.a(undefined);
    }
  });
});

describe('GetUserFollowingUsers', function () {
  it('It should return the users that the logged in user follows', async function () {
    var data = {
      fields: 'id,first_name,last_name,url'
    };
    try {
      var response = await pinterest.users.getUserFollowingUsers(data).catch(error => {
        if (error) {
          console.log('error ', error);
          return;
        }
      });
      console.log('response', response);
      expect(response).to.be.a('object');
    } catch (error) {
      console.log('error ', error);
      expect(response).to.be.a(undefined);
    }
  });
});

describe('UnfollowBoard', function () {
  it('It should unfollow the specified board', async function () {
    var board = '4teebeat/bodybuilding-t-shirts'
    try {
      var response = await pinterest.users.unfollowBoard(board).catch(error => {
        if (error) {
          console.log('error ', error);
          return;
        }
      });
      console.log('response', response);
      expect(response).to.be.a('object');
    } catch (error) {
      console.log('error ', error);
      expect(response).to.be.a(undefined);
    }
  });
});

describe('UnfollowUser', function () {
  it('It should unfollow the specified user', async function () {
    var user = '4teebeat'
    try {
      var response = await pinterest.users.unfollowUser(user).catch(error => {
        if (error) {
          console.log('error ', error);
          return;
        }
      });
      console.log('response', response);
      expect(response).to.be.a('object');
    } catch (error) {
      console.log('error ', error);
      expect(response).to.be.a(undefined);
    }
  });
});

describe('GetUserInfo', function () {
  it('It should return a user\'s information', async function () {
    var user = '4teebeat'
    try {
      var response = await pinterest.users.getUserInfo(user).catch(error => {
        if (error) {
          console.log('error ', error);
          return;
        }
      });
      console.log('response', response);
      expect(response).to.be.a('object');
    } catch (error) {
      console.log('error ', error);
      expect(response).to.be.a(undefined);
    }
  });
});

describe('CreateBoard', function () {
  it('It should create board', async function () {
    var data = {
      name: 'test board',
      description: 'it\'s a test board'
    };
    try {
      var response = await pinterest.boards.createBoard(data).catch(error => {
        if (error) {
          console.log('error ', error);
          return;
        }
      });
      console.log('response', response);
      expect(response).to.be.a('object');
    } catch (error) {
      console.log('error ', error);
      expect(response).to.be.a(undefined);
    }
  });
});

describe('GetBoard', function () {
  it('It should retrieve information about a Board', async function () {
    var board = 'pideveloper/test-board';
    try {
      var response = await pinterest.boards.getBoard(board).catch(error => {
        if (error) {
          console.log('error ', error);
          return;
        }
      });
      console.log('response', response);
      expect(response).to.be.a('object');
    } catch (error) {
      console.log('error ', error);
      expect(response).to.be.a(undefined);
    }
  });
});

describe('GetBoardPins', function () {
  it('It should retrieve the Pins on a Board', async function () {
    var board = 'pideveloper/test-board';
    try {
      var response = await pinterest.boards.getBoardPins(board).catch(error => {
        if (error) {
          console.log('error ', error);
          return;
        }
      });
      console.log('response', response);
      expect(response).to.be.a('object');
    } catch (error) {
      console.log('error ', error);
      expect(response).to.be.a(undefined);
    }
  });
});

describe('GetUserBoards', function () {
  it('It should get the logged in user\'s boards', async function () {
    var data = {};
    try {
      var response = await pinterest.boards.getUserBoards(data).catch(error => {
        if (error) {
          console.log('error ', error);
          return;
        }
      });
      console.log('response', response);
      expect(response).to.be.a('object');
    } catch (error) {
      console.log('error ', error);
      expect(response).to.be.a(undefined);
    }
  });
});

describe('UpdateBoard', function () {
  it('It should edit a Board', async function () {
    var data = {
      name: 'Board 11',
      description: 'it\'s a board no 11.'
    };
    var board = 'pideveloper/test-board';
    try {
      var response = await pinterest.boards.updateBoard(board, data).catch(error => {
        if (error) {
          console.log('error ', error);
          return;
        }
      });
      console.log('response', response);
      expect(response).to.be.a('object');
    } catch (error) {
      console.log('error ', error);
      expect(response).to.be.a(undefined);
    }
  });
});

describe('DeleteBoard', function () {
  it('It should delete a Board', async function () {
    var board = 'pideveloper/board-11';
    try {
      var response = await pinterest.boards.deleteBoard(board).catch(error => {
        if (error) {
          console.log('error ', error);
          return;
        }
      });
      console.log('response', response);
      expect(response).to.be.a('object');
    } catch (error) {
      console.log('error ', error);
      expect(response).to.be.a(undefined);
    }
  });
});

describe('CreatePin', function () {
  it('It should create a pin', async function () {
    var data = {
      board: 'pideveloper/board-2',
      note: 'it\'s a test pin desc.',
      image_url: 'https://www.birmingham.ac.uk/Images/College-EPS-only/outreach/engineering/aerospace-engineering.jpg'
    };
    try {
      var response = await pinterest.pins.createPin(data).catch(error => {
        if (error) {
          console.log('error ', error);
          return;
        }
      });
      console.log('response', response);
      expect(response).to.be.a('object');
    } catch (error) {
      console.log('error ', error);
      expect(response).to.be.a(undefined);
    }
  });
});

describe('GetPin', function () {
  it('It should return information about a Pin', async function () {
    var pin = '806144402027821208';
    try {
      var response = await pinterest.pins.getPin(pin).catch(error => {
        if (error) {
          console.log('error ', error);
          return;
        }
      });
      console.log('response', response);
      expect(response).to.be.a('object');
    } catch (error) {
      console.log('error ', error);
      expect(response).to.be.a(undefined);
    }
  });
});

describe('GetBoardPins', function () {
  it('It should retrieve the Pins on a Board', async function () {
    var board = 'pideveloper/test-board';
    try {
      var response = await pinterest.pins.getBoardPins(board).catch(error => {
        if (error) {
          console.log('error ', error);
          return;
        }
      });
      console.log('response', response);
      expect(response).to.be.a('object');
    } catch (error) {
      console.log('error ', error);
      expect(response).to.be.a(undefined);
    }
  });
});

describe('GetUserPins', function () {
  it('It should get the logged in user\'s Pins', async function () {
    var data = {};
    try {
      var response = await pinterest.pins.getUserPins(data).catch(error => {
        if (error) {
          console.log('error ', error);
          return;
        }
      });
      console.log('response', response);
      expect(response).to.be.a('object');
    } catch (error) {
      console.log('error ', error);
      expect(response).to.be.a(undefined);
    }
  });
});

describe('UpdatePin', function () {
  it('It should edit a Pin\'s information', async function () {
    var pin = '806144402027821208';
    var data = {
      board: 'pideveloper/board-2',
      note: 'it\'s a aerospace test pin.',
      link: 'https://aerospace.org/'
    };
    try {
      var response = await pinterest.pins.updatePin(pin, data).catch(error => {
        if (error) {
          console.log('error ', error);
          return;
        }
      });
      console.log('response', response);
      expect(response).to.be.a('object');
    } catch (error) {
      console.log('error ', error);
      expect(response).to.be.a(undefined);
    }
  });
});

describe('DeletePin', function () {
  it('It should delete a Pin', async function () {
    var pin = '806144402027821208';
    try {
      var response = await pinterest.pins.deletePin(pin).catch(error => {
        if (error) {
          console.log('error ', error);
          return;
        }
      });
      console.log('response', response);
      expect(response).to.be.a('object');
    } catch (error) {
      console.log('error ', error);
      expect(response).to.be.a(undefined);
    }
  });
});

describe('CreateBoardSection', function () {
  it('It should creates a new board section', async function () {
    var board = '806144470738408510';
    var data = {
      title: 'test_section',
      // initial_pins: '806144402026288820'
    };
    try {
      var response = await pinterest.sections.createBoardSection(board, data).catch(error => {
        if (error) {
          console.log('error ', error);
          return;
        }
      });
      console.log('response', response);
      expect(response).to.be.a('object');
    } catch (error) {
      console.log('error ', error);
      expect(response).to.be.a(undefined);
    }
  });
});

describe('GetBoardSections', function () {
  it('It should gets sections for a board', async function () {
    var board = '806144470738408510';
    try {
      var response = await pinterest.sections.getBoardSections(board).catch(error => {
        if (error) {
          console.log('error ', error);
          return;
        }
      });
      console.log('response', response);
      expect(response).to.be.a('object');
    } catch (error) {
      console.log('error ', error);
      expect(response).to.be.a(undefined);
    }
  });
});

describe('GetBoardSectionPins', function () {
  it('It should gets the pins for a board section', async function () {
    var section = 'pideveloper/board-2/lighting';
    try {
      var response = await pinterest.sections.getBoardSectionPins(section).catch(error => {
        if (error) {
          console.log('error ', error);
          return;
        }
      });
      console.log('response', response);
      expect(response).to.be.a('object');
    } catch (error) {
      console.log('error ', error);
      expect(response).to.be.a(undefined);
    }
  });
});

describe('DeleteBoardSection', function () {
  it('It should deletes a board section', async function () {
    var section = '5007819528581703555';
    try {
      var response = await pinterest.sections.deleteBoardSection(section).catch(error => {
        if (error) {
          console.log('error ', error);
          return;
        }
      });
      console.log('response', response);
      expect(response).to.be.a('object');
    } catch (error) {
      console.log('error ', error);
      expect(response).to.be.a(undefined);
    }
  });
});
