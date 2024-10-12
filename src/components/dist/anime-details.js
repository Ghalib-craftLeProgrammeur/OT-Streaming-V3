'use client';
"use strict";
exports.__esModule = true;
exports.AnimeDetails = void 0;
var link_1 = require("next/link");
var button_1 = require("@/components/ui/button");
var lucide_react_1 = require("lucide-react");
var navigation_1 = require("next/navigation"); // Correct hook for dynamic params
var react_1 = require("react");
function AnimeDetails() {
    var params = navigation_1.useParams(); // Use useParams to access dynamic route params
    var animename = "name"; // Access the dynamic route parameter (e.g., [name])
    if (params != null) {
        animename = params.name;
    }
    var _a = react_1.useState(null), animeTitle = _a[0], setAnimeTitle = _a[1];
    react_1.useEffect(function () {
        if (animename) {
            setAnimeTitle(animename); // Set the anime title from the dynamic route
        }
    }, [animename]);
    // Placeholder data for anime details
    var animeDetails = {
        title: animeTitle || "Loading...",
        thumbnail: "/placeholder.svg?height=400&width=600&text=Attack+on+Titan",
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
                        React.createElement("div", { className: "space-y-4" }, animeDetails.episodes.map(function (episode) { return (React.createElement(link_1["default"], { href: "/watch/" + episode.number, key: episode.number },
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
