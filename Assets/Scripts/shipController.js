#pragma strict
/*
This should be attached to the ship controller, which should not turn
*/
var thrust: float;
var braking: float; //brake accelaration
var rotate: float; //turn speed
var roll: float; //roll speed
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
	
	if(Input.GetKeyDown(KeyCode.F))
	{
		//warp drive
		
	}
	
	if(Input.GetKey(KeyCode.UpArrow))
	{
		cam.transform.Rotate(Vector3(-rotate * Time.deltaTime, 0, 0));
		//cam.transform.localEulerAngles.x -= rotate * Time.deltaTime;
	}
	else if(Input.GetKey(KeyCode.DownArrow))
	{
		cam.transform.Rotate(Vector3(rotate * Time.deltaTime, 0, 0));
		//cam.transform.localEulerAngles.x += rotate * Time.deltaTime;
	}
	
	if(Input.GetKey(KeyCode.LeftArrow))
	{
		cam.transform.Rotate(Vector3(0, -rotate * Time.deltaTime, 0));
		//cam.transform.localEulerAngles.y -= rotate * Time.deltaTime;
	}
	else if(Input.GetKey(KeyCode.RightArrow))
	{
		cam.transform.Rotate(Vector3(0, rotate * Time.deltaTime, 0));
		//cam.transform.localEulerAngles.y += rotate * Time.deltaTime;
	}
	
	if(Input.GetKey(KeyCode.Q))
	{
		cam.transform.Rotate(Vector3(0, 0, roll * Time.deltaTime));
	}
	else if(Input.GetKey(KeyCode.E))
	{
		cam.transform.Rotate(Vector3(0, 0, -roll * Time.deltaTime));
	}
}