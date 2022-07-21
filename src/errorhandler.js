const notfound = (req, res, next) => {
    res.status(404).send("Sorry can't find that!");
}
const errorhandler = (err, req, res, next) => {
    res.status(500).send("Something broke!");
}



// Tom was here
// Tom was here again from VSCode and not from a web browser

const failingroute = (req, res, next) => {
    throw new Error("Something broke!"); // throws an error
}

export {
    notfound,
    errorhandler,
    failingroute
}