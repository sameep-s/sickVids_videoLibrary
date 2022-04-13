export function presentInWatchLater(watchLater, video) {
    console.log(watchLater);
    return watchLater?.filter((item) => item._id === video._id).length !== 0
}

