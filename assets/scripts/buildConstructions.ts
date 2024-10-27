const {ccclass, property} = cc._decorator;

@ccclass
export default class buildConstructions extends cc.Component {

    //obratit'sya k roditelyu
    @property(cc.Node)
    construction1: cc.Node = null;
    @property(cc.Node)
    construction2: cc.Node = null;
    @property(cc.Node)
    construction3: cc.Node = null;
    @property(cc.Node)
    construction4: cc.Node = null;
    @property(cc.Node)
    construction5: cc.Node = null;
    // onLoad () {}

    start () {

    }


}
