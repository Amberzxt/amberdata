Vec4=function(x,y,z)
{
	this.x=x;
    this.y=y;
    this.z=z;
    
}
function AreaofTriangle(v0,v1,v2)
{
	debugger;
	var a=Math.sqrt((v0.x-v1.x)*(v0.x-v1.x)+(v0.y-v1.y)*(v0.y-v1.y)+(v0.z-v1.z)*(v0.z-v1.z));
	var b=Math.sqrt((v0.x-v2.x)*(v0.x-v2.x)+(v0.y-v2.y)*(v0.y-v2.y)+(v0.z-v2.z)*(v0.z-v2.z));
	var c=Math.sqrt((v2.x-v1.x)*(v2.x-v1.x)+(v2.y-v1.y)*(v2.y-v1.y)+(v2.z-v1.z)*(v2.z-v1.z));
	var p=(a+b+c)/2;
    var S=Math.sqrt(p*(p-a)*(p-b)*(p-c));
    return S;
}