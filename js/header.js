$('body').append('<div class="header"></div>');
$('.header').insertBefore($('.container'));
$('.header').append('<span class="leftH">Pull requests</span>' +//提出要求
	'<span>Issues</span>' +//问题
	'<span>Gist</span>' +//主旨
	'<span class="firstH">' +
	'<select name = "" >' +
	'<option value="+">+</option>' +
	'<option value="New repository">新的版本库</option>' +
	'<option value="Import repository">导入库</option>' +
	'<option value="New Gist">新的依据</option>' +
	'<option value="New organization">新的组织</option>' +
	'</select>' +
	'</span>' +
	'<span >' +
	'<select name = "" >' +
	'<option value="people">个人信息</option>' +
	'<option value="Signed in as">签署为</option>' +
	'<option value="Your profile">你的轮廓</option>' +
	'<option value="Your stars">你的星星</option>' +
	'<option value="Explore">探讨</option>' +
	'<option value="Intergrations">整合</option>' +
	'<option value="Settings">设置</option>' +
	'<option value="sign out">退出</option>' +
	'</select>' +
	'</span>');