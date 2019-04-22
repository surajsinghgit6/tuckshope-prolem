"use strict";
exports.__esModule = true;
var Vendingmachine = /** @class */ (function () {
    function Vendingmachine(drinkName, quantityofDrink, noOfCupsRequired, costOfOneCup) {
        this.drinkName = drinkName;
        this.quantityofDrink = quantityofDrink;
        this.noOfCupsRequired = noOfCupsRequired;
        this.costOfOneCup = costOfOneCup;
    }
    Vendingmachine.prototype.setDrinkName = function (drinkName) {
        this.drinkName = drinkName;
    };
    Vendingmachine.prototype.getDrinkName = function () {
        return this.drinkName;
    };
    Vendingmachine.prototype.setQuantityOfDrink = function (quantityofDrink) {
        this.quantityofDrink = quantityofDrink;
    };
    Vendingmachine.prototype.getQuantityOfDrink = function () {
        return this.quantityofDrink;
    };
    Vendingmachine.prototype.setNoOfCupsRequired = function (noOfCupsRequired) {
        this.noOfCupsRequired = noOfCupsRequired;
    };
    Vendingmachine.prototype.getNoOfCupsRequired = function () {
        return this.noOfCupsRequired;
    };
    Vendingmachine.prototype.setCostOfOneCup = function (costOfOneCup) {
        this.costOfOneCup = costOfOneCup;
    };
    Vendingmachine.prototype.getCostOfOneCup = function () {
        return this.costOfOneCup;
    };
    Vendingmachine.prototype.getBill = function () {
        return ((this.noOfCupsRequired * this.costOfOneCup) - ((this.noOfCupsRequired * this.costOfOneCup) / 10));
    };
    return Vendingmachine;
}());
exports.Vendingmachine = Vendingmachine;
