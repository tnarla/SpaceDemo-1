#pragma strict
/*
This should be attached to the ship controller, which should not turn
*/
var thrust: float;
var braking: float; //brake accelaration
var rotateX: float;
var cam: GameObject;
private var speed: float;
private var force: float;



function Start () 
{

}

function OnGUI() 
{
	GUI.Box(new Rect(0,0,100,20), "" + speed);
}

function Update () 
{
	speed = rigidbody.velocity.magnitude;
	if(Input.GetKeyDown(KeyCode.Escape))
	{
		Application.Quit();
	}
	
	
	if(Input.GetKey(KeyCode.W))
	{
		force = thrust * Time.deltaTime;
		rigidbody.AddForce(cam.transform.forward * force);
	}
	else if(Input.GetKey(KeyCode.S))
	{
		force = -thrust * Time.deltaTime;
		rigidbody.AddForce(cam.transform.forward * force);
	}
	else if(Input.GetKey(KeyCode.Space))
	{
		rigidbody.velocity = rigidbody.velocity * braking * Time.deltaTime;
		
	}
	
	if(Input.GetKey(KeyCode.UpArrow))
	{
		cam.transform.localEulerAngles.x -= rotateX * Time.deltaTime;
	}
	else if(Input.GetKey(KeyCode.DownArrow))
	{
		cam.transform.localEulerAngles.x += rotateX * Time.deltaTime;
	}
	
	if(Input.GetKey(KeyCode.LeftArrow))
	{
		cam.transform.localEulerAngles.y -= rotateX * Time.deltaTime;
	}
	else if(Input.GetKey(KeyCode.RightArrow))
	{
		cam.transform.localEulerAngles.y += rotateX * Time.deltaTime;
	}
}