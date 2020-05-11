function add_a () {
  var link_name = document.getElementById ('link_name');
  var url_add = document.getElementById ('url_adr');
  var link_d = document.getElementById ('link_disp');

  var e_link = document.createElement ('a');
  e_link.setAttribute ("href", url_adr.value);
  e_link.setAttribute ("target", "_blank");
  e_link.innerHTML = link_name.value + "<br>";
  link_d.appendChild (e_link);
}