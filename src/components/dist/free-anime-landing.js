'use client';
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.OTStreamingLanding = void 0;
var react_1 = require("react");
var button_1 = require("@/components/ui/button");
function OTStreamingLanding() {
    var _a = react_1.useState([]), animeList = _a[0], setAnimeList = _a[1];
    var _b = react_1.useState(true), loading = _b[0], setLoading = _b[1];
    react_1.useEffect(function () {
        function fetchAnime() {
            return __awaiter(this, void 0, void 0, function () {
                var response, data, error_1;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 3, 4, 5]);
                            return [4 /*yield*/, fetch('/api/popularanime')];
                        case 1:
                            response = _a.sent();
                            return [4 /*yield*/, response.json()];
                        case 2:
                            data = _a.sent();
                            setAnimeList(data);
                            return [3 /*break*/, 5];
                        case 3:
                            error_1 = _a.sent();
                            console.error('Failed to fetch popular anime:', error_1);
                            return [3 /*break*/, 5];
                        case 4:
                            setLoading(false);
                            return [7 /*endfinally*/];
                        case 5: return [2 /*return*/];
                    }
                });
            });
        }
        fetchAnime();
    }, []);
    return (React.createElement("div", { className: "min-h-screen bg-gray-900 text-white" },
        React.createElement("header", { className: "bg-gradient-to-r from-green-600 to-blue-600 py-20 px-4 sm:px-6 lg:px-8" },
            React.createElement("div", { className: "max-w-7xl mx-auto" },
                React.createElement("h1", { className: "text-4xl sm:text-5xl md:text-6xl font-extrabold text-center" }, "OT-Streaming"),
                React.createElement("p", { className: "mt-3 max-w-md mx-auto text-xl text-center sm:text-2xl md:mt-5 md:max-w-3xl" }, "Watch unlimited anime, completely free!"),
                React.createElement("div", { className: "mt-10 flex justify-center" },
                    React.createElement(button_1.Button, { onClick: function () { return window.location.href = '/start-watching'; }, size: "lg", className: "bg-green-500 hover:bg-green-600" }, "Start Watching Now")))),
        React.createElement("section", { className: "py-20 px-4 sm:px-6 lg:px-8" },
            React.createElement("div", { className: "max-w-7xl mx-auto" },
                React.createElement("h2", { className: "text-3xl font-extrabold text-center mb-12" }, "Why Choose OT-Streaming?"),
                React.createElement("div", { className: "grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3" },
                    React.createElement(FeatureCard, { icon: "\uD83C\uDD93", title: "100% Free", description: "No hidden fees, no credit card required. Ever." }),
                    React.createElement(FeatureCard, { icon: "\uD83C\uDF1F", title: "High-Quality Anime", description: "Stream a vast library of anime series and movies." }),
                    React.createElement(FeatureCard, { icon: "\uD83D\uDCF1", title: "Watch Anywhere", description: "Enjoy on your TV, phone, tablet, or computer." })))),
        React.createElement("section", { className: "py-20 px-4 sm:px-6 lg:px-8 bg-gray-800" },
            React.createElement("div", { className: "max-w-7xl mx-auto" },
                React.createElement("h2", { className: "text-3xl font-extrabold text-center mb-12" }, "Popular on OT-Streaming"),
                React.createElement("div", { className: "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4" }, loading ? (React.createElement("p", { className: "text-center col-span-full" }, "Loading...")) : (animeList.map(function (anime, index) { return (React.createElement("div", { key: index, className: "bg-gray-700 rounded-lg overflow-hidden text-center" },
                    React.createElement("img", { src: anime.thumbnail || '/placeholder.svg?height=450&width=300', alt: "Anime cover " + (index + 1), className: "object-cover w-full h-40" }),
                    React.createElement("div", { className: "p-4" },
                        React.createElement("h3", { className: "text-lg font-semibold" }, anime.name)))); }))))),
        React.createElement("section", { className: "py-20 px-4 sm:px-6 lg:px-8" },
            React.createElement("div", { className: "max-w-7xl mx-auto" },
                React.createElement("h2", { className: "text-3xl font-extrabold text-center mb-12" }, "How It Works"),
                React.createElement("div", { className: "grid grid-cols-1 gap-8 sm:grid-cols-3" },
                    React.createElement(StepCard, { number: "1", title: "Sign Up", description: "Create a free account in seconds." }),
                    React.createElement(StepCard, { number: "2", title: "Browse", description: "Explore our vast library of anime." }),
                    React.createElement(StepCard, { number: "3", title: "Watch", description: "Stream your favorite anime anytime, anywhere." })))),
        React.createElement("footer", { className: "bg-gray-800 py-12 px-4 sm:px-6 lg:px-8" },
            React.createElement("div", { className: "max-w-7xl mx-auto text-center" },
                React.createElement("p", null, "\u00A9 2023 OT-Streaming. All rights reserved."),
                React.createElement("p", { className: "mt-2 text-sm text-gray-400" }, "Supported by ads and community contributions.")))));
}
exports.OTStreamingLanding = OTStreamingLanding;
function FeatureCard(_a) {
    var icon = _a.icon, title = _a.title, description = _a.description;
    return (React.createElement("div", { className: "bg-gray-800 rounded-lg p-6 text-center" },
        React.createElement("div", { className: "text-4xl mb-4" }, icon),
        React.createElement("h3", { className: "text-xl font-semibold mb-2" }, title),
        React.createElement("p", { className: "text-gray-400" }, description)));
}
function StepCard(_a) {
    var number = _a.number, title = _a.title, description = _a.description;
    return (React.createElement("div", { className: "bg-gray-800 rounded-lg p-6 text-center" },
        React.createElement("div", { className: "text-3xl font-bold text-green-500 mb-4" }, number),
        React.createElement("h3", { className: "text-xl font-semibold mb-2" }, title),
        React.createElement("p", { className: "text-gray-400" }, description)));
}
exports["default"] = OTStreamingLanding;
