sap.ui.define([
    "sap/ui/core/mvc/Controller",
      "sap/ui/model/json/JSONModel"
], (Controller,JSONModel) => {
    "use strict";

    return Controller.extend("com.student.studentinfo.controller.overviewStudentInfo", {
        onInit() {

              var oRelations=new JSONModel({
               
                Students:[
                    {"StudId":"001",
                      "Merit":"",
                      "Name":"RAMA",
                      "Branch":"IT",
                      "Location":"HYD",
                      "Marks":"100%"

                    },
                   {"StudId":"002",
                      "Merit":"",
                      "Name":"Ganu",
                      "Branch":"Mech",
                      "Location":"Pune",
                      "Marks":"80%"

                    },
                     {"StudId":"003",
                      "Merit":"",
                      "Name":"Bihu",
                      "Branch":"Electronics",
                      "Location":"Chennai",
                      "Marks":"75%"

                    }
                
                ]
            });
            this.getView().setModel(oRelations,"sModel");
        },
        onItemPressTable:function(oEvent){
       
   var oRouter=this.getOwnerComponent().getRouter();
            oRouter.navTo("Routeeditstudent")

            
        },
        onCreateRecord:function(){
            var oRouter=this.getOwnerComponent().getRouter();
            oRouter.navTo("Routestudent")
        }
    });
});