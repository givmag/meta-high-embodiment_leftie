gdjs.Modulo_323Code = {};
gdjs.Modulo_323Code.localVariables = [];
gdjs.Modulo_323Code.idToCallbackMap = new Map();
gdjs.Modulo_323Code.GDTextBoxBackgroundObjects1= [];
gdjs.Modulo_323Code.GDTextBoxBackgroundObjects2= [];
gdjs.Modulo_323Code.GDNextButtonObjects1= [];
gdjs.Modulo_323Code.GDNextButtonObjects2= [];
gdjs.Modulo_323Code.GDTextBoxBackground2Objects1= [];
gdjs.Modulo_323Code.GDTextBoxBackground2Objects2= [];
gdjs.Modulo_323Code.GDNewBBTextObjects1= [];
gdjs.Modulo_323Code.GDNewBBTextObjects2= [];
gdjs.Modulo_323Code.GDNewBBText2Objects1= [];
gdjs.Modulo_323Code.GDNewBBText2Objects2= [];
gdjs.Modulo_323Code.GDBivioObjects1= [];
gdjs.Modulo_323Code.GDBivioObjects2= [];
gdjs.Modulo_323Code.GDBussolaObjects1= [];
gdjs.Modulo_323Code.GDBussolaObjects2= [];
gdjs.Modulo_323Code.GDHandRObjects1= [];
gdjs.Modulo_323Code.GDHandRObjects2= [];
gdjs.Modulo_323Code.GDHandLObjects1= [];
gdjs.Modulo_323Code.GDHandLObjects2= [];
gdjs.Modulo_323Code.GDMappaObjects1= [];
gdjs.Modulo_323Code.GDMappaObjects2= [];
gdjs.Modulo_323Code.GDHealthyObjects1= [];
gdjs.Modulo_323Code.GDHealthyObjects2= [];
gdjs.Modulo_323Code.GDUnhealthyObjects1= [];
gdjs.Modulo_323Code.GDUnhealthyObjects2= [];
gdjs.Modulo_323Code.GDUnhealthy2Objects1= [];
gdjs.Modulo_323Code.GDUnhealthy2Objects2= [];
gdjs.Modulo_323Code.GDcerchioObjects1= [];
gdjs.Modulo_323Code.GDcerchioObjects2= [];
gdjs.Modulo_323Code.GDOrma1Objects1= [];
gdjs.Modulo_323Code.GDOrma1Objects2= [];
gdjs.Modulo_323Code.GDOrma2Objects1= [];
gdjs.Modulo_323Code.GDOrma2Objects2= [];
gdjs.Modulo_323Code.GDOrma3Objects1= [];
gdjs.Modulo_323Code.GDOrma3Objects2= [];
gdjs.Modulo_323Code.GDOrma4Objects1= [];
gdjs.Modulo_323Code.GDOrma4Objects2= [];
gdjs.Modulo_323Code.GDOrma5Objects1= [];
gdjs.Modulo_323Code.GDOrma5Objects2= [];
gdjs.Modulo_323Code.GDOrma6Objects1= [];
gdjs.Modulo_323Code.GDOrma6Objects2= [];


