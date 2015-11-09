/**
 * Gaussian Distribution
 * @author Xin Wang <wangx6@gmail.com>
 */
var gaussian = (function($, gaussian){
    'use strict';
    gaussian.init = function(){
        var i = 0, no = 100;
        for(; i < no ; i += 1){
            $('<div>')
            .addClass('bar '+'bar-'+i)
            .css('left',i*7+30)
            .appendTo('body');
        }
        return gaussian;
    };
     
    gaussian.distribution = function(){
        var sampleNo = 3000,
            i = 0, j = 0, val , h, x;

        for(; i < sampleNo ; i += 1){
            x = 0;
            for(j = 0; j < 8 ; j += 1){
                x += Math.random() * 2 -1 ;
            }
            val = Math.floor(( x )* 10 + 50 );
            h = $('.bar-'+val).height();
            $('.bar-'+val).css('height',h+3);
        }
    };
    
    return gaussian;

}(jQuery, gaussian || {}));

$(document).ready(function(){
    gaussian.init().distribution();
});