import { signupService } from "./authServices/signupService";
import { loginService } from "./authServices/loginService";
import { addToWatchLater, removeFromWatchLater, clearWatchLater } from "./watchLater/watchLaterService";
import { createNewPlaylist, removePlaylist, removeFromPLaylist, addToPlaylist } from "./playlist/playListService";
import { addToLike, removeFromLike } from "./like/likeService";
import { addToHistory, removeFromHistory, clearHistory } from "./history/historyService";

export {
    signupService,
    loginService,
    addToWatchLater,
    clearWatchLater,
    removeFromWatchLater,
    createNewPlaylist,
    removePlaylist,
    removeFromPLaylist,
    addToPlaylist,
    addToLike,
    removeFromLike,
    addToHistory,
    removeFromHistory,
    clearHistory
};