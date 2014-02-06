#pragma strict
var time: float; //time in seconds to complete one rotation
private var rotationSpeed: float;

function Start () 
{
	rotationSpeed = 360/time;
}

function Update () 
{
	transform.Rotate(0,rotationSpeed * Time.deltaTime,0);
}