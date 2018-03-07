$('li a').on('mouseover', function highlight(){
  $(this).addClass('highlighted')
});
$('li a').on('mouseleave', function highlight(){
  $(this).removeClass('highlighted')
});
