/* BrightScore Prep content catalog
   Add future tests by inserting a new object under TESTS[levelId].
   The UI, timing, scoring, and storage logic live in app.js. */
const LEVELS = {
  "primary": {
    "label": "Primary 2",
    "shortLabel": "P2",
    "subtitle": "Applying to Grade 2",
    "icon": "🌱",
    "sectionOrder": [
      "auditory",
      "reading",
      "math"
    ],
    "theme": {
      "accent": "#F97360",
      "deep": "#D94E3F",
      "light": "#FFE8E2"
    },
    "blueprint": [
      {
        "id": "auditory",
        "name": "Auditory Comprehension",
        "questions": 6,
        "minutes": 7
      },
      {
        "id": "reading",
        "name": "Reading",
        "questions": 18,
        "minutes": 20
      },
      {
        "id": "math",
        "name": "Mathematics",
        "questions": 24,
        "minutes": 26
      }
    ]
  },
  "primary3": {
    "label": "Primary 3",
    "shortLabel": "P3",
    "subtitle": "Applying to Grade 3",
    "icon": "🌿",
    "sectionOrder": [
      "reading",
      "math"
    ],
    "theme": {
      "accent": "#2F80ED",
      "deep": "#1D5FB5",
      "light": "#E4F1FF"
    },
    "blueprint": [
      {
        "id": "reading",
        "name": "Reading",
        "questions": 24,
        "minutes": 28
      },
      {
        "id": "math",
        "name": "Mathematics",
        "questions": 24,
        "minutes": 26
      }
    ]
  },
  "primary4": {
    "label": "Primary 4",
    "shortLabel": "P4",
    "subtitle": "Applying to Grade 4",
    "icon": "🌳",
    "sectionOrder": [
      "reading",
      "math"
    ],
    "theme": {
      "accent": "#F2A93B",
      "deep": "#B97511",
      "light": "#FFF1D6"
    },
    "blueprint": [
      {
        "id": "reading",
        "name": "Reading",
        "questions": 28,
        "minutes": 30
      },
      {
        "id": "math",
        "name": "Mathematics",
        "questions": 28,
        "minutes": 30
      }
    ]
  },
  "lower": {
    "label": "Lower",
    "shortLabel": "Lower",
    "subtitle": "Applying to Grades 5–6",
    "icon": "🧭",
    "sectionOrder": [
      "verbal",
      "quantitative",
      "reading",
      "mathAch",
      "essay"
    ],
    "theme": {
      "accent": "#0F9F8F",
      "deep": "#087267",
      "light": "#DDF7F2"
    },
    "blueprint": [
      {
        "id": "verbal",
        "name": "Verbal Reasoning",
        "questions": 34,
        "minutes": 20
      },
      {
        "id": "quantitative",
        "name": "Quantitative Reasoning",
        "questions": 38,
        "minutes": 35
      },
      {
        "id": "reading",
        "name": "Reading Comprehension",
        "questions": 25,
        "minutes": 25
      },
      {
        "id": "mathAch",
        "name": "Mathematics Achievement",
        "questions": 30,
        "minutes": 30
      },
      {
        "id": "essay",
        "name": "Essay",
        "questions": 1,
        "minutes": 30,
        "unscored": true
      }
    ]
  },
  "middle": {
    "label": "Middle",
    "shortLabel": "Middle",
    "subtitle": "Applying to Grades 7–8",
    "icon": "🚀",
    "sectionOrder": [
      "verbal",
      "quantitative",
      "reading",
      "mathAch",
      "essay"
    ],
    "theme": {
      "accent": "#8B5CF6",
      "deep": "#6841C6",
      "light": "#F0E9FF"
    },
    "blueprint": [
      {
        "id": "verbal",
        "name": "Verbal Reasoning",
        "questions": 40,
        "minutes": 20
      },
      {
        "id": "quantitative",
        "name": "Quantitative Reasoning",
        "questions": 37,
        "minutes": 35
      },
      {
        "id": "reading",
        "name": "Reading Comprehension",
        "questions": 36,
        "minutes": 35
      },
      {
        "id": "mathAch",
        "name": "Mathematics Achievement",
        "questions": 47,
        "minutes": 40
      },
      {
        "id": "essay",
        "name": "Essay",
        "questions": 1,
        "minutes": 30,
        "unscored": true
      }
    ]
  },
  "upper": {
    "label": "Upper",
    "shortLabel": "Upper",
    "subtitle": "Applying to Grades 9–12",
    "icon": "✨",
    "sectionOrder": [
      "verbal",
      "quantitative",
      "reading",
      "mathAch",
      "essay"
    ],
    "theme": {
      "accent": "#3E63DD",
      "deep": "#2949A8",
      "light": "#E7ECFF"
    },
    "blueprint": [
      {
        "id": "verbal",
        "name": "Verbal Reasoning",
        "questions": 40,
        "minutes": 20
      },
      {
        "id": "quantitative",
        "name": "Quantitative Reasoning",
        "questions": 37,
        "minutes": 35
      },
      {
        "id": "reading",
        "name": "Reading Comprehension",
        "questions": 36,
        "minutes": 35
      },
      {
        "id": "mathAch",
        "name": "Mathematics Achievement",
        "questions": 47,
        "minutes": 40
      },
      {
        "id": "essay",
        "name": "Essay",
        "questions": 1,
        "minutes": 30,
        "unscored": true
      }
    ]
  }
};

const LEVEL_IDS = Object.keys(LEVELS);

