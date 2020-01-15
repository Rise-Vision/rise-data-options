import { RiseElement } from "rise-common-component/src/rise-element.js";
import { version } from "./rise-data-options-version.js";

export default class RiseDataOptions extends RiseElement {

  static get properties() {
    return {
      value: {
        type: String,
        observer: "_valueChanged"
      },
      options: {
        type: String
      }
    }
  }

  // Event name constants
  static get EVENT_DATA_UPDATE() {
    return "data-update";
  }

  constructor() {
    super();

    this._setVersion( version );
  }

  _valueChanged(newValue) {
    super._sendEvent( RiseDataOptions.EVENT_DATA_UPDATE, {value: newValue});
  }
}

customElements.define("rise-data-options", RiseDataOptions);