gdjs.Modulo_323Code.mapOfGDgdjs_9546Modulo_9595323Code_9546GDHandLObjects1Objects = Hashtable.newFrom({"HandL": gdjs.Modulo_323Code.GDHandLObjects1});
gdjs.Modulo_323Code.mapOfGDgdjs_9546Modulo_9595323Code_9546GDNextButtonObjects1Objects = Hashtable.newFrom({"NextButton": gdjs.Modulo_323Code.GDNextButtonObjects1});
gdjs.Modulo_323Code.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewBBText"), gdjs.Modulo_323Code.GDNewBBTextObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewBBText2"), gdjs.Modulo_323Code.GDNewBBText2Objects1);
gdjs.copyArray(runtimeScene.getObjects("NextButton"), gdjs.Modulo_323Code.GDNextButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("Orma1"), gdjs.Modulo_323Code.GDOrma1Objects1);
gdjs.copyArray(runtimeScene.getObjects("Orma2"), gdjs.Modulo_323Code.GDOrma2Objects1);
gdjs.copyArray(runtimeScene.getObjects("Orma3"), gdjs.Modulo_323Code.GDOrma3Objects1);
gdjs.copyArray(runtimeScene.getObjects("Orma4"), gdjs.Modulo_323Code.GDOrma4Objects1);
gdjs.copyArray(runtimeScene.getObjects("Orma5"), gdjs.Modulo_323Code.GDOrma5Objects1);
gdjs.copyArray(runtimeScene.getObjects("Orma6"), gdjs.Modulo_323Code.GDOrma6Objects1);
gdjs.copyArray(runtimeScene.getObjects("TextBoxBackground"), gdjs.Modulo_323Code.GDTextBoxBackgroundObjects1);
gdjs.copyArray(runtimeScene.getObjects("TextBoxBackground2"), gdjs.Modulo_323Code.GDTextBoxBackground2Objects1);
{for(var i = 0, len = gdjs.Modulo_323Code.GDTextBoxBackgroundObjects1.length ;i < len;++i) {
    gdjs.Modulo_323Code.GDTextBoxBackgroundObjects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Modulo_323Code.GDNewBBTextObjects1.length ;i < len;++i) {
    gdjs.Modulo_323Code.GDNewBBTextObjects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Modulo_323Code.GDNextButtonObjects1.length ;i < len;++i) {
    gdjs.Modulo_323Code.GDNextButtonObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Modulo_323Code.GDTextBoxBackground2Objects1.length ;i < len;++i) {
    gdjs.Modulo_323Code.GDTextBoxBackground2Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Modulo_323Code.GDNewBBText2Objects1.length ;i < len;++i) {
    gdjs.Modulo_323Code.GDNewBBText2Objects1[i].hide();
}
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "NextButtonTimer");
}
{for(var i = 0, len = gdjs.Modulo_323Code.GDOrma1Objects1.length ;i < len;++i) {
    gdjs.Modulo_323Code.GDOrma1Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Modulo_323Code.GDOrma2Objects1.length ;i < len;++i) {
    gdjs.Modulo_323Code.GDOrma2Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Modulo_323Code.GDOrma3Objects1.length ;i < len;++i) {
    gdjs.Modulo_323Code.GDOrma3Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Modulo_323Code.GDOrma4Objects1.length ;i < len;++i) {
    gdjs.Modulo_323Code.GDOrma4Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Modulo_323Code.GDOrma5Objects1.length ;i < len;++i) {
    gdjs.Modulo_323Code.GDOrma5Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Modulo_323Code.GDOrma6Objects1.length ;i < len;++i) {
    gdjs.Modulo_323Code.GDOrma6Objects1[i].hide();
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "NextButtonTimer") >= 10;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NextButton"), gdjs.Modulo_323Code.GDNextButtonObjects1);
{for(var i = 0, len = gdjs.Modulo_323Code.GDNextButtonObjects1.length ;i < len;++i) {
    gdjs.Modulo_323Code.GDNextButtonObjects1[i].hide(false);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NextButton"), gdjs.Modulo_323Code.GDNextButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Modulo_323Code.GDNextButtonObjects1.length;i<l;++i) {
    if ( gdjs.Modulo_323Code.GDNextButtonObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.Modulo_323Code.GDNextButtonObjects1[k] = gdjs.Modulo_323Code.GDNextButtonObjects1[i];
        ++k;
    }
}
gdjs.Modulo_323Code.GDNextButtonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Modulo 4", false);
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("HandL"), gdjs.Modulo_323Code.GDHandLObjects1);
{for(var i = 0, len = gdjs.Modulo_323Code.GDHandLObjects1.length ;i < len;++i) {
    gdjs.Modulo_323Code.GDHandLObjects1[i].setX(gdjs.evtTools.input.getCursorX(runtimeScene, "", 0));
}
}
{for(var i = 0, len = gdjs.Modulo_323Code.GDHandLObjects1.length ;i < len;++i) {
    gdjs.Modulo_323Code.GDHandLObjects1[i].setY(gdjs.evtTools.input.getCursorY(runtimeScene, "", 0));
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("HandL"), gdjs.Modulo_323Code.GDHandLObjects1);
gdjs.copyArray(runtimeScene.getObjects("NextButton"), gdjs.Modulo_323Code.GDNextButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Modulo_323Code.mapOfGDgdjs_9546Modulo_9595323Code_9546GDHandLObjects1Objects, gdjs.Modulo_323Code.mapOfGDgdjs_9546Modulo_9595323Code_9546GDNextButtonObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Modulo_323Code.GDHandLObjects1 */
/* Reuse gdjs.Modulo_323Code.GDNextButtonObjects1 */
{for(var i = 0, len = gdjs.Modulo_323Code.GDHandLObjects1.length ;i < len;++i) {
    gdjs.Modulo_323Code.GDHandLObjects1[i].setLayer("UI");
}
}
{for(var i = 0, len = gdjs.Modulo_323Code.GDHandLObjects1.length ;i < len;++i) {
    gdjs.Modulo_323Code.GDHandLObjects1[i].setZOrder((( gdjs.Modulo_323Code.GDNextButtonObjects1.length === 0 ) ? 0 :gdjs.Modulo_323Code.GDNextButtonObjects1[0].getZOrder()) + 1);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Healthy"), gdjs.Modulo_323Code.GDHealthyObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Modulo_323Code.GDHealthyObjects1.length;i<l;++i) {
    if ( gdjs.Modulo_323Code.GDHealthyObjects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.Modulo_323Code.GDHealthyObjects1[k] = gdjs.Modulo_323Code.GDHealthyObjects1[i];
        ++k;
    }
}
gdjs.Modulo_323Code.GDHealthyObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Modulo_323Code.GDHealthyObjects1 */
gdjs.copyArray(runtimeScene.getObjects("Mappa"), gdjs.Modulo_323Code.GDMappaObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewBBText"), gdjs.Modulo_323Code.GDNewBBTextObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewBBText2"), gdjs.Modulo_323Code.GDNewBBText2Objects1);
gdjs.copyArray(runtimeScene.getObjects("TextBoxBackground"), gdjs.Modulo_323Code.GDTextBoxBackgroundObjects1);
gdjs.copyArray(runtimeScene.getObjects("TextBoxBackground2"), gdjs.Modulo_323Code.GDTextBoxBackground2Objects1);
gdjs.copyArray(runtimeScene.getObjects("Unhealthy"), gdjs.Modulo_323Code.GDUnhealthyObjects1);
gdjs.copyArray(runtimeScene.getObjects("Unhealthy2"), gdjs.Modulo_323Code.GDUnhealthy2Objects1);
gdjs.copyArray(runtimeScene.getObjects("cerchio"), gdjs.Modulo_323Code.GDcerchioObjects1);
{for(var i = 0, len = gdjs.Modulo_323Code.GDMappaObjects1.length ;i < len;++i) {
    gdjs.Modulo_323Code.GDMappaObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Modulo_323Code.GDcerchioObjects1.length ;i < len;++i) {
    gdjs.Modulo_323Code.GDcerchioObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Modulo_323Code.GDUnhealthyObjects1.length ;i < len;++i) {
    gdjs.Modulo_323Code.GDUnhealthyObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Modulo_323Code.GDUnhealthy2Objects1.length ;i < len;++i) {
    gdjs.Modulo_323Code.GDUnhealthy2Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Modulo_323Code.GDHealthyObjects1.length ;i < len;++i) {
    gdjs.Modulo_323Code.GDHealthyObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Modulo_323Code.GDTextBoxBackgroundObjects1.length ;i < len;++i) {
    gdjs.Modulo_323Code.GDTextBoxBackgroundObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Modulo_323Code.GDNewBBTextObjects1.length ;i < len;++i) {
    gdjs.Modulo_323Code.GDNewBBTextObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Modulo_323Code.GDTextBoxBackground2Objects1.length ;i < len;++i) {
    gdjs.Modulo_323Code.GDTextBoxBackground2Objects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Modulo_323Code.GDNewBBText2Objects1.length ;i < len;++i) {
    gdjs.Modulo_323Code.GDNewBBText2Objects1[i].hide(false);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("TextBoxBackground2"), gdjs.Modulo_323Code.GDTextBoxBackground2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Modulo_323Code.GDTextBoxBackground2Objects1.length;i<l;++i) {
    if ( gdjs.Modulo_323Code.GDTextBoxBackground2Objects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.Modulo_323Code.GDTextBoxBackground2Objects1[k] = gdjs.Modulo_323Code.GDTextBoxBackground2Objects1[i];
        ++k;
    }
}
gdjs.Modulo_323Code.GDTextBoxBackground2Objects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(15511436);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "OrmaDisplayTimer");
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "OrmaDisplayTimer") >= 0.5;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() == 0);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Orma1"), gdjs.Modulo_323Code.GDOrma1Objects1);
{for(var i = 0, len = gdjs.Modulo_323Code.GDOrma1Objects1.length ;i < len;++i) {
    gdjs.Modulo_323Code.GDOrma1Objects1[i].hide(false);
}
}
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(1);
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "OrmaDisplayTimer");
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "OrmaDisplayTimer") >= 0.5;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() == 1);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Orma2"), gdjs.Modulo_323Code.GDOrma2Objects1);
{for(var i = 0, len = gdjs.Modulo_323Code.GDOrma2Objects1.length ;i < len;++i) {
    gdjs.Modulo_323Code.GDOrma2Objects1[i].hide(false);
}
}
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(2);
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "OrmaDisplayTimer");
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "OrmaDisplayTimer") >= 0.5;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() == 2);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Orma3"), gdjs.Modulo_323Code.GDOrma3Objects1);
{for(var i = 0, len = gdjs.Modulo_323Code.GDOrma3Objects1.length ;i < len;++i) {
    gdjs.Modulo_323Code.GDOrma3Objects1[i].hide(false);
}
}
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(3);
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "OrmaDisplayTimer");
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "OrmaDisplayTimer") >= 0.5;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() == 3);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Orma4"), gdjs.Modulo_323Code.GDOrma4Objects1);
{for(var i = 0, len = gdjs.Modulo_323Code.GDOrma4Objects1.length ;i < len;++i) {
    gdjs.Modulo_323Code.GDOrma4Objects1[i].hide(false);
}
}
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(4);
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "OrmaDisplayTimer");
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "OrmaDisplayTimer") >= 0.5;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() == 4);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Orma5"), gdjs.Modulo_323Code.GDOrma5Objects1);
{for(var i = 0, len = gdjs.Modulo_323Code.GDOrma5Objects1.length ;i < len;++i) {
    gdjs.Modulo_323Code.GDOrma5Objects1[i].hide(false);
}
}
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(5);
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "OrmaDisplayTimer");
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "OrmaDisplayTimer") >= 0.5;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() == 5);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Orma6"), gdjs.Modulo_323Code.GDOrma6Objects1);
{for(var i = 0, len = gdjs.Modulo_323Code.GDOrma6Objects1.length ;i < len;++i) {
    gdjs.Modulo_323Code.GDOrma6Objects1[i].hide(false);
}
}
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(6);
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "OrmaDisplayTimer");
}
}

}


};

