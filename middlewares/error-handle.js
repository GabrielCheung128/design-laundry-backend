const errorHandle = (event) => async (ctx, next) => {
    try {
        await event(ctx, next);
    } catch(e) {
        ctx.body = e.message;
        ctx.status = 500;
    }
}

module.exports = errorHandle;