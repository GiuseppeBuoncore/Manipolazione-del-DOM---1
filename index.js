const ul = document.querySelector('#my-ul')
const checkbox = document.querySelector('#in')

const addProduct = () => {
  const li = document.createElement('li');
  li.innerHTML = '<p>task</p> <input type="checkbox">'
  ul.appendChild(li);
};
