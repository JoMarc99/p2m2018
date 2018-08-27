
/**
* An enumeration of easing types.
*
* @module gs
* @class EasingTypes
* @memberof gs
* @constructor
* @static
* @final
 */
var EasingTypes;

EasingTypes = (function() {
  function EasingTypes() {}

  EasingTypes.initialize = function() {

    /**
    * @property EASE_IN
    * @type number
    * @static
    * @final
     */
    this.EASE_IN = 1;

    /**
    * @property EASE_OUT
    * @type number
    * @static
    * @final
     */
    this.EASE_OUT = 0;

    /**
    * @property EASE_IN_OUT
    * @type number
    * @static
    * @final
     */
    this.EASE_IN_OUT = 2;

    /**
    * @property EASE_LINEAR
    * @type number
    * @static
    * @final
     */
    this.EASE_LINEAR = 0;

    /**
    * @property EASE_QUADRATIC
    * @type number
    * @static
    * @final
     */
    this.EASE_QUADRATIC = 1;

    /**
    * @property EASE_CUBIC
    * @type number
    * @static
    * @final
     */
    this.EASE_CUBIC = 2;

    /**
    * @property EASE_QUARTIC
    * @type number
    * @static
    * @final
     */
    this.EASE_QUARTIC = 3;

    /**
    * @property EASE_QUINTIC
    * @type number
    * @static
    * @final
     */
    this.EASE_QUINTIC = 4;

    /**
    * @property EASE_SINUSOIDAL
    * @type number
    * @static
    * @final
     */
    this.EASE_SINUSOIDAL = 5;

    /**
    * @property EASE_EXPONENTIAL
    * @type number
    * @static
    * @final
     */
    this.EASE_EXPONENTIAL = 6;

    /**
    * @property EASE_CIRCULAR
    * @type number
    * @static
    * @final
     */
    this.EASE_CIRCULAR = 7;

    /**
    * @property EASE_ELASTIC
    * @type number
    * @static
    * @final
     */
    this.EASE_ELASTIC = 8;

    /**
    * @property EASE_BOUNCE
    * @type number
    * @static
    * @final
     */
    this.EASE_BOUNCE = 9;

    /**
    * @property EASE_BACK
    * @type number
    * @static
    * @final
     */
    return this.EASE_BACK = 10;
  };

  return EasingTypes;

})();

EasingTypes.initialize();

