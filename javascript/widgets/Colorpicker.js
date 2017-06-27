/*
All functions related to creating a Color picker item.
*/
var colorCount = 1;

// SETTER
function addColor() {
    colorCount++;
}

//GETTER
function getColor() {
    return(colorCount);
}

// Adds the Color picker as well as the 'Edit' and 'delete' buttons.
function color() {
    var node = document.createElement("LI");
    node.setAttribute('class', 'base');

    var x = document.createElement("INPUT");
    x.setAttribute('type', 'color');
    x.setAttribute('class', 'colors');

    var colorName = "color " + String(getColor());
    addColor();
    x.setAttribute('id', colorName);

    var y = document.createElement('button');
    y.setAttribute('content', 'test content');
    y.setAttribute('class', 'properties');
    y.innerHTML = 'Edit';

    var z = document.createElement('button');
    z.setAttribute('class', 'delete');
    z.innerHTML = 'x';

    node.appendChild(x);
    node.appendChild(y);
    node.appendChild(z);

    var tabID = String(getSelectedTabId());

    var tabContID = document.getElementById(tabID).children[0].id;

    document.getElementById(tabContID).appendChild(node);

    var active = $("#tabs .ui-tabs-panel:visible").attr("id");

    var test = document.getElementById(active).getElementsByClassName("fieldClass");

    if(test.length > 0) {
        remake();
    }
}

//Is called when the Edit button is clicked. Creates the appropriate Properties.
function colorProps(myValue) {
    document.getElementById("list_3").innerHTML = "";
    var linebreak = document.createElement('br');

    //Properties Title
    var node = document.createElement("LI");
    var x = document.createTextNode("Color Picker");
    var el_span = document.createElement('span');
    el_span.setAttribute('class', 'propLabel');

    el_span.appendChild(x);
    node.appendChild(el_span);
    document.getElementById("list_3").appendChild(node);

    //Textbox for Label change.
    var node2 = document.createElement("LI");
    var label = document.createTextNode("Label: ");

    var y = document.createElement('input');
    y.setAttribute('type', 'text');
    y.setAttribute('id', 'selector');

    var elem = document.getElementById(myValue).name;

    if(elem != "") {
        y.setAttribute('value', elem);
    }

    y.addEventListener("change", function() {
        setValues(myValue, y);
    });

    function setValues(myVal, y) {
        document.getElementById(myVal).setAttribute('name', y.value);
        var sturf = document.createTextNode(String(y.value));
        var searching = document.getElementById(myVal).parentNode;
        if(searching.lastChild.nodeType == 3) {
            searching.lastChild.remove();
        }
        document.getElementById(myVal).parentNode.appendChild(sturf);
    }

    node2.appendChild(label);
    node2.appendChild(y);
    document.getElementById("list_3").appendChild(node2);

    var node3 = document.createElement("LI");
    var label2 = document.createTextNode("Color (6-digit): ");

    var choose = document.createElement('input');
    choose.setAttribute('type', 'text');
    choose.setAttribute('id', 'chooser');

    choose.addEventListener("change", function() {
        changeColor(myValue, choose);
    });

    function changeColor(myVal, colorVal) {
        var colorString = String(colorVal.value);

        if(colorString.search('#') == -1) {
            colorString = '#' + colorString;
            document.getElementById(myVal).setAttribute('value', colorString);
        } else {
            document.getElementById(myVal).setAttribute('value', colorVal.value);
        }
    }

    node3.appendChild(label2);
    node3.appendChild(choose);
    document.getElementById("list_3").appendChild(node3);
}
