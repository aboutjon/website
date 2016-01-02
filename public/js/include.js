$(document).ready(function(){
	var projects = ['9FBDB0', '204F87', '3ACD8C', '674F62', 'EB006B', 'FFC735', '000000'];

	$(".main-link").hover(
		function () {
			for (var i = 1; i <= projects.length; i++) {
				if($(this).hasClass('p' + i)){
					$(this).css('background-color', '#' + projects[i-1]);
					$(this).css('color', '#' + getContrast(projects[i-1]));
					// $('.header').css('color', '#' + getContrast(projects[i-1]));
					// $('.main-menu a').css('color', '#' + getContrast(projects[i-1]));
					// $('.bread-menu a').css('color', '#' + getContrast(projects[i-1]));
					// $('html').css('background-color', '#' + projects[i-1]);
				}
			}
		}, 
		function () {
			for (var i = 1; i <= projects.length; i++) {
				if($(this).hasClass('p' + i)){
					$(this).css('background-color', '#eaeaea');
					$(this).css('color', '#303030');
					// $('.header').css('color', '#303030');
					// $('.main-menu a').css('color', '#303030');
					// $('.bread-menu a').css('color', '#303030');
					// $('html').css('background-color', '#fff');
				}
			}
		}
	);
});

function getContrast(hexcolor){
	var r = parseInt(hexcolor.substr(0,2),16);
	var g = parseInt(hexcolor.substr(2,2),16);
	var b = parseInt(hexcolor.substr(4,2),16);
	var yiq = ((r*299)+(g*587)+(b*114))/1000;
	return (yiq >= 128) ? '000' : 'fff';
}