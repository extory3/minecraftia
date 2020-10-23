var ip_list = [];
ip_list.push("play.steeltonmc.com:25565");
ip_list.push("play.kansascitymc.com:25582");
ip_list.push("139.99.68.62:25597");

var random_num = Math.floor(Math.random() * ip_list.length);
const Http = new XMLHttpRequest();
const url = 'https://api.mcsrvstat.us/2/'+ ip_list[random_num];
Http.open("GET",url,true);
Http.send();
var server_status = document.getElementById('status');
var server_name = document.getElementById('server_name');
var online_players = document.getElementById('online_players');
var ip = document.getElementById('ip');
var version = document.getElementById('version');
var server_logo = document.getElementById('server_logo');

function stringLimit(str){
  return str.length > 33 ? str = str.slice(0,33) + "..." : str;
}


Http.onreadystatechange=function(){
  if(this.readyState==4 && this.status ==200){
    let response = JSON.parse(this.responseText);
    console.log(response);
    if(response.favicon!=null){
      server_logo.src = response.icon;
    }
    else{
      server_logo.src = "../no-image.jpg";
    }
    // var stringLimit = response.motd.clean[0].length > 33 ? server_name.innerHTML = response.motd.clean[0].slice(0,33) + "..." : server_name.innerHTML = response.motd.clean[0];
    if(response.online == true){
      server_status.innerHTML = "ON";
      server_status.style.color = "#268a12";
      server_name.innerHTML = stringLimit(response.motd.clean[0]);
      ip.innerHTML = ip_list[random_num];
      version.innerHTML = stringLimit(response.version);
      online_players.innerHTML = response.players.online + "/" + response.players.max;
    }
    else{
      server_status.innerHTML = "OFF";
      server_status.style.color = "red";
      server_name.innerHTML = "-";
      version.innerHTML = "-";
      online_players.innerHTML = "-";
    }
    var str = response.description;
  }
}





but[1].addEventListener('click',randomizeBtn);
but[2].addEventListener('click',mainPage);
console.log(but.length);
function randomizeBtn(){
  audio.addEventListener('ended', function() {
    location.reload();
    return false;
  });
}
