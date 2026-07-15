/* COPY THIS SHAPE INTO THE APPROPRIATE TESTS[levelId] OBJECT IN data.js.
   This example is for a two-section Primary-level test. */

TESTS.primary3.practice1 = {
  label: "Practice Test #1",
  description: "Original full-length Primary 3 practice.",
  sections: {
    reading: {
      name: "Reading",
      shortName: "Reading",
      icon: "📖",
      defaultMinutes: 28,
      instructions: [
        "Read each passage carefully.",
        "Answer every question.",
        "You may look back at the passage."
      ],
      passages: [
        {
          id: "p3-test1-reading-1",
          title: "Passage title",
          text: "Passage text...",
          questions: [
            {
              id: "p3t1-r-1-1",
              prompt: "What is the main idea?",
              choices: ["Choice A", "Choice B", "Choice C", "Choice D"],
              correct: 0,
              explanation: "Why A is correct."
            }
          ]
        }
      ]
    },
    math: {
      name: "Mathematics",
      shortName: "Math",
      icon: "➗",
      defaultMinutes: 26,
      instructions: ["Answer every question.", "Use scratch paper when helpful."],
      questions: [
        {
          id: "p3t1-m-1",
          prompt: "Which number comes next? 4, 8, 12, 16, ___",
          choices: ["18", "19", "20", "22"],
          correct: 2,
          explanation: "The pattern adds 4 each time."
        }
      ]
    }
  }
};
