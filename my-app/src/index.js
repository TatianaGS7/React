import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// class Clock extends React.Component {
// 	constructor(props) {
// 		super(props);
// 		this.state = {date: new Date()};
// 	}

// 	componentDidMount() { 
// 		this.timerID = setInterval(
// 			()=>this.tick(), 1000);
// 	 }

// 	componentWillUnmount() { 
// 	    clearInterval(this.timerID);
// 	 }

// 	 tick() {
// 	 	this.setState({
// 	 		date: new Date()
// 	 	});
// 	 }

// 	render() {
// 		return (
// 			<div>
// 			<h2>It is {this.state.date.toLocaleTimeString()}</h2>
// 			</div>
// 			);
// 	}
// }

// function App() {
//   return (
//     <div>
//       <Clock />      
//       <Clock />      
//       <Clock />    
//     </div>
//   );
// }


//   ReactDOM.render(
//     <App />,
//     document.getElementById('t1')
//     );

// function Welcome(props) {  
// 	return <h1>Привет, {props.name}</h1>;
// }

// function App() {
// 	return(
// 		<div>
// 			<Welcome name="Алиса" />
// 			<Welcome name="Queen" />
// 			<Welcome name="Rabbit" />
// 		</div>
// 		)
// }

// function Avatar(props) {
//   return (
//     <img className="Avatar" src={props.user.avatarUrl} alt={props.user.name}/>  
//     );
// }

// function UserInfo(props) {
//   return (
//     <div className="UserInfo"> 
//     <Avatar user={props.user} />      
//     <div className="UserInfo-name">{props.user.name}</div>    
//     </div>  
//     );
// }

// function Comment(props) {
//   return (
//     <div className="Comment">
//        <UserInfo user={props.author}/>
//       <div className="Comment-text">
//         {props.text}
//       </div>
//       <div className="Comment-date">
//         {(props.date).toLocaleDateString()}
//       </div>
//     </div>
//   );
// }

// const comment = {
//   date: new Date(),
//   text: 'I hope you enjoy learning React!',
//   author: {
//     name: 'Hello Kitty',
//     avatarUrl: 'https://placekitten.com/g/64/64',
//   },
// };

// ReactDOM.render(<Comment date={comment.date} text={comment.text} author={comment.author}/>,
//  document.getElementById('t1'));


// function ActionLink() {
//   function handleClick(e) {    
//   	e.preventDefault();    
//   	console.log('xxx!!!');  
//   }
//   return (
//     <a href="#" onClick={handleClick}>But</a>
//   );
// }

// ReactDOM.render(<ActionLink/>,
//  document.getElementById('t1'));


// class Toggle extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {isToggleOn: true};

//     // Эта привязка обязательна для работы `this` в callback.    
//     this.handleClick = this.handleClick.bind(this);  
// }

//   handleClick() {   
//    this.setState(state => ({ 
//    	isToggleOn: !state.isToggleOn   
//    	 }));  
//   }

//   render() {
//     return (
//       <button onClick={this.handleClick}>        
//         {this.state.isToggleOn ? 'Включено' : 'Выключено'}
//       </button>
//     );
//   }
// }

// ReactDOM.render(
//   <Toggle />,
//   document.getElementById('t1')
// );

/*
function LoginButton(props) {
  return (
    <button onClick={props.onClick}>
      Войти
    </button>
  );
}

function LogoutButton(props) {
  return (
    <button onClick={props.onClick}>
      Выйти
    </button>
  );
}

function UserGreeting(props) {
  return <h1>С возвращением!</h1>;
}

function GuestGreeting(props) {
  return <h1>Войдите, пожалуйста.</h1>;
}

function Greeting(props) {
  const isLog = props.isLog;
  if (isLog) {    
  	return <UserGreeting />;  
  }  
  return <GuestGreeting />;
}

class LoginControl extends React.Component {
  constructor(props) {
    super(props);
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
    this.state = {isLog: false};
  }

  handleLoginClick() {
    this.setState({isLog: true});
  }

  handleLogoutClick() {
    this.setState({isLog: false});
  }

  render() {
    const isLog = this.state.isLog;
    let button;
    if (isLog) {      
    	button = <LogoutButton onClick={this.handleLogoutClick} />;    
    } else {      
    	button = <LoginButton onClick={this.handleLoginClick} />;    
    }
    return (
     <div>
      <Greeting isLog={isLog} />        
        {button}      
      <p>
      Пользователь <b>{isLog ? 'сейчас' : 'не'}</b> на сайте.
      </p>    
      </div>
    );
  }
}


ReactDOM.render(
  <LoginControl />,
  document.getElementById('t1')
);
*/

