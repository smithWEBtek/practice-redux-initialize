let state;

// let state = {count: 0, frogs: 0, weather: 'cloudy', calories: 100, colors: ['none']};

function changeState(state = {count: 0, frogs: 0, weather: 'cloudy', calories: 100, colors: ['none']}, action){
  switch(action.type) {

    case "INCREASE_COUNT":
      return Object.assign({}, state, {count: state.count + 1});
    
    case "ADD_FROG":
      return Object.assign({}, state, {frogs: state.frogs + 1});
    
    case "WEATHER":
      return Object.assign({}, state, {weather: 'sunny'});
    
    case "CALORIES":
      return Object.assign({}, state, {calories: state.calories + 12});
    
    case "ADD_COLORS":
      return Object.assign({}, state, {colors: state.colors, colors: ['blue', 'yellow', 'green'] });
       
    default:
      return state;
  }
}

const dispatch = (action) => {
  state = changeState(state, action);
  render();
};

function handleClick(){
  state = changeState(state, {type: 'ADD_FROG'})
};

const render = () => { 
  let colorsList = state.colors.map((color) => {
    return `<li>${color}</li>`;
  }).join(' ');
  
  let container = document.getElementById('container');
  container.innerHTML= `
    <div>
      <div class="stats">
          <button onClick=${handleClick()}>Add Frog</button>
        <p>State:</p>
        <p>Count: ${state.count}</p>
        <p>Frogs: ${state.frogs}</p>
        <p>Weather: ${state.weather}</p>
        <p>Calories: ${state.calories}</p>
        <p>ColorsList: ${colorsList}</p>
      </div>
    </div>
  `
}

dispatch({ type: '@@INIT' })