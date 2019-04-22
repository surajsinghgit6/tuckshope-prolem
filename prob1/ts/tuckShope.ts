import { Vendingmachine } from "./vendingMachine";

export class Tuckshope
{
    private machineName : string;
    private machineId : number;
    private powerType : string;
    private vendingMachine : Vendingmachine;
    constructor(machineName?:string,machineId?:number,powerType?:string,vendingMachine?:Vendingmachine)
    {
        this.machineName=machineName;
        this.machineId=machineId;
        this.powerType=powerType;
        this.vendingMachine=vendingMachine;
    }
    public setMachineName(machineName:string):void
    {
        this.machineName=machineName;
    }
    public getMachineName():string
    {
        return this.machineName;
    }



    public setMachineId(machineId:number):void
    {
        this.machineId=machineId;
    }
    public getMachineId():number
    {
        return this.machineId;
    }



    public setPowerType(powerType:string):void
    {
        this.powerType=powerType;
    }
    public getPowerType():string
    {
        return this.powerType;
    }


    public  setVendingMachine(vendingMachine:Vendingmachine):void 
    {
		this.vendingMachine = vendingMachine;
	}

    public  getVendingMachine():Vendingmachine
     {
		return this.vendingMachine;
	}
	



    
}