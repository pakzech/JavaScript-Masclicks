// Variables globales
var $page = $('body'),
	$window = $(window);

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
	this.element = $(settings.element);
	this.init();
}
Tooltip.prototype.hide = function hide (event) {
	var _this = event.data.context;
};
Tooltip.prototype.show = function show (event) {
	var _this = event.data.context,
		positionX = event.clientX,
		positionY = event.clientY;
	$page.append($('<div />', { id: 'tooltip' }));
};
Tooltip.prototype.init = function __init__ () {
	this.element
		.on('mouseenter', { context: this }, this.show)
		.on('mouseleave', { context: this }, this.hide)
		.on('mousemove', { context: this }, this.move);
};

function start () {
	var toggle = new Toggle({ button: 'dt', clss: 'current', fx: 'slideToggle', toggle: 'dd', speed: 200 });
	var tooltip = new Tooltip({
		element: '.tooltip'
	});
}

$(document).ready(start);