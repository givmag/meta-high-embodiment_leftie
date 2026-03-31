gdjs.Modulo_325Code = {};
gdjs.Modulo_325Code.localVariables = [];
gdjs.Modulo_325Code.idToCallbackMap = new Map();
gdjs.Modulo_325Code.GDTextBoxBackgroundObjects1= [];
gdjs.Modulo_325Code.GDTextBoxBackgroundObjects2= [];
gdjs.Modulo_325Code.GDNextButtonObjects1= [];
gdjs.Modulo_325Code.GDNextButtonObjects2= [];
gdjs.Modulo_325Code.GDHandRObjects1= [];
gdjs.Modulo_325Code.GDHandRObjects2= [];
gdjs.Modulo_325Code.GDHandLObjects1= [];
gdjs.Modulo_325Code.GDHandLObjects2= [];
gdjs.Modulo_325Code.GDNewBBTextObjects1= [];
gdjs.Modulo_325Code.GDNewBBTextObjects2= [];
gdjs.Modulo_325Code.GDSfondoObjects1= [];
gdjs.Modulo_325Code.GDSfondoObjects2= [];
gdjs.Modulo_325Code.GDFriend2Objects1= [];
gdjs.Modulo_325Code.GDFriend2Objects2= [];
gdjs.Modulo_325Code.GDFriend3Objects1= [];
gdjs.Modulo_325Code.GDFriend3Objects2= [];
gdjs.Modulo_325Code.GDFriend4Objects1= [];
gdjs.Modulo_325Code.GDFriend4Objects2= [];
gdjs.Modulo_325Code.GDFriend2AObjects1= [];
gdjs.Modulo_325Code.GDFriend2AObjects2= [];
gdjs.Modulo_325Code.GDFriend3AObjects1= [];
gdjs.Modulo_325Code.GDFriend3AObjects2= [];
gdjs.Modulo_325Code.GDFriend4AObjects1= [];
gdjs.Modulo_325Code.GDFriend4AObjects2= [];
gdjs.Modulo_325Code.GDFriend1Objects1= [];
gdjs.Modulo_325Code.GDFriend1Objects2= [];
gdjs.Modulo_325Code.GDFriend1AObjects1= [];
gdjs.Modulo_325Code.GDFriend1AObjects2= [];


