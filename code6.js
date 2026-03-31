gdjs.Modulo_326Code = {};
gdjs.Modulo_326Code.localVariables = [];
gdjs.Modulo_326Code.idToCallbackMap = new Map();
gdjs.Modulo_326Code.GDTextBoxBackgroundObjects1= [];
gdjs.Modulo_326Code.GDTextBoxBackgroundObjects2= [];
gdjs.Modulo_326Code.GDNextButtonObjects1= [];
gdjs.Modulo_326Code.GDNextButtonObjects2= [];
gdjs.Modulo_326Code.GDHandRObjects1= [];
gdjs.Modulo_326Code.GDHandRObjects2= [];
gdjs.Modulo_326Code.GDHandLObjects1= [];
gdjs.Modulo_326Code.GDHandLObjects2= [];
gdjs.Modulo_326Code.GDNewBBTextObjects1= [];
gdjs.Modulo_326Code.GDNewBBTextObjects2= [];
gdjs.Modulo_326Code.GDboscoObjects1= [];
gdjs.Modulo_326Code.GDboscoObjects2= [];
gdjs.Modulo_326Code.GDAllarmeObjects1= [];
gdjs.Modulo_326Code.GDAllarmeObjects2= [];
gdjs.Modulo_326Code.GDNewSpriteObjects1= [];
gdjs.Modulo_326Code.GDNewSpriteObjects2= [];
gdjs.Modulo_326Code.GDPSObjects1= [];
gdjs.Modulo_326Code.GDPSObjects2= [];
gdjs.Modulo_326Code.GDPS2Objects1= [];
gdjs.Modulo_326Code.GDPS2Objects2= [];
gdjs.Modulo_326Code.GDgoObjects1= [];
gdjs.Modulo_326Code.GDgoObjects2= [];
gdjs.Modulo_326Code.GDproseguiObjects1= [];
gdjs.Modulo_326Code.GDproseguiObjects2= [];
gdjs.Modulo_326Code.GDSegnaleticaObjects1= [];
gdjs.Modulo_326Code.GDSegnaleticaObjects2= [];
gdjs.Modulo_326Code.GDSegnaletica2Objects1= [];
gdjs.Modulo_326Code.GDSegnaletica2Objects2= [];
gdjs.Modulo_326Code.GDSegnaletica3Objects1= [];
gdjs.Modulo_326Code.GDSegnaletica3Objects2= [];
gdjs.Modulo_326Code.GDSegnaletica4Objects1= [];
gdjs.Modulo_326Code.GDSegnaletica4Objects2= [];
gdjs.Modulo_326Code.GDallarme1Objects1= [];
gdjs.Modulo_326Code.GDallarme1Objects2= [];
gdjs.Modulo_326Code.GDallarme2Objects1= [];
gdjs.Modulo_326Code.GDallarme2Objects2= [];
gdjs.Modulo_326Code.GDallarme3Objects1= [];
gdjs.Modulo_326Code.GDallarme3Objects2= [];
gdjs.Modulo_326Code.GDallarme4Objects1= [];
gdjs.Modulo_326Code.GDallarme4Objects2= [];
gdjs.Modulo_326Code.GDRedZoneObjects1= [];
gdjs.Modulo_326Code.GDRedZoneObjects2= [];


