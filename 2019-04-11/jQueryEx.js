// $('#circle').click(function(){
//     $(this)[0].add('img')
//     $('img')[0].attr('src','https://i.kym-cdn.com/entries/icons/original/000/000/091/TrollFace.jpg')
// })

$('#circle').click(function(){
    alert('clicked')
}).hover(function(){
    $('p').html('Change the text')
}, function(){
    $('p').html('This is a sentence')
})

$('.square').click(function(){
    $(this).css('background-color','blue')
})