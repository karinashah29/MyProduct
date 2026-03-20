const ctx = document.getElementById('activityChart');

const labels = [
"Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec","Jan","Feb"
];

const leads = {
label:"Leads",
data:[4.5,4.6,4.6,4.7,4.7,4.8,4.7,4.9,4.9,4.8,4.9,5.2],
borderColor:"#00468B",
tension:.4
};

const customers = {
label:"New customers",
data:[3.6,3.7,3.8,3.8,3.9,4.0,3.9,4.1,4.0,4.1,4.2,4.4],
borderColor:"#8B0046",
tension:.4
};

const bounce = {
label:"Bounce rate",
data:[2.8,2.7,2.9,2.8,2.9,3.0,3.1,3.0,3.2,3.1,3.2,3.4],
borderColor:"#46008B",
tension:.4
};

const revenue = {
label:"Revenue",
data:[10,12,14,15,17,19,21,23,24,26,28,31],
borderColor:"#f97316",
tension:.4
};


/* default chart = visitors overview */
let chart = new Chart(ctx,{
type:"line",
data:{
labels:labels,
datasets:[leads, customers, bounce]
},
options:{
responsive:true,
plugins:{
legend:{position:"top"}
},
scales:{
y:{grid:{color:"#e5e7eb"}}
}
}
});


/* tab switching */

document.querySelectorAll(".tab-btn").forEach(btn=>{
btn.addEventListener("click",function(){

document.querySelectorAll(".tab-btn")
.forEach(b=>b.classList.remove("active"));

this.classList.add("active");

const tab = this.dataset.chart;

if(tab === "visitors"){
chart.data.datasets = [leads, customers, bounce];
}

if(tab === "leads"){
chart.data.datasets = [leads];
}

if(tab === "revenue"){
chart.data.datasets = [revenue];
}

chart.update();

});
});