/*
function Mailbox(props) {
  const unreadMessages = props.unreadMessages;

  return (
    <div>
      <h1>Здравствуйте!</h1>
      {unreadMessages.length > 0 &&        
      	<h2>          
      	У вас {unreadMessages.length} непрочитанных сообщений.        
      	</h2>      
      }    
      </div>
  );
}

const messages = ['mes from taxman', 'mes from mom'];
ReactDOM.render(
  <Mailbox unreadMessages={messages} />,
  document.getElementById('t1')
);
*/

/*
function WarningBanner(props) {
  if (!props.warn) {   
   return null;  
  }
  return (
    <div className="warning">
      Предупреждение!
    </div>
  );
}

class Page extends React.Component {
  constructor(props) {
    super(props);
    this.state = {showWarning: true};
    this.handleToggleClick = this.handleToggleClick.bind(this);
  }

  handleToggleClick() {
    this.setState(state => ({
      showWarning: !state.showWarning
    }));
  }

  render() {
    return (
      <div>
        <WarningBanner warn={this.state.showWarning} />        
        <button onClick={this.handleToggleClick}>
          {this.state.showWarning ? 'Спрятать' : 'Показать'}
        </button>
      </div>
    );
  }
}

ReactDOM.render(
  <Page />,
  document.getElementById('t1')
);
*/

/*
function ListItem(props) {
  return <li>{props.value}</li>;
}

function NumberList(props) {
  const numbers = props.numbers;
  const listItems = numbers.map((number) =>
     <ListItem key={number.toString()} value={number} />  );
  return (
    <ul>
      {listItems}
    </ul>
  );
}

const numbers = [1, 2, 3, 4, 5];
ReactDOM.render(
  <NumberList numbers={numbers} />,
  document.getElementById('t1')
);
*/

/*
function Blog(props) {
  const sidebar = (    
  	<ul>
      {props.posts.map((post) =>
        <li key={post.id}> {post.title}
        </li>
      )}
    </ul>
  );
  const content = props.posts.map((post) =>    
  	<div key={post.id}>      
  	  <h3>{post.title}</h3>
      <p>{post.content}</p>
    </div>
  );
  return (
    <div>
      {sidebar}      
      <hr />
      {content}    
      </div>
  );
}

const posts = [
  {id: 1, title: 'Привет, мир', content: 'Добро пожаловать в документацию React!'},
  {id: 2, title: 'Установка', content: 'React можно установить из npm.'}
];
ReactDOM.render(
  <Blog posts={posts} />,
  document.getElementById('t1')
);
*/

/*
class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {    
  	this.setState({value: event.target.value}); 
  }
  handleSubmit(event) {
    alert('Отправленное имя: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Имя:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
          <button type="submit">Отправить</button>
      </form>
    );
  }
}

ReactDOM.render(
  <NameForm />,
  document.getElementById('t1')
);
*/

/*
class EssayForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {      
    	value: 'Text text text'    
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {    
  	this.setState({value: event.target.value});  
  }

  handleSubmit(event) {
    alert('Сочинение отправлено: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Сочинение:
          <textarea value={this.state.value} onChange={this.handleChange} />        
          </label>
        <input type="submit" value="Отправить" />
      </form>
    );
  }
}

ReactDOM.render(
  <EssayForm />,
  document.getElementById('t1')
);
*/


/*
class FlavorForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: 'coconut'};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {   
   this.setState({value: event.target.value});  
  }
  handleSubmit(event) {
    alert('Ваш любимый вкус: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Выберите ваш любимый вкус:
          <select value={this.state.value} onChange={this.handleChange}>          
            <option value="grapefruit">Грейпфрут</option>
            <option value="lime">Лайм</option>
            <option value="coconut">Кокос</option>
            <option value="mango">Манго</option>
          </select>
          <input type="file" />
        </label>
        <input type="submit" value="Отправить" />
      </form>
    );
  }
}

ReactDOM.render(
  <FlavorForm />,
  document.getElementById('t1')
);
*/

/*
class Reservation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isGoing: true,
      numberOfGuests: 2
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    this.setState({
      [name]: value    
    });
  }

  render() {
    return (
      <form>
        <label>
          Пойдут:
          <input
            name="isGoing"            
            type="checkbox"
            checked={this.state.isGoing}
            onChange={this.handleInputChange} />
        </label>
        <br />
        <label>
          Количество гостей:
          <input
            name="numberOfGuests"            
            type="number"
            value={this.state.numberOfGuests}
            onChange={this.handleInputChange} />
        </label>
      </form>
    );
  }
}

ReactDOM.render(
  <Reservation />,
  document.getElementById('t1')
);
*/

