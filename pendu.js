var fin=false;
var mode=false;
var regex=/[^a-zA-Z]+/;

$("#mode").css("visibility","visible");

var mot = initialisation();


var lg = mot.length;
var compteur=0;
var tablo = new Array(lg);
var tabloaffiche = new Array(lg);
cacher();
affichageMot(lg);



$("#mode").click(function(){
        mode=true;
        $("#mode").css("visibility","hidden");
        $("#motDonne").css("visibility","visible").focus();
         $("#envoi").css("visibility","visible");
         $("#mot").css("visibility","hidden");
         $("#versus").css("visibility","visible");

});

$("#envoi").click(function(){
    if(($("#motDonne").val()!="")&&!(regex.test($("#motDonne").val())))
    {
    mode=false;
    $("#motDonne").css("visibility","hidden");
    $("#envoi").css("visibility","hidden");
    $("#versus").css("visibility","hidden");
    $("#mot").css("visibility","visible");
    mot=$("#motDonne").val().toUpperCase();
    compteur=0;
    $("canvas").clearCanvas();    
    lg = mot.length;
    delete tablo;
    delete tabloaffiche;
    tablo = new Array(lg);
    tabloaffiche = new Array(lg);
    cacher();
    affichageMot(lg);}
    else $("#motDonne").css("visibility","visible").focus();
    });









jeu();

function cacher()
{
	for (i = 0; i < lg; i++) {
    tablo[i] = mot.substr(i, 1);
    tabloaffiche[i] = "_";
}}
function cacherbis()
{
    for (i = 0; i < lg; i++) {
    tablo[i] = mot.substr(i, 1);
    tabloaffiche[i] = mot.substr(i, 1);
}}
function dessin(nb)
{
    switch(nb)
    {
        case  1 :
            {
                $("canvas").drawRect({ draggable: false, fillStyle: "black", x: 200, y: 350, width: 300, height: 30 });
                break;
            }
        case 2:
            {
                $("canvas").drawRect({ draggable: false, fillStyle: "black", x: 95, y: 210, width: 15, height: 260 });
                break;
            }
        case 3:
            {
                $("canvas").drawRect({ draggable: false, fillStyle: "black", x: 200, y: 80, width: 250, height: 10 });
                break;
            }
        case 4:
            {
                $("canvas").drawRect({ draggable: false, fillStyle: "black", x: 250, y: 100, width: 4, height: 35 });
                break;
            }
        case 5:
            {
                $("canvas").drawRect({ name: "diago", draggable: false, fillStyle: "black", x: 140, y: 120, width: 6, height: 120, rotate: 45 });
                break;
            }
        case 6:
            {
                $("canvas").drawEllipse({ fillStyle: "black", x: 250, y: 140, width: 50, height: 50 });
                break;
            }
        case 7:
            {
                $("canvas").drawRect({ draggable: false, fillStyle: "black", x: 250, y: 200, width: 6, height: 75, strokeStyle: "black", strokeWidth: 0, cornerRadius: 10 });
                break;
            }
        case 8:
            {
                $("canvas").drawRect({ name: "diago", draggable: false, fillStyle: "black", x: 230, y: 200, width: 6, height: 60, rotate: 45, strokeStyle: "black", strokeWidth: 0, cornerRadius: 10 });
                break;
            }
        case 9:
            {
                $("canvas").drawRect({ name: "diago", draggable: false, fillStyle: "black", x: 270, y: 200, width: 6, height: 60, rotate: 135, strokeStyle: "black", strokeWidth: 0, cornerRadius: 10 });
                break;
            }
        case 10:
            {
                $("canvas").drawRect({ name: "diago", draggable: false, fillStyle: "black", x: 270, y: 252, width: 6, height: 60, rotate: 135, strokeStyle: "black", strokeWidth: 0, cornerRadius: 10 });
                break;
            }
        case 11:
            {
                $("canvas").drawRect({ name: "diago", draggable: false, fillStyle: "black", x: 228, y: 252, width: 6, height: 60, rotate: 45, strokeStyle: "black", strokeWidth: 0, cornerRadius: 10 });
                $("canvas").drawEllipse({ fillStyle: "white", x: 350, y: 125, width: 140, height: 70,strokeStyle: "black", strokeWidth: 2 });
                $("canvas").drawText({fillStyle:"black",fontSize:20,x:350,y:118,fontFamilly:"ARIAL",text:"*!*#_ _ _ @:("});
                $("canvas").drawRect({  draggable: false, fillStyle: "black", x: 275, y: 140, width: 2, height: 18, rotate: 45, cornerRadius: 10 });
                $("canvas").drawRect({  draggable: false, fillStyle: "black", x: 275, y: 140, width: 2, height: 18, rotate: 35, cornerRadius: 10 });

                conclusion(0);
                break;

            }
    }


}
function jeu()
{  
$("body").keydown(function (e) {

 var k = e.keyCode;
 if ((k == 65)&&(test2())) {
     verification("A");
 }

 if ((k == 66)&&(test2())) {
     verification("B");
 }
 if ((k == 67)&&(test2())) {
     verification("C");
 }
 if ((k == 68)&&(test2())) {
     verification("D");
 }
 if ((k == 69)&&(test2())) {
     verification("E");
 }
 if ((k == 70)&&(test2())) {
     verification("F");
 }
 if ((k == 71)&&(test2())) {
     verification("G");
 }
 if ((k == 72)&&(test2())) {
     verification("H");
 }
 if ((k == 73)&&(test2())) {
     verification("I");
 }
 if ((k == 74)&&(test2())) {
     verification("J");
 }
 if ((k == 75)&&(test2())) {
     verification("K");
 }
 if ((k == 76)&&(test2())) {
     verification("L");
 }
 if ((k == 77)&&(test2())) {
     verification("M");
 }
 if ((k == 78)&&(test2())) {
     verification("N");
 }
 if ((k == 79)&&(test2())) {
     verification("O");
 }
 if ((k == 80)&&(test2())) {
     verification("P");
 }
 if ((k == 81)&&(test2())) {
     verification("Q");
 }
 if ((k ==82)&&(test2())) {
     verification("R");
 }
 if ((k == 83)&&(test2())) {
     verification("S");
 }
 if ((k == 84)&&(test2())) {
     verification("T");
 }
 if ((k == 85)&&(test2())) {
     verification("U");
 }
 if ((k == 86)&&(test2())) {
     verification("V");
 }
 if ((k == 87)&&(test2())) {
     verification("W");
 }
 if ((k == 88)&&(test2())) {
     verification("X");
 }
 if ((k == 89)&&(test2())) {
     verification("Y");
 }
 if ((k == 90)&&(test2())) {
     verification("Z");
 }
        
       
    });
   }
