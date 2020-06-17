"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _controllers = require("../../controllers");

var router = (0, _express.Router)();
var tasks = new _controllers.TasksController();
var users = new _controllers.UsersController();
var projects = new _controllers.ProjectsController();

var protectedRouteMiddleware = function protectedRouteMiddleware(req, res, next) {
  var token = req.get("Authorization") || req.get("authorization");

  if (!token) {
    res.status(401).json({
      message: "Token not found"
    });
    return;
  }

  try {
    var user = _jsonwebtoken["default"].verify(token.split(" ")[1], process.env.JWT_TOKEN);

    req.user = user;
    next();
  } catch (err) {
    res.status(401).json({
      message: "jwt expired"
    });
  }
};

router.use(protectedRouteMiddleware); //Routes
//User

router.get("/users", users.listAll);
router.get("/user", users.listOne);
router.put("/user", users.editOne);
router["delete"]("/user", users.deleteOne); //Task

router.get("/tasks/:id", tasks.listAll); // Project`s id!!!

router.get("/task/:id", tasks.listOne);
router.post("/task/:id", tasks.insertOne); // Project`s id!!!

router.put("/task/:id", tasks.editOne);
router["delete"]("/task/:id", tasks.deleteOne); //Project

router.get("/projects", projects.listAll);
router.get("/project/:id", projects.listOne);
router.post("/project", projects.insertOne);
router.put("/project/:id", projects.editOne);
router["delete"]("/project/:id", projects.deleteOne); //Token

router.get("/refresh-token", function (req, res) {
  var _req$user = req.user,
      name = _req$user.name,
      email = _req$user.email,
      id = _req$user.id;

  var token = _jsonwebtoken["default"].sign({
    name: name,
    email: email,
    id: id
  }, process.env.JWT_TOKEN, {
    expiresIn: process.env.JWT_TOKEN_EXPIRATION
  });

  var refresh_token = _jsonwebtoken["default"].sign({
    name: name,
    email: email,
    id: id,
    token: token
  }, process.env.JWT_TOKEN, {
    expiresIn: process.env.JWT_REFRESH_TOKEN_EXPIRATION
  });

  res.status(200).json({
    type: "Bearer",
    token: token,
    refresh_token: refresh_token
  });
});
router.get("/verify-token", function (req, res) {
  res.status(200).json({
    message: "OK"
  });
});
var _default = router;
exports["default"] = _default;