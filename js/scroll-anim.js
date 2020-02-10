var scroller = scrollama();

scroller
  .setup({
    step: '.animista',
    offset: 0.85
    // debug: true
  })
  .onStepEnter(function(response) {
    response.element.classList.add('appear');
  });

window.addEventListener('resize', scroller.resize);
