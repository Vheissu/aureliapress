define('app',["require", "exports"], function (require, exports) {
    "use strict";
    var App = (function () {
        function App(router) {
            this.router = router;
        }
        App.prototype.configureRouter = function (config, router) {
            config.title = 'Aurelia';
            config.options.pushState = true;
            config.map([
                { route: [''], name: 'homepage', moduleId: './homepage', title: 'Homepage' },
                { route: ['page/:id'], name: 'page', moduleId: './page', title: 'Page' },
                { route: ['pages'], name: 'pages', moduleId: './pages', title: 'Pages' },
                { route: ['post/:id'], name: 'post', moduleId: './post', title: 'Post' },
                { route: ['posts'], name: 'posts', moduleId: './posts', title: 'Posts' }
            ]);
            this.router = router;
        };
        return App;
    }());
    exports.App = App;
});

define('environment',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = {
        debug: true,
        testing: true
    };
});

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define('services/wp-api',["require", "exports", 'aurelia-framework', 'aurelia-fetch-client'], function (require, exports, aurelia_framework_1, aurelia_fetch_client_1) {
    "use strict";
    var WpApi = (function () {
        function WpApi(http) {
            this.http = http;
            http.configure(function (config) {
                config
                    .withBaseUrl(wpTheme.api_url);
            });
        }
        WpApi.prototype.getHomepage = function () {
            return this.getPages();
        };
        WpApi.prototype.getPages = function () {
            return this.http.fetch("pages");
        };
        WpApi.prototype.getPage = function (id) {
            return this.http.fetch("pages/" + id);
        };
        WpApi.prototype.getPageBySlug = function (slug) {
            return this.http.fetch("pages/?slug=" + slug);
        };
        WpApi.prototype.getPost = function (id) {
            return this.http.fetch("posts/" + id);
        };
        WpApi.prototype.getPostBySlug = function (slug) {
            return this.http.fetch("post_by_slug/" + slug);
        };
        WpApi.prototype.getComments = function (id) {
            return this.http.fetch(id + "/comments");
        };
        WpApi = __decorate([
            aurelia_framework_1.inject(aurelia_fetch_client_1.HttpClient), 
            __metadata('design:paramtypes', [aurelia_fetch_client_1.HttpClient])
        ], WpApi);
        return WpApi;
    }());
    exports.WpApi = WpApi;
});

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define('homepage',["require", "exports", 'aurelia-framework', './services/wp-api'], function (require, exports, aurelia_framework_1, wp_api_1) {
    "use strict";
    var Homepage = (function () {
        function Homepage(api) {
            this.api = api;
            this.page = {};
        }
        Homepage.prototype.activate = function () {
            var _this = this;
            return this.api.getHomepage().then(function (response) { return response.json(); }).then(function (response) {
                _this.page = response;
            });
        };
        Homepage = __decorate([
            aurelia_framework_1.inject(wp_api_1.WpApi), 
            __metadata('design:paramtypes', [wp_api_1.WpApi])
        ], Homepage);
        return Homepage;
    }());
    exports.Homepage = Homepage;
});

define('main',["require", "exports", './environment'], function (require, exports, environment_1) {
    "use strict";
    Promise.config({
        warnings: {
            wForgottenReturn: false
        }
    });
    function configure(aurelia) {
        aurelia.use
            .standardConfiguration()
            .feature('resources');
        if (environment_1.default.debug) {
            aurelia.use.developmentLogging();
        }
        if (environment_1.default.testing) {
            aurelia.use.plugin('aurelia-testing');
        }
        aurelia.start().then(function () { return aurelia.setRoot(); });
    }
    exports.configure = configure;
});

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define('page',["require", "exports", 'aurelia-framework', './services/wp-api'], function (require, exports, aurelia_framework_1, wp_api_1) {
    "use strict";
    var Page = (function () {
        function Page(api) {
            this.page = {};
            this.api = api;
        }
        Page.prototype.activate = function (params, routeConfig) {
            var _this = this;
            this.api.getPage(params.id)
                .then(function (response) { return response.json(); })
                .then(function (data) {
                _this.page = data.page;
                routeConfig.navModel.setTitle(data.page.title);
            });
        };
        Page = __decorate([
            aurelia_framework_1.inject(wp_api_1.WpApi), 
            __metadata('design:paramtypes', [Object])
        ], Page);
        return Page;
    }());
    exports.Page = Page;
});

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define('post',["require", "exports", 'aurelia-framework', './services/wp-api'], function (require, exports, aurelia_framework_1, wp_api_1) {
    "use strict";
    var Post = (function () {
        function Post(api) {
            this.post = {};
            this.comments = [];
            this.api = api;
        }
        Post.prototype.activate = function (params, routeConfig) {
            var _this = this;
            this.api.getPost(params.id)
                .then(function (response) { return response.json(); })
                .then(function (post) {
                _this.post = post;
                _this.comments = post.comments;
                routeConfig.navModel.setTitle(post.title);
            });
        };
        Post = __decorate([
            aurelia_framework_1.inject(wp_api_1.WpApi), 
            __metadata('design:paramtypes', [Object])
        ], Post);
        return Post;
    }());
    exports.Post = Post;
});

define('resources/index',["require", "exports"], function (require, exports) {
    "use strict";
    function configure(config) {
    }
    exports.configure = configure;
});

define('text!app.html', ['module'], function(module) { module.exports = "<template>\n    <div class=\"page-host\">\n        <router-view></router-view>\n    </div>\n</template>\n"; });
define('text!homepage.html', ['module'], function(module) { module.exports = "<template>\n    <h1>${page.title.rendered & oneTime}</h1>\n    <div innerhtml.one-time=\"page.content.rendered\"></div>\n</template>\n"; });
define('text!page.html', ['module'], function(module) { module.exports = "<template></template>"; });
define('text!post.html', ['module'], function(module) { module.exports = "<template></template>"; });
//# sourceMappingURL=app-bundle.js.map