TimerViaPrototype = function(){
    this.start();
};
TimerViaPrototype.prototype.start = function() {
    this.startTime = new Date();
};
TimerViaPrototype.prototype.lap = function() {
    let lapTime = new Date();
    return lapTime.getTime() - this.startTime.getTime();
};

