sap.ui.define([
  "sap/ui/core/mvc/Controller",
  "sap/ui/model/Filter",
  "sap/ui/model/FilterOperator",
  "sap/m/MessageToast",
  "sap/m/MessageBox"
], function (Controller, Filter, FilterOperator, MessageToast, MessageBox) {
  "use strict";
  return Controller.extend("com.aifalabs.materiallist.controller.MainView", {
    onInit: function () {
      var oModel = this.getOwnerComponent().getModel();
      oModel.attachRequestFailed(function (oError) {
        MessageBox.error("Failed to load SAP data: " + (oError.getParameters().statusCode || ""));
      });
    },
    onRefresh: function () {
      var oBinding = this.byId("materialTable").getBinding("items");
      if (oBinding) { oBinding.refresh(); MessageToast.show("Refreshed."); }
    },
    onSearch: function (oEvent) {
      var sQuery = oEvent.getParameter("query");
      var aFilters = [];
      if (sQuery) {
        aFilters = [new Filter({
          filters: [
            new Filter("Material_Description", FilterOperator.Contains, sQuery),
            new Filter("MATERIAL_NUMBER", FilterOperator.Contains, sQuery)
          ],
          and: false
        })];
      }
      this.byId("materialTable").getBinding("items").filter(aFilters);
    }
  });
});