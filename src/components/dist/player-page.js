"use client";
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
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
exports.PlayerPageComponent = void 0;
var react_1 = require("react");
var navigation_1 = require("next/navigation"); // Correct hook for dynamic params
var button_1 = require("@/components/ui/button");
var lucide_react_1 = require("lucide-react");
var episodeService_1 = require("@/lib/episodeService"); // Adjust the import based on your structure
var link_1 = require("next/link"); // Ensure this is included
function PlayerPageComponent() {
    var _this = this;
    var _a = react_1.useState(false), isPlaying = _a[0], setIsPlaying = _a[1];
    var _b = react_1.useState(false), isMuted = _b[0], setIsMuted = _b[1];
    var _c = react_1.useState(null), episodeDetails = _c[0], setEpisodeDetails = _c[1];
    var _d = react_1.useState(true), loading = _d[0], setLoading = _d[1]; // Loading state
    var params = navigation_1.useParams(); // Use useParams to access dynamic route params
    var _e = params, name = _e.name, episode = _e.episode; // Type assertion
    var iframeRef = react_1.useRef(null); // Ref for iframe
    var togglePlay = function () { return setIsPlaying(!isPlaying); };
    var toggleMute = function () { return setIsMuted(!isMuted); };
    react_1.useEffect(function () {
        var fetchEpisodeDetails = function () { return __awaiter(_this, void 0, void 0, function () {
            var decodedName, details;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(name && episode)) return [3 /*break*/, 2];
                        decodedName = decodeURIComponent(name);
                        return [4 /*yield*/, episodeService_1.getEpisodeDetails({
                                episode: Number(episode),
                                animeName: decodedName
                            })];
                    case 1:
                        details = _a.sent();
                        setEpisodeDetails(details);
                        setLoading(false); // Set loading to false after fetching
                        _a.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        }); };
        fetchEpisodeDetails();
    }, [name, episode]);
    // Setting iframe src after loading details
    react_1.useEffect(function () {
        if (iframeRef.current && episodeDetails) {
            // Assuming the embedCode contains an iframe element
            var newEmbedCode = episodeDetails.embedCode.replace(/width="600px"/, 'width="800"'); // Change 800 to your desired width
            iframeRef.current.innerHTML = newEmbedCode;
        }
    }, [episodeDetails]);
    if (loading) {
        return React.createElement("div", null, "Loading..."); // Or your loading state
    }
    // Adding a null check for episodeDetails
    if (!episodeDetails) {
        return React.createElement("div", null, "Error loading episode details."); // Handle error state
    }
    return (React.createElement("div", { className: "min-h-screen bg-gray-900 text-white" },
        React.createElement("header", { className: "bg-gray-800 py-4 px-4 sm:px-6 lg:px-8" },
            React.createElement("div", { className: "max-w-7xl mx-auto" },
                React.createElement("h1", { className: "text-2xl font-bold" }, "OT-Streaming"))),
        React.createElement("main", { className: "max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8" },
            React.createElement("div", { className: "grid grid-cols-1 lg:grid-cols-3 gap-8" },
                React.createElement("div", { className: "lg:col-span-2" },
                    React.createElement("div", { className: "bg-gray-800 rounded-lg overflow-hidden shadow-lg" },
                        React.createElement("div", { ref: iframeRef, className: "aspect-w-16 aspect-h-9 relative" },
                            React.createElement("div", { className: "absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center" },
                                React.createElement(button_1.Button, { size: "lg", variant: "ghost", className: "text-white", onClick: togglePlay }, isPlaying ? React.createElement(lucide_react_1.Pause, { size: 48 }) : React.createElement(lucide_react_1.Play, { size: 48 }))),
                            React.createElement("div", { className: "absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4" },
                                React.createElement("div", { className: "flex items-center justify-between" },
                                    React.createElement("div", { className: "flex space-x-2" },
                                        React.createElement(button_1.Button, { size: "sm", variant: "ghost" },
                                            React.createElement(lucide_react_1.SkipBack, { size: 20 })),
                                        React.createElement(button_1.Button, { size: "sm", variant: "ghost", onClick: togglePlay }, isPlaying ? React.createElement(lucide_react_1.Pause, { size: 20 }) : React.createElement(lucide_react_1.Play, { size: 20 })),
                                        React.createElement(button_1.Button, { size: "sm", variant: "ghost" },
                                            React.createElement(lucide_react_1.SkipForward, { size: 20 }))),
                                    React.createElement("div", { className: "flex space-x-2" },
                                        React.createElement(button_1.Button, { size: "sm", variant: "ghost", onClick: toggleMute }, isMuted ? (React.createElement(lucide_react_1.VolumeX, { size: 20 })) : (React.createElement(lucide_react_1.Volume2, { size: 20 }))),
                                        React.createElement(button_1.Button, { size: "sm", variant: "ghost" },
                                            React.createElement(lucide_react_1.Maximize, { size: 20 })))),
                                React.createElement("div", { className: "mt-2 bg-gray-600 rounded-full h-1" },
                                    React.createElement("div", { className: "bg-green-500 h-1 rounded-full w-1/3" })))),
                        React.createElement("div", { className: "p-4" },
                            React.createElement("h2", { className: "text-2xl font-bold" }, episodeDetails.anime),
                            React.createElement("p", { className: "text-gray-400" },
                                "Season ",
                                episodeDetails.season,
                                ", Episode",
                                " ",
                                episodeDetails.episodeNumber,
                                ": ",
                                episodeDetails.name),
                            React.createElement("p", { className: "mt-2" }, episodeDetails.description),
                            episodeDetails.nextEpisodeNumber && (React.createElement("div", { className: "mt-4" },
                                React.createElement(link_1["default"], { href: "/anime/" + name + "/episode/" + episodeDetails.nextEpisodeNumber },
                                    React.createElement(button_1.Button, { variant: "outline", className: "text-white" },
                                        "Watch Next Episode: ",
                                        episodeDetails.nextEpisodeNumber))))))),
                React.createElement("div", null,
                    React.createElement("h3", { className: "text-xl font-bold mb-4" }, "Up Next"),
                    React.createElement("div", { className: "space-y-4" },
                        episodeDetails.nextEpisodeNumber ? (React.createElement(link_1["default"], { href: "/anime/" + encodeURIComponent(name) + "/episode/" + episodeDetails.nextEpisodeNumber },
                            React.createElement("div", { className: "flex space-x-4 bg-gray-800 rounded-lg p-2 hover:bg-gray-700 transition" },
                                React.createElement("div", { className: "flex-shrink-0 w-24 h-16 bg-gray-700 rounded-lg overflow-hidden" },
                                    React.createElement("img", { src: "/placeholder.svg?height=90&width=160&text=Episode+" + episodeDetails.nextEpisodeNumber, alt: "Episode " + episodeDetails.nextEpisodeNumber + " Thumbnail", className: "w-full h-full object-cover" })),
                                React.createElement("div", null,
                                    React.createElement("h4", { className: "font-semibold" },
                                        "Episode ",
                                        episodeDetails.nextEpisodeNumber),
                                    React.createElement("p", { className: "text-sm text-gray-400" }, "24 min"),
                                    " ")))) : (React.createElement("p", { className: "text-gray-400" }, "No next episode available.")),
                        React.createElement("div", null,
                            React.createElement("h4", { className: "text-lg font-bold" }, "Upcoming Episodes"),
                            React.createElement("div", { className: "space-y-4" }, __spreadArrays(Array(5)).map(function (_, index) {
                                var episodeNumber = episodeDetails.episodeNumber + index + 1; // Calculate episode number
                                return (React.createElement(link_1["default"], { key: index, href: "/animes/" + (name) + "/" + episodeNumber },
                                    React.createElement("div", { className: "flex space-x-4 bg-gray-800 rounded-lg p-2 hover:bg-gray-700 transition" },
                                        React.createElement("div", { className: "flex-shrink-0 w-24 h-16 bg-gray-700 rounded-lg overflow-hidden" },
                                            React.createElement("img", { src: episodeDetails.thumbnail, alt: "Episode " + episodeNumber + " Thumbnail", className: "w-full h-full object-cover" })),
                                        React.createElement("div", null,
                                            React.createElement("h4", { className: "font-semibold" },
                                                "Episode ",
                                                episodeNumber),
                                            React.createElement("p", { className: "text-sm text-gray-400" }, "24 min")))));
                            }))))))),
        React.createElement("footer", { className: "bg-gray-800 py-6 px-4 sm:px-6 lg:px-8 mt-12" },
            React.createElement("div", { className: "max-w-7xl mx-auto text-center" },
                React.createElement("p", null, "\u00A9 2023 OT-Streaming. All rights reserved."),
                React.createElement("p", { className: "mt-2 text-sm text-gray-400" }, "Supported by ads and community contributions.")))));
}
exports.PlayerPageComponent = PlayerPageComponent;
exports["default"] = PlayerPageComponent;
