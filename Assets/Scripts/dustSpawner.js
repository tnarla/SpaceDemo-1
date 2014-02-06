#pragma strict
var dust: Transform;
var density: int; //number of dust per cubic km
private var max = 500; //max in any dir
private var min = -500; //min in any dir
private var x;
private var y;
private var z;

function Start () 
{
	for(var i = 0; i < density; i++)
	{
		x = Random.Range(min, max);
		y = Random.Range(min, max);
		z = Random.Range(min, max);
		GameObject.Instantiate(dust, Vector3(x,y,z), transform.rotation);
	}
}

function Update () 
{
	
}