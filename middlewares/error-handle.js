const errorHandle = (event) => async (ctx, next) => {
    try {
        await event(ctx, next);
    } catch(e) {
        if (e.name === 'ValidationError') {
            ctx.status = 422;
            ctx.body = e.message;
        }
    }
}

module.exports = errorHandle;