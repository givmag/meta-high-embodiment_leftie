gdjs.Modulo_324Code = {};
gdjs.Modulo_324Code.localVariables = [];
gdjs.Modulo_324Code.idToCallbackMap = new Map();
gdjs.Modulo_324Code.GDTextBoxBackgroundObjects1= [];
gdjs.Modulo_324Code.GDTextBoxBackgroundObjects2= [];
gdjs.Modulo_324Code.GDNextButtonObjects1= [];
gdjs.Modulo_324Code.GDNextButtonObjects2= [];
gdjs.Modulo_324Code.GDHandRObjects1= [];
gdjs.Modulo_324Code.GDHandRObjects2= [];
gdjs.Modulo_324Code.GDHandLObjects1= [];
gdjs.Modulo_324Code.GDHandLObjects2= [];
gdjs.Modulo_324Code.GDNewBBTextObjects1= [];
gdjs.Modulo_324Code.GDNewBBTextObjects2= [];
gdjs.Modulo_324Code.GDBreathingProgressObjects1= [];
gdjs.Modulo_324Code.GDBreathingProgressObjects2= [];
gdjs.Modulo_324Code.GDInspireObjects1= [];
gdjs.Modulo_324Code.GDInspireObjects2= [];
gdjs.Modulo_324Code.GDPaesaggioObjects1= [];
gdjs.Modulo_324Code.GDPaesaggioObjects2= [];
gdjs.Modulo_324Code.GDCloudObjects1= [];
gdjs.Modulo_324Code.GDCloudObjects2= [];
gdjs.Modulo_324Code.GDCloud2Objects1= [];
gdjs.Modulo_324Code.GDCloud2Objects2= [];
gdjs.Modulo_324Code.GDCloud3Objects1= [];
gdjs.Modulo_324Code.GDCloud3Objects2= [];
gdjs.Modulo_324Code.GDCloud4Objects1= [];
gdjs.Modulo_324Code.GDCloud4Objects2= [];
gdjs.Modulo_324Code.GDCloud5Objects1= [];
gdjs.Modulo_324Code.GDCloud5Objects2= [];
gdjs.Modulo_324Code.GDespireObjects1= [];
gdjs.Modulo_324Code.GDespireObjects2= [];
gdjs.Modulo_324Code.GDCloud6Objects1= [];
gdjs.Modulo_324Code.GDCloud6Objects2= [];