gdjs.Modulo_326Code.mapOfGDgdjs_9546Modulo_9595326Code_9546GDHandLObjects1Objects = Hashtable.newFrom({"HandL": gdjs.Modulo_326Code.GDHandLObjects1});
gdjs.Modulo_326Code.mapOfGDgdjs_9546Modulo_9595326Code_9546GDNextButtonObjects1Objects = Hashtable.newFrom({"NextButton": gdjs.Modulo_326Code.GDNextButtonObjects1});
gdjs.Modulo_326Code.mapOfGDgdjs_9546Modulo_9595326Code_9546GDSegnaleticaObjects1Objects = Hashtable.newFrom({"Segnaletica": gdjs.Modulo_326Code.GDSegnaleticaObjects1});
gdjs.Modulo_326Code.mapOfGDgdjs_9546Modulo_9595326Code_9546GDRedZoneObjects1Objects = Hashtable.newFrom({"RedZone": gdjs.Modulo_326Code.GDRedZoneObjects1});
gdjs.Modulo_326Code.mapOfGDgdjs_9546Modulo_9595326Code_9546GDSegnaletica2Objects1Objects = Hashtable.newFrom({"Segnaletica2": gdjs.Modulo_326Code.GDSegnaletica2Objects1});
gdjs.Modulo_326Code.mapOfGDgdjs_9546Modulo_9595326Code_9546GDRedZoneObjects1Objects = Hashtable.newFrom({"RedZone": gdjs.Modulo_326Code.GDRedZoneObjects1});
gdjs.Modulo_326Code.mapOfGDgdjs_9546Modulo_9595326Code_9546GDSegnaletica3Objects1Objects = Hashtable.newFrom({"Segnaletica3": gdjs.Modulo_326Code.GDSegnaletica3Objects1});
gdjs.Modulo_326Code.mapOfGDgdjs_9546Modulo_9595326Code_9546GDRedZoneObjects1Objects = Hashtable.newFrom({"RedZone": gdjs.Modulo_326Code.GDRedZoneObjects1});
gdjs.Modulo_326Code.mapOfGDgdjs_9546Modulo_9595326Code_9546GDSegnaletica4Objects1Objects = Hashtable.newFrom({"Segnaletica4": gdjs.Modulo_326Code.GDSegnaletica4Objects1});
gdjs.Modulo_326Code.mapOfGDgdjs_9546Modulo_9595326Code_9546GDRedZoneObjects1Objects = Hashtable.newFrom({"RedZone": gdjs.Modulo_326Code.GDRedZoneObjects1});
gdjs.Modulo_326Code.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Allarme"), gdjs.Modulo_326Code.GDAllarmeObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewBBText"), gdjs.Modulo_326Code.GDNewBBTextObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs.Modulo_326Code.GDNewSpriteObjects1);
gdjs.copyArray(runtimeScene.getObjects("NextButton"), gdjs.Modulo_326Code.GDNextButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("TextBoxBackground"), gdjs.Modulo_326Code.GDTextBoxBackgroundObjects1);
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(0);
}
{for(var i = 0, len = gdjs.Modulo_326Code.GDNextButtonObjects1.length ;i < len;++i) {
    gdjs.Modulo_326Code.GDNextButtonObjects1[i].hide();
}
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "ShowNextButtonTimer");
}
{for(var i = 0, len = gdjs.Modulo_326Code.GDNewBBTextObjects1.length ;i < len;++i) {
    gdjs.Modulo_326Code.GDNewBBTextObjects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Modulo_326Code.GDTextBoxBackgroundObjects1.length ;i < len;++i) {
    gdjs.Modulo_326Code.GDTextBoxBackgroundObjects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Modulo_326Code.GDAllarmeObjects1.length ;i < len;++i) {
    gdjs.Modulo_326Code.GDAllarmeObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Modulo_326Code.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.Modulo_326Code.GDNewSpriteObjects1[i].hide();
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "ShowNextButtonTimer") >= 12;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NextButton"), gdjs.Modulo_326Code.GDNextButtonObjects1);
{for(var i = 0, len = gdjs.Modulo_326Code.GDNextButtonObjects1.length ;i < len;++i) {
    gdjs.Modulo_326Code.GDNextButtonObjects1[i].hide(false);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NextButton"), gdjs.Modulo_326Code.GDNextButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Modulo_326Code.GDNextButtonObjects1.length;i<l;++i) {
    if ( gdjs.Modulo_326Code.GDNextButtonObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.Modulo_326Code.GDNextButtonObjects1[k] = gdjs.Modulo_326Code.GDNextButtonObjects1[i];
        ++k;
    }
}
gdjs.Modulo_326Code.GDNextButtonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Conclusione", false);
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("HandL"), gdjs.Modulo_326Code.GDHandLObjects1);
{for(var i = 0, len = gdjs.Modulo_326Code.GDHandLObjects1.length ;i < len;++i) {
    gdjs.Modulo_326Code.GDHandLObjects1[i].setX(gdjs.evtTools.input.getCursorX(runtimeScene, "", 0));
}
}
{for(var i = 0, len = gdjs.Modulo_326Code.GDHandLObjects1.length ;i < len;++i) {
    gdjs.Modulo_326Code.GDHandLObjects1[i].setY(gdjs.evtTools.input.getCursorY(runtimeScene, "", 0));
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() == 4);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(15736380);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewBBText"), gdjs.Modulo_326Code.GDNewBBTextObjects1);
gdjs.copyArray(runtimeScene.getObjects("PS"), gdjs.Modulo_326Code.GDPSObjects1);
gdjs.copyArray(runtimeScene.getObjects("TextBoxBackground"), gdjs.Modulo_326Code.GDTextBoxBackgroundObjects1);
{for(var i = 0, len = gdjs.Modulo_326Code.GDNewBBTextObjects1.length ;i < len;++i) {
    gdjs.Modulo_326Code.GDNewBBTextObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Modulo_326Code.GDTextBoxBackgroundObjects1.length ;i < len;++i) {
    gdjs.Modulo_326Code.GDTextBoxBackgroundObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Modulo_326Code.GDPSObjects1.length ;i < len;++i) {
    gdjs.Modulo_326Code.GDPSObjects1[i].hide(false);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("HandL"), gdjs.Modulo_326Code.GDHandLObjects1);
gdjs.copyArray(runtimeScene.getObjects("NextButton"), gdjs.Modulo_326Code.GDNextButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Modulo_326Code.mapOfGDgdjs_9546Modulo_9595326Code_9546GDHandLObjects1Objects, gdjs.Modulo_326Code.mapOfGDgdjs_9546Modulo_9595326Code_9546GDNextButtonObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Modulo_326Code.GDHandLObjects1 */
/* Reuse gdjs.Modulo_326Code.GDNextButtonObjects1 */
{for(var i = 0, len = gdjs.Modulo_326Code.GDHandLObjects1.length ;i < len;++i) {
    gdjs.Modulo_326Code.GDHandLObjects1[i].setLayer("UI");
}
}
{for(var i = 0, len = gdjs.Modulo_326Code.GDHandLObjects1.length ;i < len;++i) {
    gdjs.Modulo_326Code.GDHandLObjects1[i].setZOrder((( gdjs.Modulo_326Code.GDNextButtonObjects1.length === 0 ) ? 0 :gdjs.Modulo_326Code.GDNextButtonObjects1[0].getZOrder()) + 1);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("RedZone"), gdjs.Modulo_326Code.GDRedZoneObjects1);
gdjs.copyArray(runtimeScene.getObjects("Segnaletica"), gdjs.Modulo_326Code.GDSegnaleticaObjects1);
gdjs.copyArray(runtimeScene.getObjects("Segnaletica2"), gdjs.Modulo_326Code.GDSegnaletica2Objects1);
gdjs.copyArray(runtimeScene.getObjects("Segnaletica3"), gdjs.Modulo_326Code.GDSegnaletica3Objects1);
gdjs.copyArray(runtimeScene.getObjects("Segnaletica4"), gdjs.Modulo_326Code.GDSegnaletica4Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Modulo_326Code.mapOfGDgdjs_9546Modulo_9595326Code_9546GDSegnaleticaObjects1Objects, gdjs.Modulo_326Code.mapOfGDgdjs_9546Modulo_9595326Code_9546GDRedZoneObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Modulo_326Code.mapOfGDgdjs_9546Modulo_9595326Code_9546GDSegnaletica2Objects1Objects, gdjs.Modulo_326Code.mapOfGDgdjs_9546Modulo_9595326Code_9546GDRedZoneObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Modulo_326Code.mapOfGDgdjs_9546Modulo_9595326Code_9546GDSegnaletica3Objects1Objects, gdjs.Modulo_326Code.mapOfGDgdjs_9546Modulo_9595326Code_9546GDRedZoneObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Modulo_326Code.mapOfGDgdjs_9546Modulo_9595326Code_9546GDSegnaletica4Objects1Objects, gdjs.Modulo_326Code.mapOfGDgdjs_9546Modulo_9595326Code_9546GDRedZoneObjects1Objects, false, runtimeScene, false);
}
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Allarme"), gdjs.Modulo_326Code.GDAllarmeObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs.Modulo_326Code.GDNewSpriteObjects1);
{for(var i = 0, len = gdjs.Modulo_326Code.GDAllarmeObjects1.length ;i < len;++i) {
    gdjs.Modulo_326Code.GDAllarmeObjects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Modulo_326Code.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.Modulo_326Code.GDNewSpriteObjects1[i].hide(false);
}
}
}

}


};

gdjs.Modulo_326Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Modulo_326Code.GDTextBoxBackgroundObjects1.length = 0;
gdjs.Modulo_326Code.GDTextBoxBackgroundObjects2.length = 0;
gdjs.Modulo_326Code.GDNextButtonObjects1.length = 0;
gdjs.Modulo_326Code.GDNextButtonObjects2.length = 0;
gdjs.Modulo_326Code.GDHandRObjects1.length = 0;
gdjs.Modulo_326Code.GDHandRObjects2.length = 0;
gdjs.Modulo_326Code.GDHandLObjects1.length = 0;
gdjs.Modulo_326Code.GDHandLObjects2.length = 0;
gdjs.Modulo_326Code.GDNewBBTextObjects1.length = 0;
gdjs.Modulo_326Code.GDNewBBTextObjects2.length = 0;
gdjs.Modulo_326Code.GDboscoObjects1.length = 0;
gdjs.Modulo_326Code.GDboscoObjects2.length = 0;
gdjs.Modulo_326Code.GDAllarmeObjects1.length = 0;
gdjs.Modulo_326Code.GDAllarmeObjects2.length = 0;
gdjs.Modulo_326Code.GDNewSpriteObjects1.length = 0;
gdjs.Modulo_326Code.GDNewSpriteObjects2.length = 0;
gdjs.Modulo_326Code.GDPSObjects1.length = 0;
gdjs.Modulo_326Code.GDPSObjects2.length = 0;
gdjs.Modulo_326Code.GDPS2Objects1.length = 0;
gdjs.Modulo_326Code.GDPS2Objects2.length = 0;
gdjs.Modulo_326Code.GDgoObjects1.length = 0;
gdjs.Modulo_326Code.GDgoObjects2.length = 0;
gdjs.Modulo_326Code.GDproseguiObjects1.length = 0;
gdjs.Modulo_326Code.GDproseguiObjects2.length = 0;
gdjs.Modulo_326Code.GDSegnaleticaObjects1.length = 0;
gdjs.Modulo_326Code.GDSegnaleticaObjects2.length = 0;
gdjs.Modulo_326Code.GDSegnaletica2Objects1.length = 0;
gdjs.Modulo_326Code.GDSegnaletica2Objects2.length = 0;
gdjs.Modulo_326Code.GDSegnaletica3Objects1.length = 0;
gdjs.Modulo_326Code.GDSegnaletica3Objects2.length = 0;
gdjs.Modulo_326Code.GDSegnaletica4Objects1.length = 0;
gdjs.Modulo_326Code.GDSegnaletica4Objects2.length = 0;
gdjs.Modulo_326Code.GDallarme1Objects1.length = 0;
gdjs.Modulo_326Code.GDallarme1Objects2.length = 0;
gdjs.Modulo_326Code.GDallarme2Objects1.length = 0;
gdjs.Modulo_326Code.GDallarme2Objects2.length = 0;
gdjs.Modulo_326Code.GDallarme3Objects1.length = 0;
gdjs.Modulo_326Code.GDallarme3Objects2.length = 0;
gdjs.Modulo_326Code.GDallarme4Objects1.length = 0;
gdjs.Modulo_326Code.GDallarme4Objects2.length = 0;
gdjs.Modulo_326Code.GDRedZoneObjects1.length = 0;
gdjs.Modulo_326Code.GDRedZoneObjects2.length = 0;

gdjs.Modulo_326Code.eventsList0(runtimeScene);
gdjs.Modulo_326Code.GDTextBoxBackgroundObjects1.length = 0;
gdjs.Modulo_326Code.GDTextBoxBackgroundObjects2.length = 0;
gdjs.Modulo_326Code.GDNextButtonObjects1.length = 0;
gdjs.Modulo_326Code.GDNextButtonObjects2.length = 0;
gdjs.Modulo_326Code.GDHandRObjects1.length = 0;
gdjs.Modulo_326Code.GDHandRObjects2.length = 0;
gdjs.Modulo_326Code.GDHandLObjects1.length = 0;
gdjs.Modulo_326Code.GDHandLObjects2.length = 0;
gdjs.Modulo_326Code.GDNewBBTextObjects1.length = 0;
gdjs.Modulo_326Code.GDNewBBTextObjects2.length = 0;
gdjs.Modulo_326Code.GDboscoObjects1.length = 0;
gdjs.Modulo_326Code.GDboscoObjects2.length = 0;
gdjs.Modulo_326Code.GDAllarmeObjects1.length = 0;
gdjs.Modulo_326Code.GDAllarmeObjects2.length = 0;
gdjs.Modulo_326Code.GDNewSpriteObjects1.length = 0;
gdjs.Modulo_326Code.GDNewSpriteObjects2.length = 0;
gdjs.Modulo_326Code.GDPSObjects1.length = 0;
gdjs.Modulo_326Code.GDPSObjects2.length = 0;
gdjs.Modulo_326Code.GDPS2Objects1.length = 0;
gdjs.Modulo_326Code.GDPS2Objects2.length = 0;
gdjs.Modulo_326Code.GDgoObjects1.length = 0;
gdjs.Modulo_326Code.GDgoObjects2.length = 0;
gdjs.Modulo_326Code.GDproseguiObjects1.length = 0;
gdjs.Modulo_326Code.GDproseguiObjects2.length = 0;
gdjs.Modulo_326Code.GDSegnaleticaObjects1.length = 0;
gdjs.Modulo_326Code.GDSegnaleticaObjects2.length = 0;
gdjs.Modulo_326Code.GDSegnaletica2Objects1.length = 0;
gdjs.Modulo_326Code.GDSegnaletica2Objects2.length = 0;
gdjs.Modulo_326Code.GDSegnaletica3Objects1.length = 0;
gdjs.Modulo_326Code.GDSegnaletica3Objects2.length = 0;
gdjs.Modulo_326Code.GDSegnaletica4Objects1.length = 0;
gdjs.Modulo_326Code.GDSegnaletica4Objects2.length = 0;
gdjs.Modulo_326Code.GDallarme1Objects1.length = 0;
gdjs.Modulo_326Code.GDallarme1Objects2.length = 0;
gdjs.Modulo_326Code.GDallarme2Objects1.length = 0;
gdjs.Modulo_326Code.GDallarme2Objects2.length = 0;
gdjs.Modulo_326Code.GDallarme3Objects1.length = 0;
gdjs.Modulo_326Code.GDallarme3Objects2.length = 0;
gdjs.Modulo_326Code.GDallarme4Objects1.length = 0;
gdjs.Modulo_326Code.GDallarme4Objects2.length = 0;
gdjs.Modulo_326Code.GDRedZoneObjects1.length = 0;
gdjs.Modulo_326Code.GDRedZoneObjects2.length = 0;


return;

}

gdjs['Modulo_326Code'] = gdjs.Modulo_326Code;
