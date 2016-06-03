require(["gitbook", "jQuery"], function(gitbook, $) {

  // Return true if sidebar is open
  function isOpen() {
      return gitbook.state.$book.hasClass('with-summary');
  }
  
  $(window).bind('storage', function (e) {
    alert(2)
    a();
  });
  
  gitbook.events.bind("page.change", function() {
    a();
  });
  
  
  function a(){
    if (isOpen() == false) {
      $('.markdown-section > ul').first().show().addClass('toc2')
    } else {
      $('.markdown-section > ul').first().hide()
    }
  }
});
