const months = [
    { name: "January", days: 31 },
    { name: "February", days: 28 }, // You can add leap year logic if needed
    { name: "March", days: 31 },
    { name: "April", days: 30 },
    { name: "May", days: 31 },
    { name: "June", days: 30 },
    { name: "July", days: 31 },
    { name: "August", days: 31 },
    { name: "September", days: 30 },
    { name: "October", days: 31 },
    { name: "November", days: 30 },
    { name: "December", days: 31 }
  ];
  
  const container = document.getElementById('year-grid');
  let dayCounter = 1;
  
  months.forEach(month => {
    const monthDiv = document.createElement('div');
    monthDiv.className = 'month';
  
    const label = document.createElement('div');
    label.className = 'label';
    label.textContent = month.name;
    monthDiv.appendChild(label);
  
    const grid = document.createElement('div');
    grid.className = 'grid';
    grid.style.gridTemplateColumns = `repeat(${month.days}, minmax(15px, 1fr))`;
  
    for (let i = 0; i < month.days; i++) {
      const day = document.createElement('div');
      day.className = 'day';
      day.title = `${month.name} ${i + 1} (Day ${dayCounter})`;
      day.textContent = i + 1;
      day.style.fontSize = '0.5em';
      dayCounter++;
      grid.appendChild(day);
    }
  
    monthDiv.appendChild(grid);
    container.appendChild(monthDiv);
  
  });
  const days = document.querySelectorAll('.day');
  const colors = ['red', 'green', 'blue', 'yellow', 'purple'];
  
  // Helper: Get cookie value by name
  function getCookie(name) {
    const match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
    return match ? decodeURIComponent(match[2]) : null;
  }
  
  // Helper: Set cookie (expires in 1 year)
  function setCookie(name, value) {
    const expires = new Date();
    expires.setFullYear(expires.getFullYear() + 1);
    document.cookie = `${name}=${encodeURIComponent(value)};expires=${expires.toUTCString()};path=/`;
  }
  
  days.forEach((day, index) => {
    const id = `day-${index + 1}`;
    day.dataset.id = id;
  
    // Load saved color
    const savedColor = getCookie(id);
    if (savedColor) {
      day.style.backgroundColor = savedColor;
      day.dataset.colorIndex = colors.indexOf(savedColor) + 1;
    } else {
      day.dataset.colorIndex = 0;
    }
  
    // Handle click to cycle colors
    day.addEventListener('click', () => {
      let colorIndex = parseInt(day.dataset.colorIndex) || 0;
      colorIndex = (colorIndex + 1) % (colors.length + 1); // +1 for reset
  
      if (colorIndex === 0) {
        day.style.backgroundColor = '';
        setCookie(id, ''); // clear color
      } else {
        const color = colors[colorIndex - 1];
        day.style.backgroundColor = color;
        setCookie(id, color);
      }
  
      day.dataset.colorIndex = colorIndex;
    });
  });
  
  