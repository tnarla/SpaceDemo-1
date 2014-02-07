#pragma strict
/*
Each chunk is 1k by 1k by 1k
*/
var cam: Rigidbody;
var asteroid: Transform;
var density: int; //number of asteroids per cubic km
private var chunkNum: int = 1000; //number of chunks width
var chunks: int[,] = new int[chunkNum, chunkNum]; //stores loaded chunk data

var chunkX: int = 0;
var chunkZ: int = 0;
var matrixX: int = chunkNum/2;
var matrixZ: int = chunkNum/2;

private var max_x = 500;
private var min_x = -500; 
private var max_z = 500;
private var min_z = -500;
private var max_y = 200;
private var min_y = -200;

var nextX: int = 300; //add 1k each time, to reverse subtract 600
var nextZ: int = 300; 
var nextChunkX: int = 500;
var nextChunkZ: int = 500;
private var prevX_vel: float; //used to determine when the ship has switched z or x motion
private var prevZ_vel: float; 
private var x;
private var y;
private var z;

function Start () 
{
	//load the 0,0 chunk
	for(var i = 0; i < density; i++)
	{
		x = Random.Range(min_x, max_x);
		y = Random.Range(min_y, max_y);
		z = Random.Range(min_z, max_z);
		GameObject.Instantiate(asteroid, Vector3(x,y,z), transform.rotation);
		chunks[0,0] = 1;
	}
}

function Update () 
{
	if((cam.velocity.x > 0) && (prevX_vel < 0)) //if x velocity has switched
	{
		nextX += 600;
		nextChunkX += 1000;
	}
	else if((cam.velocity.x < 0) && (prevX_vel > 0)) //if x velocity has switched
	{
		nextX -= 600;
		nextChunkX -= 1000;
	}
	
	if((cam.velocity.z > 0) && (prevZ_vel < 0)) //if x velocity has switched
	{
		nextZ += 600;
		nextChunkZ += 1000;
	}
	else if((cam.velocity.z < 0) && (prevZ_vel > 0)) //if x velocity has switched
	{
		nextZ -= 600;
		nextChunkZ -= 1000;
	}
	
	prevZ_vel = cam.velocity.z;
	prevX_vel = cam.velocity.x;

	if(cam.velocity.x > 0)
	{
		if(cam.transform.position.x > nextX)
		{
			nextX += 1000;
			if(chunks[matrixX + 1,matrixZ] != 1)
			{
				Spawn(matrixX + 1,matrixZ);
			}
		}
		if(cam.transform.position.x > nextChunkX)
		{
			nextChunkX += 1000;
			chunkX += 1;
			matrixX += 1;
		}
	}
	else if(cam.velocity.x < 0)
	{
		if(cam.transform.position.x < nextX)
		{
			nextX -= 1000;
			if(chunks[matrixX - 1,matrixZ] != 1)
			{
				Spawn(matrixX - 1,matrixZ);
			}
		}
		if(cam.transform.position.x < nextChunkX)
		{
			nextChunkX -= 1000;
			chunkX -= 1;
			matrixX -= 1;
		}
	}
	
	
	
	if(cam.velocity.z > 0)
	{
		if(cam.transform.position.z > nextZ)
		{
			nextZ += 1000;
			if(chunks[matrixX,matrixZ + 1] != 1)
			{
				Spawn(matrixX,matrixZ + 1);
			}
		}
		if(cam.transform.position.z > nextChunkZ)
		{
			nextChunkZ += 1000;
			chunkZ += 1;
			matrixZ += 1;
		}
	}
	else if(cam.velocity.z < 0)
	{
		if(cam.transform.position.z < nextZ)
		{
			nextZ -= 1000;
			if(chunks[matrixX,matrixZ - 1] != 1)
			{
				Spawn(matrixX,matrixZ - 1);
			}
		}
		if(cam.transform.position.z < nextChunkZ)
		{
			nextChunkZ -= 1000;
			chunkZ -= 1;
			matrixZ -= 1;
		}
	}
	
}

function Spawn(xin: int, yin : int)
{
	var tempx = xin - chunkNum/2;
	var tempy = yin - chunkNum/2;
	min_x = (tempx * 1000) - 500;
	max_x = (tempx + 1) * 1000 - 500;
	min_z = (tempy * 1000) - 500;
	max_z = (tempy + 1) * 1000 - 500;
	for(var i = 0; i < density; i++)
	{
		x = Random.Range(min_x, max_x);
		y = Random.Range(min_y, max_y);
		z = Random.Range(min_z, max_z);
		GameObject.Instantiate(asteroid, Vector3(x,y,z), transform.rotation);
		chunks[xin, yin] = 1;
	}
}