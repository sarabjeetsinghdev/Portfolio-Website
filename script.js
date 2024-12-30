async function socialIcons() {
    const icons = document.getElementById('social-icons');
    fetch('https://credits-api.vercel.app')
        .then(response => response.json()).then(data => {
            if ('names' in data) {
                data.names.forEach((name, index) => {
                    const icon = document.createElement('a');
                    icon.href = data.links[index];
                    icon.classList.add('p-3');
                    icon.style.clipPath = 'circle()';
                    icon.target = '_blank';
                    icon.innerHTML = `<img src="https://img.icons8.com/color/48/000000/${name}.png" alt="${name}" />`;
                    icons.appendChild(icon);
                });
            }
        })
}

function skills(array, index = 0) {
    const skillsDiv = document.getElementById('skills');
    skillsDiv.style.fontWeight = 'bold';
    skillsDiv.style.padding = '5.5px';
    skillsDiv.style.borderRadius = '5px';
    skillsDiv.style.border = '1.5px solid black';
    let skillIndex = 0;
    let charIndex = 0;
    let isErasing = false;

    function type() {
        if (skillIndex < array.length) {
            if (!isErasing && charIndex < array[skillIndex].length) {
                skillsDiv.textContent += array[skillIndex].charAt(charIndex);
                charIndex++;
                setTimeout(type, 100);
            } else if (isErasing && charIndex > 0) {
                skillsDiv.textContent = array[skillIndex].substring(0, charIndex - 1);
                charIndex--;
                setTimeout(type, 100);
            } else if (!isErasing && charIndex === array[skillIndex].length) {
                isErasing = true;
                setTimeout(type, 1000); // Wait before erasing
            } else if (isErasing && charIndex === 0) {
                isErasing = false;
                skillIndex++;
                if (skillIndex === array.length) {
                    skillIndex = 0; // Loop back to the first skill
                }
                setTimeout(type, 500); // Wait before typing next skill
            }
        }
    }
  type()
}

socialIcons();
skills(['HTML', 'CSS','JAVASCRIPT','REACT','NODEJS','EXPRESS','MONGODB','MYSQL','PYTHON','DJANGO']);