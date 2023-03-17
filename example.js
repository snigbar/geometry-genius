const element = document.createElement("ul");
    element.classList.add("table");

    element.innerHTML = 
    
     ` <li class="table-row">
        <p id="result-area-1">first line</p>
        <<button class="btn" id="convert">convert text</button>
        </li> `;

    document.querySelector("#result").appendChild(element);