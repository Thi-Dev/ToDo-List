// Sélection des éléments HTML
let addButton = document.getElementById("add-button");
let inputText = document.getElementById("input-text");
let todoList = document.querySelector(".todo-receiver");

// Ajout d'un événement au bouton
addButton.addEventListener("click", function () {
    // Récupération de la valeur de l'input
    let todoText = inputText.value.trim();

    // Vérification si l'input est vide
    if (todoText === "") {
        alert("Attention! Veuillez saisir une tâche à effectuer");
        return;
    }

    // Création d'une tâche (li)
    let newTask = document.createElement("li");
    newTask.className = "todo-item";

    // Création de la checkbox
    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.className = "task-checkbox";


    // Ajout d'un événement pour barrer le texte lorsque la checkbox est cochée
    checkbox.addEventListener("change", function () {
        // Si la checkbox est cochée, barrer la tâche
        if (checkbox.checked) {
            newTask.classList.add("completed");
        } else {
            // Si elle est décochée, retirer le style barré
            newTask.classList.remove("completed");
        }
    });
    

    // Création et ajout du texte
    let taskText = document.createElement("span");
    taskText.className = "task-text";
    taskText.textContent = todoText;

    // Création du bouton de suppression
    let deleteButton = document.createElement("button");
    deleteButton.className = "delete-task";

    // Ajout de l'icône poubelle
    let trashIcon = document.createElement("span");
    trashIcon.className = "material-icons";
    trashIcon.textContent = "delete"; // Icône de poubelle Material Icons
    deleteButton.appendChild(trashIcon);

    // Ajout d'un événement pour la suppression
    deleteButton.addEventListener("click", function () {
        todoList.removeChild(newTask);
    });

    // Ajout des éléments dans le <li>
    newTask.appendChild(checkbox);
    newTask.appendChild(taskText);
    newTask.appendChild(deleteButton);

    // Ajout de la tâche à la liste
    todoList.appendChild(newTask);

    // Réinitialisation de l'input
    inputText.value = "";
});

/**** Events pour le titre *********/

document.addEventListener("DOMContentLoaded", () => {
    const title = document.getElementById("title");
    const text = "Todo List";
    let i = 0;
  
    function typeEffect() {
      if (i < text.length) {
        title.textContent += text.charAt(i);
        i++;
        // Ajuste la vitesse
        setTimeout(typeEffect, 100); 
      }
    }
    
    typeEffect();
  });

// Récupérer les éléments à changer de couleur
let title = document.getElementById("title");
let emoji = document.getElementById("emoji");

// Fonction pour générer une couleur aléatoire
function getRandomColor() {
    return "#" + Math.floor(Math.random() * 16777215).toString(16); // Génère une couleur hexadécimale aléatoire
}

// Ajouter un écouteur d'événement pour le clic sur l'emoji
emoji.addEventListener("click", function() {
    let randomColor = getRandomColor(); // Récupère une couleur aléatoire

    // Applique cette couleur au titre et à l'emoji
    title.style.color = randomColor;
    emoji.style.color = randomColor;
});


