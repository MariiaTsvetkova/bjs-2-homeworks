class AlarmClock {
    constructor() {
        this.alarmCollection = [];
        this.timerId = null;
    }

    addClock(time, func, id) {
        if(typeof id === "undefined") throw new Error("ID не был передан.");
        if(this.alarmCollection.some(item => item.id === id)) {
            console.error("ID уже существует!");
            return;
        }

        this.alarmCollection.push({id, time, func});
    }

    removeClock(id) {
        const originalArrayLength = this.alarmCollection.length;
        this.alarmCollection = this.alarmCollection.filter(item => item.id !== id);
        return this.alarmCollection.length < originalArrayLength;
    }

    getCurrentFormattedTime() {
        return new Date().toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'});
    }

    checkClock(alarm) {
        if (alarm.time === this.getCurrentFormattedTime()) {
            alarm.func();
        }
    }

    start() {
        if (this.timerId === null) {
            this.timerId =
                setInterval(() => this.alarmCollection.forEach(item => this.checkClock(item)),
                    5000);
        }
    }

    stop() {
        if (this.timerId !== null) {
            clearInterval(this.timerId);
            this.timerId = null;
        }
    }

    printAlarms() {
        this.alarmCollection.forEach(item => console.log(`${item.id} ${item.time}`));
    }

    clearAlarms(){
        this.stop();
        this.alarmCollection = [];
    }
}