const TESTS = {
  "primary": {
    "practice1": {
      "label": "Practice Test #1",
      "description": "Full-length original practice for students applying to Grade 2.",
      "sections": {
        "auditory": {
          "name": "Auditory Comprehension",
          "shortName": "Auditory",
          "icon": "🎧",
          "defaultMinutes": 7,
          "instructions": [
            "Listen to or read one story, then answer 6 questions.",
            "The story stays visible while you answer.",
            "Replay the audio as many times as you need."
          ],
          "passages": [
            {
              "id": "p2-test1-auditory-passage",
              "title": "The Class Garden",
              "text": "On Friday afternoon, Mrs. Chen looked at the class garden and said, “The school will be closed for the long weekend. These plants still need water every day. I need a dependable volunteer.”\n\nMaya’s hand shot into the air. She loved the marigolds and bean plants, and she wanted to be in charge. Mrs. Chen smiled, but she did not choose Maya right away. “Caring for the garden means coming back to school on Saturday and Sunday,” she explained. “The plants cannot wait if you forget.”\n\nMaya nodded. That evening, she made a chart with one box for each day. She wrote down when she would water the plants and how much water each row needed. She asked her father whether he could drive her to school on Saturday. On Sunday, the family would walk there after breakfast. Maya even checked the weather report. Her friend Ben said rain might do the job, but Maya packed a rain jacket because she knew a forecast could change.\n\nThe next morning, Maya showed the chart to Mrs. Chen. She also demonstrated how she would measure the water. Mrs. Chen studied the plan and said, “You have thought about every day. I believe you are ready.”\n\nMaya followed her schedule all weekend. On Monday, the bean plants stood tall, and three new marigolds had opened. Mrs. Chen thanked her in front of the class. Maya’s smile stretched from ear to ear. She had not only cared for the garden; she had shown that a careful plan could turn a promise into action.",
              "questions": [
                {
                  "id": "p2t1-a-1",
                  "prompt": "What is the passage mostly about?",
                  "choices": [
                    "Maya learns how to grow marigolds from seeds.",
                    "Maya makes a careful plan so she can care for the class garden.",
                    "Mrs. Chen asks the class to build a new garden.",
                    "Ben and Maya disagree about whether it will rain."
                  ],
                  "correct": 1,
                  "explanation": "The whole passage focuses on Maya making and following a plan so she can care for the garden."
                },
                {
                  "id": "p2t1-a-2",
                  "prompt": "Which is true about Maya?",
                  "choices": [
                    "She often forgets what she promises to do.",
                    "She wants Ben to do the work for her.",
                    "She plans ahead and is willing to work hard.",
                    "She is afraid to visit the school on Saturday."
                  ],
                  "correct": 2,
                  "explanation": "Maya checks the weather, arranges transportation, and makes a schedule. These details show planning and hard work."
                },
                {
                  "id": "p2t1-a-3",
                  "prompt": "Why was Mrs. Chen unsure about choosing Maya at first?",
                  "choices": [
                    "Maya did not know the names of the flowers.",
                    "The garden was too far from Maya’s house.",
                    "Mrs. Chen wanted Ben to do the job instead.",
                    "The plants needed dependable care every day."
                  ],
                  "correct": 3,
                  "explanation": "Mrs. Chen explains that the plants need water every day and cannot wait if Maya forgets."
                },
                {
                  "id": "p2t1-a-4",
                  "prompt": "Why did Maya show Mrs. Chen her chart?",
                  "choices": [
                    "She wanted to prove that she had a responsible plan.",
                    "She wanted to teach the class how to draw a chart.",
                    "She wanted to count how many flowers were blooming.",
                    "She wanted permission to take the plants home."
                  ],
                  "correct": 0,
                  "explanation": "The chart shows exactly when and how Maya will care for the plants, proving that she has a responsible plan."
                },
                {
                  "id": "p2t1-a-5",
                  "prompt": "Maya’s smile “stretched from ear to ear.” What does that mean?",
                  "choices": [
                    "She was trying not to laugh.",
                    "She was surprised by a loud sound.",
                    "She had a very big, happy smile.",
                    "She was tired from carrying water."
                  ],
                  "correct": 2,
                  "explanation": "A smile that stretches from ear to ear is a very large, happy smile."
                },
                {
                  "id": "p2t1-a-6",
                  "prompt": "Based on the passage, which is true about Mrs. Chen?",
                  "choices": [
                    "She was willing to trust Maya after seeing her careful plan.",
                    "She did not want any student to help with the garden.",
                    "She thought the flowers needed too much water.",
                    "She planned to remove the garden after the weekend."
                  ],
                  "correct": 0,
                  "explanation": "Mrs. Chen chooses Maya after she sees that Maya has carefully planned the work."
                }
              ]
            }
          ]
        },
        "reading": {
          "name": "Reading",
          "shortName": "Reading",
          "icon": "📖",
          "defaultMinutes": 20,
          "instructions": [
            "Read three passages and answer 18 questions.",
            "You may look back at each passage while answering.",
            "Choose the best answer for every question."
          ],
          "passages": [
            {
              "id": "p2-test1-reading-1",
              "title": "Sea Otters: Floating and Finding Food",
              "text": "Sea otters spend much of their lives in the ocean. They can swim and dive, but they also rest on the water’s surface. A group of resting sea otters is sometimes called a raft because the animals float close together, almost like a small raft made of boats. Some otters even hold paws so they do not drift apart while they sleep.\n\nUnlike seals and whales, sea otters do not have a thick layer of fat to keep them warm. Instead, they have extremely dense fur. Dense means that many hairs grow close together. Air gets trapped between the hairs and helps keep cold ocean water away from the otter’s skin. Sea otters spend a lot of time cleaning and fluffing their fur so it continues to protect them.\n\nSea otters are also skillful hunters. Their sensitive whiskers help them feel tiny movements in dark or cloudy water. They eat animals such as clams, crabs, and sea urchins. Sometimes an otter carries a stone on its belly and uses it like a tool to crack open a hard shell.\n\nSea otters do more than look playful. By eating sea urchins, they help protect underwater forests of kelp. Too many sea urchins can eat large amounts of kelp. When otters keep the number of urchins under control, fish and other ocean animals have more places to live. Scientists continue to study the important part sea otters play in ocean habitats.",
              "questions": [
                {
                  "id": "p2t1-r-1-1",
                  "prompt": "What is the main idea of the passage?",
                  "choices": [
                    "Sea otters sleep all day and hunt only at night.",
                    "Sea otters are the only ocean animals that use tools.",
                    "Sea otters have thick fat that keeps them warm in cold water.",
                    "Sea otters have special features and behaviors that help them live in the ocean and support their habitat."
                  ],
                  "correct": 3,
                  "explanation": "The passage describes sea otters’ fur, whiskers, tools, group behavior, and role in the ocean habitat."
                },
                {
                  "id": "p2t1-r-1-2",
                  "prompt": "Why is a group of resting sea otters sometimes called a “raft”?",
                  "choices": [
                    "The otters build a wooden raft to sleep on.",
                    "The otters float close together like a group of small boats.",
                    "The otters travel down rivers to reach the ocean.",
                    "The otters carry stones that look like tiny rafts."
                  ],
                  "correct": 1,
                  "explanation": "The otters float close together, which makes the group look like a raft made of small boats."
                },
                {
                  "id": "p2t1-r-1-3",
                  "prompt": "According to the passage, what do an otter’s whiskers help it do?",
                  "choices": [
                    "Feel small movements in the water.",
                    "Keep its body warm.",
                    "Crack open hard shells.",
                    "Hold another otter’s paw."
                  ],
                  "correct": 0,
                  "explanation": "The passage says sensitive whiskers help otters feel tiny movements in dark or cloudy water."
                },
                {
                  "id": "p2t1-r-1-4",
                  "prompt": "How does a sea otter’s fur help it stay warm?",
                  "choices": [
                    "The fur makes the otter swim faster.",
                    "The fur changes color in cold water.",
                    "Air trapped in the thick fur helps keep water away from its skin.",
                    "The fur grows into a layer of fat during winter."
                  ],
                  "correct": 2,
                  "explanation": "Air trapped inside dense fur helps keep cold water away from the otter’s skin."
                },
                {
                  "id": "p2t1-r-1-5",
                  "prompt": "In the passage, what does “dense” most nearly mean?",
                  "choices": [
                    "Wet and shiny.",
                    "Thick and closely packed.",
                    "Soft and colorful.",
                    "Long and tangled."
                  ],
                  "correct": 1,
                  "explanation": "The passage explains that dense fur has many hairs growing close together."
                },
                {
                  "id": "p2t1-r-1-6",
                  "prompt": "What is the purpose of the last paragraph?",
                  "choices": [
                    "To explain why sea otters are difficult to see.",
                    "To tell readers how to grow kelp at home.",
                    "To compare sea otters with seals and whales.",
                    "To explain how sea otters help other living things in the ocean."
                  ],
                  "correct": 3,
                  "explanation": "The last paragraph explains how otters protect kelp forests and help other ocean animals."
                }
              ]
            },
            {
              "id": "p2-test1-reading-2",
              "title": "The Crooked Kite",
              "text": "Darius wanted to build a kite for the spring festival. He found two thin sticks, bright blue paper, tape, and a long piece of string. He rushed through the work because he wanted to be the first person at the park. When he lifted the kite, one corner folded over and the kite fell to the ground.\n\nDarius felt disappointed, but his grandfather asked, “What did the kite teach you?” Darius looked closely and noticed that the paper was too loose. He carefully stretched a new sheet across the sticks and taped each edge. This time the kite rose into the air, but it spun in fast circles and soon crashed again.\n\nAfter watching another kite, Darius realized that his own kite needed a longer tail. He tied several strips of cloth to the bottom. The tail helped the kite balance, but a strong wind bent one of the thin sticks. For his final try, Darius replaced the sticks with sturdier ones that would not bend so easily.\n\nAt the festival, the blue kite climbed higher than the trees. Darius did not win the prize for finishing first. Instead, he won a ribbon for the kite that stayed in the air the longest. As he held the ribbon, he understood his grandfather’s question. Each mistake had been like a clue, pointing him toward a better design.",
              "questions": [
                {
                  "id": "p2t1-r-2-7",
                  "prompt": "What is this passage mostly about?",
                  "choices": [
                    "Darius learns that careful changes after mistakes can help him improve his kite.",
                    "Darius’s grandfather builds a kite that wins the spring festival.",
                    "The spring festival gives prizes only to the fastest kite builders.",
                    "A strong wind ruins every kite at the park."
                  ],
                  "correct": 0,
                  "explanation": "Darius learns from each failed attempt and uses what he learns to improve the kite."
                },
                {
                  "id": "p2t1-r-2-8",
                  "prompt": "Which happened first?",
                  "choices": [
                    "Darius added a longer tail.",
                    "One corner of the first kite folded over.",
                    "Darius won a ribbon.",
                    "Darius replaced the thin sticks."
                  ],
                  "correct": 1,
                  "explanation": "The first problem described is a folded corner on the first kite."
                },
                {
                  "id": "p2t1-r-2-9",
                  "prompt": "Why did the second kite spin in circles?",
                  "choices": [
                    "Its paper was too loose.",
                    "Its string was too short.",
                    "It needed a longer tail to help it balance.",
                    "It was made from paper that was too heavy."
                  ],
                  "correct": 2,
                  "explanation": "Darius notices that a longer tail is needed to help the kite balance."
                },
                {
                  "id": "p2t1-r-2-10",
                  "prompt": "In the passage, what does “sturdier” mean?",
                  "choices": [
                    "Stronger and less likely to bend.",
                    "Brighter and more colorful.",
                    "Longer and easier to carry.",
                    "Softer and easier to cut."
                  ],
                  "correct": 0,
                  "explanation": "Sturdier sticks are stronger and do not bend as easily."
                },
                {
                  "id": "p2t1-r-2-11",
                  "prompt": "Why does the author say that each mistake was “like a clue”?",
                  "choices": [
                    "The mistakes told Darius where the festival was held.",
                    "The mistakes showed Darius that kites should be blue.",
                    "Each mistake helped Darius understand what to fix next.",
                    "Each mistake helped Darius find his missing tools."
                  ],
                  "correct": 2,
                  "explanation": "Each mistake points to the next part of the kite that needs to be fixed."
                },
                {
                  "id": "p2t1-r-2-12",
                  "prompt": "What is the most likely reason the author wrote this story?",
                  "choices": [
                    "To show that mistakes can help people learn and improve.",
                    "To teach the exact steps for making every kind of kite.",
                    "To prove that winning a ribbon is more important than having fun.",
                    "To warn children not to fly kites when it is windy."
                  ],
                  "correct": 0,
                  "explanation": "The story’s lesson is that mistakes can provide useful information and lead to improvement."
                }
              ]
            },
            {
              "id": "p2-test1-reading-3",
              "title": "Practice Biography: Nia Santos",
              "text": "Nia Santos loved making pictures from the time she was young. She collected scraps of wrapping paper, ticket stubs, and old maps. Instead of throwing them away, she cut the pieces into shapes and arranged them into animals, houses, and imaginary lands. The layers of paper gave her artwork a textured look that people could recognize right away.\n\nNia was born in a small town near the ocean. When she was twelve, her family moved to a busy city. At first, she missed the waves and quiet beaches. She began creating pictures of sea turtles, boats, and shells to remember her old home. Years later, she studied art and became a designer for a children’s museum.\n\nOne day, a librarian saw a poster Nia had made for the museum. The librarian liked the bold shapes and tiny details. She asked Nia to illustrate a story about a child who explores an underwater city. Nia had never illustrated a book before, but she accepted the challenge. She spent weeks cutting, arranging, and gluing hundreds of paper pieces.\n\nThe book became popular with young readers. After that, Nia began writing and illustrating stories of her own. During her career, she created more than forty books. Children enjoyed searching her detailed pictures for hidden objects, and teachers often used her art to inspire classroom projects. Nia’s recognizable paper style turned ordinary scraps into worlds full of adventure.",
              "questions": [
                {
                  "id": "p2t1-r-3-13",
                  "prompt": "What is the main idea of the passage?",
                  "choices": [
                    "Nia preferred living in a small town near the ocean.",
                    "A librarian taught Nia how to cut and glue paper.",
                    "Nia became a children’s author and illustrator known for her special paper artwork.",
                    "Children’s museums are the best places for artists to work."
                  ],
                  "correct": 2,
                  "explanation": "The passage explains Nia’s paper art style and how she became a successful children’s book creator."
                },
                {
                  "id": "p2t1-r-3-14",
                  "prompt": "After Nia cut paper into shapes, what did she do next?",
                  "choices": [
                    "She painted the pieces blue.",
                    "She mailed the pieces to a library.",
                    "She threw away the pieces she did not use.",
                    "She arranged the shapes to create pictures."
                  ],
                  "correct": 3,
                  "explanation": "The first paragraph says she cut the paper and then arranged the shapes into pictures."
                },
                {
                  "id": "p2t1-r-3-15",
                  "prompt": "Why did the librarian ask Nia to illustrate a book?",
                  "choices": [
                    "The librarian had known Nia since she was a child.",
                    "The librarian liked the style of a poster Nia had created.",
                    "The librarian needed someone who lived near the ocean.",
                    "The librarian wanted Nia to teach at the museum."
                  ],
                  "correct": 1,
                  "explanation": "The librarian noticed and liked the style of Nia’s museum poster."
                },
                {
                  "id": "p2t1-r-3-16",
                  "prompt": "What is the purpose of the second paragraph?",
                  "choices": [
                    "To explain how to make art from old maps.",
                    "To describe every job Nia had at the museum.",
                    "To give background about Nia’s childhood and early path as an artist.",
                    "To persuade readers to move from a small town to a city."
                  ],
                  "correct": 2,
                  "explanation": "The second paragraph gives childhood and early-career information that explains Nia’s path as an artist."
                },
                {
                  "id": "p2t1-r-3-17",
                  "prompt": "In the passage, what does “recognizable” most nearly mean?",
                  "choices": [
                    "Easy to identify or know.",
                    "Difficult to finish.",
                    "Made only for children.",
                    "Hidden from view."
                  ],
                  "correct": 0,
                  "explanation": "Recognizable means easy to identify because it has a familiar or special look."
                },
                {
                  "id": "p2t1-r-3-18",
                  "prompt": "What is the most likely reason the author wrote this passage?",
                  "choices": [
                    "To explain why all book illustrations should be made from paper.",
                    "To compare life near the ocean with life in a city.",
                    "To teach readers how to become museum designers.",
                    "To explain how Nia developed her unusual art style and became a successful book creator."
                  ],
                  "correct": 3,
                  "explanation": "The passage explains both how Nia’s style developed and how she became known for books."
                }
              ]
            }
          ]
        },
        "math": {
          "name": "Mathematics",
          "shortName": "Math",
          "icon": "➗",
          "defaultMinutes": 26,
          "instructions": [
            "Answer 24 questions.",
            "Use scratch paper when helpful.",
            "No calculator is needed."
          ],
          "questions": [
            {
              "id": "p2t1-m-1",
              "prompt": "The table shows the number of books read by a class on five days. Which two days combined have a total of 14 books?",
              "choices": [
                "Monday and Tuesday",
                "Tuesday and Thursday",
                "Wednesday and Friday",
                "Monday and Thursday"
              ],
              "correct": 1,
              "explanation": "Tuesday has 8 books and Thursday has 6. 8 + 6 = 14.",
              "figure": {
                "type": "html",
                "html": "<div class=\"mini-table\"><div class=\"head\">Day</div><div>Monday</div><div>Tuesday</div><div>Wednesday</div><div>Thursday</div><div>Friday</div><div class=\"head\">Books</div><div>5</div><div>8</div><div>11</div><div>6</div><div>9</div></div>"
              }
            },
            {
              "id": "p2t1-m-2",
              "prompt": "Some numbers are put in a pattern in the grid. What number belongs in the box with the question mark?",
              "choices": [
                "15",
                "16",
                "17",
                "19"
              ],
              "correct": 1,
              "explanation": "The numbers increase by 2: 14, 16, 18.",
              "figure": {
                "type": "html",
                "html": "<div class=\"number-grid\"><span>2</span><span>4</span><span>6</span><span>8</span><span>10</span><span>12</span><span>14</span><span class=\"mystery\">?</span><span>18</span><span>20</span><span>22</span><span>24</span></div>"
              }
            },
            {
              "id": "p2t1-m-3",
              "prompt": "A gray coin is worth 10. A white coin is worth 1. Which group of coins has a value of 43?",
              "choices": [
                {
                  "html": "<div class=\"coin-row\"><span class=\"coin ten-coin\">10</span><span class=\"coin ten-coin\">10</span><span class=\"coin ten-coin\">10</span><span class=\"coin ten-coin\">10</span><span class=\"coin one-coin\">1</span><span class=\"coin one-coin\">1</span><span class=\"coin one-coin\">1</span></div>"
                },
                {
                  "html": "<div class=\"coin-row\"><span class=\"coin ten-coin\">10</span><span class=\"coin ten-coin\">10</span><span class=\"coin ten-coin\">10</span><span class=\"coin one-coin\">1</span><span class=\"coin one-coin\">1</span><span class=\"coin one-coin\">1</span><span class=\"coin one-coin\">1</span></div>"
                },
                {
                  "html": "<div class=\"coin-row\"><span class=\"coin ten-coin\">10</span><span class=\"coin ten-coin\">10</span><span class=\"coin ten-coin\">10</span><span class=\"coin ten-coin\">10</span><span class=\"coin ten-coin\">10</span><span class=\"coin one-coin\">1</span><span class=\"coin one-coin\">1</span></div>"
                },
                {
                  "html": "<div class=\"coin-row\"><span class=\"coin ten-coin\">10</span><span class=\"coin ten-coin\">10</span><span class=\"coin one-coin\">1</span><span class=\"coin one-coin\">1</span><span class=\"coin one-coin\">1</span><span class=\"coin one-coin\">1</span><span class=\"coin one-coin\">1</span><span class=\"coin one-coin\">1</span><span class=\"coin one-coin\">1</span><span class=\"coin one-coin\">1</span><span class=\"coin one-coin\">1</span><span class=\"coin one-coin\">1</span><span class=\"coin one-coin\">1</span><span class=\"coin one-coin\">1</span><span class=\"coin one-coin\">1</span></div>"
                }
              ],
              "correct": 0,
              "explanation": "Four tens and three ones make 43."
            },
            {
              "id": "p2t1-m-4",
              "prompt": "Which number sentence has the same value as 8 + 7?",
              "choices": [
                "9 + 6",
                "10 + 4",
                "7 + 7",
                "6 + 8"
              ],
              "correct": 0,
              "explanation": "8 + 7 = 15, and 9 + 6 also equals 15."
            },
            {
              "id": "p2t1-m-5",
              "prompt": "The picture shows 12 children at a playground. One-third of the children go to the swings. The rest go to the slide. How many children go to the slide?",
              "choices": [
                "4",
                "6",
                "8",
                "9"
              ],
              "correct": 2,
              "explanation": "One-third of 12 is 4. The remaining 12 − 4 = 8 children go to the slide.",
              "figure": {
                "type": "html",
                "html": "<div class=\"icon-row kids\"><span>●</span><span>●</span><span>●</span><span>●</span><span>●</span><span>●</span><span>●</span><span>●</span><span>●</span><span>●</span><span>●</span><span>●</span></div><div class=\"visual-caption\">12 children</div>"
              }
            },
            {
              "id": "p2t1-m-6",
              "prompt": "Victor wants to measure how heavy his backpack is. Which tool should he use?",
              "choices": [
                {
                  "html": "<div class=\"tool-choice\"><span>📏</span><b>ruler</b></div>"
                },
                {
                  "html": "<div class=\"tool-choice\"><span>⚖️</span><b>scale</b></div>"
                },
                {
                  "html": "<div class=\"tool-choice\"><span>🌡️</span><b>thermometer</b></div>"
                },
                {
                  "html": "<div class=\"tool-choice\"><span>🕒</span><b>clock</b></div>"
                }
              ],
              "correct": 1,
              "explanation": "A scale measures how heavy something is."
            },
            {
              "id": "p2t1-m-7",
              "prompt": "The graph shows how many stickers four students have. Which statement is true?",
              "choices": [
                "Ana has 7 stickers.",
                "Brooke has an odd number of stickers.",
                "Cara has the fewest stickers.",
                "Dani has the most stickers."
              ],
              "correct": 2,
              "explanation": "Cara has 3 stickers, fewer than Ana, Brooke, or Dani.",
              "figure": {
                "type": "html",
                "html": "<div class=\"bar-chart\" aria-label=\"Number of stickers\"><div class=\"bar-col\"><div class=\"bar\" style=\"height:50%\"><b>5</b></div><span>Ana</span></div><div class=\"bar-col\"><div class=\"bar\" style=\"height:80%\"><b>8</b></div><span>Brooke</span></div><div class=\"bar-col\"><div class=\"bar\" style=\"height:30%\"><b>3</b></div><span>Cara</span></div><div class=\"bar-col\"><div class=\"bar\" style=\"height:60%\"><b>6</b></div><span>Dani</span></div></div>"
              }
            },
            {
              "id": "p2t1-m-8",
              "prompt": "The picture shows a cone and a cylinder. How are these two shapes alike?",
              "choices": [
                "They both have a corner.",
                "They both have only one face.",
                "They both have a circle for a base.",
                "They both have a triangle-shaped face."
              ],
              "correct": 2,
              "explanation": "A cone and a cylinder both have a circular base.",
              "figure": {
                "type": "html",
                "html": "<div class=\"shape-pair\"><svg viewBox=\"0 0 320 160\" role=\"img\" aria-label=\"A cone and a cylinder\"><ellipse cx=\"75\" cy=\"120\" rx=\"50\" ry=\"16\" fill=\"#e8eef8\" stroke=\"#344054\" stroke-width=\"3\"/><path d=\"M25 120 L75 28 L125 120\" fill=\"#f6f8fc\" stroke=\"#344054\" stroke-width=\"3\"/><text x=\"75\" y=\"151\" text-anchor=\"middle\">cone</text><ellipse cx=\"235\" cy=\"42\" rx=\"45\" ry=\"15\" fill=\"#e8eef8\" stroke=\"#344054\" stroke-width=\"3\"/><path d=\"M190 42 V118 M280 42 V118\" stroke=\"#344054\" stroke-width=\"3\"/><ellipse cx=\"235\" cy=\"118\" rx=\"45\" ry=\"15\" fill=\"#f6f8fc\" stroke=\"#344054\" stroke-width=\"3\"/><text x=\"235\" y=\"151\" text-anchor=\"middle\">cylinder</text></svg></div>"
              }
            },
            {
              "id": "p2t1-m-9",
              "prompt": "Three friends want to share cherries equally. Which group can be divided so that everyone gets the same number of whole cherries?",
              "choices": [
                {
                  "html": "<div class=\"cherry-row\"><span class=\"single-cherry\"></span><span class=\"single-cherry\"></span><span class=\"single-cherry\"></span><span class=\"single-cherry\"></span><span class=\"single-cherry\"></span><span class=\"single-cherry\"></span><span class=\"single-cherry\"></span><span class=\"single-cherry\"></span><span class=\"single-cherry\"></span><span class=\"single-cherry\"></span><span class=\"single-cherry\"></span><span class=\"single-cherry\"></span><small>12 cherries</small></div>"
                },
                {
                  "html": "<div class=\"cherry-row\"><span class=\"single-cherry\"></span><span class=\"single-cherry\"></span><span class=\"single-cherry\"></span><span class=\"single-cherry\"></span><span class=\"single-cherry\"></span><span class=\"single-cherry\"></span><span class=\"single-cherry\"></span><span class=\"single-cherry\"></span><span class=\"single-cherry\"></span><span class=\"single-cherry\"></span><small>10 cherries</small></div>"
                },
                {
                  "html": "<div class=\"cherry-row\"><span class=\"single-cherry\"></span><span class=\"single-cherry\"></span><span class=\"single-cherry\"></span><span class=\"single-cherry\"></span><span class=\"single-cherry\"></span><span class=\"single-cherry\"></span><span class=\"single-cherry\"></span><span class=\"single-cherry\"></span><small>8 cherries</small></div>"
                },
                {
                  "html": "<div class=\"cherry-row\"><span class=\"single-cherry\"></span><span class=\"single-cherry\"></span><span class=\"single-cherry\"></span><span class=\"single-cherry\"></span><span class=\"single-cherry\"></span><span class=\"single-cherry\"></span><span class=\"single-cherry\"></span><span class=\"single-cherry\"></span><span class=\"single-cherry\"></span><span class=\"single-cherry\"></span><span class=\"single-cherry\"></span><small>11 cherries</small></div>"
                }
              ],
              "correct": 0,
              "explanation": "12 can be divided equally among 3 friends. Each friend gets 4 cherries."
            },
            {
              "id": "p2t1-m-10",
              "prompt": "How many legs do a horse, a duck, and a fish have altogether?",
              "choices": [
                "4",
                "5",
                "6",
                "8"
              ],
              "correct": 2,
              "explanation": "A horse has 4 legs, a duck has 2, and a fish has 0. 4 + 2 + 0 = 6."
            },
            {
              "id": "p2t1-m-11",
              "prompt": "Jamal made an ABBA pattern using numbers. Which could be Jamal’s pattern?",
              "choices": [
                "2, 5, 2, 5, 2, 5, 2, 5",
                "3, 7, 7, 3, 3, 7, 7, 3",
                "1, 2, 3, 4, 1, 2, 3, 4",
                "8, 6, 4, 8, 6, 4, 8, 6"
              ],
              "correct": 1,
              "explanation": "ABBA repeats as first, second, second, first: 3, 7, 7, 3."
            },
            {
              "id": "p2t1-m-12",
              "prompt": "Four friends counted how many baskets they made. How many more baskets did Chloe make than Ben?",
              "choices": [
                "3",
                "4",
                "5",
                "6"
              ],
              "correct": 3,
              "explanation": "Chloe made 9 baskets and Ben made 3. 9 − 3 = 6.",
              "figure": {
                "type": "html",
                "html": "<div class=\"bar-chart\" aria-label=\"Baskets made\"><div class=\"bar-col\"><div class=\"bar\" style=\"height:70%\"><b>7</b></div><span>Ava</span></div><div class=\"bar-col\"><div class=\"bar\" style=\"height:30%\"><b>3</b></div><span>Ben</span></div><div class=\"bar-col\"><div class=\"bar\" style=\"height:90%\"><b>9</b></div><span>Chloe</span></div><div class=\"bar-col\"><div class=\"bar\" style=\"height:60%\"><b>6</b></div><span>Diego</span></div></div>"
              }
            },
            {
              "id": "p2t1-m-13",
              "prompt": "Rachel wants to measure how much water can fit in her bottle. Which tool is best to use?",
              "choices": [
                "scale",
                "thermometer",
                "measuring cup",
                "measuring tape"
              ],
              "correct": 2,
              "explanation": "A measuring cup measures liquid capacity."
            },
            {
              "id": "p2t1-m-14",
              "prompt": "Four bags hold different numbers of markers. Nora wants to keep two bags that contain exactly 14 markers altogether. Which two bags should she keep?",
              "choices": [
                "green and blue",
                "white and pink",
                "white and green",
                "green and pink"
              ],
              "correct": 1,
              "explanation": "The white bag has 5 and the pink bag has 9. 5 + 9 = 14.",
              "figure": {
                "type": "html",
                "html": "<div class=\"mini-table four\"><div class=\"head\">White</div><div class=\"head\">Green</div><div class=\"head\">Pink</div><div class=\"head\">Blue</div><div>5 markers</div><div>7 markers</div><div>9 markers</div><div>4 markers</div></div>"
              }
            },
            {
              "id": "p2t1-m-15",
              "prompt": "What number is shown by the base-ten blocks?",
              "choices": [
                "326",
                "236",
                "306",
                "362"
              ],
              "correct": 0,
              "explanation": "There are 3 hundreds, 2 tens, and 6 ones: 326.",
              "figure": {
                "type": "html",
                "html": "<div class=\"base-ten\" aria-label=\"3 hundreds, 2 tens, and 6 ones\"><div class=\"hundreds\"><span class=\"hundred\"></span><span class=\"hundred\"></span><span class=\"hundred\"></span></div><div class=\"tens\"><span class=\"ten\"></span><span class=\"ten\"></span></div><div class=\"ones\"><span class=\"one\"></span><span class=\"one\"></span><span class=\"one\"></span><span class=\"one\"></span><span class=\"one\"></span><span class=\"one\"></span></div></div>"
              }
            },
            {
              "id": "p2t1-m-16",
              "prompt": "Three pieces are already inside the square. Which piece is missing to complete the square?",
              "choices": [
                {
                  "html": "<div class=\"shape-choice\"><svg viewBox=\"0 0 90 60\"><circle cx=\"45\" cy=\"30\" r=\"22\" fill=\"#d9e3f6\" stroke=\"#344054\" stroke-width=\"3\"/></svg></div>"
                },
                {
                  "html": "<div class=\"shape-choice\"><svg viewBox=\"0 0 90 60\"><rect x=\"18\" y=\"15\" width=\"54\" height=\"30\" fill=\"#d9e3f6\" stroke=\"#344054\" stroke-width=\"3\"/></svg></div>"
                },
                {
                  "html": "<div class=\"shape-choice\"><svg viewBox=\"0 0 90 60\"><path d=\"M45 8 L78 50 L12 50 Z\" fill=\"#d9e3f6\" stroke=\"#344054\" stroke-width=\"3\"/></svg></div>"
                },
                {
                  "html": "<div class=\"shape-choice\"><svg viewBox=\"0 0 90 60\"><path d=\"M15 10 L75 50 L15 50 Z\" fill=\"#d9e3f6\" stroke=\"#344054\" stroke-width=\"3\"/></svg></div>"
                }
              ],
              "correct": 3,
              "explanation": "The open space is a right triangle with the matching orientation.",
              "figure": {
                "type": "html",
                "html": "<div class=\"svg-wrap\"><svg viewBox=\"0 0 260 190\" role=\"img\" aria-label=\"A square puzzle with a triangular piece missing\"><rect x=\"35\" y=\"15\" width=\"160\" height=\"160\" fill=\"white\" stroke=\"#344054\" stroke-width=\"4\"/><path d=\"M35 15 L195 15 L115 95 Z\" fill=\"#cddaf2\" stroke=\"#344054\" stroke-width=\"2\"/><path d=\"M35 15 L115 95 L35 175 Z\" fill=\"#e7edf8\" stroke=\"#344054\" stroke-width=\"2\"/><path d=\"M35 175 L115 95 L195 175 Z\" fill=\"#b8c9e8\" stroke=\"#344054\" stroke-width=\"2\"/><path d=\"M195 15 L195 175 L115 95 Z\" fill=\"white\" stroke=\"#d92d20\" stroke-width=\"3\" stroke-dasharray=\"7 5\"/><text x=\"215\" y=\"98\" font-size=\"14\" fill=\"#d92d20\">missing</text></svg></div>"
              }
            },
            {
              "id": "p2t1-m-17",
              "prompt": "Maya has 24 beads. She gives 7 beads to her brother. Then her friend gives her 5 beads. How many beads does Maya have now?",
              "choices": [
                "12",
                "17",
                "22",
                "36"
              ],
              "correct": 2,
              "explanation": "24 − 7 + 5 = 17 + 5 = 22."
            },
            {
              "id": "p2t1-m-18",
              "prompt": "The shape is flipped across the dotted vertical line. Which option shows the correct reflection?",
              "choices": [
                {
                  "html": "<div class=\"shape-choice\"><svg viewBox=\"0 0 90 60\"><path d=\"M12 20 H50 V8 L78 30 L50 52 V40 H12 Z\" fill=\"#c6d5ef\" stroke=\"#344054\" stroke-width=\"3\"/></svg></div>"
                },
                {
                  "html": "<div class=\"shape-choice\"><svg viewBox=\"0 0 90 60\"><path d=\"M78 20 H40 V8 L12 30 L40 52 V40 H78 Z\" fill=\"#c6d5ef\" stroke=\"#344054\" stroke-width=\"3\"/></svg></div>"
                },
                {
                  "html": "<div class=\"shape-choice\"><svg viewBox=\"0 0 90 60\"><path d=\"M35 52 V30 H20 L45 7 L70 30 H55 V52 Z\" fill=\"#c6d5ef\" stroke=\"#344054\" stroke-width=\"3\"/></svg></div>"
                },
                {
                  "html": "<div class=\"shape-choice\"><svg viewBox=\"0 0 90 60\"><path d=\"M35 8 V30 H20 L45 53 L70 30 H55 V8 Z\" fill=\"#c6d5ef\" stroke=\"#344054\" stroke-width=\"3\"/></svg></div>"
                }
              ],
              "correct": 1,
              "explanation": "A vertical reflection makes the right-pointing arrow face left on the other side of the line.",
              "figure": {
                "type": "html",
                "html": "<div class=\"svg-wrap\"><svg viewBox=\"0 0 420 180\" role=\"img\" aria-label=\"Arrow shape reflected across a vertical line\"><line x1=\"210\" y1=\"10\" x2=\"210\" y2=\"170\" stroke=\"#667085\" stroke-width=\"3\" stroke-dasharray=\"7 7\"/><path d=\"M55 58 H120 V35 L175 90 L120 145 V122 H55 Z\" fill=\"#bfd0ee\" stroke=\"#344054\" stroke-width=\"3\"/><text x=\"95\" y=\"165\" font-size=\"14\">original</text><text x=\"222\" y=\"25\" font-size=\"13\">flip across this line</text></svg></div>"
              }
            },
            {
              "id": "p2t1-m-19",
              "prompt": "The top half of a design is shown above the dotted line. Which option shows the bottom half after the design is flipped over the line?",
              "choices": [
                {
                  "html": "<div class=\"shape-choice wide\"><svg viewBox=\"0 0 180 75\"><path d=\"M10 10 Q35 70 60 10 Q85 70 110 10 Q135 70 160 10\" fill=\"none\" stroke=\"#344054\" stroke-width=\"6\"/></svg></div>"
                },
                {
                  "html": "<div class=\"shape-choice wide\"><svg viewBox=\"0 0 180 75\"><path d=\"M10 60 Q35 0 60 60 Q85 0 110 60 Q135 0 160 60\" fill=\"none\" stroke=\"#344054\" stroke-width=\"6\"/></svg></div>"
                },
                {
                  "html": "<div class=\"shape-choice wide\"><svg viewBox=\"0 0 180 75\"><path d=\"M20 10 Q45 70 70 10 Q95 70 120 10\" fill=\"none\" stroke=\"#344054\" stroke-width=\"6\"/></svg></div>"
                },
                {
                  "html": "<div class=\"shape-choice wide\"><svg viewBox=\"0 0 180 75\"><path d=\"M10 15 L45 55 L80 15 L115 55 L150 15\" fill=\"none\" stroke=\"#344054\" stroke-width=\"6\"/></svg></div>"
                }
              ],
              "correct": 0,
              "explanation": "The correct answer is the exact upside-down reflection directly below the line.",
              "figure": {
                "type": "html",
                "html": "<div class=\"svg-wrap\"><svg viewBox=\"0 0 420 190\" role=\"img\" aria-label=\"Top half of a design above a horizontal line\"><line x1=\"20\" y1=\"105\" x2=\"400\" y2=\"105\" stroke=\"#667085\" stroke-width=\"3\" stroke-dasharray=\"7 7\"/><path d=\"M120 95 Q145 35 170 95 Q195 35 220 95 Q245 35 270 95\" fill=\"none\" stroke=\"#344054\" stroke-width=\"6\"/><circle cx=\"155\" cy=\"63\" r=\"6\" fill=\"#344054\"/><circle cx=\"235\" cy=\"63\" r=\"6\" fill=\"#344054\"/><text x=\"25\" y=\"96\" font-size=\"14\">top half</text></svg></div>"
              }
            },
            {
              "id": "p2t1-m-20",
              "prompt": "Lila arranged 9 buttons in a square. Omar arranged 12 buttons in a rectangle. Omar gives away 4 buttons. Which number sentence shows how many buttons they have left altogether?",
              "choices": [
                "9 + 12 = 21",
                "12 − 9 − 4 = −1",
                "9 + 12 − 4 = 17",
                "9 + 12 + 4 = 25"
              ],
              "correct": 2,
              "explanation": "Start with all 9 + 12 buttons, then subtract the 4 Omar gives away.",
              "figure": {
                "type": "html",
                "html": "<div class=\"array-pair\"><div><div class=\"array square3\"><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span></div><b>Lila: 9</b></div><div><div class=\"array rect4\"><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span></div><b>Omar: 12, then gives away 4</b></div></div>"
              }
            },
            {
              "id": "p2t1-m-21",
              "prompt": "A blue gem is worth $4. A pink gem is worth $2. Which group is worth the most?",
              "choices": [
                {
                  "html": "<div class=\"gem-row\"><span class=\"gem blue\">◆</span><span class=\"gem blue\">◆</span><span class=\"gem pink\">◆</span></div>"
                },
                {
                  "html": "<div class=\"gem-row\"><span class=\"gem blue\">◆</span><span class=\"gem blue\">◆</span><span class=\"gem blue\">◆</span></div>"
                },
                {
                  "html": "<div class=\"gem-row\"><span class=\"gem blue\">◆</span><span class=\"gem pink\">◆</span><span class=\"gem pink\">◆</span><span class=\"gem pink\">◆</span></div>"
                },
                {
                  "html": "<div class=\"gem-row\"><span class=\"gem pink\">◆</span><span class=\"gem pink\">◆</span><span class=\"gem pink\">◆</span><span class=\"gem pink\">◆</span><span class=\"gem pink\">◆</span></div>"
                }
              ],
              "correct": 1,
              "explanation": "Three blue gems are worth 3 × $4 = $12. The other groups are worth $10."
            },
            {
              "id": "p2t1-m-22",
              "prompt": "Four books have different numbers of pages. Blue: 74 pages. Orange: 59 pages. Black: 86 pages. Green: 68 pages. Which list orders the books from fewest pages to most pages?",
              "choices": [
                "black, blue, green, orange",
                "green, orange, blue, black",
                "orange, blue, green, black",
                "orange, green, blue, black"
              ],
              "correct": 3,
              "explanation": "The page counts in order are 59, 68, 74, and 86."
            },
            {
              "id": "p2t1-m-23",
              "prompt": "A bag contains 3 green marbles and 7 red marbles. If Henry closes his eyes and pulls out one marble, which statement is true?",
              "choices": [
                "It is certain that Henry will pull a green marble.",
                "It is impossible for Henry to pull a red marble.",
                "It is possible for Henry to pull a yellow marble.",
                "It is more likely that Henry will pull a red marble than a green marble."
              ],
              "correct": 3,
              "explanation": "There are more red marbles than green marbles, so red is more likely.",
              "figure": {
                "type": "html",
                "html": "<div class=\"marble-bag\"><div class=\"bag-label\">Bag of marbles</div><div class=\"marbles\"><span class=\"green\"></span><span class=\"green\"></span><span class=\"green\"></span><span class=\"red\"></span><span class=\"red\"></span><span class=\"red\"></span><span class=\"red\"></span><span class=\"red\"></span><span class=\"red\"></span><span class=\"red\"></span></div></div>"
              }
            },
            {
              "id": "p2t1-m-24",
              "prompt": "The pencil begins at 2 inches and ends at 8 inches on the ruler. How long is the pencil?",
              "choices": [
                "5 inches",
                "6 inches",
                "8 inches",
                "10 inches"
              ],
              "correct": 1,
              "explanation": "The pencil length is 8 − 2 = 6 inches.",
              "figure": {
                "type": "html",
                "html": "<div class=\"ruler\"><div class=\"pencil-line\"><span></span></div><div class=\"ticks\"><div class=\"tick\"><i></i><b>0</b></div><div class=\"tick\"><i></i><b>1</b></div><div class=\"tick\"><i></i><b>2</b></div><div class=\"tick\"><i></i><b>3</b></div><div class=\"tick\"><i></i><b>4</b></div><div class=\"tick\"><i></i><b>5</b></div><div class=\"tick\"><i></i><b>6</b></div><div class=\"tick\"><i></i><b>7</b></div><div class=\"tick\"><i></i><b>8</b></div><div class=\"tick\"><i></i><b>9</b></div><div class=\"tick\"><i></i><b>10</b></div></div></div>"
              }
            }
          ]
        }
      }
    }
  },
  "primary3": {},
  "primary4": {},
  "lower": {},
  "middle": {},
  "upper": {}
};