gdjs.Modulo_324Code.mapOfGDgdjs_9546Modulo_9595324Code_9546GDHandLObjects1Objects = Hashtable.newFrom({"HandL": gdjs.Modulo_324Code.GDHandLObjects1});
gdjs.Modulo_324Code.mapOfGDgdjs_9546Modulo_9595324Code_9546GDNextButtonObjects1Objects = Hashtable.newFrom({"NextButton": gdjs.Modulo_324Code.GDNextButtonObjects1});
gdjs.Modulo_324Code.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NextButton"), gdjs.Modulo_324Code.GDNextButtonObjects1);
{for(var i = 0, len = gdjs.Modulo_324Code.GDNextButtonObjects1.length ;i < len;++i) {
    gdjs.Modulo_324Code.GDNextButtonObjects1[i].hide();
}
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "ShowNextButtonTimer");
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "Cloud6MoveTimer");
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "ShowNextButtonTimer") >= 30;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(15535188);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NextButton"), gdjs.Modulo_324Code.GDNextButtonObjects1);
{for(var i = 0, len = gdjs.Modulo_324Code.GDNextButtonObjects1.length ;i < len;++i) {
    gdjs.Modulo_324Code.GDNextButtonObjects1[i].hide(false);
}
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("HandL"), gdjs.Modulo_324Code.GDHandLObjects1);
{for(var i = 0, len = gdjs.Modulo_324Code.GDHandLObjects1.length ;i < len;++i) {
    gdjs.Modulo_324Code.GDHandLObjects1[i].setX(gdjs.evtTools.input.getCursorX(runtimeScene, "", 0));
}
}
{for(var i = 0, len = gdjs.Modulo_324Code.GDHandLObjects1.length ;i < len;++i) {
    gdjs.Modulo_324Code.GDHandLObjects1[i].setY(gdjs.evtTools.input.getCursorY(runtimeScene, "", 0));
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("HandL"), gdjs.Modulo_324Code.GDHandLObjects1);
gdjs.copyArray(runtimeScene.getObjects("NextButton"), gdjs.Modulo_324Code.GDNextButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Modulo_324Code.mapOfGDgdjs_9546Modulo_9595324Code_9546GDHandLObjects1Objects, gdjs.Modulo_324Code.mapOfGDgdjs_9546Modulo_9595324Code_9546GDNextButtonObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Modulo_324Code.GDHandLObjects1 */
/* Reuse gdjs.Modulo_324Code.GDNextButtonObjects1 */
{for(var i = 0, len = gdjs.Modulo_324Code.GDHandLObjects1.length ;i < len;++i) {
    gdjs.Modulo_324Code.GDHandLObjects1[i].setLayer("UI");
}
}
{for(var i = 0, len = gdjs.Modulo_324Code.GDHandLObjects1.length ;i < len;++i) {
    gdjs.Modulo_324Code.GDHandLObjects1[i].setZOrder((( gdjs.Modulo_324Code.GDNextButtonObjects1.length === 0 ) ? 0 :gdjs.Modulo_324Code.GDNextButtonObjects1[0].getZOrder()) + 1);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NextButton"), gdjs.Modulo_324Code.GDNextButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Modulo_324Code.GDNextButtonObjects1.length;i<l;++i) {
    if ( gdjs.Modulo_324Code.GDNextButtonObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.Modulo_324Code.GDNextButtonObjects1[k] = gdjs.Modulo_324Code.GDNextButtonObjects1[i];
        ++k;
    }
}
gdjs.Modulo_324Code.GDNextButtonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Modulo 5", false);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "Cloud6MoveTimer") >= 10;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(15570860);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Cloud6"), gdjs.Modulo_324Code.GDCloud6Objects1);
{for(var i = 0, len = gdjs.Modulo_324Code.GDCloud6Objects1.length ;i < len;++i) {
    gdjs.Modulo_324Code.GDCloud6Objects1[i].getBehavior("Tween").addObjectPositionXTween2("Cloud6MoveOffscreen", -((gdjs.Modulo_324Code.GDCloud6Objects1[i].getWidth())), "linear", 2, false);
}
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "Cloud5MoveTimer");
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "Cloud5MoveTimer") >= 4;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(15571516);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Cloud5"), gdjs.Modulo_324Code.GDCloud5Objects1);
{for(var i = 0, len = gdjs.Modulo_324Code.GDCloud5Objects1.length ;i < len;++i) {
    gdjs.Modulo_324Code.GDCloud5Objects1[i].getBehavior("Tween").addObjectPositionXTween2("Cloud5MoveOffscreen", -((gdjs.Modulo_324Code.GDCloud5Objects1[i].getWidth())), "linear", 2, false);
}
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "Cloud4MoveTimer");
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "Cloud4MoveTimer") >= 3;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(15584524);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Cloud4"), gdjs.Modulo_324Code.GDCloud4Objects1);
{for(var i = 0, len = gdjs.Modulo_324Code.GDCloud4Objects1.length ;i < len;++i) {
    gdjs.Modulo_324Code.GDCloud4Objects1[i].getBehavior("Tween").addObjectPositionXTween2("Cloud4MoveOffscreen", -((gdjs.Modulo_324Code.GDCloud4Objects1[i].getWidth())), "linear", 2, false);
}
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "Cloud3MoveTimer");
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "Cloud3MoveTimer") >= 4;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(15585636);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Cloud3"), gdjs.Modulo_324Code.GDCloud3Objects1);
{for(var i = 0, len = gdjs.Modulo_324Code.GDCloud3Objects1.length ;i < len;++i) {
    gdjs.Modulo_324Code.GDCloud3Objects1[i].getBehavior("Tween").addObjectPositionXTween2("Cloud3MoveOffscreen", -((gdjs.Modulo_324Code.GDCloud3Objects1[i].getWidth())), "linear", 2, false);
}
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "Cloud2MoveTimer");
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "Cloud2MoveTimer") >= 3;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(15587164);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Cloud2"), gdjs.Modulo_324Code.GDCloud2Objects1);
{for(var i = 0, len = gdjs.Modulo_324Code.GDCloud2Objects1.length ;i < len;++i) {
    gdjs.Modulo_324Code.GDCloud2Objects1[i].getBehavior("Tween").addObjectPositionXTween2("Cloud2MoveOffscreen", -((gdjs.Modulo_324Code.GDCloud2Objects1[i].getWidth())), "linear", 2, false);
}
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "CloudMoveTimer");
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "CloudMoveTimer") >= 4;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(15588252);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Cloud"), gdjs.Modulo_324Code.GDCloudObjects1);
{for(var i = 0, len = gdjs.Modulo_324Code.GDCloudObjects1.length ;i < len;++i) {
    gdjs.Modulo_324Code.GDCloudObjects1[i].getBehavior("Tween").addObjectPositionXTween2("CloudMoveOffscreen", -((gdjs.Modulo_324Code.GDCloudObjects1[i].getWidth())), "linear", 2, false);
}
}
}

}


};

