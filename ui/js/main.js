let map;
let primaryLocation = { lat: 26.8467, lng: 80.9462 };
function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: primaryLocation,
    zoom: 11,
  });

  var marker = new google.maps.Marker({
    map: map,
    position: primaryLocation,
  });
}

//Code for filter buttons
const filters = document.querySelectorAll(".filter_btn");
const filterExt = document.getElementsByClassName("filter_ext");
const arrowFilter = document.getElementsByClassName("arrow_filter");
let filterNumber = 0;
let filterone = false;

filters.forEach((filter, filterIndex) => {
  filter.addEventListener("click", (event) => {
    handleFilter(event, filterIndex);
  });
});

const handleFilter = (event, i) => {
  if (filterNumber !== i) {
    filterExt[filterNumber].style.visibility = "hidden";
    arrowFilter[filterNumber].style.visibility = "hidden";
    filterExt[i].style.visibility = "visible";
    arrowFilter[i].style.visibility = "visible";
    filterNumber = i;
  } else if (i === 0 && filterone === false) {
    filterExt[i].style.visibility = "visible";
    arrowFilter[i].style.visibility = "visible";
    filterone = true;
  } else {
    filterExt[i].style.visibility = "hidden";
    arrowFilter[i].style.visibility = "hidden";
    filterNumber = 0;
    filterone = false;
  }
};

//Code to disappear filters menu
const subs = document.querySelectorAll(".filter_done");
subs.forEach((sub, subIndex) => {
  sub.addEventListener("click", (event) => {
    event.preventDefault();
    filterExt[subIndex].style.visibility = "hidden";
    arrowFilter[subIndex].style.visibility = "hidden";
  });
});

document.body.addEventListener("click", (event) => {
  if (
    !document
      .getElementsByClassName("filter_ext")
      [filterNumber].contains(event.target) &&
    !filters[filterNumber].contains(event.target)
  ) {
    const boxs = document.getElementsByClassName("filter_ext");

    boxs[filterNumber].style.visibility = "hidden";
    arrowFilter[filterNumber].style.visibility = "hidden";
    filterNumber = 0;
    filterone = false;
  }
});

//Code for rent and sale filter
const rs = document.getElementById("r_s");
const radCir = document.getElementsByClassName("radio_circles");
radCir[0].addEventListener("click", () => {
  rs.textContent = radCir[0].value;
});
radCir[1].addEventListener("click", () => {
  rs.textContent = radCir[1].value;
});

//Code for filter bedroom and bathroom selection.
const bb = document.getElementById("b_b");
const btns = document.querySelectorAll(".formbtn");
let bds = 0;
btns.forEach((btn, btnIndex) => {
  btn.addEventListener("click", (event) => {
    event.preventDefault();
    btns[btnIndex].setAttribute("pressed", "true");
    btns[bds].setAttribute("pressed", "false");
    bds = btnIndex;
    bb.textContent = `${bds}+ Bd, ${bds1}+ Ba`;
    bb.style.borderColor = "rgb(0,106,255)";
  });
});

const btns1 = document.querySelectorAll(".formbtn1");
var bds1 = 0;
btns1.forEach((btn1, btn1Index) => {
  btn1.addEventListener("click", (event) => {
    event.preventDefault();
    btn1.setAttribute("pressed", "true");
    btns1[bds1].setAttribute("pressed", "false");
    bds1 = btn1Index;
    bb.textContent = `${bds}+ Bd, ${bds1}+ Ba`;
    bb.style.borderColor = "rgb(0,106,255)";
  });
});

// Price filters form
const sub = document.getElementById("price_sub");
const mins = document.getElementById("mins");
const maxs = document.getElementById("maxs");
const priceSe = document.getElementsByClassName("price_dd");
const opt = document.getElementsByClassName("op2");
const priceBtn = document.getElementById("pricebtn");

priceSe[0].addEventListener("click", (event) => {
  event.preventDefault();
  mins.value = priceSe[0].value;
  let minvalue = +priceSe[0].value + 1000;
  for (let i = 1; i < opt.length; i++) {
    opt[i].textContent = minvalue;
    opt[i].value = minvalue;
    minvalue = minvalue + 1000;
  }
});

priceSe[1].addEventListener("click", (event) => {
  event.preventDefault();
  maxs.value = priceSe[1].value;
});

sub.addEventListener("click", () => {
  if (mins.value === "" && maxs.value === "") {
    priceBtn.textContent = `Price`;
  } else if (maxs.value === "") {
    priceBtn.textContent = `Rs${mins.value}+`;
    priceBtn.style.borderColor = "rgb(0,106,255)";
  } else if (mins.value === "") {
    priceBtn.textContent = `Upto Rs${maxs.value}`;
    priceBtn.style.borderColor = "rgb(0,106,255)";
  } else {
    priceBtn.textContent = `Rs${mins.value} - Rs${maxs.value}`;
    priceBtn.style.borderColor = "rgb(0,106,255)";
  }
});

//Space type filter settings
const subrt = document.getElementById("roomtype");
const space = document.getElementsByClassName("space_type");
const sptybt = document.getElementById("space_type_btn");

subrt.addEventListener("click", (e) => {
  let count = 0;
  let temp = "";
  for (let i = 0; i < space.length; i++) {
    if (space[i].checked) {
      count++;
      if (count === space.length - 1) {
        temp = temp + space[i].value;
      } else {
        temp = temp + space[i].value + ",";
      }
    }
  }
  if (count != 3) {
    sptybt.textContent = temp;
    sptybt.style.borderColor = "rgb(0,106,255)";
  }
});
