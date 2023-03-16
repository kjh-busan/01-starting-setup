const App = () => {
  const para = document.createElement('p');
  para.textContent = 'This is also visible';
  document.getElementById('root').append(para);
  return (
    <h2>Hello World</h2>
  )
};

export default App;
