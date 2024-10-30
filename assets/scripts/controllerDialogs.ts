const {ccclass, property} = cc._decorator;

@ccclass
export default class controllerDialogs extends cc.Component {

    @property(cc.Node)
    darkeningBg: cc.Node = null;

    @property(cc.Node)
    mainMenu: cc.Node = null;
    @property(cc.Node)
    buildDialog: cc.Node = null;
    @property(cc.Node)
    sharingDialog: cc.Node = null;

    private _canvas: cc.Canvas;
    private _closePosMenu: cc.Vec3;
    private _openPosMenu: cc.Vec3;
    private _closePosDialogs: cc.Vec3;
    private _openPosDialogs: cc.Vec3;
    private _dialogsArray: cc.Node [];

    protected onLoad() {
        this._dialogsArray = [this.buildDialog, this.sharingDialog];

        this._getCanvas(); 
        this._setPosValueMenu()
        this._setStartPropertiesMenu();
        this._setPosValueDialogs();
        this._setStartPropertiesDialogs();  
    }

    private _getCanvas() { 
        let checkedNode = this.node;
        let canvas = checkedNode.getComponent(cc.Canvas);
        while (!canvas) {
            checkedNode = checkedNode.parent;
            canvas = checkedNode.getComponent(cc.Canvas);
        }
        this._canvas = canvas;
    }

    //set settings mainMenu

    private _setPosValueMenu() {
        let closePosMenuX = this._canvas.designResolution.width/2 + this.mainMenu.width/2;
        let openPosMenuX = this._canvas.designResolution.width/2 - this.mainMenu.width/2;
        this._closePosMenu = new cc.Vec3(closePosMenuX, 0, 0);
        this._openPosMenu = new cc.Vec3(openPosMenuX, 0, 0);
    }

    private _setStartPropertiesMenu() {
        this.mainMenu.active = false;
        this.mainMenu.position = this._closePosMenu;
        this.mainMenu.height = this._canvas.designResolution.height;
    }

    //set settings other dialogs

    private _setPosValueDialogs() {
        let closePosDialogsY = -(this._canvas.designResolution.height/2 + this.buildDialog.height/2);
        this._closePosDialogs = new cc.Vec3(0, closePosDialogsY, 0);
        this._openPosDialogs = new cc.Vec3(0, 0, 0);
    }

    private _setStartPropertiesDialogs() {
        for (let i = 0; i < this._dialogsArray.length; i++) {
            this._dialogsArray[i].active = false;
            this._dialogsArray[i].position = this._closePosDialogs;
        }        
    }

    //main functions of the movement

    private _openDialog(dialogNode: cc.Node, openPos: cc.Vec3) {
        this.darkeningBg.active = true;
        dialogNode.active = true;
        cc.tween(dialogNode).to(0.3, { position: openPos }).start();        
    }

    private _closeDialog(dialogNode: cc.Node, closePos: cc.Vec3) {
        cc.tween(dialogNode).to(0.3, { position: closePos })
        .call(() => {
            dialogNode.active = false;
            this.darkeningBg.active = false;
        }).start();
    }

    //functions for buttons

    openMainMenu(){
        this._openDialog(this.mainMenu, this._openPosMenu);
    }

    closeMainMenu(){
        this._closeDialog(this.mainMenu, this._closePosMenu);
    }

    openBuildDialog(){
        this._openDialog(this.buildDialog, this._openPosDialogs);
    }

    closeBuildDialog(){
        this._closeDialog(this.buildDialog, this._closePosDialogs);
    }

    openSharingDialog(){
        this._openDialog(this.sharingDialog, this._openPosDialogs);
    }

    closeSharingDialog(){
        this._closeDialog(this.sharingDialog, this._closePosDialogs);
    }
}
