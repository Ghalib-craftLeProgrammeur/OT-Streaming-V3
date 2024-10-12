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
exports.AnimeDetails = void 0;
var link_1 = require("next/link");
var button_1 = require("@/components/ui/button");
var lucide_react_1 = require("lucide-react");
var navigation_1 = require("next/navigation"); // Correct hook for dynamic params
var react_1 = require("react");
function AnimeDetails() {
    var params = navigation_1.useParams(); // Use useParams to access dynamic route params
    var _a = react_1.useState([]), Thumbnial = _a[0], setThumbnail = _a[1];
    var animename = "name"; // Access the dynamic route parameter (e.g., [name])
    if (params != null) {
        animename = params.name;
    }
    var _b = react_1.useState(null), animeTitle = _b[0], setAnimeTitle = _b[1];
    react_1.useEffect(function () {
        function fetchAnime() {
            return __awaiter(this, void 0, void 0, function () {
                var response, data, error_1;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 3, 4, 5]);
                            return [4 /*yield*/, fetch('/api/getAnimeThumbnail?animeName=' + (animename))];
                        case 1:
                            response = _a.sent();
                            return [4 /*yield*/, response.json()];
                        case 2:
                            data = _a.sent();
                            setThumbnail(data);
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
    react_1.useEffect(function () {
        if (animename) {
            setAnimeTitle(decodeURIComponent(animename)); // Set the anime title from the dynamic route
        }
    }, [animename]);
    console.log(Thumbnial);
    // Placeholder data for anime details
    var animeDetails = {
        title: animeTitle || "Loading...",
        thumbnail: (Thumbnial === null || Thumbnial === void 0 ? void 0 : Thumbnial.thumbnail) || "place",
        rating: 4.8,
        description: "Centuries ago, mankind was slaughtered to near extinction by monstrous humanoid creatures called Titans...",
        genres: ["Action", "Dark Fantasy", "Post-apocalyptic"],
        episodes: [
            { number: 1, title: "To You, 2,000 Years in the Future", duration: "24:12" },
        ]
    };
    // Loading state
    if (!animeTitle) {
        return React.createElement("div", { className: "min-h-screen bg-gray-900 text-white" }, "Loading...");
    }
    return (React.createElement("div", { className: "min-h-screen bg-gray-900 text-white" },
        React.createElement("header", { className: "bg-gray-800 py-4 px-4 sm:px-6 lg:px-8" },
            React.createElement("div", { className: "max-w-7xl mx-auto" },
                React.createElement("h1", { className: "text-2xl font-bold" }, "FreeAnimeStream"))),
        React.createElement("main", { className: "max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8" },
            React.createElement("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-8" },
                React.createElement("div", { className: "md:col-span-1" },
                    React.createElement("img", { src: animeDetails.thumbnail, alt: animeDetails.title, className: "w-full rounded-lg shadow-lg" }),
                    React.createElement("div", { className: "mt-4 flex items-center justify-between" },
                        React.createElement("div", { className: "flex items-center" },
                            React.createElement(lucide_react_1.Star, { className: "text-yellow-400 mr-1" }),
                            React.createElement("span", null,
                                animeDetails.rating,
                                "/5")),
                        React.createElement(button_1.Button, null,
                            React.createElement(lucide_react_1.Play, { className: "mr-2 h-4 w-4" }),
                            " Watch Now"))),
                React.createElement("div", { className: "md:col-span-2" },
                    React.createElement("h2", { className: "text-3xl font-bold mb-4" }, animeDetails.title),
                    React.createElement("p", { className: "text-gray-300 mb-4" }, animeDetails.description),
                    React.createElement("div", { className: "mb-6" },
                        React.createElement("h3", { className: "text-xl font-semibold mb-2" }, "Genres"),
                        React.createElement("div", { className: "flex flex-wrap gap-2" }, animeDetails.genres.map(function (genre, index) { return (React.createElement("span", { key: index, className: "bg-gray-700 text-sm rounded-full px-3 py-1" }, genre)); }))),
                    React.createElement("div", null,
                        React.createElement("h3", { className: "text-xl font-semibold mb-4" }, "Episodes"),
                        React.createElement("div", { className: "space-y-4" }, animeDetails.episodes.map(function (episode) { return (React.createElement(link_1["default"], { href: "/animes/" + animename + "/" + episode.number, key: episode.number },
                            React.createElement("div", { className: "bg-gray-800 rounded-lg p-4 hover:bg-gray-700 transition duration-300" },
                                React.createElement("div", { className: "flex justify-between items-center" },
                                    React.createElement("div", null,
                                        React.createElement("h4", { className: "font-semibold" },
                                            "Episode ",
                                            episode.number,
                                            ": ",
                                            episode.title),
                                        React.createElement("p", { className: "text-sm text-gray-400" }, episode.duration)),
                                    React.createElement(lucide_react_1.Play, { className: "h-5 w-5 text-gray-400" }))))); })))))),
        React.createElement("footer", { className: "bg-gray-800 py-6 px-4 sm:px-6 lg:px-8 mt-12" },
            React.createElement("div", { className: "max-w-7xl mx-auto text-center" },
                React.createElement("p", null, "\u00A9 2023 FreeAnimeStream. All rights reserved."),
                React.createElement("p", { className: "mt-2 text-sm text-gray-400" }, "Supported by ads and community contributions.")))));
}
exports.AnimeDetails = AnimeDetails;
exports["default"] = AnimeDetails;
function setLoading(arg0) {
    throw new Error('Function not implemented.');
}
