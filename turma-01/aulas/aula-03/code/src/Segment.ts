export class Segment {
    readonly distance: number 
    readonly datetime: Date 

    constructor(distance: number, datetime: Date) {
        this.distance = distance
        this.datetime = datetime
    }

    isOvernight() {
        return this.datetime.getHours() >= 22 || this.datetime.getHours() <= 6
    }
      
    isSunday() {
        return this.datetime.getDay() === 0
    }
      
    isValidDistance() {
        return (
            this.distance != null &&
            this.distance != undefined &&
            typeof this.distance === 'number' &&
            this.distance > 0
        )
    }
      
    isValidDatetime() {
        return (
          this.datetime != null &&
          this.datetime != undefined &&
          this.datetime instanceof Date &&
          this.datetime.toString() !== 'Invalid Date'
        )
    }
}