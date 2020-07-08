function getDocHeight() {
    var D = document;
    return Math.max(
        D.body.scrollHeight, D.documentElement.scrollHeight,
        D.body.clientHeight, D.documentElement.clientHeight
    )
};

console.log(getDocHeight())

