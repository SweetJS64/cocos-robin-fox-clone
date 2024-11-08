const {ccclass, property} = cc._decorator;

@ccclass
export default class BalanceController extends cc.Component {

    @property(cc.Label)
    balanceLabel: cc.Label = null;

    private _balance: number;

    start () {
        this.balanceLabel.string = this._balance.toString();
    }

    buyConstruction(price: number) {
        if(this._balance < price){
            //call window "add money"
        }else{
            this._balance -= price;
            this.balanceLabel.string = this._balance.toString();
        }
        
    }
}
