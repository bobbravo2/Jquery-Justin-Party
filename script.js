// alert('welcome to my website!');
;(function () {
var r=Math.random,n=0,d=document,w=window,
	i=d.createElement('img'),
	z=d.createElement('div'),
	zs=z.style,
	a=w.innerWidth*r(),b=w.innerHeight*r();
zs.position="fixed";
zs.left=0;
zs.top=0;
zs.opacity=0;
z.appendChild(i);
i.src='images/jquery1.png';
d.body.appendChild(z);
function R(o,m){return Math.max(Math.min(o+(r()-.5)*400,m-50),50)}
function A(){
	var x=R(a,w.innerWidth),y=R(b,w.innerHeight),
		d=5*Math.sqrt((a-x)*(a-x)+(b-y)*(b-y));
	zs.opacity=n;n=1;
	zs.transition=zs.webkitTransition=d/1e3+'s linear';
	zs.transform=zs.webkitTransform='translate('+x+'px,'+y+'px)';
	i.style.transform=i.style.webkitTransform=(a>x)?'':'scaleX(-1)';
	a=x;b=y;
	setTimeout(A,d);
};setTimeout(A,r()*3e3);
})();


$(document).ready(function() {
  setInterval(rotateImages, 4000);
});

function rotateImages(){
  $("#photoShow").animate({marginLeft: "-400px"}, 1000).delay(4000);
  
  $("#photoShow").animate({marginLeft: "-800px"}, 1000).delay(4000);
  
  $("#photoShow").animate({marginLeft: "0px"}, 1000).delay(4000);
}
