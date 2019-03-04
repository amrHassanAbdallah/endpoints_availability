class indexController {

    static async get(req, res) {
        return res.status(this.getRandomStatusCode()).json({"message": "test with number " + req.params.number});
    }


    static async delayedGet() {
        setTimeout(() => {
            return res.status(this.getRandomStatusCode()).json({"message": "test delayed with number " + req.params.number});
        }, 6000);
    }


    static availableStatusCodes() {
        return [200, 203, 205, 400, 401, 402, 403, 404, 500, 505];
    }


    static getRandomStatusCode() {
        const availableStatusCode = this.availableStatusCodes();
        let randomPosition = this.randomIntInc(0, availableStatusCode.length - 1);
        return availableStatusCode[randomPosition];
    }


    static randomIntInc(low, high) {
        return Math.floor(Math.random() * (high - low + 1) + low)
    }

}


module.exports = indexController;