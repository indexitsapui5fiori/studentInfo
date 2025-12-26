/* global QUnit */
QUnit.config.autostart = false;

sap.ui.require(["com/student/studentinfo/test/integration/AllJourneys"
], function () {
	QUnit.start();
});
