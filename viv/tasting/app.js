const list = document.querySelector('#winetasting-list ul');

// delete books
list.addEventListener('click', (e) => {
  if(e.target.className == 'delete'){
    const li = e.target.parentElement;
    li.parentNode.removeChild(li);
  }
});

const forms = document.forms;
console.log(forms);
console.log(forms['add-wine']);

Array.from(forms).forEach(function(form){
  console.log(form);
});

const addForm = forms['add-wine'];
addForm.addEventListener('submit', function(e){
  e.preventDefault();
  let value = addForm.querySelector('input[type="text"]').value;

  // create elements
  const li = document.createElement('li');
  const wineName = document.createElement('span');
  const deleteBtn = document.createElement('span');

  deleteBtn.textContent = 'delete';
  wineName.textContent = value;

  deleteBtn.classList.add('delete');
  wineName.classList.add('name');

  li.appendChild(wineName);
  li.appendChild(deleteBtn);

  list.appendChild(li);

  document.getElementById("new-wine").value = "add a wine...";
});
