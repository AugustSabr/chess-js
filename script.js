var letters = ["a", "b", "c", "d", "e", "f", "g", "h"];

function chessTable(){
  var table = document.createElement("table");
  table.id = "table"
  for (var i = 8 ; i > 0 ; i--) {
    table.insertRow();
    for (var j = 0 ; j < 8 ; j++) {
      var img = document.createElement("img");
      img.id = "img"+letters[j]+i;
      img.style.visibility = 'hidden';
      var cell = table.rows[table.rows.length - 1].insertCell();
      cell.setAttribute("onclick", 'movePiece('+j+', '+i+')');
      cell.appendChild(img)
      cell.id = letters[j]+i;
    }
  }
  var placeholder = document.getElementById("tablePlaceholder")
  placeholder.appendChild(table);
  setBoard();
}
chessTable();

function setBoard(){
  document.getElementById("imga1").src = "pieces/wr.png";
  document.getElementById("imga1").style.visibility = 'visible';
  document.getElementById("imgb1").src = "pieces/wn.png";
  document.getElementById("imgb1").style.visibility = 'visible';
  document.getElementById("imgc1").src = "pieces/wb.png";
  document.getElementById("imgc1").style.visibility = 'visible';
  document.getElementById("imgd1").src = "pieces/wq.png";
  document.getElementById("imgd1").style.visibility = 'visible';
  document.getElementById("imge1").src = "pieces/wk.png";
  document.getElementById("imge1").style.visibility = 'visible';
  document.getElementById("imgf1").src = "pieces/wb.png";
  document.getElementById("imgf1").style.visibility = 'visible';
  document.getElementById("imgg1").src = "pieces/wn.png";
  document.getElementById("imgg1").style.visibility = 'visible';
  document.getElementById("imgh1").src = "pieces/wr.png";
  document.getElementById("imgh1").style.visibility = 'visible';
  for (var i = 0 ; i < 8 ; i++) {
    document.getElementById('img'+letters[i]+'2').src = "pieces/wp.png";
    document.getElementById('img'+letters[i]+'2').style.visibility = 'visible';
  }

  document.getElementById("imga8").src = "pieces/br.png";
  document.getElementById("imga8").style.visibility = 'visible';
  document.getElementById("imgb8").src = "pieces/bn.png";
  document.getElementById("imgb8").style.visibility = 'visible';
  document.getElementById("imgc8").src = "pieces/bb.png";
  document.getElementById("imgc8").style.visibility = 'visible';
  document.getElementById("imgd8").src = "pieces/bq.png";
  document.getElementById("imgd8").style.visibility = 'visible';
  document.getElementById("imge8").src = "pieces/bk.png";
  document.getElementById("imge8").style.visibility = 'visible';
  document.getElementById("imgf8").src = "pieces/bb.png";
  document.getElementById("imgf8").style.visibility = 'visible';
  document.getElementById("imgg8").src = "pieces/bn.png";
  document.getElementById("imgg8").style.visibility = 'visible';
  document.getElementById("imgh8").src = "pieces/br.png";
  document.getElementById("imgh8").style.visibility = 'visible';
  for (var i = 0 ; i < 8 ; i++) {
    document.getElementById('img'+letters[i]+'7').src = "pieces/bp.png"
    document.getElementById('img'+letters[i]+'7').style.visibility = 'visible';
  }
}

var selected = false, src, x2, y2;
function movePiece(x, y){
  if(!selected){
    src = document.getElementById("img"+letters[x]+(y)).getAttribute("src");
    selected = true;
  } else {
    if(src){
      // document.querySelectorAll('#table tr:nth-child(odd) td:nth-child(even)').style.backgroundColor = "red";
      // document.querySelectorAll('#table tr:nth-child(even) td:nth-child(odd)').style.backgroundColor = "red";
      document.getElementById("img"+letters[x2]+(y2)).style.visibility = 'hidden';
      document.getElementById("img"+letters[x]+(y)).setAttribute("src", src);
      document.getElementById("img"+letters[x]+(y)).style.visibility = 'visible';
    }
    selected = false;
  }
  // document.getElementById("letters[x]+(y)").src
  // console.log(letters[x]+(y));
  x2 = x;
  y2 = y;
}