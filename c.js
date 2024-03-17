let currentAudio = null; 
let totalRating = 0;
let totalMaxRating = 0; 
let yourRateText = null; 


function provideRating(rating) {
   
    totalRating += rating;
    totalMaxRating += 5;
    
    updateYourRateText();
    
    displayFeedbackForm();
}


function updateYourRateText() {
    if (yourRateText) {
        yourRateText.textContent = `Your rate: ${totalRating}/${totalMaxRating}`;
        yourRateText.style.display = "block";
    }
}


function updateStory(sceneIndex) {
    const currentScene = story.scenes[sceneIndex];
    document.getElementById('story-title').textContent = story.title;
    document.getElementById('story-text').textContent = currentScene.text;

   
    document.body.style.backgroundImage = "none";

   
    if (currentScene.backgroundImage) {
        document.body.style.backgroundImage = currentScene.backgroundImage;
    }

    
    if (currentAudio) {
        currentAudio.pause();
    }

   
    if (currentScene.soundEffect) {
        currentAudio = new Audio(currentScene.soundEffect);
        currentAudio.play();
    }

    const optionsContainer = document.getElementById('options-container');
    optionsContainer.innerHTML = '';

    if (sceneIndex === 0) {
       
        yourRateText = document.createElement('div');
        yourRateText.textContent = `Your rate: ${totalRating}/${totalMaxRating}`;
        yourRateText.classList.add('your-rate-text');
        yourRateText.style.display = totalRating > 0 ? "block" : "none";
        optionsContainer.appendChild(yourRateText);
    }

    if (currentScene.options.length === 0 && sceneIndex !== 0) {
       
        const ratingContainer = document.createElement('div');
        ratingContainer.classList.add('rating-container');
        for (let i = 1; i <= 5; i++) {
            const starButton = document.createElement('button');
            starButton.textContent = "⭐".repeat(i);
            starButton.classList.add('star-rating-button');
            starButton.addEventListener('click', () => {
                provideRating(i);
               
            });
            ratingContainer.appendChild(starButton);
        }
        optionsContainer.appendChild(ratingContainer);
    } else {
        
        currentScene.options.forEach((option, index) => {
            const button = document.createElement('button');
            button.textContent = option.text;
            button.classList.add('option-button');
            button.addEventListener('click', () => {
                updateStory(option.nextScene);
               
            });
            optionsContainer.appendChild(button);
        });
    }
}


function displayFeedbackForm() {
    
    const feedbackForm = document.getElementById('feedback-form');
    feedbackForm.style.display = 'block';
}


function submitFeedback() {
   
    const feedbackText = document.getElementById('feedback-text').value;
   
    console.log("Feedback submitted:", feedbackText);
  
    document.getElementById('feedback-text').value = '';

    document.getElementById('feedback-form').style.display = 'none';
    
    updateStory(0);
}

updateStory(0);
