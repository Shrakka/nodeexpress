const router = require("express").Router();

const { router: rootRouter } = require("./root");
const { router: blogRouter } = require("../modules/blog");

router.use("/", rootRouter);
router.use("/blog", blogRouter);

Object.assign(module.exports, {
    router
});
