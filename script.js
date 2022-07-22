
let table  = document.querySelector("table");


let row_index = 0;
let col_index = 0;

for(row of  table.rows){
    for(cell of row.cells){
        // console.log(cell)
        cell.innerText = `${row_index}_${col_index}`;
        if(row_index<5){
            cell.style.color = "red";
        }
        col_index+=1;
    }
    row_index+=1;
    col_index = 0;

}