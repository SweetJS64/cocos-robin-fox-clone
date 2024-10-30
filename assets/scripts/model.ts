const {ccclass, property} = cc._decorator;

@ccclass
export default class model extends cc.Component {

    public Balance: number;
    public Stars: number;
    public City: number;

    public GradeConstruction1: number = 0;
    public GradeConstruction2: number = 0;
    public GradeConstruction3: number = 0;
    public GradeConstruction4: number = 0;
    public GradeConstruction5: number = 0;
    //leave only array?
    private _gradesArray: number [] = [
        this.GradeConstruction1,
        this.GradeConstruction2,
        this.GradeConstruction3,
        this.GradeConstruction4,
        this.GradeConstruction5
    ]

    private _updateModelInfo(){
        this.Balance //= networking.Balance;
        this.Stars //= networking.Stars;
        this.City //= networking.City;

        for (let i = 0; i < this._gradesArray.length; i++) {
            this._gradesArray[i] //= networking._gradesArray[i];            
        }
    }
    
    //updateNetworkingInfo()
}