gdjs.Modulo_325Code.mapOfGDgdjs_9546Modulo_9595325Code_9546GDHandLObjects1Objects = Hashtable.newFrom({"HandL": gdjs.Modulo_325Code.GDHandLObjects1});
gdjs.Modulo_325Code.mapOfGDgdjs_9546Modulo_9595325Code_9546GDNextButtonObjects1Objects = Hashtable.newFrom({"NextButton": gdjs.Modulo_325Code.GDNextButtonObjects1});
gdjs.Modulo_325Code.mapOfGDgdjs_9546Modulo_9595325Code_9546GDFriend2Objects1Objects = Hashtable.newFrom({"Friend2": gdjs.Modulo_325Code.GDFriend2Objects1});
gdjs.Modulo_325Code.eventsList0 = function(runtimeScene) {

{

/* Reuse gdjs.Modulo_325Code.GDFriend2Objects1 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Modulo_325Code.GDFriend2Objects1.length;i<l;++i) {
    if ( gdjs.Modulo_325Code.GDFriend2Objects1[i].getBehavior("Tween").hasFinished("Friend2PositionTween") ) {
        isConditionTrue_0 = true;
        gdjs.Modulo_325Code.GDFriend2Objects1[k] = gdjs.Modulo_325Code.GDFriend2Objects1[i];
        ++k;
    }
}
gdjs.Modulo_325Code.GDFriend2Objects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Modulo_325Code.GDFriend2Objects1 */
/* Reuse gdjs.Modulo_325Code.GDFriend2AObjects1 */
{for(var i = 0, len = gdjs.Modulo_325Code.GDFriend2Objects1.length ;i < len;++i) {
    gdjs.Modulo_325Code.GDFriend2Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Modulo_325Code.GDFriend2AObjects1.length ;i < len;++i) {
    gdjs.Modulo_325Code.GDFriend2AObjects1[i].hide(false);
}
}
}

}


};gdjs.Modulo_325Code.mapOfGDgdjs_9546Modulo_9595325Code_9546GDFriend3Objects1Objects = Hashtable.newFrom({"Friend3": gdjs.Modulo_325Code.GDFriend3Objects1});
gdjs.Modulo_325Code.eventsList1 = function(runtimeScene) {

{

/* Reuse gdjs.Modulo_325Code.GDFriend3Objects1 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Modulo_325Code.GDFriend3Objects1.length;i<l;++i) {
    if ( gdjs.Modulo_325Code.GDFriend3Objects1[i].getBehavior("Tween").hasFinished("Friend3PositionTween") ) {
        isConditionTrue_0 = true;
        gdjs.Modulo_325Code.GDFriend3Objects1[k] = gdjs.Modulo_325Code.GDFriend3Objects1[i];
        ++k;
    }
}
gdjs.Modulo_325Code.GDFriend3Objects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Modulo_325Code.GDFriend3Objects1 */
/* Reuse gdjs.Modulo_325Code.GDFriend3AObjects1 */
{for(var i = 0, len = gdjs.Modulo_325Code.GDFriend3Objects1.length ;i < len;++i) {
    gdjs.Modulo_325Code.GDFriend3Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Modulo_325Code.GDFriend3AObjects1.length ;i < len;++i) {
    gdjs.Modulo_325Code.GDFriend3AObjects1[i].hide(false);
}
}
}

}


};gdjs.Modulo_325Code.mapOfGDgdjs_9546Modulo_9595325Code_9546GDFriend4Objects1Objects = Hashtable.newFrom({"Friend4": gdjs.Modulo_325Code.GDFriend4Objects1});
gdjs.Modulo_325Code.eventsList2 = function(runtimeScene) {

{

/* Reuse gdjs.Modulo_325Code.GDFriend4Objects1 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Modulo_325Code.GDFriend4Objects1.length;i<l;++i) {
    if ( gdjs.Modulo_325Code.GDFriend4Objects1[i].getBehavior("Tween").hasFinished("Friend4PositionTween") ) {
        isConditionTrue_0 = true;
        gdjs.Modulo_325Code.GDFriend4Objects1[k] = gdjs.Modulo_325Code.GDFriend4Objects1[i];
        ++k;
    }
}
gdjs.Modulo_325Code.GDFriend4Objects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Modulo_325Code.GDFriend4Objects1 */
/* Reuse gdjs.Modulo_325Code.GDFriend4AObjects1 */
{for(var i = 0, len = gdjs.Modulo_325Code.GDFriend4Objects1.length ;i < len;++i) {
    gdjs.Modulo_325Code.GDFriend4Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Modulo_325Code.GDFriend4AObjects1.length ;i < len;++i) {
    gdjs.Modulo_325Code.GDFriend4AObjects1[i].hide(false);
}
}
}

}


};gdjs.Modulo_325Code.eventsList3 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Friend1A"), gdjs.Modulo_325Code.GDFriend1AObjects1);
gdjs.copyArray(runtimeScene.getObjects("Friend2A"), gdjs.Modulo_325Code.GDFriend2AObjects1);
gdjs.copyArray(runtimeScene.getObjects("Friend3A"), gdjs.Modulo_325Code.GDFriend3AObjects1);
gdjs.copyArray(runtimeScene.getObjects("Friend4A"), gdjs.Modulo_325Code.GDFriend4AObjects1);
gdjs.copyArray(runtimeScene.getObjects("NextButton"), gdjs.Modulo_325Code.GDNextButtonObjects1);
{for(var i = 0, len = gdjs.Modulo_325Code.GDNextButtonObjects1.length ;i < len;++i) {
    gdjs.Modulo_325Code.GDNextButtonObjects1[i].hide();
}
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "NextButtonTimer");
}
{for(var i = 0, len = gdjs.Modulo_325Code.GDFriend1AObjects1.length ;i < len;++i) {
    gdjs.Modulo_325Code.GDFriend1AObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Modulo_325Code.GDFriend2AObjects1.length ;i < len;++i) {
    gdjs.Modulo_325Code.GDFriend2AObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Modulo_325Code.GDFriend3AObjects1.length ;i < len;++i) {
    gdjs.Modulo_325Code.GDFriend3AObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Modulo_325Code.GDFriend4AObjects1.length ;i < len;++i) {
    gdjs.Modulo_325Code.GDFriend4AObjects1[i].hide();
}
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("HandL"), gdjs.Modulo_325Code.GDHandLObjects1);
{for(var i = 0, len = gdjs.Modulo_325Code.GDHandLObjects1.length ;i < len;++i) {
    gdjs.Modulo_325Code.GDHandLObjects1[i].setX(gdjs.evtTools.input.getCursorX(runtimeScene, "", 0));
}
}
{for(var i = 0, len = gdjs.Modulo_325Code.GDHandLObjects1.length ;i < len;++i) {
    gdjs.Modulo_325Code.GDHandLObjects1[i].setY(gdjs.evtTools.input.getCursorY(runtimeScene, "", 0));
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NextButton"), gdjs.Modulo_325Code.GDNextButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Modulo_325Code.GDNextButtonObjects1.length;i<l;++i) {
    if ( gdjs.Modulo_325Code.GDNextButtonObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.Modulo_325Code.GDNextButtonObjects1[k] = gdjs.Modulo_325Code.GDNextButtonObjects1[i];
        ++k;
    }
}
gdjs.Modulo_325Code.GDNextButtonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Modulo 6", false);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "NextButtonTimer") >= 15;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NextButton"), gdjs.Modulo_325Code.GDNextButtonObjects1);
{for(var i = 0, len = gdjs.Modulo_325Code.GDNextButtonObjects1.length ;i < len;++i) {
    gdjs.Modulo_325Code.GDNextButtonObjects1[i].hide(false);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("HandL"), gdjs.Modulo_325Code.GDHandLObjects1);
gdjs.copyArray(runtimeScene.getObjects("NextButton"), gdjs.Modulo_325Code.GDNextButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Modulo_325Code.mapOfGDgdjs_9546Modulo_9595325Code_9546GDHandLObjects1Objects, gdjs.Modulo_325Code.mapOfGDgdjs_9546Modulo_9595325Code_9546GDNextButtonObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Modulo_325Code.GDHandLObjects1 */
/* Reuse gdjs.Modulo_325Code.GDNextButtonObjects1 */
{for(var i = 0, len = gdjs.Modulo_325Code.GDHandLObjects1.length ;i < len;++i) {
    gdjs.Modulo_325Code.GDHandLObjects1[i].setLayer("UI");
}
}
{for(var i = 0, len = gdjs.Modulo_325Code.GDHandLObjects1.length ;i < len;++i) {
    gdjs.Modulo_325Code.GDHandLObjects1[i].setZOrder((( gdjs.Modulo_325Code.GDNextButtonObjects1.length === 0 ) ? 0 :gdjs.Modulo_325Code.GDNextButtonObjects1[0].getZOrder()) + 1);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Friend2"), gdjs.Modulo_325Code.GDFriend2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Modulo_325Code.mapOfGDgdjs_9546Modulo_9595325Code_9546GDFriend2Objects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}
if (isConditionTrue_0) {
/* Reuse gdjs.Modulo_325Code.GDFriend2Objects1 */
gdjs.copyArray(runtimeScene.getObjects("Friend2A"), gdjs.Modulo_325Code.GDFriend2AObjects1);
{for(var i = 0, len = gdjs.Modulo_325Code.GDFriend2Objects1.length ;i < len;++i) {
    gdjs.Modulo_325Code.GDFriend2Objects1[i].getBehavior("Tween").addObjectScaleTween3("Friend2ScaleTween", 1.2, "linear", 0.3, false, true);
}
}
{for(var i = 0, len = gdjs.Modulo_325Code.GDFriend2Objects1.length ;i < len;++i) {
    gdjs.Modulo_325Code.GDFriend2Objects1[i].getBehavior("Tween").addObjectPositionTween2("Friend2PositionTween", (( gdjs.Modulo_325Code.GDFriend2AObjects1.length === 0 ) ? 0 :gdjs.Modulo_325Code.GDFriend2AObjects1[0].getPointX("")), (( gdjs.Modulo_325Code.GDFriend2AObjects1.length === 0 ) ? 0 :gdjs.Modulo_325Code.GDFriend2AObjects1[0].getPointY("")), "linear", 0.5, false);
}
}

{ //Subevents
gdjs.Modulo_325Code.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Friend3"), gdjs.Modulo_325Code.GDFriend3Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Modulo_325Code.mapOfGDgdjs_9546Modulo_9595325Code_9546GDFriend3Objects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}
if (isConditionTrue_0) {
/* Reuse gdjs.Modulo_325Code.GDFriend3Objects1 */
gdjs.copyArray(runtimeScene.getObjects("Friend3A"), gdjs.Modulo_325Code.GDFriend3AObjects1);
{for(var i = 0, len = gdjs.Modulo_325Code.GDFriend3Objects1.length ;i < len;++i) {
    gdjs.Modulo_325Code.GDFriend3Objects1[i].getBehavior("Tween").addObjectScaleTween3("Friend3ScaleTween", 1.2, "linear", 0.3, false, true);
}
}
{for(var i = 0, len = gdjs.Modulo_325Code.GDFriend3Objects1.length ;i < len;++i) {
    gdjs.Modulo_325Code.GDFriend3Objects1[i].getBehavior("Tween").addObjectPositionTween2("Friend3PositionTween", (( gdjs.Modulo_325Code.GDFriend3AObjects1.length === 0 ) ? 0 :gdjs.Modulo_325Code.GDFriend3AObjects1[0].getPointX("")), (( gdjs.Modulo_325Code.GDFriend3AObjects1.length === 0 ) ? 0 :gdjs.Modulo_325Code.GDFriend3AObjects1[0].getPointY("")), "linear", 0.5, false);
}
}

{ //Subevents
gdjs.Modulo_325Code.eventsList1(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Friend4"), gdjs.Modulo_325Code.GDFriend4Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Modulo_325Code.mapOfGDgdjs_9546Modulo_9595325Code_9546GDFriend4Objects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}
if (isConditionTrue_0) {
/* Reuse gdjs.Modulo_325Code.GDFriend4Objects1 */
gdjs.copyArray(runtimeScene.getObjects("Friend4A"), gdjs.Modulo_325Code.GDFriend4AObjects1);
{for(var i = 0, len = gdjs.Modulo_325Code.GDFriend4Objects1.length ;i < len;++i) {
    gdjs.Modulo_325Code.GDFriend4Objects1[i].getBehavior("Tween").addObjectScaleTween3("Friend4ScaleTween", 1.2, "linear", 0.3, false, true);
}
}
{for(var i = 0, len = gdjs.Modulo_325Code.GDFriend4Objects1.length ;i < len;++i) {
    gdjs.Modulo_325Code.GDFriend4Objects1[i].getBehavior("Tween").addObjectPositionTween2("Friend4PositionTween", (( gdjs.Modulo_325Code.GDFriend4AObjects1.length === 0 ) ? 0 :gdjs.Modulo_325Code.GDFriend4AObjects1[0].getPointX("")), (( gdjs.Modulo_325Code.GDFriend4AObjects1.length === 0 ) ? 0 :gdjs.Modulo_325Code.GDFriend4AObjects1[0].getPointY("")), "linear", 0.5, false);
}
}

{ //Subevents
gdjs.Modulo_325Code.eventsList2(runtimeScene);} //End of subevents
}

}


};

gdjs.Modulo_325Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Modulo_325Code.GDTextBoxBackgroundObjects1.length = 0;
gdjs.Modulo_325Code.GDTextBoxBackgroundObjects2.length = 0;
gdjs.Modulo_325Code.GDNextButtonObjects1.length = 0;
gdjs.Modulo_325Code.GDNextButtonObjects2.length = 0;
gdjs.Modulo_325Code.GDHandRObjects1.length = 0;
gdjs.Modulo_325Code.GDHandRObjects2.length = 0;
gdjs.Modulo_325Code.GDHandLObjects1.length = 0;
gdjs.Modulo_325Code.GDHandLObjects2.length = 0;
gdjs.Modulo_325Code.GDNewBBTextObjects1.length = 0;
gdjs.Modulo_325Code.GDNewBBTextObjects2.length = 0;
gdjs.Modulo_325Code.GDSfondoObjects1.length = 0;
gdjs.Modulo_325Code.GDSfondoObjects2.length = 0;
gdjs.Modulo_325Code.GDFriend2Objects1.length = 0;
gdjs.Modulo_325Code.GDFriend2Objects2.length = 0;
gdjs.Modulo_325Code.GDFriend3Objects1.length = 0;
gdjs.Modulo_325Code.GDFriend3Objects2.length = 0;
gdjs.Modulo_325Code.GDFriend4Objects1.length = 0;
gdjs.Modulo_325Code.GDFriend4Objects2.length = 0;
gdjs.Modulo_325Code.GDFriend2AObjects1.length = 0;
gdjs.Modulo_325Code.GDFriend2AObjects2.length = 0;
gdjs.Modulo_325Code.GDFriend3AObjects1.length = 0;
gdjs.Modulo_325Code.GDFriend3AObjects2.length = 0;
gdjs.Modulo_325Code.GDFriend4AObjects1.length = 0;
gdjs.Modulo_325Code.GDFriend4AObjects2.length = 0;
gdjs.Modulo_325Code.GDFriend1Objects1.length = 0;
gdjs.Modulo_325Code.GDFriend1Objects2.length = 0;
gdjs.Modulo_325Code.GDFriend1AObjects1.length = 0;
gdjs.Modulo_325Code.GDFriend1AObjects2.length = 0;

gdjs.Modulo_325Code.eventsList3(runtimeScene);
gdjs.Modulo_325Code.GDTextBoxBackgroundObjects1.length = 0;
gdjs.Modulo_325Code.GDTextBoxBackgroundObjects2.length = 0;
gdjs.Modulo_325Code.GDNextButtonObjects1.length = 0;
gdjs.Modulo_325Code.GDNextButtonObjects2.length = 0;
gdjs.Modulo_325Code.GDHandRObjects1.length = 0;
gdjs.Modulo_325Code.GDHandRObjects2.length = 0;
gdjs.Modulo_325Code.GDHandLObjects1.length = 0;
gdjs.Modulo_325Code.GDHandLObjects2.length = 0;
gdjs.Modulo_325Code.GDNewBBTextObjects1.length = 0;
gdjs.Modulo_325Code.GDNewBBTextObjects2.length = 0;
gdjs.Modulo_325Code.GDSfondoObjects1.length = 0;
gdjs.Modulo_325Code.GDSfondoObjects2.length = 0;
gdjs.Modulo_325Code.GDFriend2Objects1.length = 0;
gdjs.Modulo_325Code.GDFriend2Objects2.length = 0;
gdjs.Modulo_325Code.GDFriend3Objects1.length = 0;
gdjs.Modulo_325Code.GDFriend3Objects2.length = 0;
gdjs.Modulo_325Code.GDFriend4Objects1.length = 0;
gdjs.Modulo_325Code.GDFriend4Objects2.length = 0;
gdjs.Modulo_325Code.GDFriend2AObjects1.length = 0;
gdjs.Modulo_325Code.GDFriend2AObjects2.length = 0;
gdjs.Modulo_325Code.GDFriend3AObjects1.length = 0;
gdjs.Modulo_325Code.GDFriend3AObjects2.length = 0;
gdjs.Modulo_325Code.GDFriend4AObjects1.length = 0;
gdjs.Modulo_325Code.GDFriend4AObjects2.length = 0;
gdjs.Modulo_325Code.GDFriend1Objects1.length = 0;
gdjs.Modulo_325Code.GDFriend1Objects2.length = 0;
gdjs.Modulo_325Code.GDFriend1AObjects1.length = 0;
gdjs.Modulo_325Code.GDFriend1AObjects2.length = 0;


return;

}

gdjs['Modulo_325Code'] = gdjs.Modulo_325Code;
