$(document).ready(
    function(){

        features();
        recipes();
    }
);

function features(){
    var $all=$('#features').find('.all');
    $all.each(function(){
        $all.hover(function(){
            $(this).addClass('active')
        },function(){
            $(this).removeClass('active')
        })
       
    })
}

function recipes() {
    var $imgs = $('#recipes').find('.img-item');
    var $item = $('#recipes').find('.item');
    $item.each(function () {
        $item.hover(function () {
            var $caption = $(this).find('.img-caption');
            $caption.removeClass('hidden');
        }, function () {
            var $caption = $(this).find('.img-caption');
            $caption.addClass('hidden');
        });
        // 动起来
        
    })
            function move() {
                var $left = $imgs.css('left');
                var $left = parseInt($left);
                $left = $left - 316;
                if ($left < -1580) {
                    $left = 0;
                }
                // $imgs.css('transform', 'translate3d(' + $left + 'px,0px,0px)');
                // console.log($left);
                // $imgs.css('left',$left+'px');
                $imgs.animate({'left':$left+'px'},900);
            }
            setInterval(move, 2200);
}