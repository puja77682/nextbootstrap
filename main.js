
//get input element
const filterInput = document.getElementById('filterinput');
//Add event listener
filterInput.addEventListener('keydown', filterNames);
function filterNames() {
        // console.log(1);

   // get value of input
    let filtervalue = document.getElementById('filterinput').value.toUpperCase();
    console.log(filtervalue);

    //get names ul
        let ul = document.getElementById('names');

        //get lis from ul
        let li = ul.querySelectorAll('li.collection-item');

        //loop through collection item lis
        for (let i = 0; i < li.length; i++) {
            let a = li[i].getElementsByTagName('a')[0];

            //if matched
            if (a.innerHTML.toUpperCase().indexOf(filtervalue) > -1) {
                li[i].style.display = "";
            } else {
                li[i].style.display = "none";
            }
        }
}