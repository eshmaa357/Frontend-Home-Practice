// Add event listener to handle clicking on the "Add" button
function addList() {
    var inputValue = document.getElementById("inp").value;
    if (inputValue === '') {
        alert("You must write something!");
    } else {
        var li = document.createElement("li");
        var t = document.createTextNode(inputValue);
        li.appendChild(t);

        // Add the newly created list item to the list
        document.getElementById("ul_list").appendChild(li);

        // Create the "Close" button for each new item
        var span = document.createElement("SPAN");
        var txt = document.createTextNode("\u00D7"); // Cross symbol
        span.className = "close";
        span.appendChild(txt);
        li.appendChild(span);

        // Add functionality to remove the item when clicking the close button
        span.onclick = function() {
            var div = this.parentElement;
            div.style.display = "none";
        }

        // Clear the input field after adding the item
        document.getElementById("inp").value = '';
    }
}

// Toggle "checked" class when clicking on a list item
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
    if (ev.target.tagName === 'LI') {
        ev.target.classList.toggle('checked');
    }
}, false);
