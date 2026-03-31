gdjs.Modulo_321Code = {};
gdjs.Modulo_321Code.localVariables = [];
gdjs.Modulo_321Code.idToCallbackMap = new Map();
gdjs.Modulo_321Code.GDTextBoxBackgroundObjects1= [];
gdjs.Modulo_321Code.GDTextBoxBackgroundObjects2= [];
gdjs.Modulo_321Code.GDNextButtonObjects1= [];
gdjs.Modulo_321Code.GDNextButtonObjects2= [];
gdjs.Modulo_321Code.GDHands1Objects1= [];
gdjs.Modulo_321Code.GDHands1Objects2= [];
gdjs.Modulo_321Code.GDHandRObjects1= [];
gdjs.Modulo_321Code.GDHandRObjects2= [];
gdjs.Modulo_321Code.GDHandLObjects1= [];
gdjs.Modulo_321Code.GDHandLObjects2= [];
gdjs.Modulo_321Code.GDGreenFlatBarObjects1= [];
gdjs.Modulo_321Code.GDGreenFlatBarObjects2= [];
gdjs.Modulo_321Code.GDOrangeFlatBarObjects1= [];
gdjs.Modulo_321Code.GDOrangeFlatBarObjects2= [];
gdjs.Modulo_321Code.GDNewTextObjects1= [];
gdjs.Modulo_321Code.GDNewTextObjects2= [];
gdjs.Modulo_321Code.GDNewText2Objects1= [];
gdjs.Modulo_321Code.GDNewText2Objects2= [];
gdjs.Modulo_321Code.GDTextBoxBackground2Objects1= [];
gdjs.Modulo_321Code.GDTextBoxBackground2Objects2= [];
gdjs.Modulo_321Code.GDNewBBTextObjects1= [];
gdjs.Modulo_321Code.GDNewBBTextObjects2= [];
gdjs.Modulo_321Code.GDNewBBText2Objects1= [];
gdjs.Modulo_321Code.GDNewBBText2Objects2= [];
gdjs.Modulo_321Code.GDlancettaObjects1= [];
gdjs.Modulo_321Code.GDlancettaObjects2= [];
gdjs.Modulo_321Code.GDCuoreObjects1= [];
gdjs.Modulo_321Code.GDCuoreObjects2= [];
gdjs.Modulo_321Code.GDCarPanoramaObjects1= [];
gdjs.Modulo_321Code.GDCarPanoramaObjects2= [];
gdjs.Modulo_321Code.GDControlloObjects1= [];
gdjs.Modulo_321Code.GDControlloObjects2= [];


