"use strict";
exports.__esModule = true;
var Tuckshope = /** @class */ (function () {
    function Tuckshope(machineName, machineId, powerType, vendingMachine) {
        this.machineName = machineName;
        this.machineId = machineId;
        this.powerType = powerType;
        this.vendingMachine = vendingMachine;
    }
    Tuckshope.prototype.setMachineName = function (machineName) {
        this.machineName = machineName;
    };
    Tuckshope.prototype.getMachineName = function () {
        return this.machineName;
    };
    Tuckshope.prototype.setMachineId = function (machineId) {
        this.machineId = machineId;
    };
    Tuckshope.prototype.getMachineId = function () {
        return this.machineId;
    };
    Tuckshope.prototype.setPowerType = function (powerType) {
        this.powerType = powerType;
    };
    Tuckshope.prototype.getPowerType = function () {
        return this.powerType;
    };
    Tuckshope.prototype.setVendingMachine = function (vendingMachine) {
        this.vendingMachine = vendingMachine;
    };
    Tuckshope.prototype.getVendingMachine = function () {
        return this.vendingMachine;
    };
    return Tuckshope;
}());
exports.Tuckshope = Tuckshope;
