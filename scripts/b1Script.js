let flag = 1;
let pos;

$(document).ready(() => {
  $("#b1").hover(
    // when cursor enters the button
    function () {
      flag == 1 ? (pos = 25) : (pos = 0);
      $(this).css({ "left": `${pos}vw` });
    },

    //when cursor leaves the button 
    // (that automatically happens when the button gets shifted) 
    function () {
      flag == 1 ? (flag = 0) : (flag = 1);
    }
  );
});