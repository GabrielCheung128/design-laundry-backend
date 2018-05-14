const errorHandle = (event) => async (ctx, next) => {
    try {
        await event(ctx, next);
    } catch(e) {
        console.log(e);
    }
}

module.exports = errorHandle;