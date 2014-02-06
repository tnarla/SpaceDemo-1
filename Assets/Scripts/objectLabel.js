#pragma strict
var skin: GUISkin;
var tex : Texture2D;
var objName: String;
var cam: Camera;
private var x: int;
private var y: int;


function Start () 
{
	

}

function Update () {

}

function OnGUI()
{
	GUI.skin = skin;
	var screenPos : Vector3 = cam.camera.WorldToScreenPoint (transform.position);
	x = screenPos.x;
	y = Screen.height - screenPos.y;
	if(screenPos.z > 0)
	{
		GUI.Box(Rect(x, y, 100, 25), objName); 
		//GUI.DrawTexture(Rect(x - tex.width/2, y - tex.height/2, 32, 32), tex);
	}
	
}