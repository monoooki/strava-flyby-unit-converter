function main() {
  intervalId = setInterval(function(){
    convert();
    if (getComputedStyle(document.getElementById('table_loading')).display === 'none') {
      clearInterval(intervalId);
    }
  }, 2000);
}

function convert() {
  var tr = document.getElementById('activity_table').getElementsByTagName('tr');
  for (var i = 0; i < tr.length; i++) {
    var td = tr[i].getElementsByTagName('td');
    if (td[5]) {
      var num = td[5].innerHTML;
      num = num.replace(/\s/g, '');
      num = Math.round(num * 1.609344) + ' km';
      td[5].innerHTML = num;
    }
  }
}


main();
