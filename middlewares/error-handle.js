const errorHandle = (event) => async (ctx, next) => {
    try {
        await event(ctx, next);
    } catch(e) {
        if (e.name === 'ValidationError') {
            ctx.status = 422;
            ctx.body = e.message;
        }
        ctx.body = e.message;
        ctx.status = 500;
    }
}

module.exports = errorHandle;