gs.EasingTypes = EasingTypes;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFRQTs7Ozs7Ozs7OztBQUFBLElBQUE7O0FBVU07OztFQUNGLFdBQUMsQ0FBQSxVQUFELEdBQWEsU0FBQTs7QUFDVDs7Ozs7O0lBTUEsSUFBQyxDQUFBLE9BQUQsR0FBVzs7QUFDWDs7Ozs7O0lBTUEsSUFBQyxDQUFBLFFBQUQsR0FBWTs7QUFDWjs7Ozs7O0lBTUEsSUFBQyxDQUFBLFdBQUQsR0FBZTs7QUFDZjs7Ozs7O0lBTUEsSUFBQyxDQUFBLFdBQUQsR0FBZTs7QUFDZjs7Ozs7O0lBTUEsSUFBQyxDQUFBLGNBQUQsR0FBa0I7O0FBQ2xCOzs7Ozs7SUFNQSxJQUFDLENBQUEsVUFBRCxHQUFjOztBQUNkOzs7Ozs7SUFNQSxJQUFDLENBQUEsWUFBRCxHQUFnQjs7QUFDaEI7Ozs7OztJQU1BLElBQUMsQ0FBQSxZQUFELEdBQWdCOztBQUNoQjs7Ozs7O0lBTUEsSUFBQyxDQUFBLGVBQUQsR0FBbUI7O0FBQ25COzs7Ozs7SUFNQSxJQUFDLENBQUEsZ0JBQUQsR0FBb0I7O0FBQ3BCOzs7Ozs7SUFNQSxJQUFDLENBQUEsYUFBRCxHQUFpQjs7QUFDakI7Ozs7OztJQU1BLElBQUMsQ0FBQSxZQUFELEdBQWdCOztBQUNoQjs7Ozs7O0lBTUEsSUFBQyxDQUFBLFdBQUQsR0FBZTs7QUFDZjs7Ozs7O1dBTUEsSUFBQyxDQUFBLFNBQUQsR0FBYTtFQWxHSjs7Ozs7O0FBb0dqQixXQUFXLENBQUMsVUFBWixDQUFBOztBQUNBLEVBQUUsQ0FBQyxXQUFILEdBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiIyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4jXG4jICAgU2NyaXB0OiBFYXNpbmdUeXBlc1xuI1xuIyAgICQkQ09QWVJJR0hUJCRcbiNcbiMgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4jIyMqXG4qIEFuIGVudW1lcmF0aW9uIG9mIGVhc2luZyB0eXBlcy5cbipcbiogQG1vZHVsZSBnc1xuKiBAY2xhc3MgRWFzaW5nVHlwZXNcbiogQG1lbWJlcm9mIGdzXG4qIEBjb25zdHJ1Y3RvclxuKiBAc3RhdGljXG4qIEBmaW5hbFxuIyMjICBcbmNsYXNzIEVhc2luZ1R5cGVzXG4gICAgQGluaXRpYWxpemU6IC0+XG4gICAgICAgICMjIypcbiAgICAgICAgKiBAcHJvcGVydHkgRUFTRV9JTlxuICAgICAgICAqIEB0eXBlIG51bWJlclxuICAgICAgICAqIEBzdGF0aWNcbiAgICAgICAgKiBAZmluYWxcbiAgICAgICAgIyMjXG4gICAgICAgIEBFQVNFX0lOID0gMVxuICAgICAgICAjIyMqXG4gICAgICAgICogQHByb3BlcnR5IEVBU0VfT1VUXG4gICAgICAgICogQHR5cGUgbnVtYmVyXG4gICAgICAgICogQHN0YXRpY1xuICAgICAgICAqIEBmaW5hbFxuICAgICAgICAjIyNcbiAgICAgICAgQEVBU0VfT1VUID0gMFxuICAgICAgICAjIyMqXG4gICAgICAgICogQHByb3BlcnR5IEVBU0VfSU5fT1VUXG4gICAgICAgICogQHR5cGUgbnVtYmVyXG4gICAgICAgICogQHN0YXRpY1xuICAgICAgICAqIEBmaW5hbFxuICAgICAgICAjIyNcbiAgICAgICAgQEVBU0VfSU5fT1VUID0gMlxuICAgICAgICAjIyMqXG4gICAgICAgICogQHByb3BlcnR5IEVBU0VfTElORUFSXG4gICAgICAgICogQHR5cGUgbnVtYmVyXG4gICAgICAgICogQHN0YXRpY1xuICAgICAgICAqIEBmaW5hbFxuICAgICAgICAjIyNcbiAgICAgICAgQEVBU0VfTElORUFSID0gMFxuICAgICAgICAjIyMqXG4gICAgICAgICogQHByb3BlcnR5IEVBU0VfUVVBRFJBVElDXG4gICAgICAgICogQHR5cGUgbnVtYmVyXG4gICAgICAgICogQHN0YXRpY1xuICAgICAgICAqIEBmaW5hbFxuICAgICAgICAjIyNcbiAgICAgICAgQEVBU0VfUVVBRFJBVElDID0gMVxuICAgICAgICAjIyMqXG4gICAgICAgICogQHByb3BlcnR5IEVBU0VfQ1VCSUNcbiAgICAgICAgKiBAdHlwZSBudW1iZXJcbiAgICAgICAgKiBAc3RhdGljXG4gICAgICAgICogQGZpbmFsXG4gICAgICAgICMjI1xuICAgICAgICBARUFTRV9DVUJJQyA9IDJcbiAgICAgICAgIyMjKlxuICAgICAgICAqIEBwcm9wZXJ0eSBFQVNFX1FVQVJUSUNcbiAgICAgICAgKiBAdHlwZSBudW1iZXJcbiAgICAgICAgKiBAc3RhdGljXG4gICAgICAgICogQGZpbmFsXG4gICAgICAgICMjI1xuICAgICAgICBARUFTRV9RVUFSVElDID0gM1xuICAgICAgICAjIyMqXG4gICAgICAgICogQHByb3BlcnR5IEVBU0VfUVVJTlRJQ1xuICAgICAgICAqIEB0eXBlIG51bWJlclxuICAgICAgICAqIEBzdGF0aWNcbiAgICAgICAgKiBAZmluYWxcbiAgICAgICAgIyMjXG4gICAgICAgIEBFQVNFX1FVSU5USUMgPSA0XG4gICAgICAgICMjIypcbiAgICAgICAgKiBAcHJvcGVydHkgRUFTRV9TSU5VU09JREFMXG4gICAgICAgICogQHR5cGUgbnVtYmVyXG4gICAgICAgICogQHN0YXRpY1xuICAgICAgICAqIEBmaW5hbFxuICAgICAgICAjIyNcbiAgICAgICAgQEVBU0VfU0lOVVNPSURBTCA9IDVcbiAgICAgICAgIyMjKlxuICAgICAgICAqIEBwcm9wZXJ0eSBFQVNFX0VYUE9ORU5USUFMXG4gICAgICAgICogQHR5cGUgbnVtYmVyXG4gICAgICAgICogQHN0YXRpY1xuICAgICAgICAqIEBmaW5hbFxuICAgICAgICAjIyNcbiAgICAgICAgQEVBU0VfRVhQT05FTlRJQUwgPSA2XG4gICAgICAgICMjIypcbiAgICAgICAgKiBAcHJvcGVydHkgRUFTRV9DSVJDVUxBUlxuICAgICAgICAqIEB0eXBlIG51bWJlclxuICAgICAgICAqIEBzdGF0aWNcbiAgICAgICAgKiBAZmluYWxcbiAgICAgICAgIyMjXG4gICAgICAgIEBFQVNFX0NJUkNVTEFSID0gN1xuICAgICAgICAjIyMqXG4gICAgICAgICogQHByb3BlcnR5IEVBU0VfRUxBU1RJQ1xuICAgICAgICAqIEB0eXBlIG51bWJlclxuICAgICAgICAqIEBzdGF0aWNcbiAgICAgICAgKiBAZmluYWxcbiAgICAgICAgIyMjXG4gICAgICAgIEBFQVNFX0VMQVNUSUMgPSA4XG4gICAgICAgICMjIypcbiAgICAgICAgKiBAcHJvcGVydHkgRUFTRV9CT1VOQ0VcbiAgICAgICAgKiBAdHlwZSBudW1iZXJcbiAgICAgICAgKiBAc3RhdGljXG4gICAgICAgICogQGZpbmFsXG4gICAgICAgICMjI1xuICAgICAgICBARUFTRV9CT1VOQ0UgPSA5XG4gICAgICAgICMjIypcbiAgICAgICAgKiBAcHJvcGVydHkgRUFTRV9CQUNLXG4gICAgICAgICogQHR5cGUgbnVtYmVyXG4gICAgICAgICogQHN0YXRpY1xuICAgICAgICAqIEBmaW5hbFxuICAgICAgICAjIyNcbiAgICAgICAgQEVBU0VfQkFDSyA9IDEwXG4gICAgXG5FYXNpbmdUeXBlcy5pbml0aWFsaXplKClcbmdzLkVhc2luZ1R5cGVzID0gRWFzaW5nVHlwZXNcbiAgIl19
//# sourceURL=EasingTypes_64.js