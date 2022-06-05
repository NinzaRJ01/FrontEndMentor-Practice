const daysLabel = ['mon','tue','wed','thu','fri','sat','sun'];
// const = document.getElementById('myChar');
const levels  = [[0,30],[0,50],[0,20],[0,40],[0,70],[0,30],[0,20]];
let bgColors =  ['hsl(10, 79%, 65%)',
    'hsl(10, 79%, 65%)',
    'hsl(186, 34%, 60%)',
    'hsl(10, 79%, 65%)',
    'hsl(10, 79%, 65%)',
    'hsl(10, 79%, 65%)'];

function setColor(){
 for(let i in bgColors)bgColors[i]= 'hsl(10, 79%, 65%)';
}
const  dataset =  [
    {
      label: '',
      data: levels,
      backgroundColor: bgColors
    }];
const data = {
    labels: daysLabel,
    datasets: dataset
  };
const config = {
  type: 'bar',
  data: data,
  options: {
    responsive: true,
    onClick : function(e,el){
      setColor();
      bgColors[el[0].index]='hsl(186, 34%, 60%)';
      this.update();
    }
  }
};
const myChart = new Chart(
    document.getElementById('myChart'),
    config
  );