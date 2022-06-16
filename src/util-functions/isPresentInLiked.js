export function isVideoPresentInLiked(likedVideos, videoId) {
    return (likedVideos.filter((item) => item._id === videoId).length) !== 0;
}