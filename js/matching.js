$(document).ready(function() {
  console.log('hello world');

  var source = $("#item-template").html();
  var template = Handlebars.compile(source);
  var parentDivTop = $('#topLeft');
  var parentDivBottom = $('#bottomLeft');
  var parentDivShoes = $('#shoesLeft');
  var parentDivAccessories = $('#accessoriesLeft');
  let existingData = JSON.parse(localStorage.getItem('itemData'));

  for (let i = 0; i < existingData.length; i++){
    if (existingData[i].type == "tops"){
      let topHtml = template(existingData[i]);
      $(topHtml).insertBefore(parentDivTop);
    }
    else if (existingData[i].type == "bottoms") {
      let bottomHtml = template(existingData[i]);
      $(bottomHtml).insertBefore(parentDivBottom);
    }
    else if (existingData[i].type == "shoes") {
      let shoesHtml = template(existingData[i]);
      $(shoesHtml).insertBefore(parentDivShoes);
    }
    else {
      let accessoriesHtml = template(existingData[i]);
      $(accessoriesHtml).insertBefore(parentDivAccessories);
    }

  }

  var slideIndex = [1, 1, 1, 1];
  var slideId = ["img-fluid-bottoms", "img-fluid-tops", "img-fluid-shoes",
    "img-fluid-accessories"
  ]
  showDivs(1, 0);
  showDivs(1, 1);
  showDivs(1, 2);
  showDivs(1, 3);

  function plusDivs(n, no) {
    showDivs(slideIndex[no] += n, no);
  }

  function showDivs(n, no) {
    var i;
    var x = document.getElementsByClassName(slideId[no]);
    if (n > x.length) {
      slideIndex[no] = 1
    }
    if (n < 1) {
      slideIndex[no] = x.length
    }
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    x[slideIndex[no] - 1].style.display = "block";
  }


  $('#topLeft').click(function(event) {
    plusDivs(-1,1);
  });

  $('#topRight').click(function(event) {
    plusDivs(1,1);
  });

  $('#bottomLeft').click(function(event) {
    plusDivs(-1,0);
  });

  $('#bottomRight').click(function(event) {
    plusDivs(1,0);
  });

  $('#shoesLeft').click(function(event) {
    plusDivs(-1,2);
  });

  $('#shoesRight').click(function(event) {
    plusDivs(1,2);
  });

  $('#accessoriesLeft').click(function(event) {
    plusDivs(-1,3);
  });

  $('#accessoriesRight').click(function(event) {
    plusDivs(1,3);
  });

  $('#save').click(function(event) {
    alert('Planned change');
  });

  $('#help').click(function(event) {
    alert('Mix and match different clothing items without the hassle of putting them out of your closet!! Then you can save it for later if you really love the combo')
  });




});
