export class Vendingmachine {
    private drinkName: string;
    private quantityofDrink: number;
    private noOfCupsRequired: number;
    private costOfOneCup: number;

    constructor(drinkName?: string, quantityofDrink?: number, noOfCupsRequired?: number, costOfOneCup?: number) {
        this.drinkName = drinkName;
        this.quantityofDrink = quantityofDrink;
        this.noOfCupsRequired = noOfCupsRequired;
        this.costOfOneCup = costOfOneCup;
    }


    public setDrinkName(drinkName: string): void {
        this.drinkName = drinkName;
    }
    public getDrinkName(): string {
        return this.drinkName;
    }



    public setQuantityOfDrink(quantityofDrink: number): void {
        this.quantityofDrink = quantityofDrink;
    }
    public getQuantityOfDrink(): number {
        return this.quantityofDrink;
    }



    public setNoOfCupsRequired(noOfCupsRequired: number): void {
        this.noOfCupsRequired = noOfCupsRequired;
    }
    public getNoOfCupsRequired(): number {
        return this.noOfCupsRequired;
    }



    public setCostOfOneCup(costOfOneCup: number): void {
        this.costOfOneCup = costOfOneCup;
    }
    public getCostOfOneCup(): number {
        return this.costOfOneCup;
    }

    public getBill(): number {
        return ((this.noOfCupsRequired * this.costOfOneCup) - ((this.noOfCupsRequired * this.costOfOneCup) / 10))
    }


}


