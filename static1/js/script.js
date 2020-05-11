function add_element() {
  var add_p = document.createElement("p");
  add_p.innerHTML = 'p要素を追加しました';

  var add_text = document.getElementById('add_e');
  add_text.appendChild( add_p );
}