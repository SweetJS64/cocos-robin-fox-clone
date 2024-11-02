const {ccclass, property} = cc._decorator;

@ccclass
export default class ScrollingMap extends cc.Component {

    goToSlots(){
        let wrapMode = cc.WrapMode.Normal; 
        this._playScroll(wrapMode);
    }

    goToHome(){
        let wrapMode = cc.WrapMode.Reverse; 
        this._playScroll(wrapMode);
    }
    
    private _playScroll(wrapMode: cc.WrapMode){
        const anim = this.getComponent(cc.Animation);
        anim.play('scrollingMainMap').wrapMode = wrapMode; 
        anim.play('scrollingMainMap');
    }
}
