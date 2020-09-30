// const Http = new XMLHttpRequest();
// const url = 'https://api.minetools.eu/ping/play.steeltonmc.com/25565'
// Http.open("GET",url);
// Http.send();
//
//
// Http.onreadystatechange=function(){
//   if(this.readyState==4 && this.status ==200){
//     console.log(Http.responseText);
//   }
// }

// var rawFile = new XMLHttpRequest();
//    rawFile.open("GET", "/ip_list.txt", false);
//    rawFile.onreadystatechange = function ()
//    {
//        if(rawFile.readyState === 4)
//        {
//            if(rawFile.status === 200 || rawFile.status == 0)
//            {
//                var allText = rawFile.responseText;
//                var new_lines = 0;
//                while(new_lines < allText.length){
//                  if(allText === '\n'){
//                    new_lines++;
//                  }
//                }
//                console.log(new_lines);
//            }
//        }
//    }
//    rawFile.send(null);

//since XMLHttprequest doesn't

var ip_list = [];
ip_list.push("play.steeltonmc.com:25565");
ip_list.push("play.ccraft.xyz:8080");
ip_list.push("mc.happy-hg.com:25565");
ip_list.push("play.kansascitymc.omc:25582");
ip_list.push("bedrock.thenrk.net:19132");
console.log(ip_list[Math.floor(Math.random() * ip_list.length)]);
