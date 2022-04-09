export function presentInWatchLater(watchLater, video) {
    return watchLater?.filter((item) => item._id === video._id).length !== 0
}