gdjs.Modulo_323Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Modulo_323Code.GDTextBoxBackgroundObjects1.length = 0;
gdjs.Modulo_323Code.GDTextBoxBackgroundObjects2.length = 0;
gdjs.Modulo_323Code.GDNextButtonObjects1.length = 0;
gdjs.Modulo_323Code.GDNextButtonObjects2.length = 0;
gdjs.Modulo_323Code.GDTextBoxBackground2Objects1.length = 0;
gdjs.Modulo_323Code.GDTextBoxBackground2Objects2.length = 0;
gdjs.Modulo_323Code.GDNewBBTextObjects1.length = 0;
gdjs.Modulo_323Code.GDNewBBTextObjects2.length = 0;
gdjs.Modulo_323Code.GDNewBBText2Objects1.length = 0;
gdjs.Modulo_323Code.GDNewBBText2Objects2.length = 0;
gdjs.Modulo_323Code.GDBivioObjects1.length = 0;
gdjs.Modulo_323Code.GDBivioObjects2.length = 0;
gdjs.Modulo_323Code.GDBussolaObjects1.length = 0;
gdjs.Modulo_323Code.GDBussolaObjects2.length = 0;
gdjs.Modulo_323Code.GDHandRObjects1.length = 0;
gdjs.Modulo_323Code.GDHandRObjects2.length = 0;
gdjs.Modulo_323Code.GDHandLObjects1.length = 0;
gdjs.Modulo_323Code.GDHandLObjects2.length = 0;
gdjs.Modulo_323Code.GDMappaObjects1.length = 0;
gdjs.Modulo_323Code.GDMappaObjects2.length = 0;
gdjs.Modulo_323Code.GDHealthyObjects1.length = 0;
gdjs.Modulo_323Code.GDHealthyObjects2.length = 0;
gdjs.Modulo_323Code.GDUnhealthyObjects1.length = 0;
gdjs.Modulo_323Code.GDUnhealthyObjects2.length = 0;
gdjs.Modulo_323Code.GDUnhealthy2Objects1.length = 0;
gdjs.Modulo_323Code.GDUnhealthy2Objects2.length = 0;
gdjs.Modulo_323Code.GDcerchioObjects1.length = 0;
gdjs.Modulo_323Code.GDcerchioObjects2.length = 0;
gdjs.Modulo_323Code.GDOrma1Objects1.length = 0;
gdjs.Modulo_323Code.GDOrma1Objects2.length = 0;
gdjs.Modulo_323Code.GDOrma2Objects1.length = 0;
gdjs.Modulo_323Code.GDOrma2Objects2.length = 0;
gdjs.Modulo_323Code.GDOrma3Objects1.length = 0;
gdjs.Modulo_323Code.GDOrma3Objects2.length = 0;
gdjs.Modulo_323Code.GDOrma4Objects1.length = 0;
gdjs.Modulo_323Code.GDOrma4Objects2.length = 0;
gdjs.Modulo_323Code.GDOrma5Objects1.length = 0;
gdjs.Modulo_323Code.GDOrma5Objects2.length = 0;
gdjs.Modulo_323Code.GDOrma6Objects1.length = 0;
gdjs.Modulo_323Code.GDOrma6Objects2.length = 0;

