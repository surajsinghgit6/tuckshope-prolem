import { Tuckshope } from "./tuckShope";
import { Vendingmachine } from "./vendingMachine";

class Main

{
    private tuckshope:Tuckshope[]=[];
    constructor()
    {
        let tuckShopeobj1:Tuckshope=new Tuckshope();
        let vendingMachineobj1:Vendingmachine=new Vendingmachine();
        vendingMachineobj1.setDrinkName("coffee")
        vendingMachineobj1.setQuantityOfDrink(100);
        vendingMachineobj1.setNoOfCupsRequired(10);
        vendingMachineobj1.setCostOfOneCup(10);

        tuckShopeobj1.setMachineName("CoffeeMachine");
        tuckShopeobj1.setMachineId(1);
        tuckShopeobj1.setPowerType("b");
        tuckShopeobj1.setVendingMachine(vendingMachineobj1);

        
        let vendingMachineobj2:Vendingmachine=new Vendingmachine("tea",80,8,5);
        let tuckShopeobj2:Tuckshope=new Tuckshope("teaMachine",2,"e",vendingMachineobj2);

        let vendingMachineobj3:Vendingmachine=new Vendingmachine("limka",120,12,8);
        let tuckShopeobj3:Tuckshope=new Tuckshope("SoftDrink",3,"e",vendingMachineobj3);

        let vendingMachineobj4:Vendingmachine=new Vendingmachine("maaza",150,15,15);
        let tuckShopeobj4:Tuckshope=new Tuckshope("SweetDrinks",4,"b",vendingMachineobj4);

        let vendingMachineobj5:Vendingmachine=new Vendingmachine("cococola",100,10,10);
        let tuckShopeobj5:Tuckshope=new Tuckshope("SoftDrink",5,"e",vendingMachineobj5);

        this.tuckshope.push(tuckShopeobj1,tuckShopeobj2,tuckShopeobj3,tuckShopeobj4,tuckShopeobj5);
    }
    
    public printData():void{
        console.table(this.tuckshope)
    }
    
    public searchDrinkName()
    {
       let searchArray:Tuckshope[] = [];
        searchArray = this.tuckshope.filter(element => element.getVendingMachine().getDrinkName() == "coffee" )
       searchArray.forEach(element =>
        {
           console.log(element.getMachineName()+" "+element.getVendingMachine().getDrinkName() +" "+element.getVendingMachine().getBill()) 
        });
    }
    public sortMachineName():void
    {
        this.tuckshope.sort(function(a,b) 
        {
            if (a.getMachineName() < b.getMachineName())  return -1;
            if (a.getMachineName() > b.getMachineName())  return 1;
            return 0;
        });
        console.table(this.tuckshope);
    }
   public sortDrinkName():void
   {
       let sortArray:Tuckshope[]=[];
        sortArray=this.tuckshope.sort(function(a,b) 
        {
            if (a.getVendingMachine().getDrinkName() < b.getVendingMachine().getDrinkName())  return -1;
            if (a.getVendingMachine().getDrinkName() > b.getVendingMachine().getDrinkName())  return 1;
            return 0;
        });
        sortArray.forEach(element=>
            {
                console.table(element.getVendingMachine())
            });
   }
   public searchCostOfDrinks():void
   {
    let searchCost:Tuckshope[] = [];
    searchCost = this.tuckshope.filter(element => element.getVendingMachine().getCostOfOneCup() == 10)
   searchCost.forEach(element =>
    {
       console.log(element.getVendingMachine().getDrinkName()+" "+element.getVendingMachine().getCostOfOneCup()+" "+element.getVendingMachine().getQuantityOfDrink()) 
    });
   }
}
var main:Main=new Main();
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
