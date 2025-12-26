sap.ui.define([
    "sap/ui/core/mvc/Controller"
], (Controller) => {
    "use strict";

    return Controller.extend("com.student.studentinfo.controller.createstudent", {
        onInit() {
        },
        onCreateRecord:function(){
            var oRouter=this.getOwnerComponent().getRouter();
            oRouter.navTo("Routestudent")
        }
    });
});