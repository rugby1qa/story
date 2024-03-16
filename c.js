const story = {
    title: "The Mysterious Island",
    scenes: [
        {
            text: "Amidst the vast expanse of the open sea lies a remote and enigmatic island, shrouded in mystery and teeming with untold secrets. Its rugged coastline, battered by the relentless waves, guards the entrance to a world untouched by time, where ancient forests echo with the whispers of forgotten tales and hidden treasures lie waiting to be discovered. For those bold enough to brave its perilous shores, the island offers both peril and promise, a journey into the unknown where every step brings new challenges and unforeseen wonders. As the sun sets on the horizon, casting long shadows across the sandy beaches and rocky cliffs, the stage is set for an adventure unlike any other—a journey into the heart of the Mysterious Island.",
            soundEffect: "mixkit-arcade-retro-game-over-213.wav",
            options: [
                { text: "Start", nextScene: 1 },
            ]
        },
        {
            text: "Stranded on a mysterious island, you're faced with a crucial decision. To your left, a dense jungle teems with unknown dangers and potential resources. To your right, a rocky cliff offers a vantage point to scan for signs of rescue. With each option comes uncertainty, and the weight of your fate hangs heavy in the air. Will you venture into the jungle, braving its mysteries, or will you remain by the cliffside, hoping for salvation? The choice is yours, and it will define your journey on this enigmatic island.",
            soundEffect: "Sneaky%20Adventure%20-%20Gaming%20Background%20Music%20(HD).mp3",
            backgroundImage: "url('ygjh.avif')",
            options: [
                { text: "Explore the jungle", nextScene: 10 },
                { text: "stay and wait for rescue", nextScene: 2 }
            ]
        },
        
        {
            text: "Choosing to stay and wait for rescue, you settle in by the rocky cliff, keeping a watchful eye on the horizon. You gather driftwood for a fire, ensuring you're visible to any passing ships or planes. Each day, you scan the sea for signs of hope, never losing faith that help will come. In the meantime, you focus on survival, finding food and water to sustain yourself while you wait patiently for your chance to be rescued.",
            soundEffect: "Sneaky%20Adventure%20-%20Gaming%20Background%20Music%20(HD).mp3",
            backgroundImage: "url('ygjh.avif')", 
            options: [
                { text: "Build a shelter", nextScene: 4 },
                { text: "enjoy swimming in the beach", nextScene: 3 }
            ]
        },
        {
            text: "In a horrifying twist of fate, a shark emerges from the depths and attacks, its razor-sharp jaws closing in on you with terrifying speed. With no time to react, you find yourself ensnared in its deadly embrace, the searing pain of its teeth tearing into your flesh. As darkness descends, you realize with a sinking heart that rescue will never come, your fate sealed by the merciless jaws of the deep.",
            soundEffect: "suicide%20mouse%20scream.mp3",
            backgroundImage: "url('Red-Water-2003.jpg')",
            options: [          
            ]   
        },
        {
            text: "As the sun dips below the horizon, casting long shadows across the sandy shore, you stand back, exhausted but proud, having spent hours building a shelter. However, as darkness descends, hunger gnaws at your stomach, a reminder of your immediate needs. Determined, you gather what little energy remains and set out into the night, hoping to find food to quell the ache and sustain you through the challenges ahead.",
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
            text: "With darkness enveloping the jungle, you tread cautiously, your senses on high alert for any signs of danger. In the dim light, you stumble upon a large mushroom, its cap towering above the undergrowth like a spectral beacon. Nearby, a grotesque bug scuttles across the forest floor, its movements eerie in the night's shadows. A putrid stench wafts through the air, leading you to a patch of rotten meat, a grim reminder of the harsh realities of survival in this untamed wilderness. With a mixture of trepidation and desperation, you weigh your options, knowing that your next move could mean the difference between sustenance and further peril in the heart of the jungle.",
            backgroundImage: "url('idasok.jpg')",
            soundEffect: "Cry%20Of%20The%20Unheard.mp3",
            options: [
                { text: "eat mushroom", nextScene: 7 },
                { text: "eat bug", nextScene: 9 },
                { text: "eat rotten meat", nextScene: 8 }
            ]
        },
        {
            text: "In a moment of desperation, you consume the mysterious mushroom, hoping it will alleviate your hunger. However, as its toxic effects take hold, a wave of dizziness overwhelms you, followed by excruciating pain. With each passing moment, your vision blurs and your strength wanes until, ultimately, darkness claims you, your fate sealed by a fatal mistake amidst the shadows of the jungle.",
            soundEffect: "It's%20a%20Small%20World%20Creepy%20Piano%20(Reversed).mp3",
            backgroundImage: "url('esdf.jpg')",
            options: [
                
            ]
        },
        {
            text: "As you lean in to inspect the rotten meat, a sudden rustle alerts you to a presence behind you. Before you can react, a massive bear emerges from the shadows, its hungry eyes fixed upon you. With a roar that reverberates through the night, it lunges forward, overpowering you in an instant. In a flurry of fur and teeth, the bear devours you, your fate sealed by the cruel whims of the jungle's apex predator.",
            soundEffect: "Starvation.mp3",
            backgroundImage: "url('gjd.jpg')",
            options: [
                
            ]
        },
        {
            text: "Suppressing your revulsion, you seize upon the opportunity presented by the grotesque bug, knowing that its high protein content could sustain you through another day on the unforgiving island. With grim determination, you force yourself to consume the insect, choking back your disgust as you swallow each repulsive mouthful. Despite the foul taste lingering in your mouth, you return to your shelter, grateful for the meager sustenance that will allow you to endure the challenges that lie ahead.",
            soundEffect: "Mr.%20Incredible%20Becoming%20Canny%20-%20Phase%206%20Full.mp3",
            backgroundImage: "url('download%20(23).jpg')",
            options: [
                
                
            ]
        },
        {
            text: "Heart pounding, you stand at the edge of the jungle, faced with three diverging paths. In the center lies a serene stream, its gentle flow beckoning with promises of refreshment and perhaps sustenance. To your left, a dark cave entrance yawns wide, its depths shrouded in mystery and potential danger. And to your right, a distant roar echoes through the trees, a primal sound that fills you with both fear and curiosity. With each option fraught with uncertainty, you must choose wisely, knowing that your decision will shape the course of your journey through the heart of the jungle.",
            soundEffect: "Mr.%20incredible%20becoming%20uncanny%20phase%201.5%20full%20music.mp3",
            backgroundImage: "url('download%20(25).jpg')",
            options: [
                { text: "follow the river", nextScene: 20 },
                { text: "explore the cave", nextScene: 14 },
                { text: "investigate the noise", nextScene: 11 }
            ]
        },
        {
            text: "Driven by a mix of fear and curiosity, you cautiously approach the source of the roar, heart pounding in your chest with every step. As you push through the dense foliage, your eyes widen in shock and dread as you come face to face with a majestic yet fearsome tiger. Its amber eyes fixate on you with an intensity that sends a shiver down your spine, its powerful form poised for action. ",
            soundEffect: "Suicide%20Mouse%20theme%20song.mp3",
            backgroundImage: "url('dwuajiosk.jpg')",
            options: [
                { text: "pet the tiger and give some food", nextScene: 12 },
                { text: "kill the tiger", nextScene: 13 },
            ]
        },
        {
            text: "With the tiger by your side, hunting becomes infinitely easier. Its keen senses and ferocious prowess turn the once daunting task into a seamless endeavor. Together, you navigate the jungle with a newfound confidence, securing sustenance with greater ease than ever before. With each successful hunt, your bond with your beast friend deepens, forging an unbreakable connection born of mutual survival. Together, you are an unstoppable force in the unforgiving wilderness, overcoming every obstacle that stands in your path.",
            soundEffect: "Mr%20Incredible%20Becoming%20Canny%20-%20Phase%204%20Full.mp3", 
            backgroundImage: "url('download%20(26).jpg')",
            options: [
                
            ]
        },
        {
            text: "As the realization dawns upon you that the tiger you've slain is but a cub, a chilling sense of dread fills your heart. Before you can comprehend the gravity of your mistake, a deafening roar pierces the air, and you turn to face the enraged mother tiger, her golden eyes ablaze with fury. With lightning speed, she pounces, her powerful jaws closing around you in a lethal embrace. In an instant, your world fades to black, your fate sealed by a fatal misstep in the heart of the jungle.",
            soundEffect: "Starvation.mp3",
            backgroundImage: "url('1663027120922.jpg')",
            options: [
                
            ]
        }, 
        
        {
            text: "Heart racing with excitement and trepidation, you step into the darkness of the cave, guided by the flickering light of your torch. As your eyes adjust to the dimness, they widen in astonishment at the sight before you: a gleaming treasure chest nestled in a corner, its lid slightly ajar. But your joy is short-lived as a low growl reverberates through the cavern, and you turn to see a massive bear hugging the chest protectively. With adrenaline coursing through your veins, you must decide whether to risk confronting the bear for the treasure or to retreat and seek another path.",
            soundEffect: "ROBLOX%20Music%20-%20Horror.mp3",
            backgroundImage: "url('jwa.jpg')",
            options: [
                { text: "approach the treassure quitly", nextScene: 16 },
                { text: "wake the bear up, and distract the bear with a food", nextScene: 17 },
                { text: "kill the bear while its sleeping", nextScene: 15 },
            ]
        },
        {
            text: "With a surge of adrenaline, you confront the bear, determined to claim the treasure as your own. In a fierce battle, you manage to overpower the beast, but your victory is short-lived. As you reach for the treasure, a chilling growl fills the cavern, and you turn to see a pair of enraged bears charging toward you. With nowhere to run and no hope of escape, you meet your demise at the claws of the vengeful creatures, your quest for riches ending in tragedy deep within the heart of the cave.",
            soundEffect: "In%20The%20Dark.mp3",
            backgroundImage: "url('joimef.jpg')",
            options: [
            ]
        },
        {
            text: "Heart pounding, you seize the treasure and bolt from the cave, the sound of enraged bears hot on your heels. With every ounce of strength, you sprint through the dense underbrush, adrenaline fueling your desperate flight. Branches lash at your face, and rocks threaten to trip you, but you press on, driven by the singular goal of survival. Miraculously, you manage to outrun the pursuing bears, emerging from the jungle's embrace battered and breathless, but victorious with the treasure clutched tightly in your grasp.",
            soundEffect: "Mr%20Incredible%20Becoming%20Canny%20-%20Phase%203%20Full.mp3",
            backgroundImage: "url('asdaf.jpg')",
            options: [
            ]
        },
        {
            text: "As the other bears awaken, I quickly assess the situation. With the chest in hand, I know I have a limited window of opportunity to escape. However, I also realize that attempting to run while the bears are alert could prove disastrous. Instead, I opt to remain hidden, waiting patiently for the bears to settle back into slumber. It's a risky gamble, but I know that patience and stealth are my best allies in this precarious situation. As I hunker down in the shadows, heart pounding with anticipation, I silently pray for the bears to drift back into sleep, allowing me the chance to make my escape without further confrontation.",
            soundEffect: "Kyomi's%20Lullaby.mp3",
            backgroundImage: "url('download%20(27).jpg')",
            options: [
                { text: "wait for the bears to sleep then escape", nextScene: 18 },
                { text: "escape quitly", nextScene: 19 },           
            ]
        },
        {
            text: "As I sit motionless, hoping to evade the bears' notice, the scent of my fear permeates the air, betraying my presence. With a low growl, the bears detect my hiding place, and before I can react, they descend upon me with primal fury. In a flurry of claws and teeth, their savage onslaught overwhelms me, my futile attempts at escape proving no match for the ferocity of the enraged beasts. In the end, all that remains is silence, the echo of my demise lost amidst the depths of the unforgiving cave.",
            soundEffect: "suicide%20mouse%20scream.mp3",
            backgroundImage: "url('images%20(20).jpg')",
            options: [       
            ]
        },
        {
            text: "With a calculated risk, I seize the opportunity to quietly slip away amidst the distraction of the other bears. As I move swiftly through the cave, I snatch a piece of their last remaining meat, hoping to mask my scent and buy myself precious moments of escape. With each cautious step, I make my way towards the exit, heart pounding in my chest as I navigate the labyrinthine passages. Finally, as the sounds of the bears fade into the distance, I emerge from the cave's mouth, the treasure chest clutched tightly in my grasp. Though I've narrowly escaped the jaws of danger, the memory of that harrowing encounter will linger with me as a reminder of the perilous risks one must take in the pursuit of fortune.",
            soundEffect: "Mr%20Incredible%20Becoming%20Canny%20-%20Phase%203%20Full.mp3",
            backgroundImage: "url('download%20(28).jpg')",
            options: [         
            ]
        },
        {
            text: "Deciding to follow the river, I embark on a journey downstream, my eyes scanning the surrounding landscape for any signs of civilization or clues that might lead me to safety. With each passing mile, the gentle murmur of the water soothes my frayed nerves, offering a sense of solace amidst the uncertainty of my circumstances. As I travel further along the river's winding course, I remain vigilant, ever watchful for any potential threats or opportunities that may present themselves along the way. With determination in my heart and the treasure chest as my steadfast companion, I press onward, ready to face whatever challenges lie ahead on this winding path to unknown shores.",
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
            text: "You catch some fish, now you have food for the day, suddenly a bear appear in front of you, As the bear emerges from the foliage, I freeze, my heart pounding in my chest. Quickly assessing the situation, I slowly back away, keeping a watchful eye on the imposing creature. With the freshly caught fish in hand, I consider my options, knowing that any sudden movements could provoke the bear into action.",
            soundEffect: "Yume%20Nikki%20OST_%20Shield-Folk%20World%20(Extended).mp3",
            backgroundImage: "url('4-7.jpg')",
            options: [
                { text: "give some food", nextScene: 22 },
                { text: "run away", nextScene: 23 },
                { text: "kill the bear", nextScene: 24 },
            ]
        },
        {
            text: "With the freshly caught fish in hand, I consider offering it as a peace offering, hoping to appease the bear and defuse the situation. Carefully, I toss the fish a safe distance away, creating a distraction that might buy me enough time to retreat safely. With my heart racing, I watch as the bear sniffs at the fish, momentarily distracted by the unexpected feast. Seizing the opportunity, I quietly slip away, breathing a sigh of relief as I continue my journey along the river, grateful to have avoided a potentially dangerous encounter with the wild beast. ",
            soundEffect: "Mr%20Incredible%20Becoming%20Canny%20-%20Phase%203%20Full.mp3",
            backgroundImage: "url('210427-bear-tease_gdkspk.jpg')",
            options: [
                { text: "keep going", nextScene: 37 },
            ]
        },
        {
            text: "Exhausted and weary from the day's trials, the main character's fatigue proves to be their downfall. As they stumble along the riverbank, the bear swiftly closes the distance, its powerful strides closing in on its prey. With a final burst of adrenaline, the main character attempts to flee, but their tired legs betray them, and they stumble to the ground. In a heart-wrenching moment, the bear overtakes them, its razor-sharp claws and powerful jaws spelling the end of their journey. With a heavy heart, the main character's story comes to a tragic close amidst the unforgiving wilderness, a sobering reminder of the harsh realities of survival in the wild.",
            soundEffect: "suicide%20mouse%20scream.mp3",
            backgroundImage: "url('joimef.jpg')",
            options: [
                
            ]
        },
        {
            text: "You dont have a supply to craft a weapon, Without the means to defend themselves, the main character's fate is sealed as the bear swiftly closes in. With no weapon at their disposal, they are left defenseless against the powerful predator. In a heart-stopping moment, the bear's ferocious attack overwhelms them, and their journey comes to a tragic end amidst the untamed wilderness. It's a sobering reminder of the unforgiving nature of the wild and the importance of being prepared for the dangers that lurk in its shadows.",
            soundEffect: "suicide%20mouse%20scream.mp3",
            backgroundImage: "url('joimef.jpg')",
            options: [
                
            ]
        },
        {
            text: "You continue exploring the jungle, following a stream deeper into the heart of the island, suddenly a bear appear in front of you, As the bear emerges from the foliage, I freeze, my heart pounding in my chest. Quickly assessing the situation, I slowly back away, keeping a watchful eye on the imposing creature. With the freshly caught fish in hand, I consider my options, knowing that any sudden movements could provoke the bear into action.",
            soundEffect: "Yume%20Nikki%20OST_%20Shield-Folk%20World%20(Extended).mp3",
            backgroundImage: "url('joimef.jpg')",
            options: [
                { text: "give some food", nextScene: 26 },
                { text: "run away", nextScene: 27 },
                { text: "kill the bear", nextScene: 28 },
            ]
        },
        {
            text: "With no food to offer as a distraction, the main character's options dwindle as the bear advances. Paralyzed by fear and lacking any means of appeasing the hungry predator, they find themselves at the mercy of the wild beast. In a swift and brutal attack, the bear closes in, its primal instincts driving it to overpower and consume its prey. The main character's journey comes to a tragic end, a stark reminder of the merciless laws of nature and the harsh consequences of being ill-prepared in the wilderness.",
            soundEffect: "suicide%20mouse%20scream.mp3",
            backgroundImage: "url('joimef.jpg')",
            options: [
            ]
        },
        {
            text: "Exhausted and weary from the day's trials, the main character's fatigue proves to be their downfall. As they stumble along the riverbank, the bear swiftly closes the distance, its powerful strides closing in on its prey. With a final burst of adrenaline, the main character attempts to flee, but their tired legs betray them, and they stumble to the ground. In a heart-wrenching moment, the bear overtakes them, its razor-sharp claws and powerful jaws spelling the end of their journey. With a heavy heart, the main character's story comes to a tragic close amidst the unforgiving wilderness, a sobering reminder of the harsh realities of survival in the wild.",
            soundEffect: "suicide%20mouse%20scream.mp3",
            backgroundImage: "url('joimef.jpg')",
            options: [
                
            ]
        },
        {
            text: "You dont have a supply to craft a weapon, Without the means to defend themselves, the main character's fate is sealed as the bear swiftly closes in. With no weapon at their disposal, they are left defenseless against the powerful predator. In a heart-stopping moment, the bear's ferocious attack overwhelms them, and their journey comes to a tragic end amidst the untamed wilderness. It's a sobering reminder of the unforgiving nature of the wild and the importance of being prepared for the dangers that lurk in its shadows.",
            soundEffect: "suicide%20mouse%20scream.mp3",
            backgroundImage: "url('joimef.jpg')",
            options: [
                
            ]
        },
        {
            text: "Feeling rejuvenated after a restful night, I steel myself to continue my exploration of the jungle. However, my plans are abruptly interrupted as a bear emerges from the dense foliage. Heart pounding, I remain calm and slowly back away, keeping a watchful eye on the bear's movements. Despite the adrenaline coursing through my veins, I remember the importance of staying composed in the face of danger. With each careful step, I retreat from the bear, my mind racing with thoughts of finding safety and regrouping before continuing my journey through the untamed wilderness.",
            soundEffect: "Yume%20Nikki%20OST_%20Shield-Folk%20World%20(Extended).mp3",
            backgroundImage: "url('jnkmdas.jpg')",
            options: [
                { text: "give some food", nextScene: 30 },
                { text: "run away", nextScene: 31 },
                { text: "kill the bear", nextScene: 32 },
            ]
        },
        {
            text: "With no food to offer as a distraction, the main character's options dwindle as the bear advances. Paralyzed by fear and lacking any means of appeasing the hungry predator, they find themselves at the mercy of the wild beast. In a swift and brutal attack, the bear closes in, its primal instincts driving it to overpower and consume its prey. The main character's journey comes to a tragic end, a stark reminder of the merciless laws of nature and the harsh consequences of being ill-prepared in the wilderness.",
            soundEffect: "suicide%20mouse%20scream.mp3",
            backgroundImage: "url('joimef.jpg')",
            options: [
            ]
        },
        {
            text: "since you rested before you continue your exploration, you have now the energy to outrun the bear ",
            soundEffect: "Mr.%20Incredible%20Becoming%20Canny%20-%20Phase%206%20Full.mp3",
            backgroundImage: "url('asdaf.jpg')",
            options: [
                { text: "keep going", nextScene: 37 },
            ]
        },
        {
            text: "You dont have a supply to craft a weapon, Without the means to defend themselves, the main character's fate is sealed as the bear swiftly closes in. With no weapon at their disposal, they are left defenseless against the powerful predator. In a heart-stopping moment, the bear's ferocious attack overwhelms them, and their journey comes to a tragic end amidst the untamed wilderness. It's a sobering reminder of the unforgiving nature of the wild and the importance of being prepared for the dangers that lurk in its shadows.",
            soundEffect: "suicide%20mouse%20scream.mp3",
            backgroundImage: "url('joimef.jpg')",
            options: [
                
            ]
        },
        {
            text: "suddenly a bear appear in front of you, As the bear emerges from the foliage, I freeze, my heart pounding in my chest. Quickly assessing the situation, I slowly back away, keeping a watchful eye on the imposing creature. With the freshly caught fish in hand, I consider my options, knowing that any sudden movements could provoke the bear into action.",
            soundEffect: "Yume%20Nikki%20OST_%20Shield-Folk%20World%20(Extended).mp3",
            backgroundImage: "url('49.jpg')",
            options: [
                { text: "give some food", nextScene: 34 },
                { text: "run away", nextScene: 35 },
                { text: "kill the bear", nextScene: 36 },
            ]
        },
        {
            text: "With no food to offer as a distraction, the main character's options dwindle as the bear advances. Paralyzed by fear and lacking any means of appeasing the hungry predator, they find themselves at the mercy of the wild beast. In a swift and brutal attack, the bear closes in, its primal instincts driving it to overpower and consume its prey. The main character's journey comes to a tragic end, a stark reminder of the merciless laws of nature and the harsh consequences of being ill-prepared in the wilderness.",
            soundEffect: "suicide%20mouse%20scream.mp3",
            backgroundImage: "url('joimef.jpg')",
            options: [
            ]
        },
        {
            text: "Exhausted and weary from the day's trials, the main character's fatigue proves to be their downfall. As they stumble along the riverbank, the bear swiftly closes the distance, its powerful strides closing in on its prey. With a final burst of adrenaline, the main character attempts to flee, but their tired legs betray them, and they stumble to the ground. In a heart-wrenching moment, the bear overtakes them, its razor-sharp claws and powerful jaws spelling the end of their journey. With a heavy heart, the main character's story comes to a tragic close amidst the unforgiving wilderness, a sobering reminder of the harsh realities of survival in the wild.",
            soundEffect: "suicide%20mouse%20scream.mp3",
            backgroundImage: "url('joimef.jpg')",
            options: [
                
            ]
        },
        {
            text: "With the spear crafted from the available resources, I cautiously approach the bear, my heart pounding with adrenaline and fear. Keeping a steady grip on the makeshift weapon, I inch closer, mindful of the bear's movements. As it lunges towards me, I act swiftly, thrusting the spear with all my strength towards the bear's vulnerable points. With a combination of skill and luck, the spear finds its mark, piercing the bear's flesh and delivering a fatal blow. As the bear collapses to the ground, lifeless, a wave of relief washes over me. Though the encounter was harrowing, I'm grateful for the opportunity to defend myself and emerge victorious in the face of danger. With the threat neutralized, I continue my journey through the jungle, wary of the challenges that may still lie ahead.",
            soundEffect: "Mr.%20Incredible%20Becoming%20Canny%20-%20Phase%209%20Full.mp3",
            backgroundImage: "url('jkaf.jpg')",
            options: [
                { text: "keep going", nextScene: 37 },
            ]
        },
        {
            text: "As I walk alongside the river, marveling at the tranquil beauty of the surroundings, I suddenly notice a perplexing sight: the river has split into two distinct streams, diverging from the main flow. Intrigued by this unexpected phenomenon, I approach the fork in the river, my curiosity piqued. With a sense of wonder, I wonder what might have caused this natural occurrence and what mysteries lie ahead along each path. As I stand at the crossroads, I realize that the decision I make now will determine the course of my journey through the untamed wilderness. With a deep breath, I steel myself for the adventure that awaits and prepare to choose my path with care.",
            soundEffect: "Sneaky%20Adventure%20-%20Gaming%20Background%20Music%20(HD).mp3",
            backgroundImage: "url('download%20(29).jpg')",
            options: [
                { text: "go to left", nextScene: 39 },
                { text: "go to right", nextScene: 38 },
            ]
        },
        {
            text: "As I venture towards the right side of the river, my attention captivated by the allure of the unknown, I fail to notice the treacherous quicksand lying hidden beneath the surface. With a sinking feeling, both figuratively and literally, I realize my mistake too late as the ground gives way beneath me. Panic sets in as I struggle against the relentless pull of the sand, but it's futile. With each passing moment, I sink deeper and deeper, until finally, I'm consumed by the suffocating embrace of the quicksand. In a moment of despair, my journey comes to a tragic end, a stark reminder of the unforgiving nature of the wilderness and the importance of vigilance in the face of danger.",
            soundEffect: "it's%20just%20a%20burning%20memory%20but%20much%20sadderscarier.mp3",
            backgroundImage: "uihjlwma.jpg')",
            options: [
                
            ]
        }, 
        {
            text: "As I cautiously approach the campfire on the left side of the river, my heart races with a mixture of hope and apprehension. As I draw nearer, I see a figure seated by the fire, their features illuminated by the dancing flames. With a sense of urgency, I introduce myself, explaining my plight and the desperate need for rescue. To my astonishment and profound relief, the stranger reveals themselves to be a seasoned explorer with the means to navigate the treacherous waters surrounding the island. With gratitude overflowing, I cling to the newfound hope of rescue, knowing that this unexpected encounter may be the key to my salvation from the island's unforgiving embrace.",
            soundEffect: "Mr%20incredible%20Becoming%20Canny%20Phase%202.5%20Music%20Extended.mp3",
            backgroundImage: "url('asfnf.avif')",
            options: [
                
            ]
        }, 
    ]
};

