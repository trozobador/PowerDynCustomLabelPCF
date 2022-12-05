/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
var pcf_tools_652ac3f36e1e4bca82eb3c1dc44e6fad;
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./PowerDynCustomLabelPCF/index.ts":
/*!*****************************************!*\
  !*** ./PowerDynCustomLabelPCF/index.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports.PowerDynCustomLabel = void 0;\n\nvar PowerDynCustomLabel =\n/** @class */\nfunction () {\n  /**\r\n   * Empty constructor.\r\n   */\n  function PowerDynCustomLabel() {}\n  /**\r\n   * Used to initialize the control instance. Controls can kick off remote server calls and other initialization actions here.\r\n   * Data-set values are not initialized here, use updateView.\r\n   * @param context The entire property bag available to control via Context Object; It contains values as set up by the customizer mapped to property names defined in the manifest, as well as utility functions.\r\n   * @param notifyOutputChanged A callback method to alert the framework that the control has new outputs ready to be retrieved asynchronously.\r\n   * @param state A piece of data that persists in one session for a single user. Can be set at any point in a controls life cycle by calling 'setControlState' in the Mode interface.\r\n   * @param container If a control is marked control-type='standard', it will receive an empty div element within which it can render its content.\r\n   */\n\n\n  PowerDynCustomLabel.prototype.init = function (context, notifyOutputChanged, state, container) {\n    //Used as part of the random value for the ID. \n    var randomValueIdArray = new Uint32Array(1); // Add control initialization code\t\t\n\n    this._context = context; //set context\n\n    this._notifyOutputChanged = notifyOutputChanged;\n    this._container = container; //set the container\t \n    //register eventhandler functions\n\n    this._fieldChanged = this.fieldChanged.bind(this); //label element\n\n    this._labelElement = document.createElement(\"label\"); //creates the label element\n\n    this._labelElement.id = \"powerDynCustomLabel_\" + crypto.getRandomValues(randomValueIdArray);\n\n    this._labelElement.setAttribute(\"id\", \"powerDynCustomLabel_\"); //Set the id \n\n\n    this._labelElement.innerHTML = \"NA\"; //Set NA as default\n    //br element\n\n    this._brElement = document.createElement(\"br\"); //Text Input element\n\n    this._textElement = document.createElement(\"input\");\n\n    this._textElement.setAttribute(\"id\", \"txtInput\");\n\n    this._textElement.addEventListener(\"change\", this._fieldChanged); //Add elements to the container\n\n\n    this._container.appendChild(this._labelElement); //add the label to the div\n\n\n    this._container.appendChild(this._brElement);\n\n    this._container.appendChild(this._textElement);\n  };\n  /**\r\n   * Called when any value in the property bag has changed. This includes field values, data-sets, global values such as container height and width, offline status, control metadata values such as label, visible, etc.\r\n   * @param context The entire property bag available to control via Context Object; It contains values as set up by the customizer mapped to names defined in the manifest, as well as utility functions\r\n   */\n\n\n  PowerDynCustomLabel.prototype.updateView = function (context) {\n    // Add code to update control view\t\t\n    this._context = context; //Set the label text to the input from the config\n\n    this._labelElement.innerHTML = this._context.parameters.customLabelProperty.raw;\n    /**\r\n     * Check if the field has data in it already.CRM attributes bound to the control properties.\r\n    */\n    // @ts-ignore\n\n    this._fieldName = this._context.parameters.fieldNameProperty.attributes.LogicalName; // @ts-ignore \n\n    var crmFieldStringsAttributeValue = Xrm.Page.getAttribute(this._fieldName).getValue(); // @ts-ignore\t\t\n\n    this._textElement.value = crmFieldStringsAttributeValue; // Used for when the field actually changes.\n    // @ts-ignore\n\n    Xrm.Page.getAttribute(this._fieldName).setValue(this._context.parameters.fieldNameProperty);\n  };\n  /**\r\n   * It is called by the framework prior to a control receiving new data.\r\n   * @returns an object based on nomenclature defined in manifest, expecting object[s] for property marked as “bound” or “output”\r\n   */\n\n\n  PowerDynCustomLabel.prototype.getOutputs = function () {\n    return {\n      fieldNameProperty: this._textElement.value\n    };\n  };\n  /**\r\n   * Called when the control is to be removed from the DOM tree. Controls should use this call for cleanup.\r\n   * i.e. cancelling any pending remote calls, removing listeners, etc.\r\n   */\n\n\n  PowerDynCustomLabel.prototype.destroy = function () {\n    // Add code to cleanup control if necessary\n    this._textElement.removeEventListener(\"change\", this._fieldChanged);\n  }; // event handlers\n\n\n  PowerDynCustomLabel.prototype.fieldChanged = function (evt) {\n    // this will call the getOutputs method.\n    this._notifyOutputChanged();\n  };\n\n  return PowerDynCustomLabel;\n}();\n\nexports.PowerDynCustomLabel = PowerDynCustomLabel;\n\n//# sourceURL=webpack://pcf_tools_652ac3f36e1e4bca82eb3c1dc44e6fad/./PowerDynCustomLabelPCF/index.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./PowerDynCustomLabelPCF/index.ts"](0, __webpack_exports__);
/******/ 	pcf_tools_652ac3f36e1e4bca82eb3c1dc44e6fad = __webpack_exports__;
/******/ 	
/******/ })()
;
if (window.ComponentFramework && window.ComponentFramework.registerControl) {
	ComponentFramework.registerControl('PowerDynControls.PowerDynCustomLabel', pcf_tools_652ac3f36e1e4bca82eb3c1dc44e6fad.PowerDynCustomLabel);
} else {
	var PowerDynControls = PowerDynControls || {};
	PowerDynControls.PowerDynCustomLabel = pcf_tools_652ac3f36e1e4bca82eb3c1dc44e6fad.PowerDynCustomLabel;
	pcf_tools_652ac3f36e1e4bca82eb3c1dc44e6fad = undefined;
}