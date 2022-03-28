const ctx = document.getElementById("myChart").getContext("2d");
const earning = document.getElementById("earning").getContext("2d");

const myChart1 = new Chart(ctx, {
  type: "polarArea",
  data: {
    labels: ["Facebook", "Youtube", "Amazon"],
    datasets: [
      {
        label: "Trafic Sources",
        data: [1200, 1900, 3000],
        backgroundColor: [
          "rgba(255, 99, 132, 0.5)",
          "rgba(54, 162, 235, 0.5)",
          "rgba(255, 206, 86, 0.5)",
        ],
      },
    ],
  },
  options: {
    responsive: true,
  },
});

const myChart2 = new Chart(earning, {
  type: "bar",
  data: {
    labels: [
      "January",
      "February",
      "March",
      "April",
      "Mai",
      "Juin",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ],
    datasets: [
      {
        label: "Earning",
        data: [1200, 1900, 300, 500, 2000, 3000,1200, 1900, 300, 500, 2000, 3000,],
        backgroundColor: [
          "rgba(255, 99, 132, 0.5)",
          "rgba(54, 162, 235, 0.5)",
          "rgba(255, 206, 86, 0.5)",
          "rgba(75, 192, 192, 0.5)",
          "rgba(153, 102, 255, 0.5)",
          "rgba(255, 159, 64, 0.5)",
          "rgba(255, 99, 132, 0.5)",
          "rgba(54, 162, 235, 0.5)",
          "rgba(255, 206, 86, 0.5)",
          "rgba(75, 192, 192, 0.5)",
          "rgba(153, 102, 255, 0.5)",
          "rgba(255, 159, 64, 0.5)",
        ],
        borderWidth: 1,
      },
    ],
  },
  options: {
    responsive: true,
  },
});
