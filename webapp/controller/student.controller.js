sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageBox",
    "sap/ui/model/json/JSONModel"
], (Controller,MessageBox,JSONModel) => {
    "use strict";

    return Controller.extend("com.student.studentinfo.controller.student", {
        onInit() {
            var oData={
                "name":""
            }
            var oModel=new JSONModel(oData);
            this.getView().setModel(oModel,"empInfo");

            var oRelations=new JSONModel({
                default:"Father",
                relations:[
                    {"key":"F","text":"Father"},
                    {"key":"M","text":"Mother"},
                    {"key":"LG","text":"Legal Guardian"},
                    {"key":"B","text":"Brother"},
                    {"key":"S","text":"Sister"}
                ]
            });
            this.getView().setModel(oRelations,"rModel");




        },
        onMainPage(){
             this.getOwnerComponent().getRouter().navTo("Routecreatestudent")
          
        },
        onSubmitForm(){
          var empName = this.getView().getModel("empInfo").getProperty("/name");
             var that=this
    //         MessageBox.show(
	// 	           "Do you want to submit the Information ??", {
	// 		icon: MessageBox.Icon.INFORMATION,
	// 		title: "Submit Information",
	// 		actions: [MessageBox.Action.YES, MessageBox.Action.NO],
	// 		emphasizedAction: MessageBox.Action.YES,
	// 		onClose: function (oAction) {
               
    //             if(oAction==="YES"){
    //                   var oRouter=that.getOwnerComponent().getRouter();
    //                   oRouter.navTo("Routecreatestudent");
    //                   that.onClearForm();

    //             }
    //         }
	// 	}
	// );

    

        },
        onSubmitInput(oEvent){
            this.FirstName=oEvent.getParameter("value");
        },
        onClearForm(){
            this.getView().byId("_IdFirstName");
            this.FirstName;
        },
      
    });
});