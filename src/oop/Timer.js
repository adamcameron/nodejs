class Timer {

    constructor() {
        this.startTime = new Date();
    }

    lap(){
        let lapTime = new Date();
        return lapTime.getTime() - this.startTime.getTime();
    }
}

module.exports = Timer;