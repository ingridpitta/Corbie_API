"use strict";

((void 0).webpackJsonpcorbie_app = (void 0).webpackJsonpcorbie_app || []).push([[0], {
  180: function _(e, t, r) {
    e.exports = r(337);
  },
  185: function _(e, t, r) {},
  186: function _(e, t, r) {},
  191: function _(e, t, r) {},
  193: function _(e, t, r) {},
  238: function _(e, t, r) {},
  334: function _(e, t, r) {},
  335: function _(e, t, r) {},
  336: function _(e, t, r) {},
  337: function _(e, t, r) {
    "use strict";

    r.r(t);
    var a = r(0),
        n = r.n(a),
        o = r(45),
        c = r.n(o),
        u = r(20),
        s = (r(185), r(3)),
        i = r.n(s),
        l = r(7),
        p = r(18),
        f = r(26),
        g = r(30),
        m = r(28),
        d = r(6);

    function h() {
      return (h = Object.assign || function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = arguments[t];

          for (var a in r) {
            Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
          }
        }

        return e;
      }).apply(this, arguments);
    }

    function b(e, t) {
      if (null == e) return {};

      var r,
          a,
          n = function (e, t) {
        if (null == e) return {};
        var r,
            a,
            n = {},
            o = Object.keys(e);

        for (a = 0; a < o.length; a++) {
          r = o[a], t.indexOf(r) >= 0 || (n[r] = e[r]);
        }

        return n;
      }(e, t);

      if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);

        for (a = 0; a < o.length; a++) {
          r = o[a], t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
        }
      }

      return n;
    }

    var v = n.a.createElement("path", {
      d: "M87.663 47.0769C86.46 42.9279 82.195 41.4499 78.615 39.9239C74.063 37.9839 72.478 34.5129 68.833 31.4639C65.048 28.2969 60.527 26.1949 56.293 23.7219C52.696 21.6209 49.724 19.1119 46.03 17.2519C43.859 16.1589 41.68 15.0729 39.429 14.1529C36.962 13.1449 36.588 12.1389 35.35 9.81194C33.433 6.20894 31.195 2.43994 27.181 0.920938C22.57 -0.823061 18.355 1.40094 13.741 1.04694C8.482 0.641939 3.443 0.999939 0 5.54494C0.433 5.73694 2.328 4.99294 2.804 4.92194C5.164 4.56594 7.595 4.58394 9.96 4.87194C12.202 5.14494 14.532 5.66594 16.502 6.81494C11.239 5.05794 5.141 5.38794 0.112 7.11994C4.594 8.77394 9.561 8.92994 14.235 9.71894C16.338 13.1819 18.081 14.7129 17.52 19.1319C17.234 21.3829 15.974 23.7049 17.027 25.9359C18.095 28.1999 20.204 29.8499 21.105 32.2049C22.875 36.8309 26.12 39.8719 29.937 42.8399C33.492 45.6049 37.818 51.0439 38.516 55.5999C38.327 55.5969 35.601 61.4579 35.09 62.1919C33.651 64.2599 31.155 68.8819 28.472 68.9889C25.835 69.0939 20.471 68.1179 19.586 71.5879C20.488 70.8959 21.277 70.2439 22.427 70.3189C21.548 70.6409 20.839 71.3579 20.795 72.3139C23.315 70.2299 27.93 71.1049 30.921 71.1079C33.776 71.1109 37.054 68.2869 39.414 70.7419C38.91 67.3469 33.389 70.1009 34.848 66.5419C35.747 64.3499 38.683 62.1669 39.261 60.1689C39.966 59.6889 43.072 55.9649 43.23 55.9629C44.055 52.3279 41.504 49.9239 41.054 46.5329C42.222 48.0429 44.312 47.5169 45.857 48.2389C47.335 48.9289 48.445 51.2379 49.103 52.6189C50.356 55.2519 50.867 59.3739 50.152 62.1769C49.127 66.1949 47.082 71.1219 42.822 72.3309C40.189 73.0789 35.571 71.8399 34.88 75.6399C37.116 73.8799 39.951 74.0079 42.799 74.0079C40.855 75.0959 35.371 74.8899 35.485 77.7559C36.107 76.4349 36.697 76.7239 37.887 76.8799C40.05 77.1629 42.089 75.6459 44.069 75.0349C46.61 74.2509 51.574 72.8749 52.713 76.3049C52.883 74.3849 51.882 73.6579 50.356 72.8459C48.866 72.0529 48.419 72.1489 49.199 70.4449C50.031 68.6279 51.025 66.8899 51.997 65.1459C53.115 63.1399 55.537 60.0969 55.686 57.7759C55.846 55.2829 53.893 50.7919 52.842 48.5279C54.447 48.8659 56.206 49.1529 57.823 48.7059C58.554 48.5099 59.19 48.1489 59.733 47.6209C61.346 47.6909 62.959 47.7729 64.57 47.8829C69.206 48.1999 73.878 48.7149 78.363 49.9809C81.758 50.9379 84.544 52.0919 87.948 52.5239C89.571 52.7299 90.015 52.3689 91.743 53.0239C93.701 53.7669 95.944 54.3289 97.999 53.6069C94.246 51.7379 92.163 48.1989 87.663 47.0769ZM20.129 5.81694C18.206 5.81694 18.206 3.15694 20.129 3.15694C22.053 3.15694 22.053 5.81694 20.129 5.81694Z",
      fill: "#D3D3D3"
    }),
        j = function j(e) {
      var t = e.svgRef,
          r = e.title,
          a = b(e, ["svgRef", "title"]);
      return n.a.createElement("svg", h({
        width: 98,
        height: 78,
        viewBox: "0 0 98 78",
        fill: "none",
        ref: t
      }, a), r ? n.a.createElement("title", null, r) : null, v);
    },
        C = n.a.forwardRef(function (e, t) {
      return n.a.createElement(j, h({
        svgRef: t
      }, e));
    }),
        E = (r.p, r(186), function (e) {
      var t = e.children,
          r = e.loggedUser,
          a = e.logout,
          o = e.userInfo;
      return n.a.createElement("div", {
        className: "generalTemplate--container"
      }, n.a.createElement("nav", null, n.a.createElement("div", null, n.a.createElement(u.b, {
        to: "/"
      }, n.a.createElement(C, null)), n.a.createElement("ul", null, r ? n.a.createElement(n.a.Fragment, null, n.a.createElement(u.b, {
        to: "/dashboard"
      }, n.a.createElement("li", null, "DASHBOARD")), n.a.createElement(u.b, {
        to: "/",
        onClick: a
      }, n.a.createElement("li", null, "SAIR")), o && n.a.createElement("div", {
        className: "generalTemplate--userInfo"
      }, n.a.createElement("h2", null, "UI"))) : n.a.createElement(n.a.Fragment, null, n.a.createElement(u.b, {
        to: "/login"
      }, n.a.createElement("li", null, "ENTRAR")), n.a.createElement(u.b, {
        to: "/signup"
      }, n.a.createElement("li", null, "CADASTRAR")))))), t);
    }),
        O = function (e) {
      Object(g.a)(r, e);
      var t = Object(m.a)(r);

      function r() {
        var e;
        return Object(p.a)(this, r), (e = t.call(this)).state = {}, e;
      }

      return Object(f.a)(r, [{
        key: "render",
        value: function value() {
          var e = this.props,
              t = e.loggedUser,
              r = e.logout,
              a = e.userInfo;
          return n.a.createElement(E, {
            logout: r,
            loggedUser: t,
            userInfo: a
          }, n.a.createElement("h1", null, "DashBoard"));
        }
      }]), r;
    }(a.Component),
        k = (r(191), function () {
      return n.a.createElement("main", {
        className: "homeContent--container"
      }, n.a.createElement("section", null, n.a.createElement("h1", null, "Corbie."), n.a.createElement("h2", null, "Tenha mais controle sobre seus projetos."), n.a.createElement("p", null, "Gerencie suas horas trabalhadas, visualize seus ganhos e compartilhe relat\xf3rios com seus clientes.", n.a.createElement("span", null, " Chega de sofrer fazendo planilhas!")), n.a.createElement(u.b, {
        to: "/signup"
      }, "Comece a usar")), n.a.createElement("section", null));
    }),
        w = r(52),
        x = r(177),
        y = r(178),
        I = r(128),
        U = (r(193), function (e) {
      var t = e.isLoading,
          r = e.children,
          a = e.method,
          o = e.type;
      return n.a.createElement(I.a, {
        type: "primary",
        loading: t,
        htmlType: o || "Button",
        onClick: function onClick() {
          return a && a();
        }
      }, r);
    }),
        S = r(338),
        A = r(340),
        B = r(162),
        R = r.n(B),
        T = (r(238), function (e) {
      var t = e.name,
          r = e.label,
          a = e.mask,
          o = e.value,
          c = e.type,
          u = e.isLoading,
          s = e.handleChange,
          i = e.handleBlur,
          l = e.placeholder,
          p = e.error,
          f = !!a,
          g = !!p,
          m = e.touched;
      return n.a.createElement(S.a.Item, {
        name: t,
        label: r,
        validateStatus: g && m && "error",
        help: g && m && p
      }, f ? n.a.createElement(R.a, {
        className: "ant-input",
        mask: a,
        maskChar: null,
        initialValues: o,
        value: o,
        disabled: u,
        onChange: s,
        onBlur: i,
        placeholder: l
      }) : n.a.createElement(A.a, {
        initialValues: o,
        value: o,
        disabled: u,
        onChange: s,
        onBlur: i,
        placeholder: l,
        type: c || "text"
      }));
    }),
        P = r(110),
        L = P.a().shape({
      username: P.b().required("Campo obrigat\xf3rio").min(4, "M\xednimo de 4 caracteres").max(20, "M\xe1ximo de 20 caracteres"),
      password: P.b().required("Campo obrigat\xf3rio").min(5, "M\xednimo de 5 caracteres").max(60, "M\xe1ximo de 60 caracteres")
    }),
        N = r(127),
        D = r.n(N),
        z = D.a.create({
      baseURL: "https://corbie-api.herokuapp.com/"
    }),
        M = new function e() {
      var t = this;
      Object(p.a)(this, e), this.subscribeUser = function () {
        var e = Object(l.a)(i.a.mark(function e(r) {
          var a, n;
          return i.a.wrap(function (e) {
            for (;;) {
              switch (e.prev = e.next) {
                case 0:
                  return e.next = 2, t.api.post("/api/public/auth/signup", r);

                case 2:
                  return a = e.sent, n = a.data, e.abrupt("return", n || n.message);

                case 5:
                case "end":
                  return e.stop();
              }
            }
          }, e);
        }));
        return function (t) {
          return e.apply(this, arguments);
        };
      }(), this.loginUser = function () {
        var e = Object(l.a)(i.a.mark(function e(r) {
          var a, n;
          return i.a.wrap(function (e) {
            for (;;) {
              switch (e.prev = e.next) {
                case 0:
                  return e.next = 2, t.api.post("/api/public/auth/login", r);

                case 2:
                  return a = e.sent, n = a.data, e.abrupt("return", n);

                case 5:
                case "end":
                  return e.stop();
              }
            }
          }, e);
        }));
        return function (t) {
          return e.apply(this, arguments);
        };
      }(), this.getUserInfo = Object(l.a)(i.a.mark(function e() {
        var r, a;
        return i.a.wrap(function (e) {
          for (;;) {
            switch (e.prev = e.next) {
              case 0:
                return e.next = 2, t.api.get("/api/private/user");

              case 2:
                return r = e.sent, a = r.data, e.abrupt("return", a.user || {});

              case 5:
              case "end":
                return e.stop();
            }
          }
        }, e);
      })), this.updateUserInfo = function () {
        var e = Object(l.a)(i.a.mark(function e(r) {
          var a, n;
          return i.a.wrap(function (e) {
            for (;;) {
              switch (e.prev = e.next) {
                case 0:
                  return console.log(r), e.next = 3, t.api.put("/api/private/user", r);

                case 3:
                  return a = e.sent, n = a.data, e.abrupt("return", n || n.message);

                case 6:
                case "end":
                  return e.stop();
              }
            }
          }, e);
        }));
        return function (t) {
          return e.apply(this, arguments);
        };
      }(), this.deleteUser = Object(l.a)(i.a.mark(function e() {
        var r, a;
        return i.a.wrap(function (e) {
          for (;;) {
            switch (e.prev = e.next) {
              case 0:
                return e.next = 2, t.api["delete"]("/api/private/user");

              case 2:
                return r = e.sent, a = r.data, e.abrupt("return", a.message || {});

              case 5:
              case "end":
                return e.stop();
            }
          }
        }, e);
      })), this.listAllProjects = Object(l.a)(i.a.mark(function e() {
        var r, a;
        return i.a.wrap(function (e) {
          for (;;) {
            switch (e.prev = e.next) {
              case 0:
                return e.next = 2, t.api.get("/api/private/projects");

              case 2:
                return r = e.sent, a = r.data, e.abrupt("return", a.projects || {});

              case 5:
              case "end":
                return e.stop();
            }
          }
        }, e);
      })), this.getProjectInfo = function () {
        var e = Object(l.a)(i.a.mark(function e(r) {
          var a, n;
          return i.a.wrap(function (e) {
            for (;;) {
              switch (e.prev = e.next) {
                case 0:
                  return e.next = 2, t.api.get("/api/private/project/".concat(r));

                case 2:
                  return a = e.sent, n = a.data, e.abrupt("return", n.project || {});

                case 5:
                case "end":
                  return e.stop();
              }
            }
          }, e);
        }));
        return function (t) {
          return e.apply(this, arguments);
        };
      }(), this.createProject = function () {
        var e = Object(l.a)(i.a.mark(function e(r) {
          var a, n;
          return i.a.wrap(function (e) {
            for (;;) {
              switch (e.prev = e.next) {
                case 0:
                  return e.next = 2, t.api.post("/api/private/project", r);

                case 2:
                  return a = e.sent, n = a.data, e.abrupt("return", n.project || {});

                case 5:
                case "end":
                  return e.stop();
              }
            }
          }, e);
        }));
        return function (t) {
          return e.apply(this, arguments);
        };
      }(), this.updateProject = function () {
        var e = Object(l.a)(i.a.mark(function e(r, a) {
          var n, o;
          return i.a.wrap(function (e) {
            for (;;) {
              switch (e.prev = e.next) {
                case 0:
                  return e.next = 2, t.api.put("/api/private/project/".concat(r), a);

                case 2:
                  return n = e.sent, o = n.data, e.abrupt("return", o.project || {});

                case 5:
                case "end":
                  return e.stop();
              }
            }
          }, e);
        }));
        return function (t, r) {
          return e.apply(this, arguments);
        };
      }(), this.deleteProject = function () {
        var e = Object(l.a)(i.a.mark(function e(r) {
          var a, n;
          return i.a.wrap(function (e) {
            for (;;) {
              switch (e.prev = e.next) {
                case 0:
                  return e.next = 2, t.api["delete"]("/api/private/project/".concat(r));

                case 2:
                  return a = e.sent, n = a.data, e.abrupt("return", n.message || {});

                case 5:
                case "end":
                  return e.stop();
              }
            }
          }, e);
        }));
        return function (t) {
          return e.apply(this, arguments);
        };
      }(), this.listAllTasksFromProject = function () {
        var e = Object(l.a)(i.a.mark(function e(r) {
          var a, n;
          return i.a.wrap(function (e) {
            for (;;) {
              switch (e.prev = e.next) {
                case 0:
                  return e.next = 2, t.api.get("/api/private/tasks/".concat(r));

                case 2:
                  return a = e.sent, n = a.data, e.abrupt("return", n.tasks || {});

                case 5:
                case "end":
                  return e.stop();
              }
            }
          }, e);
        }));
        return function (t) {
          return e.apply(this, arguments);
        };
      }(), this.getTaskInfo = function () {
        var e = Object(l.a)(i.a.mark(function e(r) {
          var a, n;
          return i.a.wrap(function (e) {
            for (;;) {
              switch (e.prev = e.next) {
                case 0:
                  return e.next = 2, t.api.get("/api/private/task/".concat(r));

                case 2:
                  return a = e.sent, n = a.data, e.abrupt("return", n.task || {});

                case 5:
                case "end":
                  return e.stop();
              }
            }
          }, e);
        }));
        return function (t) {
          return e.apply(this, arguments);
        };
      }(), this.createTask = function () {
        var e = Object(l.a)(i.a.mark(function e(r, a) {
          var n, o;
          return i.a.wrap(function (e) {
            for (;;) {
              switch (e.prev = e.next) {
                case 0:
                  return e.next = 2, t.api.post("/api/private/task/".concat(r), a);

                case 2:
                  return n = e.sent, o = n.data, e.abrupt("return", o.task || {});

                case 5:
                case "end":
                  return e.stop();
              }
            }
          }, e);
        }));
        return function (t, r) {
          return e.apply(this, arguments);
        };
      }(), this.updateTask = function () {
        var e = Object(l.a)(i.a.mark(function e(r, a) {
          var n, o;
          return i.a.wrap(function (e) {
            for (;;) {
              switch (e.prev = e.next) {
                case 0:
                  return e.next = 2, t.api.put("/api/private/task/".concat(r), a);

                case 2:
                  return n = e.sent, o = n.data, e.abrupt("return", o.task || {});

                case 5:
                case "end":
                  return e.stop();
              }
            }
          }, e);
        }));
        return function (t, r) {
          return e.apply(this, arguments);
        };
      }(), this.deleteTask = function () {
        var e = Object(l.a)(i.a.mark(function e(r) {
          var a, n;
          return i.a.wrap(function (e) {
            for (;;) {
              switch (e.prev = e.next) {
                case 0:
                  return e.next = 2, t.api["delete"]("/api/private/task/".concat(r));

                case 2:
                  return a = e.sent, n = a.data, e.abrupt("return", n.message || {});

                case 5:
                case "end":
                  return e.stop();
              }
            }
          }, e);
        }));
        return function (t) {
          return e.apply(this, arguments);
        };
      }(), this.api = D.a.create({
        baseURL: "https://corbie-api.herokuapp.com/"
      }), this.api.interceptors.request.use(function () {
        var e = Object(l.a)(i.a.mark(function e(t) {
          var r, a, n, o, c, u, s;
          return i.a.wrap(function (e) {
            for (;;) {
              switch (e.prev = e.next) {
                case 0:
                  if (!t.url.includes("public")) {
                    e.next = 2;
                    break;
                  }

                  return e.abrupt("return", t);

                case 2:
                  if (r = JSON.parse(localStorage.getItem("logged-user-info"))) {
                    e.next = 6;
                    break;
                  }

                  return window.location = "/login", e.abrupt("return");

                case 6:
                  return a = r.type, n = r.token, o = r.refresh_token, e.prev = 7, e.next = 10, z.get("/api/private/verify-token", {
                    headers: {
                      Authorization: "".concat(a, " ").concat(n)
                    }
                  });

                case 10:
                  return t.headers.Authorization = "".concat(a, " ").concat(n), e.abrupt("return", t);

                case 14:
                  if (e.prev = 14, e.t0 = e["catch"](7), c = e.t0.response.data.message, 401 !== e.t0.response.status || "jwt expired" !== c && "Token not found" !== c) {
                    e.next = 34;
                    break;
                  }

                  return e.prev = 19, e.next = 22, z.get("/api/private/refresh-token", {
                    headers: {
                      Authorization: "".concat(a, " ").concat(o)
                    }
                  });

                case 22:
                  return u = e.sent, s = u.data, localStorage.setItem("logged-user-info", JSON.stringify(s)), t.headers.Authorization = "".concat(s.type, " ").concat(s.token), e.abrupt("return", t);

                case 29:
                  return e.prev = 29, e.t1 = e["catch"](19), localStorage.removeItem("logged-user-info"), window.location = "/login", e.abrupt("return");

                case 34:
                  return e.abrupt("return", t);

                case 35:
                case "end":
                  return e.stop();
              }
            }
          }, e, null, [[7, 14], [19, 29]]);
        }));
        return function (t) {
          return e.apply(this, arguments);
        };
      }());
    }(),
        J = (r(334), function (e) {
      var t = e.login,
          r = Object(w.a)(e, ["login"]),
          o = Object(a.useState)(""),
          c = Object(x.a)(o, 2),
          s = c[0],
          p = c[1],
          f = function () {
        var e = Object(l.a)(i.a.mark(function e(a, n) {
          var o;
          return i.a.wrap(function (e) {
            for (;;) {
              switch (e.prev = e.next) {
                case 0:
                  return console.log("ok"), e.prev = 1, e.next = 4, M.loginUser(a);

                case 4:
                  o = e.sent, t(), localStorage.setItem("logged-user-info", JSON.stringify(o)), n.setSubmitting(!1), r.history.push("/dashboard"), e.next = 14;
                  break;

                case 11:
                  e.prev = 11, e.t0 = e["catch"](1), p(e.t0.response.data.message);

                case 14:
                case "end":
                  return e.stop();
              }
            }
          }, e, null, [[1, 11]]);
        }));
        return function (t, r) {
          return e.apply(this, arguments);
        };
      }();

      return n.a.createElement(y.a, {
        initialValues: {
          username: "",
          password: ""
        },
        validationSchema: L,
        onSubmit: f
      }, function (e) {
        var t = e.values,
            a = e.errors,
            o = e.touched,
            c = e.isSubmitting,
            i = e.handleSubmit,
            l = e.handleChange,
            p = e.handleBlur;
        return n.a.createElement("form", {
          onSubmit: i
        }, n.a.createElement(T, Object.assign({}, r, {
          name: "username",
          label: "Usu\xe1rio",
          placeholder: "Insira seu nome de Usu\xe1rio",
          value: t.username,
          error: a.username || s && !0,
          touched: o.username,
          handleChange: l,
          handleBlur: p,
          isLoading: c
        })), n.a.createElement(T, Object.assign({}, r, {
          name: "password",
          label: "Senha",
          type: "password",
          placeholder: "Insira sua senha",
          value: t.password,
          error: a.password || s,
          touched: o.password,
          handleChange: l,
          handleBlur: p,
          isLoading: c
        })), n.a.createElement("div", null, n.a.createElement(U, {
          type: "submit",
          isLoading: c
        }, "Entrar"), n.a.createElement("span", null, "ou"), n.a.createElement(u.b, {
          to: "/signup"
        }, "Cadastre-se")));
      });
    }),
        q = (r(335), function (e) {
      var t = e.login,
          r = Object(w.a)(e, ["login"]);
      return n.a.createElement("main", {
        className: "loginContent--container"
      }, n.a.createElement("h1", null, "Bem vindo!"), n.a.createElement("h2", null, "Insira seus dados e acesse sua conta para continuar."), n.a.createElement(J, Object.assign({
        login: t
      }, r)));
    }),
        F = function (e) {
      Object(g.a)(r, e);
      var t = Object(m.a)(r);

      function r() {
        var e;
        return Object(p.a)(this, r), (e = t.call(this)).state = {}, e;
      }

      return Object(f.a)(r, [{
        key: "render",
        value: function value() {
          var e = this.props,
              t = e.loggedUser,
              r = e.logout,
              a = e.userInfo;
          return n.a.createElement(E, {
            logout: r,
            loggedUser: t,
            userInfo: a
          }, n.a.createElement(k, null));
        }
      }]), r;
    }(a.Component),
        V = function (e) {
      Object(g.a)(r, e);
      var t = Object(m.a)(r);

      function r() {
        var e;
        return Object(p.a)(this, r), (e = t.call(this)).state = {}, e;
      }

      return Object(f.a)(r, [{
        key: "render",
        value: function value() {
          var e = this.props,
              t = e.loggedUser,
              r = e.logout,
              a = e.userInfo,
              o = e.login,
              c = Object(w.a)(e, ["loggedUser", "logout", "userInfo", "login"]);
          return n.a.createElement(E, {
            logout: r,
            loggedUser: t,
            userInfo: a
          }, n.a.createElement(q, Object.assign({
            login: o
          }, c)));
        }
      }]), r;
    }(a.Component),
        _ = function (e) {
      Object(g.a)(r, e);
      var t = Object(m.a)(r);

      function r() {
        var e;
        return Object(p.a)(this, r), (e = t.call(this)).state = {}, e;
      }

      return Object(f.a)(r, [{
        key: "render",
        value: function value() {
          var e = this.props,
              t = e.loggedUser,
              r = e.logout,
              a = e.userInfo;
          return n.a.createElement(E, {
            logout: r,
            loggedUser: t,
            userInfo: a
          }, n.a.createElement("h1", null, "Project"));
        }
      }]), r;
    }(a.Component),
        Z = function (e) {
      Object(g.a)(r, e);
      var t = Object(m.a)(r);

      function r() {
        var e;
        return Object(p.a)(this, r), (e = t.call(this)).state = {}, e;
      }

      return Object(f.a)(r, [{
        key: "render",
        value: function value() {
          var e = this.props,
              t = e.loggedUser,
              r = e.logout,
              a = e.userInfo;
          e.login;
          return n.a.createElement(E, {
            logout: r,
            loggedUser: t,
            userInfo: a
          }, n.a.createElement("h1", null, "SignUp"));
        }
      }]), r;
    }(a.Component),
        G = function G(e) {
      var t = e.loggedUser,
          r = e.component,
          a = Object(w.a)(e, ["loggedUser", "component"]);
      return t ? n.a.createElement(d.b, Object.assign({}, a, {
        render: function render(e) {
          return n.a.createElement(r, Object.assign({}, a, e));
        }
      })) : n.a.createElement(d.a, {
        to: "/login"
      });
    },
        H = (r(336), function (e) {
      Object(g.a)(r, e);
      var t = Object(m.a)(r);

      function r(e) {
        var a;
        return Object(p.a)(this, r), (a = t.call(this, e)).verifyLoggedUser = Object(l.a)(i.a.mark(function e() {
          var t;
          return i.a.wrap(function (e) {
            for (;;) {
              switch (e.prev = e.next) {
                case 0:
                  (t = localStorage.getItem("logged-user-info")) && a.setState({
                    loggedUser: !0,
                    userInfo: t
                  });

                case 2:
                case "end":
                  return e.stop();
              }
            }
          }, e);
        })), a.login = function () {
          a.setState({
            loggedUser: !0
          });
        }, a.logout = function () {
          localStorage.removeItem("logged-user-info"), a.setState({
            loggedUser: !1,
            userInfo: {}
          });
        }, a.state = {
          userInfo: {},
          loggedUser: !1
        }, a.verifyLoggedUser(), a;
      }

      return Object(f.a)(r, [{
        key: "render",
        value: function value() {
          var e = this,
              t = this.state,
              r = t.loggedUser,
              a = t.userInfo;
          return n.a.createElement(d.d, null, n.a.createElement(d.b, {
            exact: !0,
            path: "/",
            render: function render(t) {
              return n.a.createElement(F, Object.assign({
                loggedUser: r,
                logout: e.logout,
                userInfo: a
              }, t));
            }
          }), n.a.createElement(d.b, {
            exact: !0,
            path: "/signup",
            render: function render(t) {
              return n.a.createElement(Z, Object.assign({
                logout: e.logout,
                login: e.login,
                loggedUser: r,
                userInfo: a
              }, t));
            }
          }), n.a.createElement(d.b, {
            exact: !0,
            path: "/login",
            render: function render(t) {
              return n.a.createElement(V, Object.assign({
                logout: e.logout,
                loggedUser: r
              }, t, {
                login: e.login,
                userInfo: a
              }));
            }
          }), n.a.createElement(G, {
            exact: !0,
            path: "/project",
            component: _,
            logout: this.logout,
            loggedUser: r,
            userInfo: a
          }), n.a.createElement(G, {
            exact: !0,
            path: "/dashboard",
            component: O,
            logout: this.logout,
            loggedUser: r,
            userInfo: a
          }), n.a.createElement(d.a, {
            to: "/"
          }));
        }
      }]), r;
    }(a.Component));

    c.a.render(n.a.createElement(u.a, null, n.a.createElement(H, null)), document.getElementById("root"));
  }
}, [[180, 1, 2]]]);