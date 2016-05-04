var x = new XMLHttpRequest();
x.open("GET", "https://plus.iltalehti.fi/feed/", true);
x.onreadystatechange = function() {
  if (x.readyState == 4 && x.status == 200) {
    var doc = x.responseXML;
  }
  if (typeof doc !== "undefined") {
    var otsikko = doc.getElementsByTagName('title');
    var kuva = doc.getElementsByTagName('articleimagebig');
    var linkki = doc.getElementsByTagName('link');
    var numero = Math.floor((Math.random() * 9) + 1);

    $("#kuvallinen").append("<p id='alateksti'>" + otsikko[numero].firstChild.nodeValue + "</p>");
    var tausta = "url('" + kuva[numero - 1].firstChild.nodeValue + "') no-repeat";
    $('#kuvallinen').css("background", tausta);
    $('#ulkoinen').click(function(){
      location.href = linkki[numero + 1].firstChild.nodeValue;
    }); 
  }
};
x.send(null);
