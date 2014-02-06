#pragma strict
var cam: GameObject;

function Start () {

}

function Update () 
{
	transform.LookAt(cam.transform);
}