let currentAudio = null; // Variable to store the currently playing audio
let totalRating = 0; // Variable to store the accumulated rating
let totalMaxRating = 0; // Variable to store the accumulated maximum rating
let yourRateText = null; // Variable to store the "Your rate" text element

// Function to handle star rating submission
function provideRating(rating) {
    // Increment the total rating and maximum possible rating
    totalRating += rating;
    totalMaxRating += 5;
    // Update the "Your rate" text
    updateYourRateText();
    // Restart the story
    updateStory(0);
}

// Function to update the "Your rate" text
function updateYourRateText() {
    if (yourRateText) {
        yourRateText.textContent = `Your rate: ${totalRating}/${totalMaxRating}`;
        yourRateText.style.display = "block";
    }
}

// Function to update the story text, background image, and options
function updateStory(sceneIndex) {
    const currentScene = story.scenes[sceneIndex];
    document.getElementById('story-title').textContent = story.title;
    document.getElementById('story-text').textContent = currentScene.text;

    // Clear previous background image
    document.body.style.backgroundImage = "none";

    // Set background image if specified in the scene
    if (currentScene.backgroundImage) {
        document.body.style.backgroundImage = currentScene.backgroundImage;
    }

    // Pause the previously playing audio, if any
    if (currentAudio) {
        currentAudio.pause();
    }

    // Play sound effect if specified in the scene
    if (currentScene.soundEffect) {
        currentAudio = new Audio(currentScene.soundEffect);
        currentAudio.play();
    }

    const optionsContainer = document.getElementById('options-container');
    optionsContainer.innerHTML = ''; // Clear existing options

    if (sceneIndex === 0) {
        // Display "Your rate" in the first scene
        yourRateText = document.createElement('div');
        yourRateText.textContent = `Your rate: ${totalRating}/${totalMaxRating}`;
        yourRateText.classList.add('your-rate-text');
        yourRateText.style.display = totalRating > 0 ? "block" : "none";
        optionsContainer.appendChild(yourRateText);
    }

    if (currentScene.options.length === 0 && sceneIndex !== 0) {
        // Add star rating buttons if there are no options
        const ratingContainer = document.createElement('div');
        ratingContainer.classList.add('rating-container');
        for (let i = 1; i <= 5; i++) {
            const starButton = document.createElement('button');
            starButton.textContent = "⭐".repeat(i);
            starButton.classList.add('star-rating-button');
            starButton.addEventListener('click', () => {
                provideRating(i);
                // Optionally, you can provide visual feedback to the user (e.g., highlight selected stars)
            });
            ratingContainer.appendChild(starButton);
        }
        optionsContainer.appendChild(ratingContainer);
    } else {
        // Add options if available
        currentScene.options.forEach((option, index) => {
            const button = document.createElement('button');
            button.textContent = option.text;
            button.classList.add('option-button');
            button.addEventListener('click', () => {
                updateStory(option.nextScene);
                // Add logic for emotional feedback here
            });
            optionsContainer.appendChild(button);
        });
    }
}

// Call updateStory function to start the story
updateStory(0);
