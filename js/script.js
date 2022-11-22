$(function(){
  // クリックしたときの処理をするclick()メソッド
  $('.navbtn').click(function(){
    $('span').toggleClass('trigger');// spanタグに.triggerクラスを付け外しする
    $(".header-navmenu").slideToggle(200);// メニューが開閉するメソッド。（）内の数字はは開閉の速さ
  });
  return false;
});
