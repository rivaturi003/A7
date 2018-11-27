var complexData = [{
    'name': 'BlackSuptShirt',
    'url': 'img/blacksuptshirt.jpg',
    'type': 'tops',
    'color': 'Black'
  },
  {
    'name': 'Eazy350',
    'url': 'img/eazy.jpg',
    'type': 'shoes',
    'color':'Black'
  },
  {
    'name': 'GucciBelt',
    'url': 'img/belt.jpg',
    'type': 'accessories',
    'color': 'Black'
  },
  {
    'name': 'WhiteSupT-Shirt',
    'url': 'img/supreme_Shirt.jpg',
    'type': 'tops',
    'color': 'White'
  },
  {
    'name': 'GucciPant',
    'url': 'img/guccipants.jpg',
    'type': 'bottoms',
    'color': 'Red'
  },
  {
    'name': 'Rolex',
    'url': 'img/icyrolex.jpg',
    'type': 'accessories',
    'color': 'Gold'
  },
  {
    'name': 'GreyEazy350',
    'url': 'img/eazygrey.jpg',
    'type': 'shoes',
    'color':'Grey'
  },
  {
    'name': 'AudemarPiguet',
    'url': 'img/icedoutap.jpg',
    'type': 'accessories',
    'color': 'Silver'
  },
  {
    'name': 'RedNikePant',
    'url': 'img/nikepants.jpeg',
    'type': 'bottoms',
    'color': 'Red'
  },
  {
    'name': 'BlackNikePant',
    'url': 'img/nike_pants.jpg',
    'type': 'bottoms',
    'color':'Black'
  },
  {
    'name': 'BlackSlimShirt',
    'url': 'img/BlackSlimShirt.jpg',
    'type': 'tops',
    'color':'Black'
  },
  {
    'name': 'WhiteShirt',
    'url': 'img/slimshirt.jpg',
    'type': 'tops',
    'color':'White'
  }

]


$(document).ready(function() {
  console.log('hello world');

    if (!(localStorage.key(0) === "itemData")){
      localStorage.setItem('itemData', JSON.stringify(complexData));
    }





  var source = $("#item-template").html();
  var template = Handlebars.compile(source);
  var parentDiv = $(".row");
  var curData = JSON.parse(localStorage.getItem('itemData'));

  for (var i = 0; i < curData.length; i++) {

    var curHtml = template(curData[i]);
    // need to load data from localStorage
    parentDiv.append(curHtml);
  }
  filterSelection("all");

  $('#add').click(function(event) {
    let myStorage = window.localStorage;
    let existingData = JSON.parse(myStorage.getItem('itemData'));
    let itemName = $('#item-name').val();
    let url = $('#url').val();
    let type = $('#types').val();
    let color = $('#color').val();
    let item = {
      'name': itemName,
      'url': url,
      'type': type,
      'color': color
    };
    existingData.push(item);
    myStorage.setItem('itemData', JSON.stringify(existingData));
    reload();
    filterSelection("all");

  });

  $('#newestFirstSort').click(function(event) {
    let existingData = JSON.parse(localStorage.getItem('itemData'));
    let temp;
    for (let i =0; i < (existingData.length - 1)/2; i++){
      temp = existingData[i];
      existingData[i] = existingData[existingData.length - 1 - i];
      existingData[existingData.length - 1 - i] = temp;
    }
    localStorage.setItem('itemData',JSON.stringify(existingData));
    reload();
    filterSelection('all');
  });

  $('#colorSort').click(function(event) {
    let existingData = JSON.parse(localStorage.getItem('itemData'));
    existingData.sort(function(a,b){
      let x = a.color.toLowerCase();
      let y = b.color.toLowerCase();
      if(x < y){return -1;}
      if(x > y){return 1;}
      return 0
    });
    localStorage.setItem('itemData',JSON.stringify(existingData));
    reload();
    filterSelection('all');
  });


})


function reload() {
  $('.row').empty();
  let source = $("#item-template").html();
  let template = Handlebars.compile(source);
  let parentDiv = $(".row");
  let curData = JSON.parse(localStorage.getItem('itemData'));
  for (let i = 0; i < curData.length ; i++) {

    let curHtml = template(curData[i]);
    parentDiv.append(curHtml);

  }
  filterSelection("all");
  setTimeout(window.location.reload(),1000)
}
