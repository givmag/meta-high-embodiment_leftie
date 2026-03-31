gdjs.ConclusioneCode = {};
gdjs.ConclusioneCode.localVariables = [];
gdjs.ConclusioneCode.idToCallbackMap = new Map();
gdjs.ConclusioneCode.GDTextBoxBackgroundObjects1= [];
gdjs.ConclusioneCode.GDTextBoxBackgroundObjects2= [];
gdjs.ConclusioneCode.GDNextButtonObjects1= [];
gdjs.ConclusioneCode.GDNextButtonObjects2= [];
gdjs.ConclusioneCode.GDNewSpriteObjects1= [];
gdjs.ConclusioneCode.GDNewSpriteObjects2= [];
gdjs.ConclusioneCode.GDNewSprite4Objects1= [];
gdjs.ConclusioneCode.GDNewSprite4Objects2= [];
gdjs.ConclusioneCode.GDHandRObjects1= [];
gdjs.ConclusioneCode.GDHandRObjects2= [];
gdjs.ConclusioneCode.GDNewSprite3Objects1= [];
gdjs.ConclusioneCode.GDNewSprite3Objects2= [];
gdjs.ConclusioneCode.GDNewBBTextObjects1= [];
gdjs.ConclusioneCode.GDNewBBTextObjects2= [];
gdjs.ConclusioneCode.GDendObjects1= [];
gdjs.ConclusioneCode.GDendObjects2= [];


gdjs.ConclusioneCode.mapOfGDgdjs_9546ConclusioneCode_9546GDNewSprite3Objects1Objects = Hashtable.newFrom({"NewSprite3": gdjs.ConclusioneCode.GDNewSprite3Objects1});
gdjs.ConclusioneCode.mapOfGDgdjs_9546ConclusioneCode_9546GDNextButtonObjects1Objects = Hashtable.newFrom({"NextButton": gdjs.ConclusioneCode.GDNextButtonObjects1});
gdjs.ConclusioneCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NextButton"), gdjs.ConclusioneCode.GDNextButtonObjects1);
{for(var i = 0, len = gdjs.ConclusioneCode.GDNextButtonObjects1.length ;i < len;++i) {
    gdjs.ConclusioneCode.GDNextButtonObjects1[i].hide();
}
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "ShowNextButtonTimer");
}
{for(var i = 0, len = gdjs.ConclusioneCode.GDNextButtonObjects1.length ;i < len;++i) {
    gdjs.ConclusioneCode.GDNextButtonObjects1[i].SetLabelTextOp("FINE", null);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "ShowNextButtonTimer") >= 4;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NextButton"), gdjs.ConclusioneCode.GDNextButtonObjects1);
{for(var i = 0, len = gdjs.ConclusioneCode.GDNextButtonObjects1.length ;i < len;++i) {
    gdjs.ConclusioneCode.GDNextButtonObjects1[i].hide(false);
}
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("NewSprite3"), gdjs.ConclusioneCode.GDNewSprite3Objects1);
{for(var i = 0, len = gdjs.ConclusioneCode.GDNewSprite3Objects1.length ;i < len;++i) {
    gdjs.ConclusioneCode.GDNewSprite3Objects1[i].setX(gdjs.evtTools.input.getCursorX(runtimeScene, "", 0));
}
}
{for(var i = 0, len = gdjs.ConclusioneCode.GDNewSprite3Objects1.length ;i < len;++i) {
    gdjs.ConclusioneCode.GDNewSprite3Objects1[i].setY(gdjs.evtTools.input.getCursorY(runtimeScene, "", 0));
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite3"), gdjs.ConclusioneCode.GDNewSprite3Objects1);
gdjs.copyArray(runtimeScene.getObjects("NextButton"), gdjs.ConclusioneCode.GDNextButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.ConclusioneCode.mapOfGDgdjs_9546ConclusioneCode_9546GDNewSprite3Objects1Objects, gdjs.ConclusioneCode.mapOfGDgdjs_9546ConclusioneCode_9546GDNextButtonObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.ConclusioneCode.GDNewSprite3Objects1 */
/* Reuse gdjs.ConclusioneCode.GDNextButtonObjects1 */
{for(var i = 0, len = gdjs.ConclusioneCode.GDNewSprite3Objects1.length ;i < len;++i) {
    gdjs.ConclusioneCode.GDNewSprite3Objects1[i].setZOrder((( gdjs.ConclusioneCode.GDNextButtonObjects1.length === 0 ) ? 0 :gdjs.ConclusioneCode.GDNextButtonObjects1[0].getZOrder()) + 1);
}
}
{for(var i = 0, len = gdjs.ConclusioneCode.GDNewSprite3Objects1.length ;i < len;++i) {
    gdjs.ConclusioneCode.GDNewSprite3Objects1[i].setLayer("UI");
}
}
}

}


};

gdjs.ConclusioneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.ConclusioneCode.GDTextBoxBackgroundObjects1.length = 0;
gdjs.ConclusioneCode.GDTextBoxBackgroundObjects2.length = 0;
gdjs.ConclusioneCode.GDNextButtonObjects1.length = 0;
gdjs.ConclusioneCode.GDNextButtonObjects2.length = 0;
gdjs.ConclusioneCode.GDNewSpriteObjects1.length = 0;
gdjs.ConclusioneCode.GDNewSpriteObjects2.length = 0;
gdjs.ConclusioneCode.GDNewSprite4Objects1.length = 0;
gdjs.ConclusioneCode.GDNewSprite4Objects2.length = 0;
gdjs.ConclusioneCode.GDHandRObjects1.length = 0;
gdjs.ConclusioneCode.GDHandRObjects2.length = 0;
gdjs.ConclusioneCode.GDNewSprite3Objects1.length = 0;
gdjs.ConclusioneCode.GDNewSprite3Objects2.length = 0;
gdjs.ConclusioneCode.GDNewBBTextObjects1.length = 0;
gdjs.ConclusioneCode.GDNewBBTextObjects2.length = 0;
gdjs.ConclusioneCode.GDendObjects1.length = 0;
gdjs.ConclusioneCode.GDendObjects2.length = 0;

gdjs.ConclusioneCode.eventsList0(runtimeScene);
gdjs.ConclusioneCode.GDTextBoxBackgroundObjects1.length = 0;
gdjs.ConclusioneCode.GDTextBoxBackgroundObjects2.length = 0;
gdjs.ConclusioneCode.GDNextButtonObjects1.length = 0;
gdjs.ConclusioneCode.GDNextButtonObjects2.length = 0;
gdjs.ConclusioneCode.GDNewSpriteObjects1.length = 0;
gdjs.ConclusioneCode.GDNewSpriteObjects2.length = 0;
gdjs.ConclusioneCode.GDNewSprite4Objects1.length = 0;
gdjs.ConclusioneCode.GDNewSprite4Objects2.length = 0;
gdjs.ConclusioneCode.GDHandRObjects1.length = 0;
gdjs.ConclusioneCode.GDHandRObjects2.length = 0;
gdjs.ConclusioneCode.GDNewSprite3Objects1.length = 0;
gdjs.ConclusioneCode.GDNewSprite3Objects2.length = 0;
gdjs.ConclusioneCode.GDNewBBTextObjects1.length = 0;
gdjs.ConclusioneCode.GDNewBBTextObjects2.length = 0;
gdjs.ConclusioneCode.GDendObjects1.length = 0;
gdjs.ConclusioneCode.GDendObjects2.length = 0;


return;

}

gdjs['ConclusioneCode'] = gdjs.ConclusioneCode;
