// Variables globales
var $page = $('body'),
	$window = $(window);

// Tabs
function Tabs (setting) {
	this.init();
}
Tabs.prototype.init = function __init__ () {

};

// Toogle
function Toggle (settings) {
	this.button = $(settings.button),
	this.clss = settings.clss,
	this.fx = settings.fx,
	this.toggle = settings.toggle,
	this.speed = settings.speed;
	this.init();
}
Toggle.prototype.show = function show (event) {
	event.preventDefault();
	var _this = event.data.context,
		$element = $(this);
	_this.button.not($element)
		.removeClass(_this.clss)
		.next(_this.toggle).slideUp(_this.speed);
	$element
		.toggleClass(_this.clss)
		.next(_this.toggle)[_this.fx](_this.speed);
};
Toggle.prototype.init = function __init__ () {
	this.button.next(this.toggle).hide();
	this.button.on('click', { context: this, hola: 'mundo' }, this.show);
};

// Tooltip
function Tooltip (settings) {
	this.element = $(settings.element),
	this.id = settings.id,
	this.tooltip = $('<div />', { id: this.id });
	this.init();
}
Tooltip.prototype.getPosition = function getPosition (event) {
	return { x: event.clientX, y: event.clientY };
};
Tooltip.prototype.hide = function hide (event) {
	var _this = event.data.context;
	_this.tooltip.detach();
};
Tooltip.prototype.move = function move (event) {
	var _this = event.data.context,
		position = _this.getPosition(event);
	_this.tooltip.css({ left: position.x + 2, top: position.y + 2 });
};
Tooltip.prototype.show = function show (event) {
	var _this = event.data.context,
		position = _this.getPosition(event);
	$page.append(_this.tooltip
		.text($(this).data('title'))
		.css({ left: position.x, top: position.y }));
};
Tooltip.prototype.title = function title () {
	var element = $(this);
	element
		.data('title', this.title)
		.removeAttr('title');
};
Tooltip.prototype.init = function __init__ () {
	this.element
		.on('mouseenter', { context: this }, this.show)
		.on('mouseleave', { context: this }, this.hide)
		.on('mousemove', { context: this }, this.move)
		.each(this.title);
};

function start () {
	var tabs = new Tabs({  });
	var toggle = new Toggle({ button: '.toggle dt', clss: 'current', fx: 'slideToggle', toggle: 'dd', speed: 200 });
	var tooltip = new Tooltip({
		element: '.tooltip',
		id: 'tooltip'
	});
	var otrotooltip = new Tooltip({
		element: '.otrotooltip',
		id: 'otrotooltip'
	});
}

$(document).ready(start);




