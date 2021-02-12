import CountUp from 'react-countup';
import { Line, Bar } from 'react-chartjs-2';


function App() {
  return (
    <div className="App">
      <h1>GEEKSFORGEEKS</h1>
      <div style={{maxWidth:'650px'}}>
      <Bar
  data={{
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [
      {
        label: 'total number of people',
        data: [1552, 1319, 213],
        backgroundColor: [
          'aqua',
          'green',
          'red',
        ],
        borderColor: [
          'aqua',
          'green',
          'red',
        ],
        borderWidth: 1,
      },
      // {
      //   label: 'Quantity',
      //   data: [47, 52, 67, 58, 9, 50],
      //   backgroundColor: 'orange',
      //   borderColor: 'red',
      // },
    ],
  }}
  height={400}
  width={600}
  options={{
    maintainAspectRatio: false,
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
    legend: {
      labels: {
        fontSize: 25,
      },
    },
  }}
/>
</div>
      </div>
  );
}

export default App;
