// Get the samples endpoint
const url = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json";

function buildmMetaData(sample){
  d3.json(url).then((data) => {
    let metadata = data.metadata;
    let metaData = metadata[0]
    //let id = metaData.id // need to filter [0]
   // let value = metaData.filter(item => item.id == test);
    console.log(metaData);
    //console.log(value)
    
    //console.log(id[0]);


  }); 
}
buildmMetaData();

function buildChart(){
  d3.json(url).then(function(data) {
    //console.log(data);
  });
  // both bar and scatter can be coded here
}

function init(){
  d3.json(url).then(function(data) {
    //console.log(data);
    // Use D3 to select the dropdown menu
  let dropdownMenu = d3.select("#selDataset");
  // Assign the value of the dropdown menu option to a variable
  let dataset = dropdownMenu.property("value");
    //
    buildmMetaData();
    buildChart();
    
  });
  
}

function optionsChange(){
 // Call updatePlotly() when a change takes place to the DOM
d3.selectAll("#selDataset").on("change", optionsChange); 
}

optionsChange();
init();