/*global QUnit*/

sap.ui.define([
	"com/student/studentinfo/controller/createstudent.controller"
], function (Controller) {
	"use strict";

	QUnit.module("createstudent Controller");

	QUnit.test("I should test the createstudent controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