gdjs.Modulo_324Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Modulo_324Code.GDTextBoxBackgroundObjects1.length = 0;
gdjs.Modulo_324Code.GDTextBoxBackgroundObjects2.length = 0;
gdjs.Modulo_324Code.GDNextButtonObjects1.length = 0;
gdjs.Modulo_324Code.GDNextButtonObjects2.length = 0;
gdjs.Modulo_324Code.GDHandRObjects1.length = 0;
gdjs.Modulo_324Code.GDHandRObjects2.length = 0;
gdjs.Modulo_324Code.GDHandLObjects1.length = 0;
gdjs.Modulo_324Code.GDHandLObjects2.length = 0;
gdjs.Modulo_324Code.GDNewBBTextObjects1.length = 0;
gdjs.Modulo_324Code.GDNewBBTextObjects2.length = 0;
gdjs.Modulo_324Code.GDBreathingProgressObjects1.length = 0;
gdjs.Modulo_324Code.GDBreathingProgressObjects2.length = 0;
gdjs.Modulo_324Code.GDInspireObjects1.length = 0;
gdjs.Modulo_324Code.GDInspireObjects2.length = 0;
gdjs.Modulo_324Code.GDPaesaggioObjects1.length = 0;
gdjs.Modulo_324Code.GDPaesaggioObjects2.length = 0;
gdjs.Modulo_324Code.GDCloudObjects1.length = 0;
gdjs.Modulo_324Code.GDCloudObjects2.length = 0;
gdjs.Modulo_324Code.GDCloud2Objects1.length = 0;
gdjs.Modulo_324Code.GDCloud2Objects2.length = 0;
gdjs.Modulo_324Code.GDCloud3Objects1.length = 0;
gdjs.Modulo_324Code.GDCloud3Objects2.length = 0;
gdjs.Modulo_324Code.GDCloud4Objects1.length = 0;
gdjs.Modulo_324Code.GDCloud4Objects2.length = 0;
gdjs.Modulo_324Code.GDCloud5Objects1.length = 0;
gdjs.Modulo_324Code.GDCloud5Objects2.length = 0;
gdjs.Modulo_324Code.GDespireObjects1.length = 0;
gdjs.Modulo_324Code.GDespireObjects2.length = 0;
gdjs.Modulo_324Code.GDCloud6Objects1.length = 0;
gdjs.Modulo_324Code.GDCloud6Objects2.length = 0;

gdjs.Modulo_324Code.eventsList0(runtimeScene);
gdjs.Modulo_324Code.GDTextBoxBackgroundObjects1.length = 0;
gdjs.Modulo_324Code.GDTextBoxBackgroundObjects2.length = 0;
gdjs.Modulo_324Code.GDNextButtonObjects1.length = 0;
gdjs.Modulo_324Code.GDNextButtonObjects2.length = 0;
gdjs.Modulo_324Code.GDHandRObjects1.length = 0;
gdjs.Modulo_324Code.GDHandRObjects2.length = 0;
gdjs.Modulo_324Code.GDHandLObjects1.length = 0;
gdjs.Modulo_324Code.GDHandLObjects2.length = 0;
gdjs.Modulo_324Code.GDNewBBTextObjects1.length = 0;
gdjs.Modulo_324Code.GDNewBBTextObjects2.length = 0;
gdjs.Modulo_324Code.GDBreathingProgressObjects1.length = 0;
gdjs.Modulo_324Code.GDBreathingProgressObjects2.length = 0;
gdjs.Modulo_324Code.GDInspireObjects1.length = 0;
gdjs.Modulo_324Code.GDInspireObjects2.length = 0;
gdjs.Modulo_324Code.GDPaesaggioObjects1.length = 0;
gdjs.Modulo_324Code.GDPaesaggioObjects2.length = 0;
gdjs.Modulo_324Code.GDCloudObjects1.length = 0;
gdjs.Modulo_324Code.GDCloudObjects2.length = 0;
gdjs.Modulo_324Code.GDCloud2Objects1.length = 0;
gdjs.Modulo_324Code.GDCloud2Objects2.length = 0;
gdjs.Modulo_324Code.GDCloud3Objects1.length = 0;
gdjs.Modulo_324Code.GDCloud3Objects2.length = 0;
gdjs.Modulo_324Code.GDCloud4Objects1.length = 0;
gdjs.Modulo_324Code.GDCloud4Objects2.length = 0;
gdjs.Modulo_324Code.GDCloud5Objects1.length = 0;
gdjs.Modulo_324Code.GDCloud5Objects2.length = 0;
gdjs.Modulo_324Code.GDespireObjects1.length = 0;
gdjs.Modulo_324Code.GDespireObjects2.length = 0;
gdjs.Modulo_324Code.GDCloud6Objects1.length = 0;
gdjs.Modulo_324Code.GDCloud6Objects2.length = 0;


return;

}

gdjs['Modulo_324Code'] = gdjs.Modulo_324Code;
