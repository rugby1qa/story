const story = {
    title: "The Mysterious Island",
    scenes: [
        {
            text: "A remote island, cloaked in mystery, harbors ancient forests and hidden treasures amidst its rugged coastline, beckoning adventurous souls into an unparalleled journey through time and wonder. With each step onto its perilous shores, explorers confront challenges and unearth unforeseen wonders, drawn by the promise of an adventure unlike any other in the heart of the Mysterious Island.",
            soundEffect: "mixkit-arcade-retro-game-over-213.wav",
            backgroundImage: "url('ygjh.avif')",
            options: [
                { text: "Start", nextScene: 1 },
            ]
        },
        {
            text: "Stranded on a mysterious island, you're at a crossroads: delve into the dense jungle's mysteries or stay by the cliffside, hoping for rescue. Each choice carries uncertainty, shaping your fate on this enigmatic journey.",
            soundEffect: "Sneaky%20Adventure%20-%20Gaming%20Background%20Music%20(HD).mp3",
            backgroundImage: "url('deserted-island-1.jpg')",
            options: [
                { text: "Explore the jungle", nextScene: 10 },
                { text: "stay and wait for rescue", nextScene: 2 }
            ]
        },
        
        {
                text: "Opting to await rescue, you position by the rocky cliff, vigilant over the horizon, building a signal fire from driftwood for visibility. Daily, you scan for signs of hope, unwavering in faith, while ensuring sustenance with foraged food and water, patiently awaiting rescue.",
                soundEffect: "Sneaky%20Adventure%20-%20Gaming%20Background%20Music%20(HD).mp3",
                backgroundImage: "url('ygjh.avif')", 
                options: [
                    { text: "Build a shelter", nextScene: 4 },
                    { text: "enjoy swimming in the beach", nextScene: 3 }
                ]
            },
            {
                text: "In a horrifying turn, a shark surfaces and attacks, its jaws closing in swiftly. Caught off guard, you're ensnared, feeling the searing pain of its bite. As darkness looms, the grim reality sets in: rescue will never arrive, your fate sealed by the merciless depths.",
                soundEffect: "suicide%20mouse%20scream.mp3",
                backgroundImage: "url('Red-Water-2003.jpg')",
                options: [          
                ]   
            },
            {
                text: "As dusk falls, shadows stretch over the sandy shore, marking the end of your exhausting shelter-building efforts. Yet, hunger persists, driving you to venture out into the night in search of sustenance, fueled by determination to quiet your stomach and prepare for the trials ahead.",
                backgroundImage: "url('Arctic-Lean-To-13.jpg')",
                soundEffect: "Suicide%20Mouse%20theme%20song.mp3",
                options: [
                    { text: "look foor food in the jungle", nextScene: 6 },
                    { text: "endure the hunger", nextScene: 5 }
                ]
            },
            {
                text: "In a cruel twist of fate, hunger and dehydration claim you before you can find sustenance. Despite your efforts and resilience, the harsh reality of survival on the island proves too much to bear. As your strength wanes and your vision dims, you succumb to the unforgiving elements, your journey cut tragically short amidst the silent expanse of the mysterious island.",
                soundEffect: "Sonic.exe%20Green%20hill%20zone%20extended.mp3",
                backgroundImage: "url('images%20(19).jpg')",
                options: [
                    
                ]
            },
            {
                text: "Navigating the jungle's darkness, you tread cautiously, senses alert for danger. Stumbling upon a towering mushroom and grotesque bug, you're met with the putrid stench of rotten meat, a stark reminder of survival's harsh realities. With trepidation and desperation, you weigh your options, aware that your next move in this untamed wilderness could lead to sustenance or further peril.",
                backgroundImage: "url('idasok.jpg')",
                soundEffect: "Cry%20Of%20The%20Unheard.mp3",
                options: [
                    { text: "eat mushroom", nextScene: 7 },
                    { text: "eat bug", nextScene: 9 },
                    { text: "eat rotten meat", nextScene: 8 }
                ]
            },
            {
                text: "In a desperate bid to quell hunger, you consume the mysterious mushroom, unaware of its toxic nature. As dizziness and excruciating pain engulf you, vision blurs and strength ebbs away until darkness claims you, a fatal mistake amidst the jungle's shadows sealing your fate.",
                soundEffect: "It's%20a%20Small%20World%20Creepy%20Piano%20(Reversed).mp3",
                backgroundImage: "url('esdf.jpg')",
                options: [
                    
                ]
            },
            {
                text: "As you investigate the rotten meat, a rustle behind you signals danger. Before you can react, a massive bear emerges, its hungry eyes locking onto you. With a deafening roar, it pounces, overwhelming you instantly. In a frenzy of fur and teeth, the apex predator seals your fate amidst the unforgiving jungle.",
                soundEffect: "Starvation.mp3",
                backgroundImage: "url('gjd.jpg')",
                options: [
                    
                ]
            },
            {
                text: "Overcoming your disgust, you recognize the grotesque bug as a potential source of high protein crucial for survival on the harsh island. With grim resolve, you consume it, suppressing revulsion with each repulsive mouthful. Despite the lingering foul taste, you return to your shelter, thankful for the meager sustenance that promises to help you endure the challenges ahead.",
                soundEffect: "Mr.%20Incredible%20Becoming%20Canny%20-%20Phase%206%20Full.mp3",
                backgroundImage: "url('download%20(23).jpg')",
                options: [
                    
                    
                ]
            },
            {
                text: "Heart pounding, you confront three diverging paths at the jungle's edge. Ahead, a serene stream offers refreshment and possible sustenance. To the left, a dark cave entrance promises mystery and potential danger, while a distant roar to the right fills you with fear and curiosity. With each option uncertain, your choice will determine your journey's course through the jungle's depths.",
                soundEffect: "Mr.%20incredible%20becoming%20uncanny%20phase%201.5%20full%20music.mp3",
                backgroundImage: "url('download%20(25).jpg')",
                options: [
                    { text: "follow the river", nextScene: 20 },
                    { text: "explore the cave", nextScene: 14 },
                    { text: "investigate the noise", nextScene: 11 }
                ]
            },
            {
                text: "Driven by fear and curiosity, you cautiously advance toward the source of the roar, heart pounding with each step. Pushing through dense foliage, shock grips you as you confront a majestic yet fearsome tiger. Its amber eyes lock onto you with an intensity that sends shivers down your spine, its powerful form ready for action.",
                soundEffect: "Suicide%20Mouse%20theme%20song.mp3",
                backgroundImage: "url('dwuajiosk.jpg')",
                options: [
                    { text: "pet the tiger and give some food", nextScene: 12 },
                    { text: "kill the tiger", nextScene: 13 },
                ]
            },
            {
                text: "With the tiger as your companion, hunting becomes effortless. Its keen senses and ferocious abilities make the once daunting task seamless. Together, you navigate the jungle with newfound confidence, securing sustenance effortlessly. Each successful hunt strengthens your bond, forging an unbreakable connection of mutual survival. Together, you conquer every obstacle in the unforgiving wilderness, an unstoppable force in the face of adversity.",
                soundEffect: "Mr%20Incredible%20Becoming%20Canny%20-%20Phase%204%20Full.mp3", 
                backgroundImage: "url('download%20(26).jpg')",
                options: [
                    
                ]
            },
            {
                text: "As you realize the tiger you've killed is just a cub, dread fills your heart. Before you can process your mistake, a deafening roar signals the enraged mother tiger. With lightning speed, she attacks, her fury evident in her blazing eyes. In a lethal embrace, her powerful jaws seal your fate, plunging you into darkness, a fatal misstep in the heart of the jungle.",
                soundEffect: "Starvation.mp3",
                backgroundImage: "url('1663027120922.jpg')",
                options: [
                    
                ]
            }, 
            
            {
                text: "Heart pounding, you venture into the cave's darkness, torchlight guiding your way. Your eyes adjust to find a gleaming treasure chest, lid ajar, sparking excitement. But joy fades as a low growl signals a massive bear guarding it. With adrenaline surging, you face the choice: confront the bear for the treasure or retreat and seek another path.",
                soundEffect: "ROBLOX%20Music%20-%20Horror.mp3",
                backgroundImage: "url('jwa.jpg')",
                options: [
                    { text: "approach the treassure quitly", nextScene: 16 },
                    { text: "wake the bear up, and distract the bear with a food", nextScene: 17 },
                    { text: "kill the bear while its sleeping", nextScene: 15 },
                ]
            },
            {
                text: "With adrenaline fueling your resolve, you confront the bear, intent on claiming the treasure. In a fierce struggle, you overpower it, but triumph is brief. As you reach for the treasure, a chilling growl signals more bears charging toward you. Trapped with no escape, you meet your end at their claws, your quest for riches ending in tragedy deep within the cave's heart.",
                soundEffect: "In%20The%20Dark.mp3",
                backgroundImage: "url('joimef.jpg')",
                options: [
                ]
            },
            {
                text: "Heart pounding, you snatch the treasure and flee the cave, enraged bears close behind. Adrenaline propels you through dense underbrush, branches lashing and rocks threatening to trip you. With survival as your sole aim, you press on, miraculously outrunning the pursuing bears. Emerging battered and breathless, you clutch the treasure tightly, victorious against the jungle's trials.",
                soundEffect: "Mr%20Incredible%20Becoming%20Canny%20-%20Phase%203%20Full.mp3",
                backgroundImage: "url('asdaf.jpg')",
                options: [
                ]
            },
            {
                text: "With the chest secured, I quickly assess my situation, recognizing the risk of attempting to escape while the bears are alert. Opting for stealth, I choose to remain hidden, patiently awaiting the bears' return to slumber. It's a risky gamble, but I know patience is crucial. Hunkering down in the shadows, heart pounding, I silently pray for the bears to settle, hoping for a chance to escape without further confrontation.",
                soundEffect: "Kyomi's%20Lullaby.mp3",
                backgroundImage: "url('download%20(27).jpg')",
                options: [
                    { text: "wait for the bears to sleep then escape", nextScene: 18 },
                    { text: "escape quitly", nextScene: 19 },           
                ]
            },
        {
            text: "Motionless in my hiding spot, the scent of fear betrays me, alerting the bears to my presence. With a low growl, they find me, descending with primal fury. Before I can react, their savage assault overwhelms me, my attempts at escape futile against their ferocity. In the end, only silence remains, my demise lost in the depths of the unforgiving cave.",
            soundEffect: "suicide%20mouse%20scream.mp3",
            backgroundImage: "url('images%20(20).jpg')",
            options: [       
            ]
        },
        {
            text: "Taking a calculated risk, I slip away amidst the distraction of the other bears, swiftly moving through the cave. Snatching a piece of their meat to mask my scent, I cautiously navigate the labyrinthine passages, heart pounding. As the sounds of the bears fade, I emerge from the cave, treasure chest in hand. Though narrowly escaping danger, the memory of the harrowing encounter remains, a reminder of the risks in the pursuit of fortune.",
            soundEffect: "Mr%20Incredible%20Becoming%20Canny%20-%20Phase%203%20Full.mp3",
            backgroundImage: "url('download%20(28).jpg')",
            options: [         
            ]
        },
        {
            text: "Choosing to follow the river downstream, I scan the landscape for signs of civilization or safety. The gentle murmur of water calms my nerves, offering solace amidst uncertainty. Remaining vigilant for threats or opportunities, I press onward with determination, the treasure chest by my side, ready to face whatever challenges arise on this journey to unknown shores.",
            soundEffect: "Mr%20Incredible%20Becoming%20Canny%20-%20Phase%2012%20Full%20(mp3cut.net).mp3",
            backgroundImage: "url('asfagsd.jpg')",
            options: [
                { text: "catch some fish", nextScene: 21 },
                { text: "keep going", nextScene: 25 },
                { text: "rest", nextScene: 29 },
                { text: "grab some supply", nextScene: 33 },
            ]
        },
        {
            text: "As the bear appears, I freeze, heart pounding. Slowly backing away, I keep a watchful eye on the imposing creature. With freshly caught fish in hand, I weigh my options, cautious not to provoke any sudden action from the bear.",
            soundEffect: "Yume%20Nikki%20OST_%20Shield-Folk%20World%20(Extended).mp3",
            backgroundImage: "url('4-7.jpg')",
            options: [
                { text: "give some food", nextScene: 22 },
                { text: "run away", nextScene: 23 },
                { text: "kill the bear", nextScene: 24 },
            ]
        },
        {
            text: "With the fish in hand, I offer it as a peace offering to the bear, hoping to defuse the situation. Carefully tossing the fish away, I create a distraction to buy time for a safe retreat. Heart racing, I watch as the bear sniffs the fish, momentarily distracted. Seizing the chance, I slip away quietly, relieved to avoid danger as I continue my journey along the river. ",
            soundEffect: "Mr%20Incredible%20Becoming%20Canny%20-%20Phase%203%20Full.mp3",
            backgroundImage: "url('210427-bear-tease_gdkspk.jpg')",
            options: [
                { text: "keep going", nextScene: 37 },
            ]
        },
        {
            text: "Exhausted from the day's trials, the main character's fatigue proves their downfall. Stumbling along the riverbank, they're swiftly pursued by the bear. Despite a final burst of adrenaline, their tired legs fail them, and they collapse. In a heart-wrenching moment, the bear overtakes them, ending their journey tragically. It's a sobering reminder of the harsh realities of survival in the wild.",
            soundEffect: "suicide%20mouse%20scream.mp3",
            backgroundImage: "url('joimef.jpg')",
            options: [
                
            ]
        },
        {
            text: "Without a weapon, the main character is defenseless as the bear closes in. In a heart-stopping moment, the ferocious attack overwhelms them, sealing their tragic fate in the untamed wilderness. It's a sobering reminder of the wild's unforgiving nature and the necessity of being prepared for its dangers.",
            soundEffect: "suicide%20mouse%20scream.mp3",
            backgroundImage: "url('joimef.jpg')",
            options: [
                
            ]
        },
        {
            text: "As the bear emerges, I freeze, heart pounding. Slowly backing away, I keep a watchful eye on the imposing creature. With the freshly caught fish in hand, I weigh my options, cautious not to provoke any sudden action from the bear.",
            soundEffect: "Yume%20Nikki%20OST_%20Shield-Folk%20World%20(Extended).mp3",
            backgroundImage: "url('joimef.jpg')",
            options: [
                { text: "give some food", nextScene: 26 },
                { text: "run away", nextScene: 27 },
                { text: "kill the bear", nextScene: 28 },
            ]
        },
        {
            text: "Devoid of any distraction, the main character faces dwindling options as the bear advances. Paralyzed by fear and lacking means to appease the hungry predator, they become at the mercy of the wild beast. In a swift, brutal attack, the bear closes in, driven by primal instincts to overpower and consume its prey. The journey tragically ends, highlighting the merciless laws of nature and the harsh consequences of being ill-prepared in the wilderness.",
            soundEffect: "suicide%20mouse%20scream.mp3",
            backgroundImage: "url('joimef.jpg')",
            options: [
            ]
        },
        {
            text: "Exhausted from the day's trials, the main character's fatigue becomes their downfall. Stumbling along the riverbank, they're swiftly pursued by the bear. Despite a final burst of adrenaline, their tired legs fail them, and they collapse. In a heart-wrenching moment, the bear overtakes them, ending their journey tragically. It's a sobering reminder of the harsh realities of survival in the wild.",
            soundEffect: "suicide%20mouse%20scream.mp3",
            backgroundImage: "url('joimef.jpg')",
            options: [
                
            ]
        },
        {
            text: "Without a means to defend themselves, the main character's fate is sealed as the bear swiftly closes in. Defenseless against the powerful predator, they succumb to its ferocious attack, their journey ending tragically in the untamed wilderness. It's a sobering reminder of the unforgiving nature of the wild and the necessity of being prepared for its lurking dangers.",
            soundEffect: "suicide%20mouse%20scream.mp3",
            backgroundImage: "url('joimef.jpg')",
            options: [
                
            ]
        },
        {
            text: "Feeling rejuvenated after a restful night, I prepare to resume exploring the jungle, but my plans are halted by the sudden appearance of a bear. Heart pounding, I stay calm and slowly back away, keeping a watchful eye on its movements. Despite the adrenaline, I prioritize composure in danger. With each careful step, I retreat, focused on finding safety and regrouping before continuing my journey through the untamed wilderness.",
            soundEffect: "Yume%20Nikki%20OST_%20Shield-Folk%20World%20(Extended).mp3",
            backgroundImage: "url('jnkmdas.jpg')",
            options: [
                { text: "give some food", nextScene: 30 },
                { text: "run away", nextScene: 31 },
                { text: "kill the bear", nextScene: 32 },
            ]
        },
        {
            text: "Facing a relentless bear, the main character, lacking means of defense or distraction, falls prey to its primal instincts. Their journey ends tragically, underscoring nature's merciless laws and the risks of being unprepared in the wilderness.",
            soundEffect: "suicide%20mouse%20scream.mp3",
            backgroundImage: "url('joimef.jpg')",
            options: [
            ]
        },
        {
            text: "Refreshed from rest, the main character summons newfound energy to outrun the bear, hes heart pounding with adrenaline as they evade its pursuit. With relief, he continue their exploration through the wilderness, grateful for their fortunate escape. ",
            soundEffect: "Mr.%20Incredible%20Becoming%20Canny%20-%20Phase%206%20Full.mp3",
            backgroundImage: "url('asdaf.jpg')",
            options: [
                { text: "keep going", nextScene: 37 },
            ]
        },
        {
            text: "Without a weapon, the main character's fate is sealed as the bear closes in, leaving them defenseless against the powerful predator. In a heart-stopping moment, the bear's ferocious attack overwhelms them, tragically ending their journey in the untamed wilderness. It's a stark reminder of the unforgiving nature of the wild and the necessity of being prepared for its lurking dangers.",
            soundEffect: "suicide%20mouse%20scream.mp3",
            backgroundImage: "url('joimef.jpg')",
            options: [
                
            ]
        },
        {
            text: "As the bear emerges, freezing with pounding heart, I slowly back away, assessing the situation. With a freshly caught fish in hand, I weigh my options, cautious not to provoke the bear with sudden movements.",
            soundEffect: "Yume%20Nikki%20OST_%20Shield-Folk%20World%20(Extended).mp3",
            backgroundImage: "url('49.jpg')",
            options: [
                { text: "give some food", nextScene: 34 },
                { text: "run away", nextScene: 35 },
                { text: "kill the bear", nextScene: 36 },
            ]
        },
        {
            text: "Facing the advancing bear without distraction or defense, the main character's options dwindle. Paralyzed by fear and lacking means to appease the predator, they succumb to its primal instincts. In a swift, brutal attack, the bear consumes its prey, ending the main character's journey tragically and emphasizing the harsh consequences of wilderness ill-preparedness.",
            soundEffect: "suicide%20mouse%20scream.mp3",
            backgroundImage: "url('joimef.jpg')",
            options: [
            ]
        },
        {
            text: "Exhausted from the day's trials, the main character's fatigue proves their downfall as they stumble along the riverbank, the bear swiftly closing in. Despite a final burst of adrenaline, their tired legs fail them, and they collapse. In a heart-wrenching moment, the bear overtakes them, spelling the end of their journey amidst the unforgiving wilderness. It's a sobering reminder of the harsh realities of survival in the wild.",
            soundEffect: "suicide%20mouse%20scream.mp3",
            backgroundImage: "url('joimef.jpg')",
            options: [
                
            ]
        },
        {
            text: "Armed with a makeshift spear, I cautiously approach the bear, heart pounding with fear and adrenaline. As it lunges, I thrust the spear with all my strength, finding its mark and delivering a fatal blow. With relief, I watch as the bear collapses, grateful for the chance to defend myself. With the threat gone, I continue my journey through the jungle, mindful of potential challenges ahead.",
            soundEffect: "Mr.%20Incredible%20Becoming%20Canny%20-%20Phase%209%20Full.mp3",
            backgroundImage: "url('jkaf.jpg')",
            options: [
                { text: "keep going", nextScene: 37 },
            ]
        },
        {
            text: "Walking alongside the river, I'm captivated by its tranquil beauty until I notice a perplexing sight: it splits into two distinct streams. Intrigued, I approach the fork, wondering what caused this and what mysteries lie ahead. Standing at the crossroads, I know my choice will shape my journey through the wilderness. With a deep breath, I prepare to choose my path carefully, ready for the adventure ahead.",
            soundEffect: "Sneaky%20Adventure%20-%20Gaming%20Background%20Music%20(HD).mp3",
            backgroundImage: "url('download%20(29).jpg')",
            options: [
                { text: "go to left", nextScene: 39 },
                { text: "go to right", nextScene: 38 },
            ]
        },
        {
            text: "Venturing toward the right side of the river, I'm captivated by the allure of the unknown, but fail to notice treacherous quicksand hidden beneath the surface. Realizing my mistake too late, I'm consumed by its suffocating embrace, ending my journey tragically—a reminder of the wilderness's unforgiving nature and the importance of vigilance.",
            soundEffect: "it's%20just%20a%20burning%20memory%20but%20much%20sadderscarier.mp3",
            backgroundImage: "url('uihjlwma.jpg')",
            options: [
                
            ]
        }, 
        {
            text: "Approaching the campfire cautiously, my heart races with hope and apprehension. As I draw nearer, I find a figure illuminated by the flames. With urgency, I explain my plight, desperate for rescue. To my astonishment, the stranger is a seasoned explorer with means to navigate the treacherous waters. Grateful, I cling to newfound hope for salvation from the island's unforgiving embrace.",
            soundEffect: "Mr%20incredible%20Becoming%20Canny%20Phase%202.5%20Music%20Extended.mp3",
            backgroundImage: "url('asfnf.avif')",
            options: [
                
            ]
        }, 
    ]
};

let currentAudio = null; 
let totalRating = 0;
let totalMaxRating = 0; 
let yourRateText = null; 


function provideRating(rating) {
    
    totalRating = rating;
    totalMaxRating = 5;
   
    updateYourRateText();
    displayFeedbackForm(rating);
    disableStarButtons();
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


function displayFeedbackForm(stars) {
    const feedbackForm = document.getElementById('feedback-form');
    feedbackForm.style.display = 'block'; // Show the feedback form
    console.log("Stars submitted:", stars,'/', '5');
}

function disableStarButtons() {
    const starButtons = document.querySelectorAll('.star-rating-button');
    starButtons.forEach(button => {
        button.disabled = true;
    });
}

function enableStarButtons() {
    const starButtons = document.querySelectorAll('.star-rating-button');
    starButtons.forEach(button => {
        button.disabled = false;
    });
}


function submitFeedback() {
    const feedbackText = document.getElementById('feedback-text').value;
    console.log("Feedback submitted:", feedbackText);
    document.getElementById('feedback-text').value = '';
    document.getElementById('feedback-form').style.display = 'none';

    updateStory(0);
    enableStarButtons();
}

updateStory(0);

