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
		if(Mathf.Abs(rigidbody.velocity.x) > braking  * Time.deltaTime)
		{
			if(rigidbody.velocity.x > 0)
			{
				rigidbody.velocity.x -= braking * Time.deltaTime;
			}
			else
			{
				rigidbody.velocity.x += braking * Time.deltaTime;
			}
		}
		else
		{
			rigidbody.velocity.x = 0;
		}
		
		if(Mathf.Abs(rigidbody.velocity.y) > braking  * Time.deltaTime)
		{
			if(rigidbody.velocity.y > 0)
			{
				rigidbody.velocity.y -= braking * Time.deltaTime;
			}
			else
			{
				rigidbody.velocity.y += braking * Time.deltaTime;
			}
		}
		else
		{
			rigidbody.velocity.y = 0;
		}
		
		if(Mathf.Abs(rigidbody.velocity.z) > braking * Time.deltaTime)
		{
			if(rigidbody.velocity.z > 0)
			{
				rigidbody.velocity.z -= braking * Time.deltaTime;
			}
			else
			{
				rigidbody.velocity.z += braking * Time.deltaTime;
			}
		}
		else
		{
			rigidbody.velocity.z = 0;
		}
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