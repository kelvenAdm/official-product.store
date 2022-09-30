jQuery(document).one('ready',function(){

if ( window.location !== window.parent.location ) {

}else{
	
	var affiliate = getQueryStringValue('a').trim();
	var tid = getQueryStringValue('tid').trim();

	jQuery('<iframe>', {
		src: '//hop.clickbank.net/?affiliate='+affiliate+'&vendor=tedsplans&tid='+tid+'&cbpage=lander',
		id:  'myFrame',
		frameborder: 0,
		scrolling: 'no'
	}).appendTo('.accor');
	jQuery('.accor').hide();
}
});

//function to read url parameter value
function getQueryStringValue (key) {  
  return decodeURIComponent(window.location.search.replace(new RegExp("^(?:.*[&\\?]" + encodeURIComponent(key).replace(/[\.\+\*]/g, "\\$&") + "(?:\\=([^&]*))?)?.*$", "i"), "$1"));  
}
