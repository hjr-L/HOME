$(document).ready(
    function(){

        features();
        recipes();
        team();
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
           var timer= setInterval(move, 2200);
        //    $item.each(function () {
        //     $item.hover(function () {
        //         clearInterval(timer);
        //     }, function () {
        //         var timer= setInterval(move, 2200);
        //     });
        //     // 动起来
            
        // })
}
function team(){
    var $list=$('#team').find('.list')
    $list.each(function(){
        var $ul=$(this).find('ul')
        var $img=$(this).find('img')
        var $bor=$(this).find('.bor')

    $(this).hover(function(){
        $ul.animate({'bottom':'40px','opacity':'1'},500);
        $img.animate({'opacity':'0.8'},360);
        $bor.animate({'top':'130px'},500)
    },function(){
        $ul.animate({'bottom':'130px','opacity':'0'},500);
        $img.animate({'opacity':'1'},360);
        $bor.animate({'top':'-15px'},500)
    
    
    });
})

    
}