function initialisation()
{
    var mots = new Array(60);
    mots[0] = "COQ";
    mots[1] = "LUXE";
    mots[2] = "JAZZ";
    mots[3] = "KIWI";
    mots[4] = "TONIC";
    mots[5] = "KAYAC";
    mots[6] = "ZINC";
    mots[7] = "XYLOPHONE";
    mots[8] = "EQUERRE";
    mots[9] = "GYMNASTIQUE";
	mots[10] = "OXYGENE";
	mots[11] = "MINECRAFT";
	mots[12] = "GAZ";
	mots[13] = "MUSIQUE";
	mots[14] = "CONSTRUCTION";
	mots[15] = "WAGON";
	mots[16] = "EXISTENCE";
	mots[17] = "COMPLICATION";
	mots[18] = "DEVINETTE";
	mots[19] = "EXERCICE";
	mots[20] = "TRUC";
	mots[21] = "EXAGERER";
	mots[22] = "TOXIQUE";
	mots[23] = "RISQUE";
	mots[24] = "EXTREME";
	mots[25] = "GOOGLE";
	mots[26] = "ORTHOGRAPHE";
	mots[28] = "JEU";
	mots[29] = "HYENE";
	mots[30] = "HYDRE";
	mots[31] = "NYLON";
	mots[32] = "JOYAU";
	mots[33] = "VOYOU";
	mots[34] = "ROYAL";
	mots[35] = "CURRY";
	mots[36] = "MYOPE";
	mots[37] = "YUCCA";
	mots[38] = "JEU";
	mots[39] = "FEU";
	mots[40] = "ANANAS";
	mots[41] = "GAG";
	mots[42] = "YOGA";
	mots[43] = "QUIZZ";
	mots[44] = "DIABOLO";
	mots[45] = "STYLE";
	mots[46] = "KIOSQUE";
	mots[47] = "CYCLONE";
	mots[48] = "KLAXON";
	mots[49] = "RYTHME";
    mots[50] = "JOYAUX";
    mots[51] = "BIJOU";
    mots[52] = "BIJOUX";
    mots[53] = "CHOUX";
    mots[54] = "YODA";
    mots[55] = "MAMAN";
    mots[56] = "HIBOUX";
    mots[57] = "SEPT";
    mots[58] = "ONZE";
    mots[59] = "CYCLONE";
	

   

    var num = parseInt(Math.random() * 60);
    var mot = mots[num];

    return mot;
}
function affichageMot(lg)
{
    
    $("span").remove();
    $("#mot").append("<span id='espace'> </span>");
    for (i = 0; i < lg; i++)
    {
       $("#mot").append("<span id='case'>"+tabloaffiche[i]+"</span><span id='espace'> </span>");
    }
}
function conclusion(b)
{
	$("#mode").css("visibility","hidden");
    $("#nouveaujeu").css("visibility", "visible").focus();
    
    if(b)
    {
		
        $(".fin2").css("visibility","visible");
		 $("#jeu").css("opacity", "0.2");
        $("#vic").addClass("vic");
    }
   else {
		masquer();
		$("#jeu").css("opacity", "0.2");
        $(".fin").css("visibility","visible");
    }
    
}
function verification(lettre)
{

	if(compteur<11)
	{    

    var bol = false;
    for(i=0;i<lg;i++)
    {
        if(tablo[i]==lettre)
        {
            tabloaffiche[i] = lettre;
            bol = true;
        }

        
    }
           
    affichageMot(lg);
    test();
    if (!bol)
    {
    compteur++;
    dessin(compteur);
    }
}
}
function test()
{
    var n=0;
    for(i=0;i<lg;i++)
    {
        if (tabloaffiche[i] == tablo[i]) n++;
    }
    if (n == lg) 
	{
	conclusion(1);
	
	}
}
function test2()
{
    if(mode)return false;
    var n=0;
    for(i=0;i<lg;i++)
    {
        if (tabloaffiche[i] === tablo[i]) n++;
    }
    if (n == lg) 
	{
	return false
	}
	else{
	return true;}
	}

function masquer()
{
$("span").remove();
}

