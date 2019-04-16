Vec3=function(x,y,z)
{
	this.x=x;
    this.y=y;
    this.z=z;
}
Vec3.prototype.min=function()
{
	var min=this.x;
	if(min <= this.y)
	{
		if (min <= this.z)
		{
			min= this.x;
		}
		else 
		{

			min= this.z;
		}

	}
	else 
	{
		if(this.y<=this.z)
		{
			min= this.y;
		}
		else 
		{
			
			min= this.z;
		}
	}
	return min;
}
Vec3.prototype.max=function()
{
	var max=this.x;
	if(max <= this.y)
	{
		if (this.y <= this.z)
		{
			max= this.z;
		}
		else 
		{
			max= this.y;
		}

	}
	else 
	{
		if(this.x<=this.z)
		{
			max= this.z;
		}
		else 
		{
			max= this.x;
		}
	}
	return max;
}
Vec3.prototype.mid=function()
{
	var mid=this.x;
	if(this.x <= this.y)
	{
		if (this.x<= this.z)
		{
			if(this.z<=this.y)
			{
				mid= this.z;
			}
			else
			{
				mid= this.y;
			}
		}
		else 
		{
			mid= this.x;
		}
	}
	else 
	{
		if(this.y<=this.z)
		{
			if(this.x<=this.z)
			{
			    mid= this.x;
			}
			else
			{
			    mid= this.z;
			}
		}
		else 
		{
			mid= this.y;	
		}
	}
	return mid;
}