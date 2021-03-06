import { Loop } from '../../loop';
import { PointOnShape } from '../../point-on-shape';
/**
 * @hidden
 * Get useful points on the shape - these incude points of maximum curvature and
 * points at the bezier-bezier interfaces.
 * @param loop
 * @param additionalPointCount
 */
declare function createGetInterestingPointsOnLoop(maxFlatness?: number, maxLength?: number): (loop: Loop) => PointOnShape[];
export { createGetInterestingPointsOnLoop };
