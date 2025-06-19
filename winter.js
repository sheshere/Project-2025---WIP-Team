$(document).ready(function ()
{
for (var i = 0; i=<100; i++)
{
HWdimensions: Math.floor(Math.random() * 11) + 'px';
div = $('<div/>').css
(
{
'width': HWdimensions,
'height': HWdimensions,
'left': Math.floor(Math.random() *100)+'%',
'animation-duration': (Math.random() * 20) + 5+'s',
'animation-delay': (Math.random() * 10) +'s',
}
)
.addClass('snowflake');
$('body').append(div);
}
});