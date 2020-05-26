var interval_id_1 = null ;
var interval_id_2 = null ;
var interval_id_3 = null ;
var r_1 ;
var r_2 ;
var r_3 ;
var su_1 = '' ;
var su_2 = '' ;
var su_3 = '' ;
function roulette_start ( ) {
  r_1 = new roulette_class ( 1 ) ;
  r_2 = new roulette_class ( 2 ) ;
  r_3 = new roulette_class ( 3 ) ;
  $ ( "#hantei" ).html ( "" ) ;
  $ ( "#start" ).attr ( "disabled" , true ) ;
  $ ( "#stop_1" ).removeAttr ( "disabled" ) ;
  $ ( "#stop_2" ).removeAttr ( "disabled" ) ;
  $ ( "#stop_3" ).removeAttr ( "disabled" ) ;
  interval_id_1 = setInterval ( r_1.roulette_go , 50 ) ;
  interval_id_2 = setInterval ( r_2.roulette_go , 50 ) ;
  interval_id_3 = setInterval ( r_3.roulette_go , 50 ) ;
}
function roulette_class ( no ) {
  var su ;
  this.roulette_go = function ( ) {
    su = Math.floor ( Math.random ( ) * 10 ) ;
    $ ( "#box_" + no ).text ( su ) ;
  }
  this.return_no = function ( ) {
    return su ;
  }
}
function roulette_stop_1 ( ) {
  clearInterval ( interval_id_1 ) ;
  interval_id_1 = null ;
  $ ( "#stop_1" ).attr ( "disabled" , true ) ;
  su_1 = r_1.return_no ( ) ;
  win_hantei ( ) ;
}
function roulette_stop_2 ( ) {
  clearInterval ( interval_id_2 ) ;
  interval_id_2 = null ;
  $ ( "#stop_2" ).attr ( "disabled" , true ) ;
  su_2 = r_2.return_no ( ) ;
  win_hantei ( ) ;
}
function roulette_stop_3 ( ) {
  clearInterval ( interval_id_3 ) ;
  interval_id_3 = null ;
  $ ( "#stop_3" ).attr ( "disabled" , true ) ;
  su_3 = r_3.return_no ( ) ;
  win_hantei ( ) ;
}
function win_hantei ( ) {
  if ( interval_id_1 == null && interval_id_2 == null && interval_id_3 == null ) {
    if ( su_1 == su_2 && su_1 == su_3 ) {
      $ ( "#hantei" ).html ( "あたり！" ) ;
    } else if ( su_1 == su_2 || su_1 == su_3 || su_2 == su_3 ) {
      $ ( "#hantei" ).html ( "おしい" ) ;
    } else {
      $ ( "#hantei" ).html ( "残念" ) ;
    }
    $ ( "#start" ).removeAttr ( "disabled" ) ;
  }
}
$ ( function ( ) {
  $ ( "#start" ).click ( roulette_start ) ;
  $ ( "#stop_1" ).click ( roulette_stop_1 ) ;
  $ ( "#stop_2" ).click ( roulette_stop_2 ) ;
  $ ( "#stop_3" ).click ( roulette_stop_3 ) ;
  $ ( "#stop_1" ).attr ( "disabled" , true ) ;
  $ ( "#stop_2" ).attr ( "disabled" , true ) ;
  $ ( "#stop_3" ).attr ( "disabled" , true ) ;
} ) ;
