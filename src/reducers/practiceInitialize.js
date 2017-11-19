let state = {count: 0, frogs: 0, weather: 'cloudy', calories: 100, colors: ['red']};

function changeState(state, action){
  switch(action.type) {

    case "INCREASE_COUNT":
      return Object.assign({}, state, {count: state.count + 1});
    
    case "ADD_FROG":
      return Object.assign({}, state, {frogs: state.frogs + 1});
    
    case "WEATHER":
      return Object.assign({}, state, {weather: 'sunny'});
    
    case "CALORIES":
      return Object.assign({}, state, {calories: state.calories + 12});
    
    case "COLOR_BLUE":
      return Object.assign({}, state, {colors: state.colors + 'blue' });
    
    case "COLOR_GREEN":
      return Object.assign({}, state, {colors: state.colors + 'green' });
    
    default:
      return state;
  }
}

const dispatch = (action) => {
  state = changeState(state, action);
  render();
};

const render = () => {
  let container = document.getElementById('container');
  container.innerHTML= `
    <div>
      <p>State:</p>
      <p>Count: ${state.count}</p>
      <p>Frogs: ${state.frogs}</p>
      <p>Weather: ${state.weather}</p>
      <p>Calories: ${state.calories}</p>
      <p>Colors: ${state.colors}</p>
    </div>`
  
}


// const render = () => {
//   let container = document.getElementById('container');
//   let petsList = state.pets.map((pet) => {
//     return `<li>${pet.name}</li>`;
//   }).join(' ');
//   container.innerHTML = `<ul>${petsList}</ul>`;
// }