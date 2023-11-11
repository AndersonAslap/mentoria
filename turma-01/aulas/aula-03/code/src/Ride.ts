import { Segment } from "./Segment";

export class Ride {
    readonly price: number 
    readonly segments: Segment[]

    OVERNIGHT_FARE = 3.9
    OVERNIGHT_SUNDAY_FARE = 5
    SUNDAY_FARE = 2.9
    NORMAL_FARE = 2.1
    MIN_PRICE = 10

    constructor() {
        this.price = 0;
        this.segments = [];
    }

    addSegment(segment: Segment) {
        this.segments.push(segment)
    }

    calculatePrice() {
        let price = 0
        for (const segment of this.segments) {
            if (!segment.isValidDistance()) throw new Error('Invalid distance')
            if (!segment.isValidDatetime()) throw new Error('Invalid datetime')

            if (segment.isOvernight() && !segment.isSunday()) {
                price += segment.distance * this.OVERNIGHT_FARE
            }
            if (segment.isOvernight() && segment.isSunday()) {
                price += segment.distance * this.OVERNIGHT_SUNDAY_FARE
            }
            if (!segment.isOvernight() && segment.isSunday()) {
                price += segment.distance * this.SUNDAY_FARE
            }
            if (!segment.isOvernight() && !segment.isSunday()) {
                price += segment.distance * this.NORMAL_FARE
            }
        } 
        return (price < this.MIN_PRICE) ? this.MIN_PRICE : price;
    }
}