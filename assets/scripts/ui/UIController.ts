//import DialogsController from "./DialogsController";

const {ccclass, property} = cc._decorator;

@ccclass
export default class UIController extends cc.Component {

    @property(cc.Label)
    balanceLabel: cc.Label = null;

    // @property(DialogsController)
    // balanceLabel2: DialogsController = null;

    // onLoad () {}

    start () {

    }

    // update (dt) {}

}
