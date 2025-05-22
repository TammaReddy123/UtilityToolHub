document.querySelectorAll('.tab').forEach(button => {
    button.addEventListener('click', () => {
      const toolId = button.getAttribute('data-tool');
      document.querySelectorAll('.tool').forEach(tool => {
        tool.classList.remove('active');
      });
      document.getElementById(toolId).classList.add('active');
    });
  });
  
  const toggleTheme = document.getElementById('toggle-theme');
  toggleTheme.addEventListener('click', () => {
    document.body.classList.toggle('dark');
  });
  
  function addTodo() {
    const input = document.getElementById('todo-input');
    const list = document.getElementById('todo-list');
    if (input.value.trim()) {
      const li = document.createElement('li');
      li.textContent = input.value;
      list.appendChild(li);
      input.value = '';
    }
  }
  
  function saveNote() {
    const noteArea = document.getElementById('notes-area');
    const savedNote = document.getElementById('saved-note');
    savedNote.textContent = noteArea.value;
  }
  
  function calculateAge() {
    const birthDate = new Date(document.getElementById('birth-date').value);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    document.getElementById('age-result').textContent = `You are ${age} years old.`;
  }
  
  function convertUnit() {
    const type = document.getElementById('convert-type').value;
    const value = parseFloat(document.getElementById('convert-value').value);
    let result = '';
    if (!isNaN(value)) {
      switch (type) {
        case 'cm-to-inch':
          result = `${value} cm = ${(value / 2.54).toFixed(2)} inches`;
          break;
        case 'inch-to-cm':
          result = `${value} inches = ${(value * 2.54).toFixed(2)} cm`;
          break;
        case 'kg-to-lb':
          result = `${value} kg = ${(value * 2.20462).toFixed(2)} lbs`;
          break;
        case 'lb-to-kg':
          result = `${value} lbs = ${(value / 2.20462).toFixed(2)} kg`;
          break;
      }
    } else {
      result = 'Please enter a valid number.';
    }
    document.getElementById('convert-result').textContent = result;
  }
  
  function generatePassword() {
    const length = parseInt(document.getElementById('pwd-length').value);
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()';
    let pwd = '';
    for (let i = 0; i < length; i++) {
      pwd += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    document.getElementById('pwd-result').textContent = pwd;
  }
  