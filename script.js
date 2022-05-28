function matriz(){
    var matriz = [];
    document.write("Matriz inicial");
    document.write("<br></br>");
    for (var g = 0; g < 3; g ++ ){
        matriz.push ([0,0,0]);
        for (var k = 0; k < 3; k ++ ){
            matriz [g][k] = parseInt(prompt("Digite um valor para a posição "+ g + " " + k + " da matriz" ));
        }
    
    }
    
    document.write( "<table border = 5px>");
    for (i = 0; i < matriz.length; i++) {
    var linha = '<tr>';
    for (x = 0; x < matriz[i].length; x++) {
    linha = linha + "<td>" + matriz[i][x] + "</td>";
    }
    linha=linha+"</tr>"
    document.write(linha);
    }
    document.write( "</table>");
    
    document.write("<br> </br>");



var escalar;
var matrizF = new Array ();

escalar = parseInt(prompt("digite o escalar que deseja multiplicar sua matriz --> "));


for (var h = 0 ; h < 3; h++ ){
     matrizF.push ([]);
for(var i = 0; i < 3; i++) {
    matrizF[h][i] = 0;
for (var y = 0; y < 3; y++ ){
    matrizF[h][i] = matriz[h][i] * escalar ;
}
 }
}
 

document.write("Matriz multiplicada pelo número: " + escalar);
document.write('<br> </br>')
document.write( "<table border = px>");
for ( var t = 0; t < 3; t++) {
var linhaf = '<tr>';
for ( var l = 0; l < 3; l++) {
linhaf = linhaf + "<td>" + matrizF[t][l] + "</td>";
}
linhaf=linhaf+"</tr>"
document.write(linhaf);
}
document.write( "</table>");

}