gdjs.Modulo_323Code.eventsList0(runtimeScene);
gdjs.Modulo_323Code.GDTextBoxBackgroundObjects1.length = 0;
gdjs.Modulo_323Code.GDTextBoxBackgroundObjects2.length = 0;
gdjs.Modulo_323Code.GDNextButtonObjects1.length = 0;
gdjs.Modulo_323Code.GDNextButtonObjects2.length = 0;
gdjs.Modulo_323Code.GDTextBoxBackground2Objects1.length = 0;
gdjs.Modulo_323Code.GDTextBoxBackground2Objects2.length = 0;
gdjs.Modulo_323Code.GDNewBBTextObjects1.length = 0;
gdjs.Modulo_323Code.GDNewBBTextObjects2.length = 0;
gdjs.Modulo_323Code.GDNewBBText2Objects1.length = 0;
gdjs.Modulo_323Code.GDNewBBText2Objects2.length = 0;
gdjs.Modulo_323Code.GDBivioObjects1.length = 0;
gdjs.Modulo_323Code.GDBivioObjects2.length = 0;
gdjs.Modulo_323Code.GDBussolaObjects1.length = 0;
gdjs.Modulo_323Code.GDBussolaObjects2.length = 0;
gdjs.Modulo_323Code.GDHandRObjects1.length = 0;
gdjs.Modulo_323Code.GDHandRObjects2.length = 0;
gdjs.Modulo_323Code.GDHandLObjects1.length = 0;
gdjs.Modulo_323Code.GDHandLObjects2.length = 0;
gdjs.Modulo_323Code.GDMappaObjects1.length = 0;
gdjs.Modulo_323Code.GDMappaObjects2.length = 0;
gdjs.Modulo_323Code.GDHealthyObjects1.length = 0;
gdjs.Modulo_323Code.GDHealthyObjects2.length = 0;
gdjs.Modulo_323Code.GDUnhealthyObjects1.length = 0;
gdjs.Modulo_323Code.GDUnhealthyObjects2.length = 0;
gdjs.Modulo_323Code.GDUnhealthy2Objects1.length = 0;
gdjs.Modulo_323Code.GDUnhealthy2Objects2.length = 0;
gdjs.Modulo_323Code.GDcerchioObjects1.length = 0;
gdjs.Modulo_323Code.GDcerchioObjects2.length = 0;
gdjs.Modulo_323Code.GDOrma1Objects1.length = 0;
gdjs.Modulo_323Code.GDOrma1Objects2.length = 0;
gdjs.Modulo_323Code.GDOrma2Objects1.length = 0;
gdjs.Modulo_323Code.GDOrma2Objects2.length = 0;
gdjs.Modulo_323Code.GDOrma3Objects1.length = 0;
gdjs.Modulo_323Code.GDOrma3Objects2.length = 0;
gdjs.Modulo_323Code.GDOrma4Objects1.length = 0;
gdjs.Modulo_323Code.GDOrma4Objects2.length = 0;
gdjs.Modulo_323Code.GDOrma5Objects1.length = 0;
gdjs.Modulo_323Code.GDOrma5Objects2.length = 0;
gdjs.Modulo_323Code.GDOrma6Objects1.length = 0;
gdjs.Modulo_323Code.GDOrma6Objects2.length = 0;


return;

}

gdjs['Modulo_323Code'] = gdjs.Modulo_323Code;
