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
                { route: ['', '/wp'], name: 'homepage', moduleId: './homepage', title: 'Homepage' },
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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
define('services/api',["require", "exports", 'aurelia-framework', 'aurelia-fetch-client'], function (require, exports, aurelia_framework_1, aurelia_fetch_client_1) {
    "use strict";
    var resolveJson = function (response) { return response.json(); };
    var takeOne = function (response) { return response[0]; };
    var Api = (function () {
        function Api(getHttpClient) {
            this.getHttpClient = getHttpClient;
            this.http = this.getHttpClient();
            this.http.configure(function (config) {
                config
                    .withBaseUrl(wpTheme.api_url);
            });
        }
        Api.prototype.single = function (postType, id) {
            var pluralizedPostType = postType + 's';
            return this.http.fetch(pluralizedPostType + "/" + id).then(resolveJson);
        };
        Api.prototype.many = function (postType) {
            var pluralizedPostType = postType + 's';
            return this.http.fetch("" + pluralizedPostType).then(resolveJson);
        };
        Api.prototype.getHomepage = function () {
            return this.single('page', 2);
        };
        Api = __decorate([
            __param(0, aurelia_framework_1.lazy(aurelia_fetch_client_1.HttpClient)), 
            __metadata('design:paramtypes', [Object])
        ], Api);
        return Api;
    }());
    exports.Api = Api;
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
define('homepage',["require", "exports", 'aurelia-framework', './services/api'], function (require, exports, aurelia_framework_1, api_1) {
    "use strict";
    var Homepage = (function () {
        function Homepage(api) {
            this.api = api;
            this.content = {};
        }
        Homepage.prototype.activate = function () {
            var _this = this;
            this.api.many('post').then(function (posts) { return console.log(posts); });
            return this.api.getHomepage().then(function (response) {
                _this.content = response;
            });
        };
        Homepage = __decorate([
            aurelia_framework_1.inject(api_1.Api), 
            __metadata('design:paramtypes', [api_1.Api])
        ], Homepage);
        return Homepage;
    }());
    exports.Homepage = Homepage;
});

define('interfaces',["require", "exports"], function (require, exports) {
    "use strict";
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
define('page',["require", "exports", 'aurelia-framework', './services/api'], function (require, exports, aurelia_framework_1, api_1) {
    "use strict";
    var Page = (function () {
        function Page(api) {
            this.content = {};
            this.api = api;
        }
        Page.prototype.activate = function (params, routeConfig) {
            var _this = this;
            this.api.single('page', params.id)
                .then(function (page) {
                _this.content = page;
                routeConfig.navModel.setTitle(page.title.rendered);
            });
        };
        Page = __decorate([
            aurelia_framework_1.inject(api_1.Api), 
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
define('post',["require", "exports", 'aurelia-framework', './services/api'], function (require, exports, aurelia_framework_1, api_1) {
    "use strict";
    var Post = (function () {
        function Post(api) {
            this.content = {};
            this.comments = [];
            this.api = api;
        }
        Post.prototype.activate = function (params, routeConfig) {
            var _this = this;
            this.api.single('post', params.id)
                .then(function (post) {
                _this.content = post;
                routeConfig.navModel.setTitle(post.title.rendered);
            });
        };
        Post = __decorate([
            aurelia_framework_1.inject(api_1.Api), 
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

define('resources/value-converters/nice-date',["require", "exports"], function (require, exports) {
    "use strict";
    var NiceDateValueConverter = (function () {
        function NiceDateValueConverter() {
        }
        NiceDateValueConverter.prototype.toView = function (value) {
            var date = new Date(value);
            if (isNaN(date.getMonth())) {
                return value;
            }
            var d = date.getDate();
            var m = date.getMonth();
            var y = date.getFullYear();
            var getMonthName = function (m) {
                var monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
                return monthNames[m];
            };
            var getOrdinal = function (d) {
                var ordinal = ['st', 'nd', 'rd', 'th'];
                if (d === 1 || d === 21 || d === 31) {
                    return ordinal[0];
                }
                if (d === 2 || d === 22) {
                    return ordinal[1];
                }
                if (d === 3 || d === 23) {
                    return ordinal[2];
                }
                return ordinal[3];
            };
            return "" + d + getOrdinal(d) + " " + getMonthName(m) + " " + y;
        };
        return NiceDateValueConverter;
    }());
    exports.NiceDateValueConverter = NiceDateValueConverter;
});

define('text!app.html', ['module'], function(module) { module.exports = "<template>\n    <div class=\"page-host\">\n        <router-view></router-view>\n    </div>\n</template>\n"; });
define('text!homepage.html', ['module'], function(module) { module.exports = "<template>\n    <require from=\"./partials/content.html\"></require>\n\n    <content content.bind=\"content\"></content>\n</template>\n"; });
define('text!page.html', ['module'], function(module) { module.exports = "<template>\n    <require from=\"./partials/content.html\"></require>\n\n    <content content.bind=\"content\"></content>\n</template>\n\n"; });
define('text!post.html', ['module'], function(module) { module.exports = "<template>\n    <require from=\"./partials/content.html\"></require>\n\n    <content content.bind=\"content\"></content>\n</template>\n"; });
define('text!partials/content.html', ['module'], function(module) { module.exports = "<template bindable=\"content,showLink\" id=\"${content.id}\">\n    \n    <require from=\"../resources/value-converters/nice-date\"></require>\n\n    <header class=\"entry-header\" with.bind=\"content\">\n        <div class=\"entry-meta\">${date | niceDate}</div>\n        <h1 class=\"entry-title\">\n            <template if.bind=\"!showLink\">${title.rendered}</template>\n            <template if.bind=\"showLink\"><a href=\"${link}\">${title.rendered}</a></template>\n        </h1>\n    </header>\n    <div class=\"entry-content\" with.bind=\"content\" innerhtml.bind=\"content.rendered\"></div>\n</template>\n"; });
//# sourceMappingURL=app-bundle.js.map