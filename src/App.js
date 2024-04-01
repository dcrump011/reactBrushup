// const car = {
//   make: "Chevy",
//   mode: "Silverado",
//   year: 2022,
// };

// function Car() {
//   return (
//     <h1>
//       {car.make} and {car.year}
//     </h1>
//   );
// }

function IfFunction(value) {
  if (value == 1) {
    return <h1>Returned 1</h1>;
  }
}

export default function MyApp() {
  <IfFunction value={1} />;
}
