"use strict";
exports.__esModule = true;
var tuckShope_1 = require("./tuckShope");
var vendingMachine_1 = require("./vendingMachine");
var Main = /** @class */ (function () {
    function Main() {
        this.tuckshope = [];
        var tuckShopeobj1 = new tuckShope_1.Tuckshope();
        var vendingMachineobj1 = new vendingMachine_1.Vendingmachine();
        vendingMachineobj1.setDrinkName("coffee");
        vendingMachineobj1.setQuantityOfDrink(100);
        vendingMachineobj1.setNoOfCupsRequired(10);
        vendingMachineobj1.setCostOfOneCup(10);
        tuckShopeobj1.setMachineName("CoffeeMachine");
        tuckShopeobj1.setMachineId(1);
        tuckShopeobj1.setPowerType("b");
        tuckShopeobj1.setVendingMachine(vendingMachineobj1);
        var vendingMachineobj2 = new vendingMachine_1.Vendingmachine("tea", 80, 8, 5);
        var tuckShopeobj2 = new tuckShope_1.Tuckshope("teaMachine", 2, "e", vendingMachineobj2);
        var vendingMachineobj3 = new vendingMachine_1.Vendingmachine("limka", 120, 12, 8);
        var tuckShopeobj3 = new tuckShope_1.Tuckshope("SoftDrink", 3, "e", vendingMachineobj3);
        var vendingMachineobj4 = new vendingMachine_1.Vendingmachine("maaza", 150, 15, 15);
        var tuckShopeobj4 = new tuckShope_1.Tuckshope("SweetDrinks", 4, "b", vendingMachineobj4);
        var vendingMachineobj5 = new vendingMachine_1.Vendingmachine("cococola", 100, 10, 10);
        var tuckShopeobj5 = new tuckShope_1.Tuckshope("SoftDrink", 5, "e", vendingMachineobj5);
        this.tuckshope.push(tuckShopeobj1, tuckShopeobj2, tuckShopeobj3, tuckShopeobj4, tuckShopeobj5);
    }
    Main.prototype.printData = function () {
        console.table(this.tuckshope);
    };
    Main.prototype.searchDrinkName = function () {
        var searchArray = [];
        searchArray = this.tuckshope.filter(function (element) { return element.getVendingMachine().getDrinkName() == "coffee"; });
        searchArray.forEach(function (element) {
            console.log(element.getMachineName() + " " + element.getVendingMachine().getDrinkName() + " " + element.getVendingMachine().getBill());
        });
    };
    Main.prototype.sortMachineName = function () {
        this.tuckshope.sort(function (a, b) {
            if (a.getMachineName() < b.getMachineName())
                return -1;
            if (a.getMachineName() > b.getMachineName())
                return 1;
            return 0;
        });
        console.table(this.tuckshope);
    };
    Main.prototype.sortDrinkName = function () {
        var sortArray = [];
        sortArray = this.tuckshope.sort(function (a, b) {
            if (a.getVendingMachine().getDrinkName() < b.getVendingMachine().getDrinkName())
                return -1;
            if (a.getVendingMachine().getDrinkName() > b.getVendingMachine().getDrinkName())
                return 1;
            return 0;
        });
        sortArray.forEach(function (element) {
            console.table(element.getVendingMachine());
        });
    };
    Main.prototype.searchCostOfDrinks = function () {
        var searchCost = [];
        searchCost = this.tuckshope.filter(function (element) { return element.getVendingMachine().getCostOfOneCup() == 10; });
        searchCost.forEach(function (element) {
            console.log(element.getVendingMachine().getDrinkName() + " " + element.getVendingMachine().getCostOfOneCup() + " " + element.getVendingMachine().getQuantityOfDrink());
        });
    };
    return Main;
}());
var main = new Main();
main.printData();
main.searchDrinkName();
main.sortMachineName();
main.sortDrinkName();
main.searchCostOfDrinks();
// Search the object array and find out the details of the vendingMachine and tuckShop which is 
//having the cost of the drink (costOfOneCup) which is to be searched(Binary Search)
// for(let i=0 ;i<=Tuckshope.length;i++){
//     if(this.tuckshope[i].getVendingMachine().getDrinkName()=="coffee"){
//         console.log(this.tuckshope[i].getVendingMachine().getBill());
//     }}
