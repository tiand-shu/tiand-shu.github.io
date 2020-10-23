(function () {

	//ハンバーガーボタンクリック時の関数
	//querySelector：CSSセレクタで要素を取得
	const $hamburger = document.querySelector('.l-drawer');
	//addEventListener：イベント処理（click）
	$hamburger.addEventListener('click', function(){
	//ON時はis-activeクラス付与、OFF時はis-activeクラス削除
	$hamburger.classList.toggle('l-menu--draweropen')
	});

	//全体を囲む要素をid[#wrapper]で指定
	const $wrapper = document.getElementById('wrapper');
	//メニューオープン・クローズのボタン要素をid[nav-btn]で指定
	const $navBtn = document.getElementById('l-header__button');

	//クリックしたら navToggle関数実行
	$navBtn.addEventListener('click', navToggle);

	//navToggleの関数
	function navToggle() {
	//contains:文字列が引数に指定した文字列を含まれているかどうか[nav-open]
	if ($wrapper.classList.contains('nav-open')) {
		//メニュークローズ時
		navCloseFunc();
	} else {
		//メニューオープン時
		navOpenFunc();
	}
	}

	//メニューオープン時の関数
	function navOpenFunc() {
	//wrapperのclass[nav-open]付与
	$wrapper.classList.add('nav-open');
	}
	//メニュークローズ時の関数
	function navCloseFunc() {
	//wrapperのclass[nav-open]削除
	$wrapper.classList.remove('nav-open');
	}

})();
