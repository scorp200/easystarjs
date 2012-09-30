var EasyStar=EasyStar||{};EasyStar.Node=function(e,k,b,l,c){this.parent=e;this.x=k;this.y=b;this.costSoFar=l;this.simpleDistanceToTarget=c;this.bestGuessDistance=function(){return this.costSoFar+this.simpleDistanceToTarget}};EasyStar.Node.OPEN_LIST=0;EasyStar.Node.CLOSED_LIST=1;EasyStar.PriorityQueue=function(e,k){this.length=0;var b=[],l=!1;if(k==EasyStar.PriorityQueue.MAX_HEAP)l=!0;else if(k==EasyStar.PriorityQueue.MIN_HEAP)l=!1;else throw k+" not supported.";this.insert=function(a){if(!a.hasOwnProperty(e))throw"Cannot insert "+a+" because it does not have a property by the name of "+e+".";b.push(a);this.length++;c(this.length-1)};this.getHighestPriorityElement=function(){return b[0]};this.shiftHighestPriorityElement=function(){if(0===this.length)throw"There are no more elements in your priority queue.";
if(1===this.length){var a=b[0];b=[];return a}var a=b[0],n=b.pop();this.length--;b[0]=n;g(0);return a};var c=function(a){if(0!==a){var b=Math.floor(a/2)-1;h(a,b)&&(f(a,b),c(b))}},g=function(a){left=2*a+1;right=2*a+2;h(left,a)?(f(a,left),g(left)):h(right,a)?(f(a,right),g(right)):0!=a&&g(0)},f=function(a,c){var e=b[a];b[a]=b[c];b[c]=e},h=function(a,c){if(void 0===b[c]||void 0===b[a])return!1;"function"===typeof b[a][e]?(selfValue=b[a][e](),targetValue=b[c][e]()):(selfValue=b[a][e],targetValue=b[c][e]);
return l?selfValue>targetValue?!0:!1:selfValue<targetValue?!0:!1}};EasyStar.PriorityQueue.MAX_HEAP=0;EasyStar.PriorityQueue.MIN_HEAP=1;EasyStar.js=function(e,k){var b=!0,l={},c,g,f,h,a,n,q={},p,s=Number.MAX_VALUE;this.setGrid=function(a){c=a};this.setPath=function(i,d,j,l){p=new EasyStar.PriorityQueue("bestGuessDistance",EasyStar.PriorityQueue.MIN_HEAP);b=!0;q={};f=i;h=d;a=j;n=l;if(void 0===c)throw"You can't set a path without first calling setCollisionGrid on the EasyStar.js";if(0>f||0>h||0>a||0>a||f>c[0].length-1||h>c.length-1||a>c[0].length-1||n>c.length-1)throw"Your start or end point is outside the scope of your grid.";f===
a&&h===n&&k([]);i=c[n][a];d=!1;for(j=0;j<e.length;j++)if(i===e[j]){d=!0;break}!1===d?k(null):(b=!1,p.insert(t(f,h,null,10)))};this.calculate=function(){if(!(void 0===c||!0===b))for(g=0;g<s;){if(0===p.length){k(null);b=!0;break}var a=p.shiftHighestPriorityElement();a.list=EasyStar.Node.CLOSED_LIST;if(0<a.y&&(r(a,0,-1,10),!0===b))break;if(a.x<c[0].length-1&&(r(a,1,0,10),!0===b))break;if(a.y<c.length-1&&(r(a,0,1,10),!0===b))break;if(0<a.x&&(r(a,-1,0,10),!0===b))break;g++}};this.setIterationsPerCalculation=
function(a){s=a};this.setAcceptableTiles=function(a){e=a};this.avoidAdditionalPoint=function(a,b){l[a+"_"+b]=1};var r=function(i,d,j,h){d=i.x+d;j=i.y+j;if(a===d&&n===j){b=!0;var m=[],f=0;m[f]={x:d,y:j};f++;m[f]={x:i.x,y:i.y};f++;for(var g=i.parent;null!=g;)m[f]={x:g.x,y:g.y},f++,g=g.parent;m.reverse();k(m)}if(void 0===l[d+"_"+j])for(m=0;m<e.length;m++)if(c[j][d]===e[m]){d=t(d,j,i,h);void 0===d.list?(d.list=EasyStar.Node.OPEN_LIST,p.insert(d)):d.list===EasyStar.Node.OPEN_LIST&&i.costSoFar+h<d.costSoFar&&
(d.costSoFar=i.costSoFar+h,d.parent=i);break}},t=function(b,d,c,e){if(void 0!==q[b+"_"+d])return q[b+"_"+d];var f=Math.floor(Math.abs(d-b)+Math.abs(n-a)),c=new EasyStar.Node(c,b,d,null!==c?c.costSoFar+e:f,f);return q[b+"_"+d]=c}};