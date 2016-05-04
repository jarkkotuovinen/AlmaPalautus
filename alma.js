var x = new XMLHttpRequest();
x.open("GET", "https://plus.iltalehti.fi/feed/", true);
x.onreadystatechange = function() {
  if (x.readyState == 4 && x.status == 200) {
    var doc = x.responseXML;
  }
  if (typeof doc !== "undefined") {
    var tags = doc.getElementsByTagName('title');
    var tags2 = doc.getElementsByTagName('articleimagebig');
    var tags3 = doc.getElementsByTagName('link');
    var numero = Math.floor((Math.random() * 9) + 1);

    $("#kuvallinen").append("<p id='alateksti'>" + tags[numero].firstChild.nodeValue + "</p>");
    var tausta = "url('" + tags2[numero - 1].firstChild.nodeValue + "') no-repeat";
    $('#kuvallinen').css("background", tausta);
    $('#ulkoinen').click(function(){
      location.href = tags3[numero + 1].firstChild.nodeValue;
    }); 
  }
};
x.send(null);
