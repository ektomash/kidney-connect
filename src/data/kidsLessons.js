export const kidsLessons = [
  {
    id: 1,
    slug: "what-are-kidneys",
    free: true,
    title: "What Are Kidneys?",
    subtitle: "Meet your body's amazing filters!",
    coverImage:
      "https://images.unsplash.com/photo-1559757175-5700dde675bc?w=600&h=400&fit=crop",
    icon: "\ud83e\udec0",
    color: "#FF6B6B",
    ageContent: {
      younger: {
        steps: [
          {
            mascotPose: "idle",
            mascotText:
              "Hi there! I'm Rinni, your kidney buddy! Did you know you have two kidneys inside your body? They're shaped like beans \u2014 just like me!",
            image:
              "https://images.unsplash.com/photo-1559757175-5700dde675bc?w=600&h=400&fit=crop",
            imageAlt: "Child pointing at their back where kidneys are located",
          },
          {
            mascotPose: "talking",
            mascotText:
              "Your kidneys are hiding behind your tummy, near your back. Put your hands on your waist \u2014 that's about where we are! One on each side.",
            image:
              "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&h=400&fit=crop",
            imageAlt: "Diagram of human body showing kidney location",
          },
          {
            mascotPose: "talking",
            mascotText:
              "Think of your kidneys like a super water filter! When you drink water or juice, your blood carries it around. I clean your blood and take out the yucky stuff your body doesn't need.",
            image:
              "https://images.unsplash.com/photo-1548839140-29a749e1cf4d?w=600&h=400&fit=crop",
            imageAlt: "Clean water being filtered",
          },
          {
            mascotPose: "celebrating",
            mascotText:
              "Every single day, your kidneys filter about 150 liters of blood. That's like filling a whole bathtub! And each kidney is only as big as your fist. Pretty cool, right?",
            image:
              "https://images.unsplash.com/photo-1584362917165-526a968579e8?w=600&h=400&fit=crop",
            imageAlt: "A child making a fist to show kidney size",
          },
        ],
        quiz: [
          {
            question: "How many kidneys does a person have?",
            options: ["1", "2", "4", "6"],
            correctIndex: 1,
            mascotCorrect:
              "Yes! You have exactly 2 kidneys, one on each side!",
            mascotWrong:
              "Oops! The answer is 2. One on the left, one on the right!",
          },
          {
            question: "What shape are your kidneys?",
            options: ["Round like a ball", "Shaped like a bean", "Square", "Like a star"],
            correctIndex: 1,
            mascotCorrect:
              "That's right! Kidneys are shaped like beans \u2014 just like me!",
            mascotWrong:
              "Not quite! Kidneys are shaped like beans. That's why I look the way I do!",
          },
          {
            question: "What do kidneys do?",
            options: [
              "Help you breathe",
              "Clean your blood",
              "Move your legs",
              "Help you see",
            ],
            correctIndex: 1,
            mascotCorrect:
              "You got it! Kidneys are your body's amazing blood cleaners!",
            mascotWrong:
              "Good try! Kidneys actually clean your blood by filtering out waste.",
          },
        ],
      },
      older: {
        steps: [
          {
            mascotPose: "idle",
            mascotText:
              "Hey! I'm Rinni, and I'm here to teach you about kidneys. These bean-shaped organs are part of your urinary system and play a vital role in keeping your body in balance.",
            image:
              "https://images.unsplash.com/photo-1559757175-5700dde675bc?w=600&h=400&fit=crop",
            imageAlt: "Medical illustration of the urinary system",
          },
          {
            mascotPose: "talking",
            mascotText:
              "Your kidneys sit in the retroperitoneal space, behind your abdominal organs, one on each side of your spine. The right kidney is slightly lower because of the liver above it. Each one is about 10\u201312 cm long.",
            image:
              "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&h=400&fit=crop",
            imageAlt: "Anatomical diagram showing kidney position",
          },
          {
            mascotPose: "talking",
            mascotText:
              "Kidneys are filtration powerhouses. They remove waste products like urea and creatinine from your blood, regulate fluid balance, control electrolyte levels (sodium, potassium), and even help regulate blood pressure through the renin-angiotensin system.",
            image:
              "https://images.unsplash.com/photo-1548839140-29a749e1cf4d?w=600&h=400&fit=crop",
            imageAlt: "Scientific diagram of kidney filtration",
          },
          {
            mascotPose: "thinking",
            mascotText:
              "Each kidney contains about 1 million tiny units called nephrons. A nephron has a glomerulus (a tiny blood filter) and a tubule (a small tube). Blood enters, gets filtered, useful stuff is reabsorbed, and waste becomes urine.",
            image:
              "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=600&h=400&fit=crop",
            imageAlt: "Microscopic view of kidney structure",
          },
          {
            mascotPose: "celebrating",
            mascotText:
              "Here's what blows my mind: your kidneys filter about 150 liters of blood every day, but only produce about 1\u20132 liters of urine. That means 99% of the filtered fluid is reabsorbed! They also produce erythropoietin, a hormone that helps make red blood cells.",
            image:
              "https://images.unsplash.com/photo-1584362917165-526a968579e8?w=600&h=400&fit=crop",
            imageAlt: "Infographic about kidney facts and statistics",
          },
        ],
        quiz: [
          {
            question:
              "What is the tiny filtering unit inside each kidney called?",
            options: ["Neuron", "Nephron", "Neutron", "Nucleon"],
            correctIndex: 1,
            mascotCorrect:
              "Correct! Nephrons are the microscopic filtering units \u2014 about 1 million per kidney!",
            mascotWrong:
              "Close! It's a nephron (not neuron). Each kidney has about 1 million of them.",
          },
          {
            question:
              "How much blood do your kidneys filter per day?",
            options: ["15 liters", "50 liters", "150 liters", "500 liters"],
            correctIndex: 2,
            mascotCorrect:
              "Spot on! About 150 liters per day \u2014 that's incredible for organs the size of your fist.",
            mascotWrong:
              "The answer is 150 liters! That's roughly 50 bathtubs worth of blood a year.",
          },
          {
            question: "Which hormone do kidneys produce to help make red blood cells?",
            options: [
              "Insulin",
              "Adrenaline",
              "Erythropoietin",
              "Melatonin",
            ],
            correctIndex: 2,
            mascotCorrect:
              "Yes! Erythropoietin (EPO) stimulates your bone marrow to produce red blood cells.",
            mascotWrong:
              "It's erythropoietin (EPO). Kidneys do more than just filter \u2014 they're hormone factories too!",
          },
        ],
      },
    },
  },
  {
    id: 2,
    slug: "how-kidneys-work",
    free: true,
    title: "How Do Kidneys Work?",
    subtitle: "The incredible journey of blood through your kidneys",
    coverImage:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&h=400&fit=crop",
    icon: "\u2699\ufe0f",
    color: "#4ECDC4",
    ageContent: {
      younger: {
        steps: [
          {
            mascotPose: "idle",
            mascotText:
              "Ready for an adventure? Let's follow a drop of blood on its journey through your kidneys! It's like a water park ride \u2014 but inside your body.",
            image:
              "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=400&fit=crop",
            imageAlt: "Colorful illustration of blood flow",
          },
          {
            mascotPose: "talking",
            mascotText:
              "Your heart pumps blood through big tubes called arteries. A big artery sends blood to each kidney. That blood carries food for your cells, but also waste \u2014 stuff your body needs to throw away.",
            image:
              "https://images.unsplash.com/photo-1628595351029-c2bf17511435?w=600&h=400&fit=crop",
            imageAlt: "Simple diagram of heart pumping blood to kidneys",
          },
          {
            mascotPose: "talking",
            mascotText:
              "Inside me, there are millions of tiny filters. They work like a sieve in the kitchen! Good stuff (water, sugar, vitamins) goes back into your blood. Bad stuff (waste) goes into a tube and becomes pee!",
            image:
              "https://images.unsplash.com/photo-1585435557343-3b092031a831?w=600&h=400&fit=crop",
            imageAlt: "Kitchen sieve as analogy for kidney filtering",
          },
          {
            mascotPose: "celebrating",
            mascotText:
              "The clean blood goes back to your heart, and the pee travels down to your bladder. When your bladder is full, you feel like you need to go to the bathroom. And the cycle starts all over again!",
            image:
              "https://images.unsplash.com/photo-1548839140-29a749e1cf4d?w=600&h=400&fit=crop",
            imageAlt: "Water being filtered, representing the kidney cleaning cycle",
          },
        ],
        quiz: [
          {
            question: "Where does blood go after being cleaned by the kidneys?",
            options: [
              "To the bladder",
              "Back to the heart",
              "To the stomach",
              "Out of the body",
            ],
            correctIndex: 1,
            mascotCorrect:
              "Yes! Clean blood goes right back to the heart to be pumped around again!",
            mascotWrong:
              "Not quite! The clean blood returns to your heart, and only the waste goes to your bladder.",
          },
          {
            question: "What happens to the waste that kidneys filter out?",
            options: [
              "It disappears",
              "It becomes pee",
              "It stays in the kidney",
              "It goes back into the blood",
            ],
            correctIndex: 1,
            mascotCorrect:
              "Right! The waste becomes urine (pee) and goes to your bladder!",
            mascotWrong:
              "The waste becomes urine (pee), which goes to your bladder until you use the bathroom.",
          },
        ],
      },
      older: {
        steps: [
          {
            mascotPose: "idle",
            mascotText:
              "Let's dive deep into how kidneys actually filter blood. The process involves three main stages: filtration, reabsorption, and secretion. Together, these form urine.",
            image:
              "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=400&fit=crop",
            imageAlt: "Diagram of nephron filtration process",
          },
          {
            mascotPose: "talking",
            mascotText:
              "Stage 1 \u2014 Filtration: Blood enters the kidney through the renal artery. Inside each nephron, the glomerulus (a ball of tiny capillaries) filters blood under pressure. Small molecules pass through, but large proteins and blood cells stay in the blood.",
            image:
              "https://images.unsplash.com/photo-1628595351029-c2bf17511435?w=600&h=400&fit=crop",
            imageAlt: "Detailed glomerulus filtration diagram",
          },
          {
            mascotPose: "talking",
            mascotText:
              "Stage 2 \u2014 Reabsorption: The filtered fluid enters the tubule. Here, up to 99% of water, glucose, amino acids, and important ions are reabsorbed back into the blood. This is how your body reclaims the good stuff.",
            image:
              "https://images.unsplash.com/photo-1585435557343-3b092031a831?w=600&h=400&fit=crop",
            imageAlt: "Tubule reabsorption process diagram",
          },
          {
            mascotPose: "thinking",
            mascotText:
              "Stage 3 \u2014 Secretion: Some substances like hydrogen ions, potassium, and certain drugs are actively secreted from the blood into the tubule. This fine-tunes the blood\u2019s composition and pH level.",
            image:
              "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=600&h=400&fit=crop",
            imageAlt: "Secretion process in the nephron",
          },
          {
            mascotPose: "celebrating",
            mascotText:
              "The final product \u2014 urine \u2014 flows from the collecting ducts to the renal pelvis, down the ureters, and into the bladder. The whole process is regulated by hormones like ADH (antidiuretic hormone) and aldosterone, which control how much water is reabsorbed.",
            image:
              "https://images.unsplash.com/photo-1548839140-29a749e1cf4d?w=600&h=400&fit=crop",
            imageAlt: "Water being filtered, representing the complete kidney cycle",
          },
        ],
        quiz: [
          {
            question: "What are the three stages of urine formation?",
            options: [
              "Digestion, absorption, excretion",
              "Filtration, reabsorption, secretion",
              "Inhalation, circulation, exhalation",
              "Compression, expansion, release",
            ],
            correctIndex: 1,
            mascotCorrect:
              "Perfect! Filtration, reabsorption, and secretion are the three key stages.",
            mascotWrong:
              "It's filtration, reabsorption, and secretion. Remember: filter, reclaim, fine-tune!",
          },
          {
            question:
              "What percentage of filtered fluid is typically reabsorbed?",
            options: ["About 50%", "About 75%", "About 99%", "100%"],
            correctIndex: 2,
            mascotCorrect:
              "Exactly! About 99% is reabsorbed \u2014 your body is incredibly efficient.",
            mascotWrong:
              "It's about 99%! From ~150 liters filtered, only 1\u20132 liters become urine.",
          },
          {
            question: "Which hormone helps control water reabsorption in kidneys?",
            options: ["Insulin", "ADH (Antidiuretic hormone)", "Testosterone", "Thyroxine"],
            correctIndex: 1,
            mascotCorrect:
              "Right! ADH tells your kidneys how much water to reabsorb based on hydration levels.",
            mascotWrong:
              "It's ADH (antidiuretic hormone). It signals kidneys to retain more water when you're dehydrated.",
          },
        ],
      },
    },
  },
  {
    id: 3,
    slug: "why-kidneys-get-sick",
    free: true,
    title: "Why Do Kidneys Get Sick?",
    subtitle: "Understanding kidney disease and warning signs",
    coverImage:
      "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=600&h=400&fit=crop",
    icon: "\ud83e\ude7a",
    color: "#FFB347",
    ageContent: {
      younger: {
        steps: [
          {
            mascotPose: "thinking",
            mascotText:
              "Sometimes kidneys get sick, just like you might catch a cold. But don't worry \u2014 if we learn about it, we can help protect them! Let's find out what can go wrong.",
            image:
              "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=600&h=400&fit=crop",
            imageAlt: "Caring for health concept",
          },
          {
            mascotPose: "talking",
            mascotText:
              "The most common reason kidneys get sick is when there's too much sugar in the blood (diabetes) or when blood pressure is too high. Think of it like a water filter \u2014 if you push dirty water through it too hard, it can break!",
            image:
              "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=600&h=400&fit=crop",
            imageAlt: "Overworked filter analogy",
          },
          {
            mascotPose: "talking",
            mascotText:
              "How can you tell if kidneys might be in trouble? Some signs are: feeling very tired, puffy eyes or swollen feet, needing to pee a lot more or a lot less than usual, or tummy pain near your back.",
            image:
              "https://images.unsplash.com/photo-1612776572997-76cc42e058c3?w=600&h=400&fit=crop",
            imageAlt: "Child at doctor checkup",
          },
          {
            mascotPose: "encouraging",
            mascotText:
              "The great news is that doctors can check kidney health with simple blood and pee tests! If problems are found early, they can often be fixed or managed. That's why going to the doctor for checkups is so important!",
            image:
              "https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?w=600&h=400&fit=crop",
            imageAlt: "Doctor doing a checkup",
          },
        ],
        quiz: [
          {
            question: "What is one of the biggest causes of kidney disease?",
            options: [
              "Eating too many vegetables",
              "Too much sugar in the blood",
              "Sleeping too much",
              "Reading books",
            ],
            correctIndex: 1,
            mascotCorrect:
              "Right! Too much sugar in the blood (diabetes) can damage kidneys over time.",
            mascotWrong:
              "The answer is too much sugar in the blood. Diabetes is a leading cause of kidney disease.",
          },
          {
            question: "Which of these could be a sign of kidney problems?",
            options: [
              "Having lots of energy",
              "Puffy eyes and swollen feet",
              "Growing taller",
              "Laughing a lot",
            ],
            correctIndex: 1,
            mascotCorrect:
              "Yes! Puffiness and swelling can be a sign that kidneys aren't filtering properly.",
            mascotWrong:
              "Puffy eyes and swollen feet can be warning signs. It means fluid isn't being removed properly.",
          },
        ],
      },
      older: {
        steps: [
          {
            mascotPose: "thinking",
            mascotText:
              "Chronic Kidney Disease (CKD) affects over 850 million people worldwide. Understanding what causes it and recognizing symptoms early can make a huge difference in outcomes. Let's explore the science.",
            image:
              "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=600&h=400&fit=crop",
            imageAlt: "Global kidney disease statistics",
          },
          {
            mascotPose: "talking",
            mascotText:
              "The two leading causes of CKD are diabetes (Type 1 and Type 2) and hypertension (high blood pressure). Diabetes damages the glomeruli through excess glucose, while hypertension damages blood vessels, reducing blood flow to nephrons. Other causes include glomerulonephritis, polycystic kidney disease, and recurrent infections.",
            image:
              "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=600&h=400&fit=crop",
            imageAlt: "Diagram showing causes of kidney disease",
          },
          {
            mascotPose: "talking",
            mascotText:
              "CKD progresses through 5 stages, measured by GFR (Glomerular Filtration Rate). Stage 1 (GFR 90+) shows mild damage with normal function. By Stage 5 (GFR below 15), kidneys have lost almost all function \u2014 this is called end-stage renal disease (ESRD) and requires dialysis or transplant.",
            image:
              "https://images.unsplash.com/photo-1612776572997-76cc42e058c3?w=600&h=400&fit=crop",
            imageAlt: "CKD stages chart",
          },
          {
            mascotPose: "talking",
            mascotText:
              "Symptoms often don't appear until later stages. Watch for: persistent fatigue, changes in urination (frequency, color, foaminess), edema (swelling in legs, ankles, face), nausea, difficulty concentrating, and persistent itching. Proteinuria (protein in urine) and hematuria (blood in urine) are key lab indicators.",
            image:
              "https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?w=600&h=400&fit=crop",
            imageAlt: "Medical lab tests",
          },
          {
            mascotPose: "encouraging",
            mascotText:
              "Early detection is critical. A simple blood test measuring creatinine and a urine test for albumin can reveal kidney problems long before symptoms appear. Up to 90% of kidney disease can be prevented or slowed with early detection and lifestyle changes.",
            image:
              "https://images.unsplash.com/photo-1559757175-5700dde675bc?w=600&h=400&fit=crop",
            imageAlt: "Early detection and prevention concept",
          },
        ],
        quiz: [
          {
            question: "What does GFR measure?",
            options: [
              "Heart rate",
              "How well kidneys filter blood",
              "Blood sugar level",
              "Lung capacity",
            ],
            correctIndex: 1,
            mascotCorrect:
              "Correct! GFR (Glomerular Filtration Rate) measures how efficiently your kidneys filter blood.",
            mascotWrong:
              "GFR stands for Glomerular Filtration Rate \u2014 it measures kidney filtering efficiency.",
          },
          {
            question: "At what CKD stage is dialysis typically needed?",
            options: ["Stage 1", "Stage 3", "Stage 5", "Never"],
            correctIndex: 2,
            mascotCorrect:
              "Right! Stage 5 (ESRD) means kidneys function below 15%, requiring dialysis or transplant.",
            mascotWrong:
              "Dialysis is typically needed at Stage 5, when GFR drops below 15.",
          },
          {
            question: "What percentage of kidney disease can be prevented with early detection?",
            options: ["About 30%", "About 50%", "About 70%", "About 90%"],
            correctIndex: 3,
            mascotCorrect:
              "Yes! Up to 90% \u2014 that's why regular checkups are so important.",
            mascotWrong:
              "Up to 90% of kidney disease can be prevented or slowed. Early detection is key!",
          },
        ],
      },
    },
  },
  {
    id: 4,
    slug: "keeping-kidneys-healthy",
    free: true,
    title: "How to Keep Kidneys Healthy",
    subtitle: "Simple habits for a lifetime of kidney health",
    coverImage:
      "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=600&h=400&fit=crop",
    icon: "\ud83d\udcaa",
    color: "#45B7D1",
    ageContent: {
      younger: {
        steps: [
          {
            mascotPose: "idle",
            mascotText:
              "Want to keep me happy and healthy? It's easier than you think! Just a few simple habits every day can make your kidneys work perfectly for your whole life.",
            image:
              "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=600&h=400&fit=crop",
            imageAlt: "Happy active child",
          },
          {
            mascotPose: "talking",
            mascotText:
              "Drink plenty of water! Water helps me flush out waste and toxins. Try to drink 6\u20138 glasses of water every day. A fun trick: if your pee is light yellow, you're drinking enough!",
            image:
              "https://images.unsplash.com/photo-1548839140-29a749e1cf4d?w=600&h=400&fit=crop",
            imageAlt: "Child drinking water",
          },
          {
            mascotPose: "talking",
            mascotText:
              "Eat colorful foods! Fruits and vegetables are my best friends. Berries, apples, peppers, and leafy greens give me the nutrients I need. Try to eat less salty snacks and sugary drinks.",
            image:
              "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=600&h=400&fit=crop",
            imageAlt: "Colorful healthy fruits and vegetables",
          },
          {
            mascotPose: "talking",
            mascotText:
              "Get moving! Running, swimming, dancing, riding your bike \u2014 any exercise helps your heart pump blood to your kidneys. Even 30 minutes of play time counts!",
            image:
              "https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?w=600&h=400&fit=crop",
            imageAlt: "Children playing sports outdoors",
          },
          {
            mascotPose: "celebrating",
            mascotText:
              "Remember: drink water, eat your veggies, stay active, and don't skip checkups! Your kidneys will thank you by keeping your body clean and healthy for years and years!",
            image:
              "https://images.unsplash.com/photo-1607962837359-5e7e89f86776?w=600&h=400&fit=crop",
            imageAlt: "Happy healthy child giving thumbs up",
          },
        ],
        quiz: [
          {
            question: "How can you tell if you're drinking enough water?",
            options: [
              "Your pee is dark orange",
              "Your pee is light yellow",
              "You never need to pee",
              "Your feet hurt",
            ],
            correctIndex: 1,
            mascotCorrect:
              "Yes! Light yellow pee means you're well hydrated. Keep it up!",
            mascotWrong:
              "Light yellow pee is the sign of good hydration. Dark pee means drink more water!",
          },
          {
            question: "Which of these is best for kidney health?",
            options: [
              "Soda every day",
              "Lots of salty chips",
              "Fruits and vegetables",
              "Skipping meals",
            ],
            correctIndex: 2,
            mascotCorrect:
              "Absolutely! Fruits and veggies are kidney superfoods!",
            mascotWrong:
              "Fruits and vegetables are the best choice. They give kidneys the nutrients they love!",
          },
          {
            question: "How much exercise do you need each day to help your kidneys?",
            options: ["0 minutes", "5 minutes", "30 minutes", "5 hours"],
            correctIndex: 2,
            mascotCorrect:
              "Right! About 30 minutes of activity a day keeps your kidneys (and you!) in great shape.",
            mascotWrong:
              "About 30 minutes is perfect! It doesn't have to be hard \u2014 even playing outside counts.",
          },
        ],
      },
      older: {
        steps: [
          {
            mascotPose: "idle",
            mascotText:
              "Kidney health isn't just for adults. The habits you build now directly impact your kidney function for decades. Let's break down the science behind kidney-friendly living.",
            image:
              "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=600&h=400&fit=crop",
            imageAlt: "Teenager making healthy lifestyle choices",
          },
          {
            mascotPose: "talking",
            mascotText:
              "Hydration is critical. Water dilutes the concentration of minerals and salts that can form kidney stones. Aim for 1.5\u20132 liters daily. Avoid excessive sugary drinks \u2014 high fructose intake is linked to increased uric acid production and kidney stress.",
            image:
              "https://images.unsplash.com/photo-1548839140-29a749e1cf4d?w=600&h=400&fit=crop",
            imageAlt: "Water and hydration science",
          },
          {
            mascotPose: "talking",
            mascotText:
              "Diet matters more than you think. A diet high in sodium forces kidneys to retain water, raising blood pressure. The recommended limit is under 2,300 mg of sodium per day. Potassium-rich foods (bananas, sweet potatoes) help counterbalance sodium. Excessive protein from processed meats also strains kidneys.",
            image:
              "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=600&h=400&fit=crop",
            imageAlt: "Balanced kidney-friendly meal",
          },
          {
            mascotPose: "talking",
            mascotText:
              "Regular exercise improves cardiovascular health, which directly benefits kidney perfusion (blood flow). Aim for 150 minutes per week of moderate activity. Also important: avoid overusing NSAIDs (ibuprofen, aspirin) \u2014 they reduce blood flow to kidneys and can cause damage with chronic use.",
            image:
              "https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?w=600&h=400&fit=crop",
            imageAlt: "Teenagers exercising and staying active",
          },
          {
            mascotPose: "celebrating",
            mascotText:
              "The prevention checklist: stay hydrated, eat balanced meals low in sodium, exercise regularly, avoid smoking and excessive painkillers, maintain healthy blood pressure and blood sugar, and get annual checkups including kidney function tests. Your future self will thank you!",
            image:
              "https://images.unsplash.com/photo-1607962837359-5e7e89f86776?w=600&h=400&fit=crop",
            imageAlt: "Healthy lifestyle prevention checklist",
          },
        ],
        quiz: [
          {
            question: "What is the recommended daily sodium limit?",
            options: ["500 mg", "1,000 mg", "2,300 mg", "5,000 mg"],
            correctIndex: 2,
            mascotCorrect:
              "Correct! Under 2,300 mg daily helps keep blood pressure and kidneys healthy.",
            mascotWrong:
              "It's 2,300 mg per day. One teaspoon of salt has about 2,300 mg of sodium!",
          },
          {
            question: "Why should you avoid overusing ibuprofen?",
            options: [
              "It makes you sleepy",
              "It reduces blood flow to kidneys",
              "It causes headaches",
              "It has no side effects",
            ],
            correctIndex: 1,
            mascotCorrect:
              "Right! NSAIDs like ibuprofen reduce renal blood flow and can damage kidneys with chronic use.",
            mascotWrong:
              "NSAIDs reduce blood flow to kidneys. Occasional use is okay, but chronic use causes damage.",
          },
          {
            question: "How does potassium help kidney health?",
            options: [
              "It replaces water",
              "It counterbalances sodium's effects",
              "It makes blood thicker",
              "It has no effect",
            ],
            correctIndex: 1,
            mascotCorrect:
              "Yes! Potassium helps balance sodium, reducing pressure on kidneys.",
            mascotWrong:
              "Potassium counteracts sodium's water-retaining effect, helping kidneys maintain balance.",
          },
        ],
      },
    },
  },
  {
    id: 5,
    slug: "what-is-dialysis",
    free: true,
    title: "What Is Dialysis?",
    subtitle: "When kidneys need a helping hand",
    coverImage:
      "https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?w=600&h=400&fit=crop",
    icon: "\ud83c\udfe5",
    color: "#96CEB4",
    ageContent: {
      younger: {
        steps: [
          {
            mascotPose: "thinking",
            mascotText:
              "Sometimes kidneys get so sick that they can't do their job anymore. But don't worry \u2014 doctors have invented an amazing machine that can do what kidneys do! It's called a dialysis machine.",
            image:
              "https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?w=600&h=400&fit=crop",
            imageAlt: "Modern dialysis center",
          },
          {
            mascotPose: "talking",
            mascotText:
              "A dialysis machine works like a washing machine for your blood. Blood flows out of your body through a tube, gets cleaned inside the machine, and then flows back in. It removes all the waste and extra water that sick kidneys can't handle.",
            image:
              "https://images.unsplash.com/photo-1559757175-5700dde675bc?w=600&h=400&fit=crop",
            imageAlt: "Simple diagram of how dialysis works",
          },
          {
            mascotPose: "talking",
            mascotText:
              "People who need dialysis usually go to a special clinic 3 times a week, and each session takes about 4 hours. Some people can even do dialysis at home! They can still go to school, play with friends, and do most normal things.",
            image:
              "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&h=400&fit=crop",
            imageAlt: "Patient comfortably receiving dialysis",
          },
          {
            mascotPose: "encouraging",
            mascotText:
              "Dialysis is a real life-saver! While it takes time and can be tiring, it helps thousands of people live good lives while they wait for new kidneys. The people on dialysis are super brave!",
            image:
              "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=400&fit=crop",
            imageAlt: "Hope and strength concept",
          },
        ],
        quiz: [
          {
            question: "What does a dialysis machine do?",
            options: [
              "Makes your heart beat faster",
              "Cleans your blood like kidneys would",
              "Helps you breathe",
              "Fixes broken bones",
            ],
            correctIndex: 1,
            mascotCorrect:
              "Exactly! It does the job of kidneys by cleaning waste from your blood.",
            mascotWrong:
              "A dialysis machine cleans blood, just like healthy kidneys would. It's an amazing invention!",
          },
          {
            question: "How often do most people need dialysis?",
            options: [
              "Once a year",
              "Once a month",
              "About 3 times a week",
              "Every day for 1 minute",
            ],
            correctIndex: 2,
            mascotCorrect:
              "Right! Most people go about 3 times a week, 4 hours each time.",
            mascotWrong:
              "It's usually about 3 times a week. It takes dedication and courage!",
          },
        ],
      },
      older: {
        steps: [
          {
            mascotPose: "thinking",
            mascotText:
              "When kidneys lose over 85\u201390% of their function (Stage 5 CKD), the body can no longer maintain homeostasis on its own. Dialysis is a medical treatment that artificially performs the kidney\u2019s filtration function. There are two main types.",
            image:
              "https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?w=600&h=400&fit=crop",
            imageAlt: "Dialysis equipment in medical setting",
          },
          {
            mascotPose: "talking",
            mascotText:
              "Hemodialysis uses a machine with a special filter called a dialyzer (artificial kidney). Blood is pumped through tubes to the dialyzer, where it passes over a semipermeable membrane. Waste, toxins, and excess fluid diffuse across the membrane into a dialysis solution (dialysate) and are removed. Clean blood returns to the body.",
            image:
              "https://images.unsplash.com/photo-1559757175-5700dde675bc?w=600&h=400&fit=crop",
            imageAlt: "Hemodialysis machine diagram",
          },
          {
            mascotPose: "talking",
            mascotText:
              "Peritoneal dialysis (PD) uses the body\u2019s own peritoneum (the membrane lining the abdomen) as a natural filter. A catheter is placed in the abdomen, and dialysate fluid is infused. Waste products diffuse from blood vessels in the peritoneum into the fluid, which is then drained. PD can be done at home, even while sleeping (APD).",
            image:
              "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&h=400&fit=crop",
            imageAlt: "Peritoneal dialysis diagram",
          },
          {
            mascotPose: "talking",
            mascotText:
              "Standard hemodialysis: 3 sessions/week, 3\u20135 hours each, typically at a clinic. Peritoneal dialysis: daily, done at home. Each approach has trade-offs. HD is more efficient per session; PD offers more flexibility and independence. Diet restrictions apply to both, especially regarding potassium, phosphorus, sodium, and fluid intake.",
            image:
              "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=600&h=400&fit=crop",
            imageAlt: "Comparison of dialysis types",
          },
          {
            mascotPose: "encouraging",
            mascotText:
              "Dialysis is a bridge \u2014 it sustains life while patients wait for a transplant. With modern advances, many patients on dialysis maintain active lives, hold jobs, and participate in sports. Research is ongoing for wearable and implantable artificial kidneys that could transform treatment in the coming decade.",
            image:
              "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=400&fit=crop",
            imageAlt: "Future of kidney treatment technology",
          },
        ],
        quiz: [
          {
            question:
              "What is the semipermeable membrane in hemodialysis called?",
            options: ["Catheter", "Dialyzer", "Peritoneum", "Stent"],
            correctIndex: 1,
            mascotCorrect:
              "Correct! The dialyzer is the artificial kidney that filters blood during hemodialysis.",
            mascotWrong:
              "It's the dialyzer \u2014 also called an artificial kidney. It contains the membrane that filters blood.",
          },
          {
            question:
              "What membrane does peritoneal dialysis use as a filter?",
            options: [
              "Skin membrane",
              "Lung membrane",
              "Peritoneum (abdominal lining)",
              "Artificial plastic membrane",
            ],
            correctIndex: 2,
            mascotCorrect:
              "Yes! PD cleverly uses the body\u2019s own peritoneum as a natural dialysis membrane.",
            mascotWrong:
              "It uses the peritoneum \u2014 the natural membrane lining your abdominal cavity. Brilliant, right?",
          },
          {
            question: "What is a major advantage of peritoneal dialysis over hemodialysis?",
            options: [
              "It\u2019s faster",
              "It can be done at home",
              "It never needs to be done again",
              "It requires no equipment",
            ],
            correctIndex: 1,
            mascotCorrect:
              "Right! PD can be done at home, giving patients more flexibility and independence.",
            mascotWrong:
              "PD can be done at home \u2014 even overnight. This gives patients much more freedom in daily life.",
          },
        ],
      },
    },
  },
  {
    id: 6,
    slug: "heroes-organ-donors",
    free: true,
    title: "Heroes: Organ Donors",
    subtitle: "How organ donation saves lives",
    coverImage:
      "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=400&fit=crop",
    icon: "\u2764\ufe0f",
    color: "#C0392B",
    ageContent: {
      younger: {
        steps: [
          {
            mascotPose: "idle",
            mascotText:
              "Do you know what a hero is? A hero helps others \u2014 even when it's not easy. Some of the greatest heroes are organ donors. They share a part of themselves to save someone else's life!",
            image:
              "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=400&fit=crop",
            imageAlt: "Heart and hands symbolizing donation",
          },
          {
            mascotPose: "talking",
            mascotText:
              "When someone's kidneys stop working, they might need a new kidney from another person. This is called a kidney transplant. A healthy person can share one kidney and still be perfectly healthy \u2014 because remember, you have two!",
            image:
              "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=600&h=400&fit=crop",
            imageAlt: "Two kidneys with one being shared",
          },
          {
            mascotPose: "talking",
            mascotText:
              "Some people decide that when they pass away, their organs can be given to people who need them. One donor can save up to 8 lives! That's like being a superhero \u2014 saving a whole team of people.",
            image:
              "https://images.unsplash.com/photo-1584362917165-526a968579e8?w=600&h=400&fit=crop",
            imageAlt: "Eight lives saved infographic",
          },
          {
            mascotPose: "celebrating",
            mascotText:
              "You might be too young to be a donor right now, but you can be a hero by spreading the word! Tell your family and friends about organ donation. The more people know, the more lives can be saved.",
            image:
              "https://images.unsplash.com/photo-1607962837359-5e7e89f86776?w=600&h=400&fit=crop",
            imageAlt: "Children spreading awareness",
          },
        ],
        quiz: [
          {
            question: "How many lives can one organ donor save?",
            options: ["1", "3", "Up to 8", "100"],
            correctIndex: 2,
            mascotCorrect:
              "Amazing, right? One donor can save up to 8 lives! A true superhero.",
            mascotWrong:
              "One donor can save up to 8 lives by donating different organs. That's incredible!",
          },
          {
            question:
              "Can a living person donate a kidney?",
            options: [
              "No, never",
              "Yes, because we have two kidneys",
              "Only if they're a doctor",
              "Only children can",
            ],
            correctIndex: 1,
            mascotCorrect:
              "Yes! Since we have 2 kidneys, a healthy person can donate one and live normally.",
            mascotWrong:
              "A healthy person can donate one kidney because you only need one to live a healthy life!",
          },
        ],
      },
      older: {
        steps: [
          {
            mascotPose: "idle",
            mascotText:
              "Organ donation is one of the most profound acts of human generosity. In Spain, the ONT (Organizaci\u00f3n Nacional de Trasplantes) has created the world\u2019s most successful transplant system, with 49 donors per million people. Let's understand how it works.",
            image:
              "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=400&fit=crop",
            imageAlt: "Organ donation awareness ribbon",
          },
          {
            mascotPose: "talking",
            mascotText:
              "There are two types of kidney donation: living and deceased. Living donation is when a healthy person voluntarily donates one kidney. The donor undergoes thorough screening (blood type, tissue matching, psychological evaluation). Laparoscopic surgery means recovery takes just 2\u20134 weeks, and donors live completely normal lives with one kidney.",
            image:
              "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=600&h=400&fit=crop",
            imageAlt: "Living kidney donation process",
          },
          {
            mascotPose: "talking",
            mascotText:
              "Deceased donation occurs after brain death or circulatory death. The donor\u2019s organs are preserved and matched with recipients based on blood type, HLA (Human Leukocyte Antigen) compatibility, time on waiting list, and medical urgency. One deceased donor can provide 2 kidneys, a heart, 2 lungs, a liver, a pancreas, and intestines \u2014 saving up to 8 lives.",
            image:
              "https://images.unsplash.com/photo-1584362917165-526a968579e8?w=600&h=400&fit=crop",
            imageAlt: "Organ matching process diagram",
          },
          {
            mascotPose: "thinking",
            mascotText:
              "Common myths debunked: Doctors absolutely will try to save your life first \u2014 the transplant team is completely separate. All major religions support organ donation. Rich people don\u2019t get priority \u2014 the matching system is based on medical compatibility and urgency. You can be an organ donor at any age.",
            image:
              "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=600&h=400&fit=crop",
            imageAlt: "Myths vs facts about organ donation",
          },
          {
            mascotPose: "celebrating",
            mascotText:
              "Currently, over 100,000 people in Europe are on waiting lists for kidney transplants. The gap between supply and demand costs lives. You can make a difference: discuss donation with your family, register as a donor when you\u2019re old enough, and spread awareness. Every conversation matters.",
            image:
              "https://images.unsplash.com/photo-1607962837359-5e7e89f86776?w=600&h=400&fit=crop",
            imageAlt: "Community awareness and action",
          },
        ],
        quiz: [
          {
            question:
              "What system is used to match organs with recipients?",
            options: [
              "First come, first served",
              "Whoever pays the most",
              "Blood type, HLA compatibility, urgency, waiting time",
              "Random selection",
            ],
            correctIndex: 2,
            mascotCorrect:
              "Correct! Matching is based on medical compatibility and urgency \u2014 fair and scientific.",
            mascotWrong:
              "It\u2019s based on blood type, HLA compatibility, medical urgency, and waiting time. Completely fair.",
          },
          {
            question:
              "Which country has the highest rate of organ donors per million people?",
            options: ["USA", "Japan", "Spain", "Germany"],
            correctIndex: 2,
            mascotCorrect:
              "Yes! Spain leads the world with ~49 donors per million, thanks to the ONT system.",
            mascotWrong:
              "It\u2019s Spain! The ONT system is considered the global gold standard for organ transplantation.",
          },
          {
            question: "How long does recovery typically take for a living kidney donor?",
            options: ["1 day", "2\u20134 weeks", "6 months", "2 years"],
            correctIndex: 1,
            mascotCorrect:
              "Right! With modern laparoscopic surgery, donors recover in just 2\u20134 weeks.",
            mascotWrong:
              "Recovery takes about 2\u20134 weeks with laparoscopic surgery. Donors live completely normal lives after.",
          },
        ],
      },
    },
  },
];
