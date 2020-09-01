
var total=0;
var tot=0;
var quant=[0,0,0,0,0,0,0,0,0];
var cost=[80,180,120,100,120,100,90,140,110];
var i=0;
$(document).ready(function(){
   
    $('.quantity').val(0);
    $('.quantity').focus(function(){
        $(this).blur();
    });
    
    $('.tot').val("Rs."+ 0);
    $('.tot').focus(function(){
        $(this).blur();
    });

    $('#subtract1').on('click',function(){
        if(quant[0]>0)
        quant[0]--;
        $('#quantity1').val(quant[0]);
        for(i=0;i<9;i++)
        {
            total=total+(quant[i]*cost[i]);
        }
        $('.tot').val("Rs." + total);
        total=0;
    });

    $('#add1').on('click',function(){
        quant[0]++;
        $('#quantity1').val(quant[0]);
        for(i=0;i<9;i++)
        {
            total=total+(quant[i]*cost[i]);
        }
        $('.tot').val("Rs." + total);
        total=0;
    });

    $('#subtract2').on('click',function(){
        if(quant[1]>0)
        quant[1]--;
        $('#quantity2').val(quant[1]);
        for(i=0;i<9;i++)
        {
            total=total+(quant[i]*cost[i]);
        }
        $('.tot').val("Rs." + total);
        total=0;
    });

    $('#add2').on('click',function(){
        quant[1]++;
        $('#quantity2').val(quant[1]);
        for(i=0;i<9;i++)
        {
            total=total+(quant[i]*cost[i]);
        }
        $('.tot').val("Rs." + total);
        total=0;
    });

    $('#subtract3').on('click',function(){
        if(quant[2]>0)
        quant[2]--;
        $('#quantity3').val(quant[2]);
        for(i=0;i<9;i++)
        {
            total=total+(quant[i]*cost[i]);
        }
        $('.tot').val("Rs." + total);
        total=0;
    });

    $('#add3').on('click',function(){
        quant[2]++;
        $('#quantity3').val(quant[2]);
        for(i=0;i<9;i++)
        {
            total=total+(quant[i]*cost[i]);
        }
        $('.tot').val("Rs." + total);
        total=0;
    });

    $('#subtract4').on('click',function(){
        if(quant[3]>0)
        quant[3]--;
        $('#quantity4').val(quant[3]);
        for(i=0;i<9;i++)
        {
            total=total+(quant[i]*cost[i]);
        }
        $('.tot').val("Rs." + total);
        total=0;
    });

    $('#add4').on('click',function(){
        quant[3]++;
        $('#quantity4').val(quant[3]);
        for(i=0;i<9;i++)
        {
            total=total+(quant[i]*cost[i]);
        }
        $('.tot').val("Rs." + total);
        total=0;
    });

    $('#subtract5').on('click',function(){
        if(quant[4]>0)
        quant[4]--;
        $('#quantity5').val(quant[4]);
        for(i=0;i<9;i++)
        {
            total=total+(quant[i]*cost[i]);
        }
        $('.tot').val("Rs." + total);
        total=0;
    });

    $('#add5').on('click',function(){
        quant[4]++;
        $('#quantity5').val(quant[4]);
        for(i=0;i<9;i++)
        {
            total=total+(quant[i]*cost[i]);
        }
        $('.tot').val("Rs." + total);
        total=0;
    });

    $('#subtract6').on('click',function(){
        if(quant[5]>0)
        quant[5]--;
        $('#quantity6').val(quant[5]);
        for(i=0;i<9;i++)
        {
            total=total+(quant[i]*cost[i]);
        }
        $('.tot').val("Rs." + total);
        total=0;
    });

    $('#add6').on('click',function(){
        quant[5]++;
        $('#quantity6').val(quant[5]);
        for(i=0;i<9;i++)
        {
            total=total+(quant[i]*cost[i]);
        }
        $('.tot').val("Rs." + total);
        total=0;
    });

    $('#subtract7').on('click',function(){
        if(quant[6]>0)
        quant[6]--;
        $('#quantity7').val(quant[6]);
        for(i=0;i<9;i++)
        {
            total=total+(quant[i]*cost[i]);
        }
        $('.tot').val("Rs." + total);
        total=0;
    });

    $('#add7').on('click',function(){
        quant[6]++;
        $('#quantity7').val(quant[6]);
        for(i=0;i<9;i++)
        {
            total=total+(quant[i]*cost[i]);
        }
        $('.tot').val("Rs." + total);
        total=0;
    });

    $('#subtract8').on('click',function(){
        if(quant[7]>0)
        quant[7]--;
        $('#quantity8').val(quant[7]);
        for(i=0;i<9;i++)
        {
            total=total+(quant[i]*cost[i]);
        }
        $('.tot').val("Rs." + total);
        total=0;
    });

    $('#add8').on('click',function(){
        quant[7]++;
        $('#quantity8').val(quant[7]);
        for(i=0;i<9;i++)
        {
            total=total+(quant[i]*cost[i]);
        }
        $('.tot').val("Rs." + total);
        total=0;
    });

    $('#subtract9').on('click',function(){
        if(quant[8]>0)
        quant[8]--;
        $('#quantity9').val(quant[8]);
        for(i=0;i<9;i++)
        {
            total=total+(quant[i]*cost[i]);
        }
        $('.tot').val("Rs." + total);
        total=0;
    });

    $('#add9').on('click',function(){
        quant[8]++;
        $('#quantity9').val(quant[8]);
        for(i=0;i<9;i++)
         {
             total=total+(quant[i]*cost[i]);
         }
         $('.tot').val("Rs." + total);
         total=0;
    });
});
