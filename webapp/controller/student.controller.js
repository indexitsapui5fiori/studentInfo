sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageBox",
    "sap/ui/model/json/JSONModel",
    "sap/ui/core/Fragment"
], (Controller, MessageBox, JSONModel, Fragment) => {
    "use strict";

    return Controller.extend("com.student.studentinfo.controller.student", {
        onInit() {
            //Load the json
            var oNationalityModel = new sap.ui.model.json.JSONModel(
                sap.ui.require.toUrl("com/student/studentinfo/model/nationality.json")
            );
            this.getView().setModel(oNationalityModel, "nationalModel");

            var oData = {
                "name": ""
            }
            var oModel = new JSONModel(oData);
            this.getView().setModel(oModel, "empInfo");
            var oRelations = new JSONModel({
                default: "Father",
                relations: [
                    { "key": "F", "text": "Father" },
                    { "key": "M", "text": "Mother" },
                    { "key": "LG", "text": "Legal Guardian" },
                    { "key": "B", "text": "Brother" },
                    { "key": "S", "text": "Sister" }
                ]
            });
            this.getView().setModel(oRelations, "rModel");
            // var nationality = new JSONModel();
            // this.getView().setModel(nationality, "nationalModel");
            //  Nationality external JSON
            var oNationalityModel = new sap.ui.model.json.JSONModel();
            oNationalityModel.loadData("model/nationality.json");
            this.getView().setModel(oNationalityModel, "nationalModel");
        },
        onMainPage() {
            this.getOwnerComponent().getRouter().navTo("RouteoverviewStudentInfo")
        },
        onSubmitForm() {
            var empname = this.getView().getModel("empInfo").getProperty("/name");
            var that = this
            MessageBox.show(
                "Do you want to submit the Information ??", {
                icon: MessageBox.Icon.INFORMATION,
                title: "Submit Information",
                actions: [MessageBox.Action.YES, MessageBox.Action.NO],
                emphasizedAction: MessageBox.Action.YES,
                onClose: function (oAction) {
                    if (oAction === "YES") {
                        var oRouter = that.getOwnerComponent().getRouter();
                        oRouter.navTo("RouteoverviewStudentInfo");
                        that.onClearForm();
                    }
                }
            });
        },
        onSubmitInput(oEvent) {
            this.Firstname = oEvent.getParameter("value");
        },
        onClearForm() {
            this.getView().byId("_IdFirstname");
            this.Firstname;
        },
        // onVH_Nationality(oEvent) {
        //     var oView = this.getView();
        //     if (!this._oDialog) {
        //         Fragment.load({
        //             id: oView.getId(),
        //             name: "com.student.studentinfo.view.nationality",
        //             controller: this
        //         }).then(function (oDialog) {
        //             this._oDialog = oDialog;
        //             oView.addDependent(oDialog);
        //             oDialog.open();
        //         }.bind(this));
        //     }
        //     else {
        //         this._oDialog.open()
        //     }
        // },
        onVH_Nationality: function (oEvent) {
            this._oSourceInput = oEvent.getSource();
            var oView = this.getView();
            if (!this._oDialog) {
                sap.ui.core.Fragment.load({
                    id: oView.getId(),
                    name: "com.student.studentinfo.view.nationality",
                    controller: this
                }).then(function (oDialog) {
                    this._oDialog = oDialog;
                    oView.addDependent(oDialog);
                    oDialog.open();
                }.bind(this));
            } else {
                this._oDialog.open();
            }
        },
        onClose: function () {
            this._oDialog.close();
            //this._oDialog.destroy();
        },
        onCountryClick: function (oEvent) {
            var oItem = oEvent.getSource();
            var oCtx = oItem.getBindingContext("nationalModel");
            var sCountryName = oCtx.getProperty("name");
            var sCountryCode = oCtx.getProperty("code");
            // Set value back to calling Input
            if (this._oSourceInput) {
                this._oSourceInput.setValue(sCountryName);
            }
            // OPTIONAL: store code in model
            this.getView().getModel("empInfo").setProperty(
                "/nationalityCode",
                sCountryCode
            );
            this._oDialog.close();
        },

        onNationalitySearch: function (oEvent) {
            var sValue = oEvent.getParameter("newValue");

            var oList = sap.ui.getCore().byId(
                this.getView().getId() + "--idList"
            );
            var oBinding = oList.getBinding("items");
            var aFilters = [];
            if (sValue) {
                aFilters.push(new sap.ui.model.Filter("name",
                    sap.ui.model.FilterOperator.Contains, sValue));
            }
            oBinding.filter(aFilters);
        }

    });
});