/*
ReactDOM.render(<input value="Привет" />, document.getElementById('t1'));

setTimeout(function() {
  ReactDOM.render(<input value={null} />, document.getElementById('t1'));
}, 1000);
*/

/*
class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.input = React.createRef();  
}

  handleSubmit(event) {
    alert('Отправленное имя: ' + this.input.current.value);    
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Имя:
          <input type="text" defaultValue="Боб" ref={this.input} />       
          </label>
        <input type="submit" value="Отправить" />
      </form>
    );
  }
}

ReactDOM.render(<NameForm />, document.getElementById('t1'));
*/

/*
function BoilingVerdict(props) {
  if (props.celsius >= 100) {
    return <p>Вода закипит.</p>; 
  }
  return <p>Вода не закипит.</p>;
}

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {temperature: ''};  
  }

  handleChange(e) {
    this.setState({temperature: e.target.value}); 
  }

  render() {
    const temperature = this.state.temperature;    
    return (
      <fieldset>
        <legend>Введите температуру в градусах Цельсия:</legend>
        <input value={temperature} onChange={this.handleChange} />        
        <BoilingVerdict celsius={parseFloat(temperature)} />      
      </fieldset>
    );
  }
}

ReactDOM.render(<Calculator />, document.getElementById('t1'));
*/

/*
function BoilingVerdict(props) {
  if (props.celsius >= 100) {
    return <p>Вода закипит.</p>; 
  }
  return <p>Вода не закипит.</p>;
}

const scaleNames = {  c: 'Цельсия',  f: 'Фаренгейта'};

function toCelsius(fahrenheit) {
  return (fahrenheit - 32) * 5 / 9;
}

function toFahrenheit(celsius) {
  return (celsius * 9 / 5) + 32;
}

function tryConvert(temperature, convert) {
  const input = parseFloat(temperature);
  if (Number.isNaN(input)) {
    return '';
  }
  const output = convert(input);
  const rounded = Math.round(output * 1000) / 1000;
  return rounded.toString();
}

class TemperatureInput extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {temperature: ''};
  }

  handleChange(e) {
    this.props.onTemperatureChange(e.target.value);
  }

  render() {
    const temperature = this.props.temperature;
    const scale = this.props.scale;    
    return (
      <fieldset>
        <legend>Введите температуру в градусах {scaleNames[scale]}:</legend>        
        <input value={temperature}
               onChange={this.handleChange} />
      </fieldset>
    );
  }
}

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
    this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
    this.state = {temperature: '', scale: 'c'};  
  }

  handleCelsiusChange(temperature) {
    this.setState({scale: 'c', temperature});  
  }

  handleFahrenheitChange(temperature) {
    this.setState({scale: 'f', temperature});  
  }

  render() {
    const scale = this.state.scale;    
    const temperature = this.state.temperature;    
    const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;    
    const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;
    return (
      <div>
        <TemperatureInput
          scale="c"
          temperature={celsius}          
          onTemperatureChange={this.handleCelsiusChange} />        
          <TemperatureInput
          scale="f"
          temperature={fahrenheit}          
          onTemperatureChange={this.handleFahrenheitChange} />        
          <BoilingVerdict
          celsius={parseFloat(celsius)} />      
      </div>
    );
  }
}
ReactDOM.render(<Calculator />, document.getElementById('t1'));
*/

/*
function FancyBorder(props) {
  return (
    <div className={'FancyBorder FancyBorder-' + props.color}>
      {props.children}
    </div>
  );
}

function Dialog(props) {
  return (
    <FancyBorder color="blue">
      <h1 className="Dialog-title">
        {props.title}
      </h1>
      <p className="Dialog-message">
        {props.message}
      </p>
      {props.children}    
      </FancyBorder>
  );
}

class SignUpDialog extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSignUp = this.handleSignUp.bind(this);
    this.state = {login: ''};
  }

  render() {
    return (
      <Dialog title="Программа исследования Марса"
              message="Как к вам обращаться?">
        <input value={this.state.login}               
        onChange={this.handleChange} />        
        <button onClick={this.handleSignUp}>          
        Запишите меня!       
        </button>     
     </Dialog>
    );
  }

  handleChange(e) {
    this.setState({login: e.target.value});
  }

  handleSignUp() {
    alert(`Добро пожаловать на борт, ${this.state.login}!`);
  }
}

ReactDOM.render(<SignUpDialog />, document.getElementById('t1'));
*/

