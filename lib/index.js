/**
  * @module SwaggerPetstoreLib
  *
  * This is a sample server Petstore server.  You can find out more about Swagger at [http:
  * //swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).
  * For this sample, you can use the api key `special-key` to test the authorization filters.
  */

'use strict';

const Configuration = require('./configuration');
const OAuthManager = require('./OAuthManager');
const Environments = require('./Environments');
const UserController = require('./Controllers/UserController');
const StoreController = require('./Controllers/StoreController');
const PetController = require('./Controllers/PetController');
const Tag = require('./Models/Tag');
const Category = require('./Models/Category');
const Status2Enum = require('./Models/Status2Enum');
const Status1Enum = require('./Models/Status1Enum');
const Pet = require('./Models/Pet');
const StatusEnum = require('./Models/StatusEnum');
const User = require('./Models/User');
const ApiResponse = require('./Models/ApiResponse');
const Order = require('./Models/Order');
const OAuthScopeEnum = require('./Models/OAuthScopeEnum');
const APIException = require('./Exceptions/APIException');


const initializer = {
    // functional components of SwaggerPetstoreLib
    Configuration,
    Environments,
    OAuthManager,
    // controllers of SwaggerPetstoreLib
    UserController,
    StoreController,
    PetController,
    // models of SwaggerPetstoreLib
    Tag,
    Category,
    Status2Enum,
    Status1Enum,
    Pet,
    StatusEnum,
    User,
    ApiResponse,
    Order,
    OAuthScopeEnum,
    // exceptions of SwaggerPetstoreLib
    APIException,
};

module.exports = initializer;
