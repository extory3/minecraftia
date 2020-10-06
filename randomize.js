var ip_list = [];
ip_list.push("play.steeltonmc.com:25565");
// ip_list.push("play.ccraft.xyz:8080");
// ip_list.push("mc.happy-hg.com:25565");
// ip_list.push("play.kansascitymc.omc:25582");
// ip_list.push("bedrock.thenrk.net:19132");


var server_name = document.querySelector('#server_name');
const Http = new XMLHttpRequest();
const url = 'https://api.minetools.eu/ping/mc.happy-hg.com/25565';
Http.open("GET",url,true);
Http.send();


Http.onreadystatechange=function(){
  if(this.readyState==4 && this.status ==200){
    let response = JSON.parse(this.responseText);
    console.log(response.favicon);
    document.getElementById('server_logo').src = response.favicon;
  }
}
