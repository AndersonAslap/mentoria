import { Ride } from './Ride'
import { Segment } from './Segment'

type SegmentProps = {
  distance: number,
  datetime: Date
}

export function calculateRide(segments: SegmentProps[]) {
  const ride = new Ride();
  for (const segment of segments) {
    ride.addSegment(new Segment(segment.distance, segment.datetime));
  } 
  return ride.calculatePrice();
}