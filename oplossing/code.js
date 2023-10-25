//Interne voorstelling van de puzzel als een tweedimensionale lijst
let my_puzzle = [[0, 1, 2],
                 [7, 4, 8],
                 [3, 5, 6]];

//Wanneer de volledige HTML-pagina geladen is wordt onderstaande functie uitgevoerd
window.onload = function(){
    draw_puzzle(my_puzzle);
}

//Deze functie neemt als invoer de lijstrepresentatie van onze puzzel
//
function draw_puzzle(puzzle){
    let puzzle_html = generate_puzzle_html(puzzle);
    document.getElementById("puzzle_container").innerHTML = puzzle_html;
}

function generate_puzzle_html(puzzle){
    let puzzle_inner_html = "";
    for(let i = 0; i < puzzle.length; i++){
        
        let row_html = "<tr>"
        for(let j = 0; j < puzzle[i].length; j++){
            if(puzzle[i][j] == 0){
                row_html += "<td class=\"emptyTile\"></td>";
            }else{
                row_html += "<td>"+puzzle[i][j]+"</td>";
            }
        }
        row_html += "</tr>";
        puzzle_inner_html += row_html;
    }

    return `<table>${puzzle_inner_html}</table>`;
}