// ---------------------------------------------------------------------

/*
class ProductCategoryRow extends React.Component {
  render() {
    const category = this.props.category;
    return (
      <tr>
        <th colSpan="2">
          {category}
        </th>
      </tr>
    );
  }
}

class ProductRow extends React.Component {
  render() {
    const product = this.props.product;
    const name = product.stocked ?  product.name : <span style={{color: 'red'}}>{product.name}</span>;
    return (
      <tr>
        <td>{name}</td>
        <td>{product.price}</td>
      </tr>
    );
  }
}

class ProductTable extends React.Component {
  render() {
    const rows = [];
    let lastCategory = null;
    
    this.props.products.forEach((product) => {
      if (product.category !== lastCategory) {
        rows.push(
          <ProductCategoryRow
            category={product.category}
            key={product.category} />
        );
      }
      rows.push(
        <ProductRow
          product={product}
          key={product.name} />
      );
      lastCategory = product.category;
    });

    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    );
  }
}

class SearchBar extends React.Component {
  render() {
    return (
      <form>
        <input type="text" placeholder="Search..." />
        <p>
          <input type="checkbox" />
          {' '}
          Only show products in stock
        </p>
      </form>
    );
  }
}

class FilterableProductTable extends React.Component {
  render() {
    return (
      <div>
        <SearchBar />
        <ProductTable products={this.props.products} />
      </div>
    );
  }
}


const PRODUCTS = [
  {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
  {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
  {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
  {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
  {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
  {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
];
 
ReactDOM.render(
  <FilterableProductTable products={PRODUCTS} />,
  document.getElementById('container')
);
*/

/*
class ProductCategoryRow extends React.Component {
  render() {
    const category = this.props.category;
    return (
      <tr>
        <th colSpan="2">
          {category}
        </th>
      </tr>
    );
  }
}

class ProductRow extends React.Component {
  render() {
    const product = this.props.product;
    const name = product.stocked ? product.name : <span style={{color: 'red'}}>{product.name}</span>;
    return (
      <tr>
        <td>{name}</td>
        <td>{product.price}</td>
      </tr>
    );
  }
}

class ProductTable extends React.Component {
  render() {
    const filterText = this.props.filterText;
    const inStockOnly = this.props.inStockOnly;
    const rows = [];
    let lastCategory = null;

    this.props.products.forEach((product) => {
      if (product.name.indexOf(filterText) === -1) {
        return;
      }
      if (inStockOnly && !product.stocked) {
        return;
      }
      if (product.category !== lastCategory) {
        rows.push(
          <ProductCategoryRow
            category={product.category}
            key={product.category} />
        );
      }
      rows.push(
        <ProductRow
          product={product}
          key={product.name}
        />
      );
      lastCategory = product.category;
    });

    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    );
  }
}

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
    this.handleInStockChange = this.handleInStockChange.bind(this);
  }
  
  handleFilterTextChange(e) {
    this.props.onFilterTextChange(e.target.value);
  }
  
  handleInStockChange(e) {
    this.props.onInStockChange(e.target.checked);
  }
  render() {  
    return (
      <form>
        <input
          type="text"
          placeholder="Search..."
          value={this.props.filterText} 
          onChange={this.handleFilterTextChange} />
        <p>
          <input
            type="checkbox"
            checked={this.props.inStockOnly}
            onChange={this.handleInStockChange} />
          {' '}
          Only show products in stock
        </p>
      </form>
    );
  }
}

class FilterableProductTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: '',
      inStockOnly: false
    };

    this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
    this.handleInStockChange = this.handleInStockChange.bind(this);
  }


  handleFilterTextChange(filterText) {
    this.setState({
      filterText: filterText
    });
  }
  
  handleInStockChange(inStockOnly) {
    this.setState({
      inStockOnly: inStockOnly
    })
  }

  render() {
    return (
      <div>
        <SearchBar
          filterText={this.state.filterText}
          inStockOnly={this.state.inStockOnly}
          onFilterTextChange={this.handleFilterTextChange}
          onInStockChange={this.handleInStockChange}
        />
        <ProductTable
          products={this.props.products}
          filterText={this.state.filterText}
          inStockOnly={this.state.inStockOnly}
        />
      </div>
    );
  }
}


const PRODUCTS = [
  {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
  {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
  {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
  {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
  {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
  {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
];

ReactDOM.render(
  <FilterableProductTable products={PRODUCTS} />,
  document.getElementById('container')
);
*/

