gdjs.IntroCode = {};
gdjs.IntroCode.localVariables = [];
gdjs.IntroCode.idToCallbackMap = new Map();
gdjs.IntroCode.GDTextBoxBackgroundObjects1= [];
gdjs.IntroCode.GDTextBoxBackgroundObjects2= [];
gdjs.IntroCode.GDNextButtonObjects1= [];
gdjs.IntroCode.GDNextButtonObjects2= [];
gdjs.IntroCode.GDHandRObjects1= [];
gdjs.IntroCode.GDHandRObjects2= [];
gdjs.IntroCode.GDHandLObjects1= [];
gdjs.IntroCode.GDHandLObjects2= [];
gdjs.IntroCode.GDNewBBTextObjects1= [];
gdjs.IntroCode.GDNewBBTextObjects2= [];


gdjs.IntroCode.mapOfGDgdjs_9546IntroCode_9546GDHandLObjects1Objects = Hashtable.newFrom({"HandL": gdjs.IntroCode.GDHandLObjects1});
gdjs.IntroCode.mapOfGDgdjs_9546IntroCode_9546GDNextButtonObjects1Objects = Hashtable.newFrom({"NextButton": gdjs.IntroCode.GDNextButtonObjects1});
gdjs.IntroCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NextButton"), gdjs.IntroCode.GDNextButtonObjects1);
{for(var i = 0, len = gdjs.IntroCode.GDNextButtonObjects1.length ;i < len;++i) {
    gdjs.IntroCode.GDNextButtonObjects1[i].hide();
}
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "ShowNextButtonTimer");
}
{runtimeScene.getScene().getVariables().getFromIndex(2).setNumber(gdjs.evtTools.input.getCursorX(runtimeScene, "UI", 0));
}
{runtimeScene.getScene().getVariables().getFromIndex(1).setNumber(gdjs.evtTools.input.getCursorY(runtimeScene, "UI", 0));
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "ShowNextButtonTimer") >= 4;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NextButton"), gdjs.IntroCode.GDNextButtonObjects1);
{for(var i = 0, len = gdjs.IntroCode.GDNextButtonObjects1.length ;i < len;++i) {
    gdjs.IntroCode.GDNextButtonObjects1[i].hide(false);
}
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("HandL"), gdjs.IntroCode.GDHandLObjects1);
{runtimeScene.getScene().getVariables().getFromIndex(2).setNumber(gdjs.evtTools.input.getCursorX(runtimeScene, "UI", 0));
}
{runtimeScene.getScene().getVariables().getFromIndex(1).setNumber(gdjs.evtTools.input.getCursorY(runtimeScene, "UI", 0));
}
{for(var i = 0, len = gdjs.IntroCode.GDHandLObjects1.length ;i < len;++i) {
    gdjs.IntroCode.GDHandLObjects1[i].setX(runtimeScene.getScene().getVariables().getFromIndex(2).getAsNumber());
}
}
{for(var i = 0, len = gdjs.IntroCode.GDHandLObjects1.length ;i < len;++i) {
    gdjs.IntroCode.GDHandLObjects1[i].setY(runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber());
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("HandL"), gdjs.IntroCode.GDHandLObjects1);
gdjs.copyArray(runtimeScene.getObjects("NextButton"), gdjs.IntroCode.GDNextButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.IntroCode.mapOfGDgdjs_9546IntroCode_9546GDHandLObjects1Objects, gdjs.IntroCode.mapOfGDgdjs_9546IntroCode_9546GDNextButtonObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.IntroCode.GDHandLObjects1 */
/* Reuse gdjs.IntroCode.GDNextButtonObjects1 */
{for(var i = 0, len = gdjs.IntroCode.GDHandLObjects1.length ;i < len;++i) {
    gdjs.IntroCode.GDHandLObjects1[i].setLayer("UI");
}
}
{for(var i = 0, len = gdjs.IntroCode.GDHandLObjects1.length ;i < len;++i) {
    gdjs.IntroCode.GDHandLObjects1[i].setZOrder((( gdjs.IntroCode.GDNextButtonObjects1.length === 0 ) ? 0 :gdjs.IntroCode.GDNextButtonObjects1[0].getZOrder()) + 1);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NextButton"), gdjs.IntroCode.GDNextButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.IntroCode.GDNextButtonObjects1.length;i<l;++i) {
    if ( gdjs.IntroCode.GDNextButtonObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.IntroCode.GDNextButtonObjects1[k] = gdjs.IntroCode.GDNextButtonObjects1[i];
        ++k;
    }
}
gdjs.IntroCode.GDNextButtonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Modulo 1", false);
}
}

}


};

gdjs.IntroCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.IntroCode.GDTextBoxBackgroundObjects1.length = 0;
gdjs.IntroCode.GDTextBoxBackgroundObjects2.length = 0;
gdjs.IntroCode.GDNextButtonObjects1.length = 0;
gdjs.IntroCode.GDNextButtonObjects2.length = 0;
gdjs.IntroCode.GDHandRObjects1.length = 0;
gdjs.IntroCode.GDHandRObjects2.length = 0;
gdjs.IntroCode.GDHandLObjects1.length = 0;
gdjs.IntroCode.GDHandLObjects2.length = 0;
gdjs.IntroCode.GDNewBBTextObjects1.length = 0;
gdjs.IntroCode.GDNewBBTextObjects2.length = 0;

gdjs.IntroCode.eventsList0(runtimeScene);
gdjs.IntroCode.GDTextBoxBackgroundObjects1.length = 0;
gdjs.IntroCode.GDTextBoxBackgroundObjects2.length = 0;
gdjs.IntroCode.GDNextButtonObjects1.length = 0;
gdjs.IntroCode.GDNextButtonObjects2.length = 0;
gdjs.IntroCode.GDHandRObjects1.length = 0;
gdjs.IntroCode.GDHandRObjects2.length = 0;
gdjs.IntroCode.GDHandLObjects1.length = 0;
gdjs.IntroCode.GDHandLObjects2.length = 0;
gdjs.IntroCode.GDNewBBTextObjects1.length = 0;
gdjs.IntroCode.GDNewBBTextObjects2.length = 0;


return;

}

gdjs['IntroCode'] = gdjs.IntroCode;
