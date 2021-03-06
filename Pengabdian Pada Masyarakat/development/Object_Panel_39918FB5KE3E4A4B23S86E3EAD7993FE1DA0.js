var Object_Panel,
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

Object_Panel = (function(superClass) {
  extend(Object_Panel, superClass);


  /**
  * An UI panel object display a colored rectangle area on screen or can also
  * be completely transparent. A panel can be modal to block all user-input
  * for UI object placed behind it. 
  * 
  * So for example: To make a confirmation dialog
  * like "Do you really want to exit?" a panel is useful to avoid that the user
  * can click on other UI elements behind the confirmation dialog.
  *
  * @module ui
  * @class Object_Panel
  * @extends ui.Object_UIElement
  * @memberof ui
  * @constructor
   */

  function Object_Panel(x, y, width, height) {
    Object_Panel.__super__.constructor.call(this);
    this.dstRect.set(x || 0, y || 0, width || 100, height || 100);

    /**
    * The UI object's visual-component to display the game object on screen.
    * @property visual
    * @type gs.Component_Quad
     */
    this.visual = new gs.Component_Quad();

    /**
    * Indicates if the panel is modal. A modal panel blocks all user-input for UI objects
    * behind the panel.
    * @property modal
    * @type boolean
     */
    this.modal = false;
    this.addComponent(this.visual);
    this.addComponent(new gs.Component_PanelBehavior());
  }

  return Object_Panel;

})(ui.Object_UIElement);

ui.Object_Panel = Object_Panel;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQU9BLElBQUEsWUFBQTtFQUFBOzs7QUFBTTs7OztBQUNGOzs7Ozs7Ozs7Ozs7Ozs7O0VBZWEsc0JBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxLQUFQLEVBQWMsTUFBZDtJQUNULDRDQUFBO0lBQ0EsSUFBQyxDQUFBLE9BQU8sQ0FBQyxHQUFULENBQWEsQ0FBQSxJQUFLLENBQWxCLEVBQXFCLENBQUEsSUFBSyxDQUExQixFQUE2QixLQUFBLElBQVMsR0FBdEMsRUFBMkMsTUFBQSxJQUFVLEdBQXJEOztBQUVBOzs7OztJQUtBLElBQUMsQ0FBQSxNQUFELEdBQWMsSUFBQSxFQUFFLENBQUMsY0FBSCxDQUFBOztBQUVkOzs7Ozs7SUFNQSxJQUFDLENBQUEsS0FBRCxHQUFTO0lBRVQsSUFBQyxDQUFBLFlBQUQsQ0FBYyxJQUFDLENBQUEsTUFBZjtJQUNBLElBQUMsQ0FBQSxZQUFELENBQWtCLElBQUEsRUFBRSxDQUFDLHVCQUFILENBQUEsQ0FBbEI7RUFwQlM7Ozs7R0FoQlUsRUFBRSxDQUFDOztBQXNDOUIsRUFBRSxDQUFDLFlBQUgsR0FBa0IiLCJzb3VyY2VzQ29udGVudCI6WyIjID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiNcbiMgICBTY3JpcHQ6IE9iamVjdF9QYW5lbFxuI1xuIyAgICQkQ09QWVJJR0hUJCRcbiNcbiMgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuY2xhc3MgT2JqZWN0X1BhbmVsIGV4dGVuZHMgdWkuT2JqZWN0X1VJRWxlbWVudFxuICAgICMjIypcbiAgICAqIEFuIFVJIHBhbmVsIG9iamVjdCBkaXNwbGF5IGEgY29sb3JlZCByZWN0YW5nbGUgYXJlYSBvbiBzY3JlZW4gb3IgY2FuIGFsc29cbiAgICAqIGJlIGNvbXBsZXRlbHkgdHJhbnNwYXJlbnQuIEEgcGFuZWwgY2FuIGJlIG1vZGFsIHRvIGJsb2NrIGFsbCB1c2VyLWlucHV0XG4gICAgKiBmb3IgVUkgb2JqZWN0IHBsYWNlZCBiZWhpbmQgaXQuIFxuICAgICogXG4gICAgKiBTbyBmb3IgZXhhbXBsZTogVG8gbWFrZSBhIGNvbmZpcm1hdGlvbiBkaWFsb2dcbiAgICAqIGxpa2UgXCJEbyB5b3UgcmVhbGx5IHdhbnQgdG8gZXhpdD9cIiBhIHBhbmVsIGlzIHVzZWZ1bCB0byBhdm9pZCB0aGF0IHRoZSB1c2VyXG4gICAgKiBjYW4gY2xpY2sgb24gb3RoZXIgVUkgZWxlbWVudHMgYmVoaW5kIHRoZSBjb25maXJtYXRpb24gZGlhbG9nLlxuICAgICpcbiAgICAqIEBtb2R1bGUgdWlcbiAgICAqIEBjbGFzcyBPYmplY3RfUGFuZWxcbiAgICAqIEBleHRlbmRzIHVpLk9iamVjdF9VSUVsZW1lbnRcbiAgICAqIEBtZW1iZXJvZiB1aVxuICAgICogQGNvbnN0cnVjdG9yXG4gICAgIyMjICBcbiAgICBjb25zdHJ1Y3RvcjogKHgsIHksIHdpZHRoLCBoZWlnaHQpIC0+XG4gICAgICAgIHN1cGVyKClcbiAgICAgICAgQGRzdFJlY3Quc2V0KHggfHwgMCwgeSB8fCAwLCB3aWR0aCB8fCAxMDAsIGhlaWdodCB8fCAxMDApXG4gICAgICAgIFxuICAgICAgICAjIyMqXG4gICAgICAgICogVGhlIFVJIG9iamVjdCdzIHZpc3VhbC1jb21wb25lbnQgdG8gZGlzcGxheSB0aGUgZ2FtZSBvYmplY3Qgb24gc2NyZWVuLlxuICAgICAgICAqIEBwcm9wZXJ0eSB2aXN1YWxcbiAgICAgICAgKiBAdHlwZSBncy5Db21wb25lbnRfUXVhZFxuICAgICAgICAjIyNcbiAgICAgICAgQHZpc3VhbCA9IG5ldyBncy5Db21wb25lbnRfUXVhZCgpXG4gICAgICAgIFxuICAgICAgICAjIyMqXG4gICAgICAgICogSW5kaWNhdGVzIGlmIHRoZSBwYW5lbCBpcyBtb2RhbC4gQSBtb2RhbCBwYW5lbCBibG9ja3MgYWxsIHVzZXItaW5wdXQgZm9yIFVJIG9iamVjdHNcbiAgICAgICAgKiBiZWhpbmQgdGhlIHBhbmVsLlxuICAgICAgICAqIEBwcm9wZXJ0eSBtb2RhbFxuICAgICAgICAqIEB0eXBlIGJvb2xlYW5cbiAgICAgICAgIyMjXG4gICAgICAgIEBtb2RhbCA9IG5vXG4gICAgICAgIFxuICAgICAgICBAYWRkQ29tcG9uZW50KEB2aXN1YWwpXG4gICAgICAgIEBhZGRDb21wb25lbnQobmV3IGdzLkNvbXBvbmVudF9QYW5lbEJlaGF2aW9yKCkpXG4gICAgICAgIFxudWkuT2JqZWN0X1BhbmVsID0gT2JqZWN0X1BhbmVsIl19
//# sourceURL=Object_Panel_66.js