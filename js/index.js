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

    $("#question").fadeIn();

    load();

    $('#event').change(function(){
      switch ($(this).val()) {
        case 'Casual':
          console.log('a');
          emptyImgDiv();
          load();
          $('#Suggestion').fadeIn();
          break;
        case 'School':
          console.log('a');
          emptyImgDiv();
          load();
          $('#Suggestion').fadeIn();
          break;
        case 'Party':
          console.log('a');
          emptyImgDiv();
          load();
          $('#Suggestion').fadeIn();
          break;
      }
    });
})

function load(){
  var source = $("#item-template").html();
  var template = Handlebars.compile(source);
  var topsArr = [];
  var bottomsArr = [];
  var shoesArr = [];
  var accessoriesArr = [];
  var parentDivTop = $('#topImg');
  var parentDivBottom = $('#bottomImg');
  var parentDivShoes = $('#shoesImg');
  var parentDivAccessories = $('#accessoriesImg');
  let existingData = JSON.parse(localStorage.getItem('itemData'));

  for (let i = 0; i < existingData.length; i++){
    if (existingData[i].type == "tops"){topsArr.push(existingData[i]);}
    if (existingData[i].type == "bottoms"){bottomsArr.push(existingData[i]);}
    if (existingData[i].type == "shoes"){shoesArr.push(existingData[i]);}
    if (existingData[i].type == "accessories"){accessoriesArr.push(existingData[i]);}
  }

  var topHtml = template(topsArr[Math.floor(Math.random() * topsArr.length)]);
  var bottomHtml = template(bottomsArr[Math.floor(Math.random() * bottomsArr.length)]);
  var shoesHtml = template(shoesArr[Math.floor(Math.random() * shoesArr.length)]);
  var accessoriesHtml = template(accessoriesArr[Math.floor(Math.random() * accessoriesArr.length)]);

  parentDivTop.append(topHtml);
  parentDivBottom.append(bottomHtml);
  parentDivShoes.append(shoesHtml);
  parentDivAccessories.append(accessoriesHtml);

}

function emptyImgDiv(){
  $('#topImg').empty();
  $('#bottomImg').empty();
  $('#shoesImg').empty();
  $('#accessoriesImg').empty();
}
