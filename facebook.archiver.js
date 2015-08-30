function $id(id) {return document.getElementById(id)}
function $class(className) {return document.getElementsByClassName(className)}
function $tag(tagName) {return document.getElementsByTagName(tagName)}
function removeElement(e) {if (e)return e.parentNode.removeChild(e)}
function removeElements(es) {
	while (es.length>0) removeElement(es[0])
}
function removeFirstOfClass(className) {return removeElement($class(className)[0])}
function removeById(id) {return removeElement($id(id))}
function removeByClass(className) {return removeElements($class(className))}
function replaceInnerHTML(e, toFind, toReplace) {
	e.innerHTML = e.innerHTML.replace(toFind, toReplace)
}

function absoluteTimestamps() {
	var es=document.getElementsByClassName('timestamp');
	for (var i=0; i<es.length; i++) {var e=es[i]; e.innerText = e.getAttribute('title')}
}

function removeBullets() {
	// replaceInnerHTML(document.body, /<\/abbr> · /g, '<\/abbr>');
	// replaceInnerHTML(document.body, / · <label class="uiLinkButton comment_link" title="Leave a comment"><\/label> · /g, '');
	replaceInnerHTML(document.body, /·/g, '&#183;');
	
	var es = $class('fcg');
	for (var i=0; i<es.length; i++) {
		var e=es[i];
		// console.log([e, e.innerHTML]);
		// if (e.innerHTML == '') {removeElement(e)}
		var c=e.firstChild;
		if (c && c.nodeValue==" · ") {removeElement(c)}
		var c=e.lastChild;
		if (c && c.innerHTML == '') {
			removeElement(c);
			var c=e.lastChild;			
		}
		if (c && c.nodeValue==" · ") {removeElement(c)}
	}
}


function removeOthers() {
	document.documentElement.className = '';
	document.body.className = '';
	removeFirstOfClass('UIStandardFrame_SidebarAds');
	removeById('rightCol');
	removeById('leftColContainer');
	removeById('pagelet_sidebar');
	removeByClass('fbDockWrapperRight');
	removeById('pagelet_presence');
	removeById('jewelContainer');
	removeFirstOfClass('tinyman');
	removeByClass('fbFlyoutDialog');
	removeById('navAccount');
	$id('blueBar').style.position = 'static !important';
	removeElements($tag('script'));	
	removeElements($tag('audio'));	
	removeById('navSearch');
	/* Groups */
	removeByClass('groupsCoverPhoto');
	if ($id('group_edit_settings_button')) {
		removeElement($id('group_edit_settings_button').parentNode);
		$id('contentCol').style.marginTop = 0;
		removeByClass('highlightSelector');
	}
	if ($id('pagelet_group_actions')) {removeElement($id('pagelet_group_actions').parentNode)}
	
	if ($id('contentCol')) {$id('contentCol').className += ' UIStandardFrame_Container clearfix'}
}

function removeActions() {
	removeByClass('UIActionLinks')
	// removeFirstOfClass('uiUfiAddComment');
	removeByClass('uiUfiAddComment');
	removeByClass('uiCloseButton');
	removeByClass('uiTooltipWrap');
	removeElements($tag('button'));
	removeElements($tag('input'));
	removeElements($tag('script'));
	removeByClass('uiMorePager');
	
}


function archive() {
	absoluteTimestamps();
	removeOthers();
	removeActions();
	removeBullets();
}

archive();