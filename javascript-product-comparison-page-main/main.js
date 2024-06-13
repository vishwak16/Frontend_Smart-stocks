// Populate the dropdowns with stock options
for (var i = 1; i < product.length; i++) {
    document.getElementById("select1").innerHTML += `
    <option value="${i}">${product[i].title}</option>
    `;
    document.getElementById("select2").innerHTML += `
    <option value="${i}">${product[i].title}</option>
    `;
    document.getElementById("select3").innerHTML += `
    <option value="${i}">${product[i].title}</option>
    `;
}

function item1(a) {
    var select2 = document.getElementById("select2").value;
    var select3 = document.getElementById("select3").value;
    if (a != select2 && a != select3) {
        document.getElementById("img1").src = product[a].image
        document.getElementById("price1").innerHTML = "PKR " + product[a].price
        document.getElementById("desc1").innerHTML = product[a].description
        document.getElementById("brand1").innerHTML = product[a].brand
    } else {
        document.getElementById("select1").selectedIndex = 0;
        document.getElementById("img1").src = product[0].image
        document.getElementById("price1").innerHTML = ""
        document.getElementById("desc1").innerHTML = ""
        document.getElementById("brand1").innerHTML = ""
    }
}

function item2(a) {
    var select1 = document.getElementById("select1").value;
    var select3 = document.getElementById("select3").value;
    if (a != select1 && a != select3) {
        document.getElementById("img2").src = product[a].image
        document.getElementById("price2").innerHTML = "PKR " + product[a].price
        document.getElementById("desc2").innerHTML = product[a].description
        document.getElementById("brand2").innerHTML = product[a].brand
    } else {
        document.getElementById("select2").selectedIndex = 0;
        document.getElementById("img2").src = product[0].image
        document.getElementById("price2").innerHTML = ""
        document.getElementById("desc2").innerHTML = ''
        document.getElementById("brand2").innerHTML = ""
    }
}

function item3(a) {
    var select1 = document.getElementById("select1").value;
    var select2 = document.getElementById("select2").value;
    if (a != select1 && a != select2) {
        document.getElementById("img3").src = product[a].image
        document.getElementById("price3").innerHTML = "PKR " + product[a].price
        document.getElementById("desc3").innerHTML = product[a].description
        document.getElementById("brand3").innerHTML = product[a].brand
    } else {
        document.getElementById("select3").selectedIndex = 0;
        document.getElementById("img3").src = product[0].image
        document.getElementById("price3").innerHTML = ""
        document.getElementById("desc3").innerHTML = ''
        document.getElementById("brand3").innerHTML = ""
    }
}
