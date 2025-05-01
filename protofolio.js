
function editName() {
    const userName = prompt("Please enter your name:");
    if (userName && userName.trim() !== '') {
      document.getElementById('user-name').textContent = userName;
      document.getElementById('footer-name').textContent = userName;
    } else {
      alert("Name cannot be empty!");
    }
  }
  function editCourse() {
    const course = prompt("Enter your course (e.g., Java Full Stack Development):");
  
    if (course && course.trim() !== '') {
      document.getElementById('user-course').textContent = course;
    } else {
      alert("Course cannot be empty!");
    }
  }
  function updateAbout() {
    const aboutInput = document.getElementById('about-input');
    const aboutText = document.getElementById('about-text');
    if (aboutInput.value.trim() !== '') {
      aboutText.textContent = aboutInput.value;
      aboutInput.value = ''; 
    }
  }
  function addSkill() {
    const skillInput = document.getElementById('skill-input');
    const skillsList = document.getElementById('skills-list');
    if (skillInput.value.trim() !== '') {
      const li = document.createElement('li');
      li.className = 'list-group-item';
      li.textContent = skillInput.value;
      skillsList.appendChild(li);
      skillInput.value = '';
    }
  }
  function addProject() {
    const projectInput = document.getElementById('project-input');
    const projectList = document.getElementById('project-list');
    if (projectInput.value.trim() !== '') {
      const li = document.createElement('li');
      li.className = 'list-group-item';
      li.textContent = projectInput.value;
      projectList.appendChild(li);
      projectInput.value = '';
    }
  }
  function handleContact(event) {
    event.preventDefault();
    const name = document.getElementById('contact-name').value;
    const email = document.getElementById('contact-email').value;
    const message = document.getElementById('contact-message').value;
    document.getElementById('contact-success').classList.remove('d-none');
    event.target.reset();
  }