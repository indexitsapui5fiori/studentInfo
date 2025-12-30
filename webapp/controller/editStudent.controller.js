sap.ui.define([
  "sap/ui/core/mvc/Controller"
], (BaseController) => {
  "use strict";

  return BaseController.extend("com.student.studentinfo.controller.editStudent", {
      onInit() {
      },
      onBack:function(){
      this.getOwnerComponent().getRouter().navTo("RouteoverviewStudentInfo")
          
      }
  });
});