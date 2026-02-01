document.addEventListener('DOMContentLoaded', function () {
  const selectElem = document.getElementById('webdevlist');
  const descriptionElem = document.getElementById('description');
  const titleElem = document.getElementById('topic-title');
  const listElem = document.getElementById('topic-list');

  // Data for each technology
  const topics = {
    html: {
      title: "HyperText Markup Language",
      description: "Defines the structure and content of a web page.",
      color: "#e34c26", // orange-ish for HTML
      items: [
        "Defines the structure and content of a web page.",
        "Without HTML there's nothing for the browser to display.",
        "Uses tags like <div>, <p>, <h1>, etc."
      ]
    },
    css: {
      title: "Cascading Style Sheets",
      description: "Controls how the HTML elements look and feel.",
      color: "#1572b6", // blue for CSS
      items: [
        "Controls how the HTML elements look.",
        "Without CSS pages look plain and unstyled.",
        "Handles colors, layouts, fonts, spacing, and more."
      ]
    },
    js: {
      title: "JavaScript",
      description: "Adds interactivity and dynamic behavior to websites.",
      color: "#f0db4f", // yellow for JS
      items: [
        "Adds interactivity and dynamic behavior.",
        "Without JavaScript nothing on the page responds dynamically.",
        "Handles events, DOM manipulation, fetch data, and logic."
      ]
    }
  };

  selectElem.addEventListener('change', function () {
    const value = selectElem.value;

    if (value && topics[value]) {
      const selected = topics[value];

      // Update description paragraph
      descriptionElem.textContent = selected.description;
      descriptionElem.style.color = selected.color;

      // Update heading
      titleElem.textContent = selected.title;
      titleElem.style.color = selected.color;

      // Update list items (clear old, add new)
      listElem.innerHTML = ''; // clear current list
      selected.items.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        listElem.appendChild(li);
      });

      // Optional: change border or background for fun
      document.querySelector('#content').style.borderColor = selected.color;
    } else {
      // Reset to default if "Choose One" is selected
      descriptionElem.textContent = "The foundational technologies that power websites and web applications";
      descriptionElem.style.color = "#035f9c";
      titleElem.textContent = "HyperText Markup Language";
      titleElem.style.color = "";
      listElem.innerHTML = `
        <li>Defines the structure and content of a web page.</li>
        <li>Without HTML there's nothing for the browser to display.</li>
      `;
      document.querySelector('#content').style.borderColor = "darkgrey";
    }
  });
});