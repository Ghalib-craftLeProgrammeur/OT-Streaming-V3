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
exports.getAnimeList = void 0;
var firebase_1 = require("../pages/api/firebase"); // Ensure this path points to your Firebase Admin setup
function getAnimeList() {
    return __awaiter(this, void 0, Promise, function () {
        var animeRef, animeSnapshot, animeList_1, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    animeRef = firebase_1.db.collection("anime");
                    return [4 /*yield*/, animeRef.get()];
                case 1:
                    animeSnapshot = _a.sent();
                    animeList_1 = [];
                    animeSnapshot.forEach(function (animeDoc) {
                        var animeData = animeDoc.data(); // Access the document data directly
                        // Use the document ID as the name and check for the thumbnail field
                        var animeName = animeDoc.id; // Document name
                        var animeThumbnail = animeData.thumbnail; // Get 'thumbnail' field
                        // Check if the thumbnail exists
                        if (animeThumbnail) {
                            animeList_1.push({
                                name: animeName,
                                thumbnail: animeThumbnail
                            });
                        }
                        else {
                            console.warn("Missing thumbnail field in document: " + animeDoc.id);
                        }
                    });
                    return [2 /*return*/, animeList_1]; // Return the anime list array
                case 2:
                    error_1 = _a.sent();
                    console.error("Error fetching anime:", error_1);
                    throw new Error("Failed to fetch anime"); // Throw an error to handle it in the API route
                case 3: return [2 /*return*/];
            }
        });
    });
}
exports.getAnimeList = getAnimeList;