gdjs.Modulo_321Code.mapOfGDgdjs_9546Modulo_9595321Code_9546GDCuoreObjects1Objects = Hashtable.newFrom({"Cuore": gdjs.Modulo_321Code.GDCuoreObjects1});
gdjs.Modulo_321Code.mapOfGDgdjs_9546Modulo_9595321Code_9546GDHandLObjects1Objects = Hashtable.newFrom({"HandL": gdjs.Modulo_321Code.GDHandLObjects1});
gdjs.Modulo_321Code.mapOfGDgdjs_9546Modulo_9595321Code_9546GDNextButtonObjects1Objects = Hashtable.newFrom({"NextButton": gdjs.Modulo_321Code.GDNextButtonObjects1});
gdjs.Modulo_321Code.mapOfGDgdjs_9546Modulo_9595321Code_9546GDHandLObjects1Objects = Hashtable.newFrom({"HandL": gdjs.Modulo_321Code.GDHandLObjects1});
gdjs.Modulo_321Code.mapOfGDgdjs_9546Modulo_9595321Code_9546GDCuoreObjects1Objects = Hashtable.newFrom({"Cuore": gdjs.Modulo_321Code.GDCuoreObjects1});
gdjs.Modulo_321Code.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Cuore"), gdjs.Modulo_321Code.GDCuoreObjects1);
gdjs.copyArray(runtimeScene.getObjects("HandL"), gdjs.Modulo_321Code.GDHandLObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewBBText"), gdjs.Modulo_321Code.GDNewBBTextObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewBBText2"), gdjs.Modulo_321Code.GDNewBBText2Objects1);
gdjs.copyArray(runtimeScene.getObjects("NextButton"), gdjs.Modulo_321Code.GDNextButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("TextBoxBackground2"), gdjs.Modulo_321Code.GDTextBoxBackground2Objects1);
{for(var i = 0, len = gdjs.Modulo_321Code.GDTextBoxBackground2Objects1.length ;i < len;++i) {
    gdjs.Modulo_321Code.GDTextBoxBackground2Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Modulo_321Code.GDNewBBTextObjects1.length ;i < len;++i) {
    gdjs.Modulo_321Code.GDNewBBTextObjects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Modulo_321Code.GDNewBBText2Objects1.length ;i < len;++i) {
    gdjs.Modulo_321Code.GDNewBBText2Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Modulo_321Code.GDNextButtonObjects1.length ;i < len;++i) {
    gdjs.Modulo_321Code.GDNextButtonObjects1[i].hide();
}
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "ShowNextButtonTimer");
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "NextText");
}
{runtimeScene.getScene().getVariables().getFromIndex(3).setNumber(gdjs.evtTools.input.getCursorX(runtimeScene, "UI", 0));
}
{runtimeScene.getScene().getVariables().getFromIndex(2).setNumber(gdjs.evtTools.input.getCursorY(runtimeScene, "UI", 0));
}
{for(var i = 0, len = gdjs.Modulo_321Code.GDHandLObjects1.length ;i < len;++i) {
    gdjs.Modulo_321Code.GDHandLObjects1[i].hide(false);
}
}
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber((( gdjs.Modulo_321Code.GDCuoreObjects1.length === 0 ) ? 0 :gdjs.Modulo_321Code.GDCuoreObjects1[0].getBehavior("Scale").getScale()));
}
{for(var i = 0, len = gdjs.Modulo_321Code.GDCuoreObjects1.length ;i < len;++i) {
    gdjs.Modulo_321Code.GDCuoreObjects1[i].getBehavior("Tween").addObjectScaleTween3("PulsateUp", runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() * 1.2, "easeInOutQuad", 0.5, false, true);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "ShowNextButtonTimer") >= 10;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NextButton"), gdjs.Modulo_321Code.GDNextButtonObjects1);
{for(var i = 0, len = gdjs.Modulo_321Code.GDNextButtonObjects1.length ;i < len;++i) {
    gdjs.Modulo_321Code.GDNextButtonObjects1[i].hide(false);
}
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("HandL"), gdjs.Modulo_321Code.GDHandLObjects1);
{runtimeScene.getScene().getVariables().getFromIndex(3).setNumber(gdjs.evtTools.input.getCursorX(runtimeScene, "UI", 0));
}
{runtimeScene.getScene().getVariables().getFromIndex(2).setNumber(gdjs.evtTools.input.getCursorY(runtimeScene, "UI", 0));
}
{for(var i = 0, len = gdjs.Modulo_321Code.GDHandLObjects1.length ;i < len;++i) {
    gdjs.Modulo_321Code.GDHandLObjects1[i].setX(gdjs.evtTools.input.getCursorX(runtimeScene, "UI", 0));
}
}
{for(var i = 0, len = gdjs.Modulo_321Code.GDHandLObjects1.length ;i < len;++i) {
    gdjs.Modulo_321Code.GDHandLObjects1[i].setY(gdjs.evtTools.input.getCursorY(runtimeScene, "UI", 0));
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Cuore"), gdjs.Modulo_321Code.GDCuoreObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Modulo_321Code.mapOfGDgdjs_9546Modulo_9595321Code_9546GDCuoreObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Modulo_321Code.GDCuoreObjects1.length;i<l;++i) {
    if ( !(gdjs.Modulo_321Code.GDCuoreObjects1[i].getBehavior("Tween").exists("PulsateUp")) ) {
        isConditionTrue_0 = true;
        gdjs.Modulo_321Code.GDCuoreObjects1[k] = gdjs.Modulo_321Code.GDCuoreObjects1[i];
        ++k;
    }
}
gdjs.Modulo_321Code.GDCuoreObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Modulo_321Code.GDCuoreObjects1.length;i<l;++i) {
    if ( !(gdjs.Modulo_321Code.GDCuoreObjects1[i].getBehavior("Tween").exists("PulsateDown")) ) {
        isConditionTrue_0 = true;
        gdjs.Modulo_321Code.GDCuoreObjects1[k] = gdjs.Modulo_321Code.GDCuoreObjects1[i];
        ++k;
    }
}
gdjs.Modulo_321Code.GDCuoreObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(15365236);
}
}
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.Modulo_321Code.GDCuoreObjects1 */
{for(var i = 0, len = gdjs.Modulo_321Code.GDCuoreObjects1.length ;i < len;++i) {
    gdjs.Modulo_321Code.GDCuoreObjects1[i].getBehavior("Tween").addObjectScaleTween3("PulsateUp", runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() * 1.2, "linear", 0.5, false, true);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Cuore"), gdjs.Modulo_321Code.GDCuoreObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Modulo_321Code.GDCuoreObjects1.length;i<l;++i) {
    if ( gdjs.Modulo_321Code.GDCuoreObjects1[i].getBehavior("Tween").hasFinished("PulsateUp") ) {
        isConditionTrue_0 = true;
        gdjs.Modulo_321Code.GDCuoreObjects1[k] = gdjs.Modulo_321Code.GDCuoreObjects1[i];
        ++k;
    }
}
gdjs.Modulo_321Code.GDCuoreObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Modulo_321Code.GDCuoreObjects1 */
{for(var i = 0, len = gdjs.Modulo_321Code.GDCuoreObjects1.length ;i < len;++i) {
    gdjs.Modulo_321Code.GDCuoreObjects1[i].getBehavior("Tween").removeTween("PulsateUp");
}
}
{for(var i = 0, len = gdjs.Modulo_321Code.GDCuoreObjects1.length ;i < len;++i) {
    gdjs.Modulo_321Code.GDCuoreObjects1[i].getBehavior("Tween").addObjectScaleTween3("PulsateDown", runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() * 1.0, "easeInOutQuad", 0.5, false, true);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Cuore"), gdjs.Modulo_321Code.GDCuoreObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Modulo_321Code.GDCuoreObjects1.length;i<l;++i) {
    if ( gdjs.Modulo_321Code.GDCuoreObjects1[i].getBehavior("Tween").hasFinished("PulsateDown") ) {
        isConditionTrue_0 = true;
        gdjs.Modulo_321Code.GDCuoreObjects1[k] = gdjs.Modulo_321Code.GDCuoreObjects1[i];
        ++k;
    }
}
gdjs.Modulo_321Code.GDCuoreObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Modulo_321Code.GDCuoreObjects1 */
{for(var i = 0, len = gdjs.Modulo_321Code.GDCuoreObjects1.length ;i < len;++i) {
    gdjs.Modulo_321Code.GDCuoreObjects1[i].getBehavior("Tween").removeTween("PulsateDown");
}
}
{for(var i = 0, len = gdjs.Modulo_321Code.GDCuoreObjects1.length ;i < len;++i) {
    gdjs.Modulo_321Code.GDCuoreObjects1[i].getBehavior("Tween").addObjectScaleTween3("PulsateUp", runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() * 1.2, "easeInOutQuad", 0.5, false, true);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("HandL"), gdjs.Modulo_321Code.GDHandLObjects1);
gdjs.copyArray(runtimeScene.getObjects("NextButton"), gdjs.Modulo_321Code.GDNextButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Modulo_321Code.mapOfGDgdjs_9546Modulo_9595321Code_9546GDHandLObjects1Objects, gdjs.Modulo_321Code.mapOfGDgdjs_9546Modulo_9595321Code_9546GDNextButtonObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Modulo_321Code.GDHandLObjects1 */
/* Reuse gdjs.Modulo_321Code.GDNextButtonObjects1 */
{for(var i = 0, len = gdjs.Modulo_321Code.GDHandLObjects1.length ;i < len;++i) {
    gdjs.Modulo_321Code.GDHandLObjects1[i].setLayer("UI");
}
}
{for(var i = 0, len = gdjs.Modulo_321Code.GDHandLObjects1.length ;i < len;++i) {
    gdjs.Modulo_321Code.GDHandLObjects1[i].setZOrder((( gdjs.Modulo_321Code.GDNextButtonObjects1.length === 0 ) ? 0 :gdjs.Modulo_321Code.GDNextButtonObjects1[0].getZOrder()) + 1);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("HandL"), gdjs.Modulo_321Code.GDHandLObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
if (isConditionTrue_0) {
/* Reuse gdjs.Modulo_321Code.GDHandLObjects1 */
{for(var i = 0, len = gdjs.Modulo_321Code.GDHandLObjects1.length ;i < len;++i) {
    gdjs.Modulo_321Code.GDHandLObjects1[i].hide();
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NextButton"), gdjs.Modulo_321Code.GDNextButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Modulo_321Code.GDNextButtonObjects1.length;i<l;++i) {
    if ( gdjs.Modulo_321Code.GDNextButtonObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.Modulo_321Code.GDNextButtonObjects1[k] = gdjs.Modulo_321Code.GDNextButtonObjects1[i];
        ++k;
    }
}
gdjs.Modulo_321Code.GDNextButtonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Modulo 2", false);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Cuore"), gdjs.Modulo_321Code.GDCuoreObjects1);
gdjs.copyArray(runtimeScene.getObjects("HandL"), gdjs.Modulo_321Code.GDHandLObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Modulo_321Code.mapOfGDgdjs_9546Modulo_9595321Code_9546GDHandLObjects1Objects, gdjs.Modulo_321Code.mapOfGDgdjs_9546Modulo_9595321Code_9546GDCuoreObjects1Objects, false, runtimeScene, false);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("lancetta"), gdjs.Modulo_321Code.GDlancettaObjects1);
{for(var i = 0, len = gdjs.Modulo_321Code.GDlancettaObjects1.length ;i < len;++i) {
    gdjs.Modulo_321Code.GDlancettaObjects1[i].rotate(-(400), runtimeScene);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "NextText") >= 8;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewBBText"), gdjs.Modulo_321Code.GDNewBBTextObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewBBText2"), gdjs.Modulo_321Code.GDNewBBText2Objects1);
gdjs.copyArray(runtimeScene.getObjects("TextBoxBackground"), gdjs.Modulo_321Code.GDTextBoxBackgroundObjects1);
gdjs.copyArray(runtimeScene.getObjects("TextBoxBackground2"), gdjs.Modulo_321Code.GDTextBoxBackground2Objects1);
{for(var i = 0, len = gdjs.Modulo_321Code.GDNewBBTextObjects1.length ;i < len;++i) {
    gdjs.Modulo_321Code.GDNewBBTextObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Modulo_321Code.GDTextBoxBackgroundObjects1.length ;i < len;++i) {
    gdjs.Modulo_321Code.GDTextBoxBackgroundObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Modulo_321Code.GDNewBBText2Objects1.length ;i < len;++i) {
    gdjs.Modulo_321Code.GDNewBBText2Objects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Modulo_321Code.GDTextBoxBackground2Objects1.length ;i < len;++i) {
    gdjs.Modulo_321Code.GDTextBoxBackground2Objects1[i].hide(false);
}
}
}

}


};

gdjs.Modulo_321Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Modulo_321Code.GDTextBoxBackgroundObjects1.length = 0;
gdjs.Modulo_321Code.GDTextBoxBackgroundObjects2.length = 0;
gdjs.Modulo_321Code.GDNextButtonObjects1.length = 0;
gdjs.Modulo_321Code.GDNextButtonObjects2.length = 0;
gdjs.Modulo_321Code.GDHands1Objects1.length = 0;
gdjs.Modulo_321Code.GDHands1Objects2.length = 0;
gdjs.Modulo_321Code.GDHandRObjects1.length = 0;
gdjs.Modulo_321Code.GDHandRObjects2.length = 0;
gdjs.Modulo_321Code.GDHandLObjects1.length = 0;
gdjs.Modulo_321Code.GDHandLObjects2.length = 0;
gdjs.Modulo_321Code.GDGreenFlatBarObjects1.length = 0;
gdjs.Modulo_321Code.GDGreenFlatBarObjects2.length = 0;
gdjs.Modulo_321Code.GDOrangeFlatBarObjects1.length = 0;
gdjs.Modulo_321Code.GDOrangeFlatBarObjects2.length = 0;
gdjs.Modulo_321Code.GDNewTextObjects1.length = 0;
gdjs.Modulo_321Code.GDNewTextObjects2.length = 0;
gdjs.Modulo_321Code.GDNewText2Objects1.length = 0;
gdjs.Modulo_321Code.GDNewText2Objects2.length = 0;
gdjs.Modulo_321Code.GDTextBoxBackground2Objects1.length = 0;
gdjs.Modulo_321Code.GDTextBoxBackground2Objects2.length = 0;
gdjs.Modulo_321Code.GDNewBBTextObjects1.length = 0;
gdjs.Modulo_321Code.GDNewBBTextObjects2.length = 0;
gdjs.Modulo_321Code.GDNewBBText2Objects1.length = 0;
gdjs.Modulo_321Code.GDNewBBText2Objects2.length = 0;
gdjs.Modulo_321Code.GDlancettaObjects1.length = 0;
gdjs.Modulo_321Code.GDlancettaObjects2.length = 0;
gdjs.Modulo_321Code.GDCuoreObjects1.length = 0;
gdjs.Modulo_321Code.GDCuoreObjects2.length = 0;
gdjs.Modulo_321Code.GDCarPanoramaObjects1.length = 0;
gdjs.Modulo_321Code.GDCarPanoramaObjects2.length = 0;
gdjs.Modulo_321Code.GDControlloObjects1.length = 0;
gdjs.Modulo_321Code.GDControlloObjects2.length = 0;

gdjs.Modulo_321Code.eventsList0(runtimeScene);
gdjs.Modulo_321Code.GDTextBoxBackgroundObjects1.length = 0;
gdjs.Modulo_321Code.GDTextBoxBackgroundObjects2.length = 0;
gdjs.Modulo_321Code.GDNextButtonObjects1.length = 0;
gdjs.Modulo_321Code.GDNextButtonObjects2.length = 0;
gdjs.Modulo_321Code.GDHands1Objects1.length = 0;
gdjs.Modulo_321Code.GDHands1Objects2.length = 0;
gdjs.Modulo_321Code.GDHandRObjects1.length = 0;
gdjs.Modulo_321Code.GDHandRObjects2.length = 0;
gdjs.Modulo_321Code.GDHandLObjects1.length = 0;
gdjs.Modulo_321Code.GDHandLObjects2.length = 0;
gdjs.Modulo_321Code.GDGreenFlatBarObjects1.length = 0;
gdjs.Modulo_321Code.GDGreenFlatBarObjects2.length = 0;
gdjs.Modulo_321Code.GDOrangeFlatBarObjects1.length = 0;
gdjs.Modulo_321Code.GDOrangeFlatBarObjects2.length = 0;
gdjs.Modulo_321Code.GDNewTextObjects1.length = 0;
gdjs.Modulo_321Code.GDNewTextObjects2.length = 0;
gdjs.Modulo_321Code.GDNewText2Objects1.length = 0;
gdjs.Modulo_321Code.GDNewText2Objects2.length = 0;
gdjs.Modulo_321Code.GDTextBoxBackground2Objects1.length = 0;
gdjs.Modulo_321Code.GDTextBoxBackground2Objects2.length = 0;
gdjs.Modulo_321Code.GDNewBBTextObjects1.length = 0;
gdjs.Modulo_321Code.GDNewBBTextObjects2.length = 0;
gdjs.Modulo_321Code.GDNewBBText2Objects1.length = 0;
gdjs.Modulo_321Code.GDNewBBText2Objects2.length = 0;
gdjs.Modulo_321Code.GDlancettaObjects1.length = 0;
gdjs.Modulo_321Code.GDlancettaObjects2.length = 0;
gdjs.Modulo_321Code.GDCuoreObjects1.length = 0;
gdjs.Modulo_321Code.GDCuoreObjects2.length = 0;
gdjs.Modulo_321Code.GDCarPanoramaObjects1.length = 0;
gdjs.Modulo_321Code.GDCarPanoramaObjects2.length = 0;
gdjs.Modulo_321Code.GDControlloObjects1.length = 0;
gdjs.Modulo_321Code.GDControlloObjects2.length = 0;


return;

}

gdjs['Modulo_321Code'] = gdjs.Modulo_321Code;
