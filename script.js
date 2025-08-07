// Exercise Data
const exercises = [
  // Day 1 - Chest Exercises
  {
    id: 1,
    name: "Barbell Bench Press",
    category: "chest",
    workoutDay: "day1",
    difficulty: "Intermediate",
    duration: "12-15 min",
    image:
      "https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Barbell-Bench-Press_0316b783-43b2-44f8-8a2b-b177a2cfcbfc_600x600.png?v=1612137800",
    video: "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4",
    instructions:
      "Lying on the bench, your feet flat on the floor. Grasp the bar with a grip wider than shoulder width. Your forearms should be perpendicular to the floor.",
    muscles: "chest, triceps and front deltoids",
    tips: "",
  },
  {
    id: 2,
    name: "Incline Barbell Bench Press",
    category: "chest",
    workoutDay: "day1",
    difficulty: "Intermediate",
    duration: "12-15 min",
    image:
      "https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Incline-Barbell-Bench-Press_dc0c6279-d038-44f5-a682-54c2a5e2602c_600x600.png?v=1612137944",
    video: "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4",
    instructions:
      "Lying on the sloping bench with your feet flat on the floor. Grasp the bar with a grip wider than shoulder width. Your forearms should be perpendicular to the ground.",
    muscles: "chest, triceps and front deltoids",
    tips: "Control the movement on the way down. Don't let weights touch the ground. Focus on chest contraction.",
  },

  {
    id: 3,
    name: "Incline Barbell Bench Press",
    category: "chest",
    workoutDay: "day1",
    difficulty: "Intermediate",
    duration: "12-15 min",
    image:
      "https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Barbell-Declined-Bench-Press_600x600.png?v=1619977283",
    video: "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4",
    instructions:
      "Lying on the declined bench, with your legs pressed against the pads. Holding the barbell with a grip wider than the width of your shoulders, with your hands in pronation. Your forearms should be perpendicular to the ground.",
    muscles: "lower chest, triceps and anterior deltoids",
    tips: "Control the movement on the way down. Don't let weights touch the ground. Focus on chest contraction.",
  },

  {
    id: 4,
    name: "Peck Deck",
    category: "chest",
    workoutDay: "day1",
    difficulty: "Intermediate",
    duration: "12-15 min",
    image:
      "https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Peck-Deck_600x600.png?v=1612137910",
    video: "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4",
    instructions:
      "Sitting on the Peck deck machine with your back pressed against the backrest, your forearms well supported against the padded parts provided for this purpose. Your upper arms should be parallel to the ground and in line with your shoulders.",
    muscles: "chest and front deltoids",
    tips: "",
  },
  {
    id: 5,
    name: "Cable Crossover",
    category: "chest",
    workoutDay: "day1",
    difficulty: "Intermediate",
    duration: "12-15 min",
    image:
      "https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Cable-Crossover_09c90616-2777-47ed-927e-d5987edfce09_600x600.png?v=1612138036",
    video: "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4",
    instructions:
      "Grasp the handles attached to the ends of each rope and stand in the middle between the pulleys. Bend your chest slightly forward and keep your elbows slightly bent.",
    muscles: "chest and front deltoids",
    tips: "",
  },
  {
    id: 6,
    name: "Dumbbell Bench Press",
    category: "chest",
    workoutDay: "day1",
    difficulty: "Intermediate",
    duration: "12-15 min",
    image:
      "https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Dumbbell-Bench-Press_13090f67-ccfc-4f3a-9bab-e75d753fa9fa_600x600.png?v=1612137970",
    video: "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4",
    instructions:
      "Lying on the bench, your feet flat on the floor, one dumbbell in each hand, pronation grip. Hold the dumbbells at your sides at chest height. Your forearms should be perpendicular to the ground.",
    muscles: "chest, triceps and front deltoids",
    tips: "",
  },
  {
    id: 7,
    name: "Incline Dumbbell Bench Press",
    category: "chest",
    workoutDay: "day1",
    difficulty: "Intermediate",
    duration: "12-15 min",
    image:
      "https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Incline-Dumbbell-Bench-Press_c2bf89a2-433f-4a8f-9801-67c679980867_600x600.png?v=1612138008",
    video: "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4",
    instructions:
      "Lying on the sloping bench, your feet flat on the ground, one dumbbell in each hand, pronation grip. Hold the dumbbells at your sides at chest height. Your forearms should be perpendicular to the ground.",
    muscles: "chest, triceps and front deltoids",
    tips: "",
  },

  {
    id: 8,
    name: "Dumbbell Declined Bench Press",
    category: "chest",
    workoutDay: "day1",
    difficulty: "Intermediate",
    duration: "12-15 min",
    image:
      "https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Dumbbell-Declined-Bench-Press_600x600.png?v=1619977242",
    video: "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4",
    instructions:
      "Lying on the declined bench, one dumbbell in each hand, pronation grip. Hold the dumbbells on the sides at chest height, elbows on the outside. Your forearms should be perpendicular to the ground.",
    muscles: "lower chest, triceps and anterior deltoids",
    tips: "",
  },

  {
    id: 9,
    name: "Dumbbell Fly",
    category: "chest",
    workoutDay: "day1",
    difficulty: "Intermediate",
    duration: "12-15 min",
    image:
      "https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Dumbbell-Fly_119e2918-4241-4f55-bd77-c98a0c76c6c8_600x600.png?v=1612137840",
    video: "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4",
    instructions:
      "Lying on the bench, your feet flat on the floor, one dumbbell in each hand. Hold the weights in a neutral grip, arms outstretched above your chest.",
    muscles: "chest and front deltoids",
    tips: "",
  },

  {
    id: 10,
    name: "Incline Dumbbell Fly",
    category: "chest",
    workoutDay: "day1",
    difficulty: "Intermediate",
    duration: "12-15 min",
    image:
      "https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Incline-Dumbbell-Fly_44d253c3-da60-45b2-b0ba-88a3bb79da09_600x600.png?v=1612137870",
    video: "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4",
    instructions:
      "Lying on the sloping bench, your feet flat on the floor, one dumbbell in each hand. Hold the weights in a neutral grip with your arms outstretched above your chest.",
    muscles: "chest and front deltoids",
    tips: "",
  },

   {
    id: 11,
    name: "Chest Press Machine",
    category: "chest",
    workoutDay: "day1",
    difficulty: "Intermediate",
    duration: "12-15 min",
    image:
      "https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Chest-Press-Machine_ab8cd29d-5698-4110-a938-098bda19b5fc_600x600.png?v=1621163108",
    video: "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4",
    instructions:
      "Set the chest press machine up so that when sitting down the handles are in line with the lower part of your chest. Make sure that you are sitting right back up against the seat. Grab hold of a handle in each hand, push your chest out, keep your head against the headrest.",
    muscles: "chest, triceps and shoulders",
    tips: "",
  },

   {
    id: 12,
    name: "Push Ups",
    category: "chest",
    workoutDay: "day1",
    difficulty: "Intermediate",
    duration: "12-15 min",
    image:
      "https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Push-Ups_600x600.png?v=1640121436",
    video: "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4",
    instructions:
      "Face down, arms outstretched, hands wide apart, resting on the floor and aligned with your pectoral muscles. Legs stretched and face pointed towards the ground.",
    muscles: "chest, triceps, deltoids and biceps",
    tips: "",
  },


  // Day 2 - Back Exercises
  {
    id: 13,
    name: "Dumbbell Bent Over Row (Single Arm)",
    category: "back",
    workoutDay: "day2",
    difficulty: "Intermediate",
    duration: "12-15 min",
    image:
      "https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Dumbbell-Bent-Over-Row-_Single-Arm_49867db3-f465-4fbc-b359-29cbdda502e2_600x600.png?v=1612138069",
    video: "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4",
    instructions:
      "Place your left knee and left hand on the bench with your chest parallel to the floor. Keep your right foot on the ground and grasp the dumbbell still on the ground in your right hand in a neutral grip.",
    muscles: "back, hind deltoids and biceps",
    tips: "",
  },
  {
    id: 13,
    name: "Wide Grip Pulldown",
    category: "back",
    workoutDay: "day2",
    difficulty: "Intermediate",
    duration: "12-15 min",
    image:
      "https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Wide-Grip-Pulldown_91fcba9b-47a2-4185-b093-aa542c81c55c_600x600.png?v=1612138105",
    video: "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4",
    instructions:
      "Sitting, thighs under the padded parts, the bar grasped in pronation, hands more apart than shoulder width. Keep elbows pointed outwards and back straight.",
    muscles: "back and biceps",
    tips: "",
  },
  {
    id: 13,
    name: "Seated Cable Row",
    category: "back",
    workoutDay: "day2",
    difficulty: "Intermediate",
    duration: "12-15 min",
    image:
      "https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Seated-Cable-Row_9470fa48-f0d1-40b1-a980-caee9e6f2e53_600x600.png?v=1612138127",
    video: "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4",
    instructions:
      "Sitting on the machine's bench with your feet on the wedge. Grasp the double handle attached to the cable with both hands. Keep back straight and knees slightly bent.",
    muscles: "back, hind deltoids and biceps",
    tips: "",
  },
  {
    id: 13,
    name: "Close Grip Pulldown",
    category: "back",
    workoutDay: "day2",
    difficulty: "Intermediate",
    duration: "12-15 min",
    image:
      "https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Close-Grip-Pulldown_072bb5ce-e3d9-4007-b8d2-d343e9d1051b_600x600.png?v=1612138178",
    video: "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4",
    instructions:
      "Seated, thighs under the padded parts, the double handle grasped with both hands. Keep your back straight.",
    muscles: "back and biceps",
    tips: "",
  },
  {
    id: 13,
    name: "Barbell Row",
    category: "back",
    workoutDay: "day2",
    difficulty: "Intermediate",
    duration: "12-15 min",
    image:
      "https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Barbell-Row_4beb1d94-bac9-4538-9578-2d9cf93ef008_600x600.png?v=1612138201",
    video: "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4",
    instructions:
      "Standing with slightly bent knees, grasping the bar with hands in pronation, grip wider than shoulder width. Bust bent forward, keep the back straight, the chest rounded.",
    muscles: "back, hind deltoids and biceps",
    tips: "",
  },
  {
    id: 13,
    name: "Behind Neck Pulldown",
    category: "back",
    workoutDay: "day2",
    difficulty: "Intermediate",
    duration: "12-15 min",
    image:
      "https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Behind-Neck-Pulldown_f0f50b6b-ad34-48cd-8663-84ee6a581928_600x600.png?v=1612138228",
    video: "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4",
    instructions:
      "Sitting, thighs under the padded parts, the bar grasped in pronation, hands more apart than shoulder width. Keep elbows pointed outwards and back straight.",
    muscles: "back and biceps",
    tips: "",
  },
  {
    id: 13,
    name: "Reverse Grip Pulldown",
    category: "back",
    workoutDay: "day2",
    difficulty: "Intermediate",
    duration: "12-15 min",
    image:
      "https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Reverse-Grip-Pulldown_10c5341f-30fd-4126-8fd7-2fa05c079889_600x600.png?v=1612138255",
    video: "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4",
    instructions:
      "Seated, thighs under the padded parts, bar grasped in supination, hands shoulder-width apart. Keep your back straight.",
    muscles: "back and biceps",
    tips: "",
  },

  {
    id: 13,
    name: "Rope Pulldown",
    category: "back",
    workoutDay: "day2",
    difficulty: "Intermediate",
    duration: "12-15 min",
    image:
      "https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Rope-Pulldown_24c7b22e-bf99-4ade-ba6c-c7b2f20ffa9a_600x600.png?v=1612138283",
    video: "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4",
    instructions:
      "Standing facing the high pulley, knees slightly bent and bust slightly bent forward. Grasp one end of the rope in each hand in a neutral grip.",
    muscles: "back and triceps",
    tips: "",
  },

  {
    id: 13,
    name: "T-Bar Rows",
    category: "back",
    workoutDay: "day2",
    difficulty: "Intermediate",
    duration: "12-15 min",
    image:
      "https://cdn.shopify.com/s/files/1/0269/5551/3900/files/T-Bar-Rows_600x600.png?v=1612092112",
    video: "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4",
    instructions:
      "Use a T-Bar machine (or place a barbell in the corner of a room). Stand with feet either side of the bar, bend your knees, and bow forward so that your chest is directly over the plate on the barbell. Grab the handle in both hands.",
    muscles: "back, shoulders and biceps",
    tips: "",
  },

  {
    id: 13,
    name: "Barbell Bent Over Rows Supinated Grip",
    category: "back",
    workoutDay: "day2",
    difficulty: "Intermediate",
    duration: "12-15 min",
    image:
      "https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Barbell-Bent-Over-Rows-Supinated-Grip_600x600.png?v=1619977891",
    video: "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4",
    instructions:
      "Standing, your knees slightly bent. Grasp the bar with an underhand grip (supinated) with your hands at about shoulders width apart. Lean forward while keeping your back straight and your chest bulged.",
    muscles: "back and hind deltoids",
    tips: "",
  },

  {
    id: 13,
    name: "Pull Up",
    category: "back",
    workoutDay: "day2",
    difficulty: "Intermediate",
    duration: "12-15 min",
    image:
      "https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Pull-Up_600x600.png?v=1619977612",
    video: "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4",
    instructions:
      "Grasp the pull bar using a pronated grip, head slightly up, hands wider than shoulders width apart, and elbows slightly bent.",
    muscles: "back and biceps",
    tips: "",
  },

  {
    id: 13,
    name: "Pull Up with a Supinated Grip",
    category: "back",
    workoutDay: "day2",
    difficulty: "Intermediate",
    duration: "12-15 min",
    image:
      "https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Pull-Up-with-a-Supinated-Grip_600x600.png?v=1619977534",
    video: "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4",
    instructions:
      "Grasp the pull bar using an underhand (supinated) grip, head slightly up, hands about shoulders-width apart, elbows slightly bent and pointing forward.",
    muscles: "back and biceps",
    tips: "",
  },

  {
    id: 13,
    name: "Straight Arm Lat Pulldown",
    category: "back",
    workoutDay: "day2",
    difficulty: "Intermediate",
    duration: "12-15 min",
    image:
      "https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Straight-Arm-Lat-Pulldown_600x600.png?v=1619977498",
    video: "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4",
    instructions:
      "Standing, facing the high pulley cable machine, with your knees slightly bent, your torso bending over, back straight and your chest bulged. Grasp the bar with an overhand (pronated, palms facing down) grip with the elbow slightly bent.",
    muscles: "back and triceps",
    tips: "",
  },

  {
    id: 13,
    name: "Dumbbell Bent Over Rows",
    category: "back",
    workoutDay: "day2",
    difficulty: "Intermediate",
    duration: "12-15 min",
    image:
      "https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Dumbbell-Bent-Over-Rows_600x600.png?v=1619977463",
    video: "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4",
    instructions:
      "Standing, your knees slightly bent. Grasp the dumbbells with a neutral grip (palms facing each other). Lean forward while keeping your back straight and your chest bulged.",
    muscles: "back, biceps and hind deltoids",
    tips: "",
  },

  {
    id: 13,
    name: "Dumbbell Pullover",
    category: "back",
    workoutDay: "day2",
    difficulty: "Intermediate",
    duration: "12-15 min",
    image:
      "https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Dumbbell-Pullover_600x600.png?v=1619977197",
    video: "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4",
    instructions:
      "Upper back resting crossways on the bench (see illustration). Feet on the ground, shoulder width apart, pelvis slightly lower than the height of the bench. Hold the dumbbell with both hands above your chest, with your arms almost fully extended.",
    muscles: "back, chest and triceps",
    tips: "",
  },

  {
    id: 13,
    name: "Barbell Pullover",
    category: "back",
    workoutDay: "day2",
    difficulty: "Intermediate",
    duration: "12-15 min",
    image:
      "https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Barbell-Pullover_600x600.png?v=1619977155",
    video: "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4",
    instructions:
      "Lying on a bench, feet on the ground at shoulder width apart. Hold the barbell with your hands in pronation above your chest, arms almost fully extended.",
    muscles: "back, chest and triceps",
    tips: "",
  },

  {
    id: 13,
    name: "Barbell Deadlift",
    category: "back",
    workoutDay: "day2",
    difficulty: "Intermediate",
    duration: "12-15 min",
    image:
      "https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Barbell-Deadlift_600x600.png?v=1619977112",
    video: "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4",
    instructions:
      "Barbell placed on the ground in front of you. Feet a little less than shoulder width apart with your knees bent. With your arms fully extended, grab the barbell in pronation, hands shoulder-width apart Keep your torso slightly bent forward, back straight, shoulders pulled back and chest out. Inhale and tighten your abdominal muscles.",
    muscles: "back, legs and the whole body",
    tips: "",
  },

  {
    id: 13,
    name: "Barbell Shrug",
    category: "back",
    workoutDay: "day2",
    difficulty: "Intermediate",
    duration: "12-15 min",
    image:
      "https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Barbell-Shrug_4f8a4e15-96b9-4595-8e88-635bf83cc8ac_600x600.png?v=1612138751",
    video: "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4",
    instructions:
      "Standing, holding the bar in front of you, pronation grip, hands shoulder-width apart.",
    muscles: "back",
    tips: "",
  },

  {
    id: 13,
    name: "Dumbbell Shrugs",
    category: "back",
    workoutDay: "day2",
    difficulty: "Intermediate",
    duration: "12-15 min",
    image:
      "https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Dumbbell-Shrugs_69a32385-3573-471b-a66e-3abdb0d95819_600x600.png?v=1619986777",
    video: "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4",
    instructions:
      "Standing, arms stretched out along the body, one dumbbell in each hand.",
    muscles: "trapezius muscles",
    tips: "",
  },

    // Day 3 - Shoulders Exercises
  {
    id: 31,
    name: "Dumbbell Shoulder Press",
    category: "shoulders",
    workoutDay: "day3",
    difficulty: "Intermediate",
    duration: "12-15 min",
    image:
      "https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Dumbbell-Shoulder-Press_da0aa742-620a-45f7-9277-78137d38ff28_600x600.png?v=1612138495",
    video: "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4",
    instructions:
      "Sitting on a bench with your back well supported against the backrest. Hold the dumbbells in your hands (pronation grip) a little above shoulder height. Your elbows are on the outside and your forearms are perpendicular to the ground.",
    muscles: "shoulders and triceps",
    tips: "",
  },

  {
    id: 31,
    name: "Dumbbell Lateral Raise",
    category: "shoulders",
    workoutDay: "day3",
    difficulty: "Intermediate",
    duration: "12-15 min",
    image:
      "https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Dumbbell-Lateral-Raise_31c81eee-81c4-4ffe-890d-ee13dd5bbf20_600x600.png?v=1612138523",
    video: "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4",
    instructions:
      "Standing with feet about shoulder width apart, arms along the body and a dumbbell in each hand",
    muscles: "Strong Shoulders & Trapezius Muscles",
    tips: "",
  },

  {
    id: 31,
    name: "Dumbbell Front Raise",
    category: "shoulders",
    workoutDay: "day3",
    difficulty: "Intermediate",
    duration: "12-15 min",
    image:
      "https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Dumbbell-Front-Raise_11804c3c-22d1-4589-a035-e30ad72149f3_600x600.png?v=1612138576",
    video: "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4",
    instructions:
      "Standing with feet about shoulder width apart, one dumbbell in each hand (pronation grip).",
    muscles: "shoulders",
    tips: "",
  },

  {
    id: 31,
    name: "High Cable Rear Delt Fly",
    category: "shoulders",
    workoutDay: "day3",
    difficulty: "Intermediate",
    duration: "12-15 min",
    image:
      "https://cdn.shopify.com/s/files/1/0269/5551/3900/files/High-Cable-Rear-Delt-Fly_600x600.png?v=1612541996",
    video: "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4",
    instructions:
      "Standing between the pulleys with the right handle in the left hand and the left handle in the right hand. Your arms folded in front of you at shoulder height.",
    muscles: "shoulders and back",
    tips: "",
  },

  {
    id: 31,
    name: "Smith Machine Shoulder Press",
    category: "shoulders",
    workoutDay: "day3",
    difficulty: "Intermediate",
    duration: "12-15 min",
    image:
      "https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Smith-Machine-Shoulder-Press_e53bea60-c273-41e9-a70d-f5fa339c6780_600x600.png?v=1612138658",
    video: "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4",
    instructions:
      "Sitting on a bench with your back well supported against the backrest. Position the bench so that the bar drops just in front of your face. Grasp the bar with your hands in pronation. Your back is well supported against the backrest, your elbows are on the outside and your forearms are perpendicular to the ground.",
    muscles: "shoulders and triceps",
    tips: "",
  },

  {
    id: 31,
    name: "Barbell Upright Row",
    category: "shoulders",
    workoutDay: "day3",
    difficulty: "Intermediate",
    duration: "12-15 min",
    image:
      "https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Barbell-Upright-Row_8a03db96-29ea-47df-b517-0b863f96b564_600x600.png?v=1612138684",
    video: "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4",
    instructions:
      "Standing, holding the bar in front of you, pronation grip, hands shoulder-width apart.",
    muscles: "shoulders, back and biceps",
    tips: "",
  },

  {
    id: 31,
    name: "Bent-Over Lateral Raise",
    category: "shoulders",
    workoutDay: "day3",
    difficulty: "Intermediate",
    duration: "12-15 min",
    image:
      "https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Bent-Over-Lateral-Raise_41bd4de4-0370-4e6b-9501-37cdcc26ded4_600x600.png?v=1621163232",
    video: "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4",
    instructions:
      "Standing with knees slightly bent, bust bent forward, almost parallel to the ground, keeping your back straight and your head in line with your spine. Hold a dumbbell in each hand, palms facing each other.",
    muscles: "shoulders and trapezius muscles ",
    tips: "",
  },

  {
    id: 31,
    name: "Cable One-Arm Lateral Raise",
    category: "shoulders",
    workoutDay: "day3",
    difficulty: "Intermediate",
    duration: "12-15 min",
    image:
      "https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Cable-One-Arm-Lateral-Raise_3e57189f-cdf3-46ee-9a89-6ca054eae56a_600x600.png?v=1612138775",
    video: "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4",
    instructions:
      "Stand with your feet shoulder-width apart, your left side close to the pulley. The handle in your right hand, against the front of your thigh.",
    muscles: "shoulders",
    tips: "",
  },

  {
    id: 31,
    name: "Dumbbell Push Press",
    category: "shoulders",
    workoutDay: "day3",
    difficulty: "Intermediate",
    duration: "12-15 min",
    image:
      "https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Dumbbell-Push-Press_f9229ee9-08e7-4aeb-8e41-ebd897e7ba8b_600x600.png?v=1621162780",
    video: "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4",
    instructions:
      "Stand upright with a dumbbell resting on each shoulder and elbows pointed out in front of you. Feet should be shoulder width apart.",
    muscles: "shoulders and triceps",
    tips: "",
  },

  {
    id: 31,
    name: "Barbell Push Press",
    category: "shoulders",
    workoutDay: "day3",
    difficulty: "Intermediate",
    duration: "12-15 min",
    image:
      "https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Barbell-Push-Press_8ba0542a-aba8-45ce-bdee-1a3eb4736514_600x600.png?v=1621162658",
    video: "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4",
    instructions:
      "Stand upright with a barbell resting on your upper chest and shoulders and elbows pointed out in front of you. Feet should be shoulder width apart.",
    muscles: "shoulders and triceps",
    tips: "",
  },

  {
    id: 31,
    name: "Single-Arm Cable Front Raise",
    category: "shoulders",
    workoutDay: "day3",
    difficulty: "Intermediate",
    duration: "12-15 min",
    image:
      "https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Single-Arm-Cable-Front-Raise_600x600.png?v=1619977928",
    video: "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4",
    instructions:
      "Standing, your back facing the cable machine, with your knees slightly bent. Grasp the handle with an overhand (pronated), your arm along your body with the elbow slightly bent.",
    muscles: "front deltoids",
    tips: "",
  },

  {
    id: 31,
    name: "Barbell Front Raise",
    category: "shoulders",
    workoutDay: "day3",
    difficulty: "Intermediate",
    duration: "12-15 min",
    image:
      "https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Barbell-Front-Raise_600x600.png?v=1619977846",
    video: "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4",
    instructions:
      "Standing, your feet about shoulders width apart, elbows slightly bent, arms along the body, grasp the handle with an overhand (pronated) grip, hands shoulders width apart.",
    muscles: "front deltoids",
    tips: "",
  },

  {
    id: 31,
    name: "Seated Barbell Shoulder Press",
    category: "shoulders",
    workoutDay: "day3",
    difficulty: "Intermediate",
    duration: "12-15 min",
    image:
      "https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Seated-Barbell-Shoulder-Press_600x600.png?v=1619977796",
    video: "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4",
    instructions:
      "Sit down on the bench and unrack the bar using an overhand (pronated) grip, your elbows pointing outward. The bar stands in front of you at chin’s level. This level may vary depending on your shoulders’ flexibility. The gap between your hands should be such that your elbows are forming a 90° angle when your arms are parallel to the floor.",
    muscles: "shoulders and triceps",
    tips: "",
  },

  {
    id: 31,
    name: "Seated Behind the Neck Barbell Shoulder Press",
    category: "shoulders",
    workoutDay: "day3",
    difficulty: "Intermediate",
    duration: "12-15 min",
    image:
      "https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Seated-Behind-the-Neck-Barbell-Shoulder-Press_600x600.png?v=1619977737",
    video: "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4",
    instructions:
      "Sit down on the bench with your back straight and your chest bulged. Unrack the bar using an overhand (pronated) grip, your elbows pointing outward. The bar stands behind you at neck’s level. This level may vary depending on your shoulders’ flexibility. The gap between your hands should be such that your elbows are forming a 90° angle when your arms are parallel to the floor.",
    muscles: "shoulders and triceps",
    tips: "",
  },

  {
    id: 31,
    name: "Standing Barbell Shoulder Press",
    category: "shoulders",
    workoutDay: "day3",
    difficulty: "Intermediate",
    duration: "12-15 min",
    image:
      "https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Standing-Barbell-Shoulder-Press_600x600.png?v=1619977694",
    video: "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4",
    instructions:
      "Standing with your back straight, chest bulged, feet about shoulders width apart, and knees slightly bent. Grasp the bar using a pronated grip, your elbows pointing outward. The bar stands at chin’s level. This level may vary depending on your shoulders’ flexibility. The gap between your hands should be such that your elbows are forming a 90° angle when your arms are parallel to the floor.",
    muscles: "shoulders and triceps",
    tips: "",
  },

  {
    id: 31,
    name: "Standing Behind the Neck Barbell Shoulder Press",
    category: "shoulders",
    workoutDay: "day3",
    difficulty: "Intermediate",
    duration: "12-15 min",
    image:
      "https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Standing-Behind-the-Neck-Barbell-Shoulder-Press_600x600.png?v=1619977648",
    video: "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4",
    instructions:
      "Standing with your back straight, chest bulged, feet about shoulders width apart, and knees slightly bent. Grasp the bar using a pronated grip, your elbows pointing outward. The bar stands behind you at neck’s level. This level may vary depending on your shoulders’ flexibility. The gap between your hands should be such that your elbows are forming a 90° angle when your arms are parallel to the floor.",
    muscles: "shoulders and triceps",
    tips: "",
  },

  {
    id: 31,
    name: "Alternate Dumbbell Front Raise Neutral Grip",
    category: "shoulders",
    workoutDay: "day3",
    difficulty: "Intermediate",
    duration: "12-15 min",
    image:
      "https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Alternate-Dumbbell-Front-Raise-Neutral-Grip_600x600.png?v=1619977407",
    video: "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4",
    instructions:
      "Standing, arms along the body, elbows slightly bent, one dumbbell in each hand, neutral grip.",
    muscles: "shoulders",
    tips: "",
  },

  {
    id: 31,
    name: "One-Arm Low-Pulley Front Raise Neutral Grip",
    category: "shoulders",
    workoutDay: "day3",
    difficulty: "Intermediate",
    duration: "12-15 min",
    image:
      "https://cdn.shopify.com/s/files/1/0269/5551/3900/files/One-Arm-Low-Pulley-Front-Raise-Neutral-Grip_600x600.png?v=1619977374",
    video: "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4",
    instructions:
      "Standing with back turned to the pulley. Holding the end of the rope, hand in neutral grip, arms along your body, elbow slightly bent.",
    muscles: "shoulders",
    tips: "",
  },

  {
    id: 31,
    name: "Two-Handed Dumbbell Front Raise",
    category: "shoulders",
    workoutDay: "day3",
    difficulty: "Intermediate",
    duration: "12-15 min",
    image:
      "https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Two-Handed-Dumbbell-Front-Raise_600x600.png?v=1619977326",
    video: "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4",
    instructions:
      "Standing with feet about shoulder width apart, elbows slightly bent, arms alongside the body, holding the dumbbell with both hands (as illustrated).",
    muscles: "shoulders",
    tips: "",
  },



    // Day 2 - Biceps Exercises
  {
    id: 19,
    name: "Barbell Curl",
    category: "biceps",
    workoutDay: "day2",
    difficulty: "Beginner",
    duration: "10-12 min",
    image: "https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Barbell-Curl_f38580d5-412e-4082-b453-5d319afa94fd_600x600.png?v=1612137128",
    video: "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4",
    instructions:
      "Standing with knees slightly bent and back straight. Hold the bar with your hands in supination, about shoulder width apart.",
    muscles: "biceps",
    tips: "",
  },

  {
    id: 19,
    name: "Alternating Dumbbell Curl",
    category: "biceps",
    workoutDay: "day2",
    difficulty: "Beginner",
    duration: "10-12 min",
    image: "https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Alternating-Dumbbell-Curl_ad879dc4-b4fb-4ca7-b2b1-6e1eb5d78252_600x600.png?v=1612137169",
    video: "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4",
    instructions:
      "Standing with knees slightly bent and back straight. Hold a dumbbell in each hand, in a neutral grip along the body.",
    muscles: "biceps",
    tips: "",
  },

  {
    id: 19,
    name: "Rope Cable Curl",
    category: "biceps",
    workoutDay: "day2",
    difficulty: "Beginner",
    duration: "10-12 min",
    image: "https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Rope-Cable-Curl_6216e254-5f77-462c-9954-ea210fff8a70_600x600.png?v=1612137195",
    video: "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4",
    instructions:
      "Standing in front of the pulley, knees slightly bent, grasp the rope with both hands, in neutral grip, arms relaxed along the body.",
    muscles: "biceps",
    tips: "",
  },

  {
    id: 19,
    name: "EZ Barbell Curl",
    category: "biceps",
    workoutDay: "day2",
    difficulty: "Beginner",
    duration: "10-12 min",
    image: "https://cdn.shopify.com/s/files/1/0269/5551/3900/files/EZ-Barbell-Curl_42cb566b-6415-4318-94e0-c93f4b442e59_600x600.png?v=1612137227",
    video: "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4",
    instructions:
      "Standing with knees slightly bent and back straight. Hold the EZ bar with your hands in supination.",
    muscles: "biceps",
    tips: "",
  },

  {
    id: 19,
    name: "EZ Barbell Preacher Curl",
    category: "biceps",
    workoutDay: "day2",
    difficulty: "Beginner",
    duration: "10-12 min",
    image: "https://cdn.shopify.com/s/files/1/0269/5551/3900/files/EZ-Barbell-Preacher-Curl_4d449fee-1920-4137-970c-75d4698b268d_600x600.png?v=1612137254",
    video: "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4",
    instructions:
      "Sitting or standing, adjust the Larry Scott armrest so that it is slightly below the level of your shoulders. Rest your upper arms on the armrest and grasp the EZ bar with your hands in supination.",
    muscles: "biceps",
    tips: "",
  },

  {
    id: 19,
    name: "Hammer Curl",
    category: "biceps",
    workoutDay: "day2",
    difficulty: "Beginner",
    duration: "10-12 min",
    image: "https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Hammer-Curl_da9fea8b-fc81-4a4f-9af1-aea1b85239d7_600x600.png?v=1612137282",
    video: "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4",
    instructions:
      "Standing with knees slightly bent and back straight. Hold a dumbbell in each hand, in a neutral grip along the body.",
    muscles: "biceps",
    tips: "",
  },

  {
    id: 19,
    name: "Incline Dumbbell Curl",
    category: "biceps",
    workoutDay: "day2",
    difficulty: "Beginner",
    duration: "10-12 min",
    image: "https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Incline-Dumbbell-Curl_7debf468-cd34-49bc-8933-7f4b087e6cca_600x600.png?v=1612137309",
    video: "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4",
    instructions:
      "Sitting on a bench with the backrest tilted at an angle of 40 to 60 degrees. Let your arms hang down towards the floor. Hold a dumbbell in each hand in supination.",
    muscles: "biceps",
    tips: "",
  },

  {
    id: 19,
    name: "Dumbbell Concentration Curl",
    category: "biceps",
    workoutDay: "day2",
    difficulty: "Beginner",
    duration: "10-12 min",
    image: "https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Dumbbell-Concentration-Curl_289b5739-4bdd-40e6-a195-6ecfcc685126_600x600.png?v=1612137334",
    video: "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4",
    instructions:
      "Sitting on a bench, hold a dumbbell in your right hand, supine grip. With your chest slightly bent forward, rest your elbow on the inside of your right thigh, leaving your arm relaxed towards the ground.",
    muscles: "biceps",
    tips: "",
  },

  {
    id: 19,
    name: "Single-Arm Low Pulley Cable Curl",
    category: "biceps",
    workoutDay: "day2",
    difficulty: "Beginner",
    duration: "10-12 min",
    image: "https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Single-Arm-Low-Pulley-Cable-Curl_600x600.png?v=1619978525",
    video: "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4",
    instructions:
      "Stand in front of the cable machine and grasp the handle with an underhand (supinated) grip. The knees should be slightly bent and your arm relaxed along your body.",
    muscles: "biceps",
    tips: "",
  },

  {
    id: 19,
    name: "Straight Bar Low Pulley Cable Curl",
    category: "biceps",
    workoutDay: "day2",
    difficulty: "Beginner",
    duration: "10-12 min",
    image: "https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Straight-Bar-Low-Pulley-Cable-Curl_600x600.png?v=1619978455",
    video: "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4",
    instructions:
      "Stand in front of the cable machine, legs shoulder width apart, and grasp the straight bar with an underhand (supinated) grip and your hands about shoulder width apart.",
    muscles: "biceps",
    tips: "",
  },

  {
    id: 19,
    name: "Standing High Pulley Cable Curl",
    category: "biceps",
    workoutDay: "day2",
    difficulty: "Beginner",
    duration: "10-12 min",
    image: "https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Standing-High-Pulley-Cable-Curl_600x600.png?v=1619978409",
    video: "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4",
    instructions:
      "grasp each of the cables with an underhand grip (supinated, palms facing up) and stand in the center with your arms outstretched.",
    muscles: "biceps",
    tips: "",
  },

  {
    id: 19,
    name: "Seated Barbell Wrist Curl",
    category: "biceps",
    workoutDay: "day2",
    difficulty: "Beginner",
    duration: "10-12 min",
    image: "https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Seated-Barbell-Wrist-Curl_600x600.png?v=1619978365",
    video: "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4",
    instructions:
      "Grasp a barbell using an underhand grip (supinated, palms facing up) and sit down on the end of a flat bench. Rest the back of your forearms on the top of your thighs or on the end of the bench so that your wrists are just off the end of your knees or of the bench.",
    muscles: "forearms",
    tips: "",
  },

  {
    id: 19,
    name: "Seated Barbell Wrist Extension",
    category: "biceps",
    workoutDay: "day2",
    difficulty: "Beginner",
    duration: "10-12 min",
    image: "https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Seated-Barbell-Wrist-Extension_600x600.png?v=1619978327",
    video: "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4",
    instructions:
      "Grasp a barbell using an overhand grip (pronated, palms facing down) and sit down on the end of a flat bench. Rest your forearms on the top of your thighs or on the end of the bench so that your wrists are just off the end of your knees or of the bench.",
    muscles: "forearms",
    tips: "",
  },

  {
    id: 19,
    name: "Reverse Barbell Curl",
    category: "biceps",
    workoutDay: "day2",
    difficulty: "Beginner",
    duration: "10-12 min",
    image: "https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Reverse-Barbell-Curl_600x600.png?v=1619978270",
    video: "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4",
    instructions:
      "Stand in front of the cable machine, knees slightly bent and back straight, grasp the straight or EZ-bar with an overhand (pronated) grip and your hands about shoulder width apart.",
    muscles: "forearms",
    tips: "",
  },

  // Day 1 - Triceps Exercises
  {
    id: 7,
    name: "Lying Triceps Extension",
    category: "triceps",
    workoutDay: "day1",
    difficulty: "Intermediate",
    duration: "10-12 min",
    image:
      "https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Lying-Triceps-Extension_4affa7a2-9c1c-48f8-8003-3570d7b3a39c_600x600.png?v=1612136744",
    video: "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4",
    instructions:
      "Lying on the bench, your feet flat on the floor or on the bench. Hold the EZ bar above your chest, pronated grip, hands slightly tighter than shoulder width.",
    muscles: "triceps",
    tips: "",
  },

  {
    id: 7,
    name: "Triceps Pressdown",
    category: "triceps",
    workoutDay: "day1",
    difficulty: "Intermediate",
    duration: "10-12 min",
    image:
      "https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Triceps-Pressdown_e759437b-6200-4b44-b484-14db770024a4_600x600.png?v=1612136845",
    video: "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4",
    instructions:
      "Standing facing the pulley, grasping the bar with a pronation grip, hands shoulder width apart.",
    muscles: "triceps",
    tips: "",
  },

  {
    id: 7,
    name: "Cable Rope Pushdown",
    category: "triceps",
    workoutDay: "day1",
    difficulty: "Intermediate",
    duration: "10-12 min",
    image:
      "https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Cable-Rope-Pushdown_600x600.png?v=1612136916",
    video: "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4",
    instructions:
      "Standing in front of the pulley, grasp one end of the rope in each hand in neutral grip.",
    muscles: "triceps",
    tips: "",
  },

  {
    id: 7,
    name: "Dumbbell Overhead Triceps Extension",
    category: "triceps",
    workoutDay: "day1",
    difficulty: "Intermediate",
    duration: "10-12 min",
    image:
      "https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Dumbbell-Overhead-Triceps-Extension_99242f13-ab4d-4e77-be12-e0f180cc93ac_600x600.png?v=1612136962",
    video: "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4",
    instructions:
      "Sitting on a bench, back straight, grasping a dumbbell with both hands, palms against the inside of a disc (see picture). Position the dumbbell above your head, arms outstretched, triceps well contracted.",
    muscles: "triceps",
    tips: "",
  },

  {
    id: 7,
    name: "Close Grip Bench Press",
    category: "triceps",
    workoutDay: "day1",
    difficulty: "Intermediate",
    duration: "10-12 min",
    image:
      "https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Close-Grip-Bench-Press_28c01bfb-504d-43a6-8264-bd2101d317b9_600x600.png?v=1612137028",
    video: "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4",
    instructions:
      "Lying on the bench, your feet flat on the floor. Grasp the bar with a pronation grip, hands slightly tighter than shoulder width.",
    muscles: "triceps, chest and anterior deltoids",
    tips: "",
  },

  {
    id: 7,
    name: "Kickback",
    category: "triceps",
    workoutDay: "day1",
    difficulty: "Intermediate",
    duration: "10-12 min",
    image:
      "https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Kickback_c8df8485-ed16-4808-96c0-7ccc27a0bec2_600x600.png?v=1612136991",
    video: "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4",
    instructions:
      "Place your left knee and left hand on a bench, with your chest parallel to the floor. Keep your right foot on the ground and grasp the dumbbell in your right hand. Keeping it close to your body, raise the top of your right arm until it is parallel to the ground.",
    muscles: "triceps",
    tips: "",
  },

  {
    id: 7,
    name: "Reverse Grip Cable Triceps Extension with Barbell",
    category: "triceps",
    workoutDay: "day1",
    difficulty: "Intermediate",
    duration: "10-12 min",
    image:
      "https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Reverse-Grip-Cable-Triceps-Extension-with-Barbell_600x600.png?v=1619978215",
    video: "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4",
    instructions:
      "Stand in front of the cable machine and grasp the straight bar with an underhand (supinated, palms facing up) grip, hands about shoulders width apart, elbows tucked in and bent at a bit less than a 90° angle.",
    muscles: "triceps",
    tips: "",
  },

  {
    id: 7,
    name: "Single-Arm Cable Triceps Extension",
    category: "triceps",
    workoutDay: "day1",
    difficulty: "Intermediate",
    duration: "10-12 min",
    image:
      "https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Single-Arm-Cable-Triceps-Extension_600x600.png?v=1619978169",
    video: "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4",
    instructions:
      "Stand in front of the cable machine and grasp the handle with an overhand (pronated, palm facing down) grip, elbows tucked in and bent at a bit less than a 90° angle.",
    muscles: "triceps",
    tips: "",
  },

  {
    id: 7,
    name: "Single-Arm Cable Triceps Extension with Supinated Grip",
    category: "triceps",
    workoutDay: "day1",
    difficulty: "Intermediate",
    duration: "10-12 min",
    image:
      "https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Single-Arm-Cable-Triceps-Extension-with-Supinated-Grip_600x600.png?v=1619978117",
    video: "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4",
    instructions:
      "Stand in front of the cable machine and grasp the handle with an underhand (supinated, palm facing up) grip, elbows tucked in and bent at a bit less than a 90° angle.",
    muscles: "triceps",
    tips: "",
  },

  {
    id: 7,
    name: "Lying Dumbbell Triceps Extension",
    category: "triceps",
    workoutDay: "day1",
    difficulty: "Intermediate",
    duration: "10-12 min",
    image:
      "https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Lying-Dumbbell-Triceps-Extension_600x600.png?v=1619978076",
    video: "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4",
    instructions:
      "Lay back on the bench with your feet firmly on the ground or on the bench. Grab a dumbbell in each hand using a neutral grip (palms facing each other) with your arms extended above your chest.",
    muscles: "triceps",
    tips: "",
  },

  {
    id: 7,
    name: "Seated Barbell French Press",
    category: "triceps",
    workoutDay: "day1",
    difficulty: "Intermediate",
    duration: "10-12 min",
    image:
      "https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Seated-Barbell-French-Press_600x600.png?v=1619978038",
    video: "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4",
    instructions:
      "Sit on an upright bench, back firmly against the benchs back rest, and grab a straight-bar or an EZ-bar with your hands slightly narrower than shoulders width apart. The bar or EZ-bar should be above your head with your arms outstretched and your triceps squeezed.",
    muscles: "triceps",
    tips: "",
  },

  {
    id: 7,
    name: "Bench Dips",
    category: "triceps",
    workoutDay: "day1",
    difficulty: "Intermediate",
    duration: "10-12 min",
    image:
      "https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Bench-Dips_600x600.png?v=1619977992",
    video: "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4",
    instructions:
      "Set up for the bench dip by placing two flat benches parallel to one another to around your legs length. Keeping your back straight and your arms outstretched, place your hands on the edge of one bench at about shoulders width and put your heels on the edge of the other bench, legs and buttocks swinging in the air (see picture).",
    muscles: "triceps and front deltoids",
    tips: "",
  },

  {
    id: 7,
    name: "Parallel Dip Bar",
    category: "triceps",
    workoutDay: "day1",
    difficulty: "Intermediate",
    duration: "10-12 min",
    image:
      "https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Parallel-Dip-Bar_600x600.png?v=1619977962",
    video: "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4",
    instructions:
      "Grasp the two parallel bars, arms outstretched along your torso and knees bent and swinging in the air (see picture).",
    muscles: "triceps, front deltoids and lower chest",
    tips: "",
  },
  


  // Day 3 - Legs Exercises
  {
    id: 25,
    name: "Squat",
    category: "legs",
    workoutDay: "day3",
    difficulty: "Intermediate",
    duration: "15-20 min",
    image:
      "https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Squat_d752e42d-02ba-4692-b300-c6e67ad5a4f5_600x600.png?v=1612138811",
    video: "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4",
    instructions:
      "Standing with the bar resting on your trapezium and shoulders. Grasp the bar with your hands for a good support. Keep your head straight.",
    muscles: "legs and abdominals",
    tips: "",
  },

  {
    id: 25,
    name: "Leg Press",
    category: "legs",
    workoutDay: "day3",
    difficulty: "Intermediate",
    duration: "15-20 min",
    image:
      "https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Leg-Press_f7febd5c-75e5-42f4-9bb4-c938969ce293_600x600.png?v=1612138836",
    video: "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4",
    instructions:
      "Sitting on the press bench, feet flat on the platen, shoulder width apart.",
    muscles: "legs",
    tips: "",
  },

  {
    id: 25,
    name: "Leg Extension",
    category: "legs",
    workoutDay: "day3",
    difficulty: "Intermediate",
    duration: "15-20 min",
    image:
      "https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Leg-Extension_41d91d3f-4b9c-4374-82e2-1d697ce35fe4_600x600.png?v=1612138862",
    video: "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4",
    instructions:
      "Adjust the leg extension so that when you sit down your knees are at the edge of the bench and your ankles are just below the footrest. Sit with your back firmly against the backrest, holding the handles on the sides.",
    muscles: "quadriceps",
    tips: "",
  },

  {
    id: 25,
    name: "Lunge",
    category: "legs",
    workoutDay: "day3",
    difficulty: "Intermediate",
    duration: "15-20 min",
    image:
      "https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Lunge_600x600.png?v=1612138903",
    video: "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4",
    instructions:
      "Standing with legs hip-width apart, one dumbbell in each hand.",
    muscles: "legs",
    tips: "",
  },

  {
    id: 25,
    name: "Lying Leg Curl",
    category: "legs",
    workoutDay: "day3",
    difficulty: "Intermediate",
    duration: "15-20 min",
    image:
      "https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Lying-Leg-Curl_203153d8-79dd-4bb9-9125-708aa4327107_600x600.png?v=1612139013",
    video: "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4",
    instructions:
      "Lie on your stomach on the leg curl lying down machine with the back of your ankles pressed against the footrest. Grasp the handles.",
    muscles: "hamstrings and calves",
    tips: "",
  },

  {
    id: 25,
    name: "Hack Squat",
    category: "legs",
    workoutDay: "day3",
    difficulty: "Intermediate",
    duration: "15-20 min",
    image:
      "https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Hack-Squat_044b3d09-ffa7-4728-b56f-f4fb3c175548_600x600.png?v=1612139060",
    video: "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4",
    instructions:
      "Standing in the hack squat machine, trapezes under the pads, feet on the footrest, shoulder-width apart.",
    muscles: "thigh and buttock muscles",
    tips: "",
  },

  {
    id: 25,
    name: "Seated Leg Curl",
    category: "legs",
    workoutDay: "day3",
    difficulty: "Intermediate",
    duration: "15-20 min",
    image:
      "https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Seated-Leg-Curl_e367789a-bbb3-4144-a926-5a9b42afc278_600x600.png?v=1612139123",
    video: "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4",
    instructions:
      "Adjust the leg curl sitting machine so that when you are sitting, the bottom of your knees are at the edge of the bench and the back of your ankles are just beyond the footrest. Sit with your back firmly against the backrest, holding the handles on the sides.",
    muscles: "hamstrings and calves",
    tips: "",
  },

  {
    id: 25,
    name: "Single Leg Extension",
    category: "legs",
    workoutDay: "day3",
    difficulty: "Intermediate",
    duration: "15-20 min",
    image:
      "https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Single-Leg-Extension_9cf850d1-0b9b-4fb3-8caf-49d438e86db0_600x600.png?v=1612139177",
    video: "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4",
    instructions:
      "Adjust the leg extension so that when you sit, your knee is at the edge of the bench and your ankle is just below the footrest. Sit with your back firmly against the backrest, holding the handles on the sides.",
    muscles: "quadriceps",
    tips: "",
  },

  {
    id: 25,
    name: "Front Squat",
    category: "legs",
    workoutDay: "day3",
    difficulty: "Intermediate",
    duration: "15-20 min",
    image:
      "https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Front-Squat_600x600.png?v=1612049397",
    video: "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4",
    instructions:
      "legs and glute muscles",
    muscles: "Standing with the bar resting on your upper chest and deltoids. Grasp the bar with your hands for a good support. Keep your head straight.",
    tips: "",
  },

  {
    id: 25,
    name: "Dumbbell Stiff-Leg Deadlift",
    category: "legs",
    workoutDay: "day3",
    difficulty: "Intermediate",
    duration: "15-20 min",
    image:
      "https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Dumbbell-Romanian-Deadlift_35135213-e0df-4ef2-b093-22ed8d04dc41_600x600.png?v=1621162896",
    video: "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4",
    instructions:
      "Stand with feet shoulder width apart and toes facing forward. Bend knees slightly and push your chest out. Hold a dumbbell in each hand, resting on your upper thighs.",
    muscles: "legs, glutes and lower back muscles",
    tips: "",
  },

  {
    id: 25,
    name: "Barbell Stiff-Leg Deadlift",
    category: "legs",
    workoutDay: "day3",
    difficulty: "Intermediate",
    duration: "15-20 min",
    image:
      "https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Barbell-Romanian-Deadlift_34ede1b4-63ac-451d-9536-bbf9942b560c_600x600.png?v=1621162957",
    video: "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4",
    instructions:
      "Stand with feet shoulder width apart and toes facing forward. Bend knees slightly and push your chest out. Grasp a barbell resting on your upper thighs, with hands in pronation shoulder width.",
    muscles: "legs, glutes and lower back muscles",
    tips: "",
  },

  {
    id: 25,
    name: "Dumbbell Goblet Squat",
    category: "legs",
    workoutDay: "day3",
    difficulty: "Intermediate",
    duration: "15-20 min",
    image:
      "https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Dumbbell-Goblet-Squat_600x600.png?v=1612049778",
    video: "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4",
    instructions:
      "Stand with feet slightly wider than shoulder-width apart, holding a dumbbell between your hands. Have the dumbbell resting at chest height with hands holding the top of the dumbbell and shoulders pointed down. Push your chest out.",
    muscles: "legs and glutes muscles",
    tips: "",
  },
  

  // Day 7 - Rest & Recovery
  {
    id: 34,
    name: "Light Stretching",
    category: "rest-recovery",
    workoutDay: "day7",
    difficulty: "Beginner",
    duration: "15-20 min",
    image:
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    video: "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4",
    instructions:
      "Perform gentle stretches for all major muscle groups. Hold each stretch for 15-30 seconds. Focus on breathing and relaxation.",
    muscles: "Full Body Recovery",
    tips: "Don't bounce during stretches. Breathe deeply. Listen to your body.",
  },
  {
    id: 35,
    name: "Foam Rolling",
    category: "rest-recovery",
    workoutDay: "day7",
    difficulty: "Beginner",
    duration: "10-15 min",
    image:
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    video: "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4",
    instructions:
      "Use foam roller to massage major muscle groups. Roll slowly and pause on tight spots. Focus on legs, back, and shoulders.",
    muscles: "Muscle Recovery, Myofascial Release",
    tips: "Don't roll over joints. Breathe through discomfort. Great for recovery.",
  },
  {
    id: 36,
    name: "Walking",
    category: "rest-recovery",
    workoutDay: "day7",
    difficulty: "Beginner",
    duration: "20-30 min",
    image:
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    video: "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4",
    instructions:
      "Take a leisurely walk at a comfortable pace. Focus on good posture and steady breathing. Enjoy the movement.",
    muscles: "Cardiovascular System, Legs",
    tips: "Maintain good posture. Breathe steadily. Great active recovery activity.",
  },
];

// DOM Elements
const exercisesGrid = document.getElementById("exercisesGrid");
const filterButtons = document.querySelectorAll(".filter-btn");
const modal = document.getElementById("exerciseModal");
const closeBtn = document.querySelector(".close");
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const photoBtn = document.getElementById("photoBtn");
const videoBtn = document.getElementById("videoBtn");
const exerciseImage = document.getElementById("exerciseImage");
const exerciseVideo = document.getElementById("exerciseVideo");

// Current filter
let currentFilter = "all";

// Initialize the page
document.addEventListener("DOMContentLoaded", function () {
  displayExercises();
  setupEventListeners();
});

// Display exercises based on current filter
function displayExercises() {
  let filteredExercises;

  if (currentFilter === "all") {
    filteredExercises = exercises;
  } else if (currentFilter.startsWith("day")) {
    // Filter by workout day
    filteredExercises = exercises.filter(
      (exercise) => exercise.workoutDay === currentFilter
    );
  } else {
    // Filter by category
    filteredExercises = exercises.filter(
      (exercise) => exercise.category === currentFilter
    );
  }

  exercisesGrid.innerHTML = "";

  filteredExercises.forEach((exercise) => {
    const exerciseCard = createExerciseCard(exercise);
    exercisesGrid.appendChild(exerciseCard);
  });
}

// Create exercise card element
function createExerciseCard(exercise) {
  const card = document.createElement("div");
  card.className = "exercise-card";
  card.innerHTML = `
        <img src="${exercise.image}" alt="${
    exercise.name
  }" class="exercise-image">
        <div class="exercise-content">
            <h3 class="exercise-title">${exercise.name}</h3>
            <div class="exercise-meta">
                <span class="exercise-category">${exercise.category}</span>
                <span class="exercise-difficulty">${exercise.difficulty}</span>
            </div>
            <p class="exercise-description">${exercise.instructions.substring(
              0,
              100
            )}...</p>
        </div>
    `;

  card.addEventListener("click", () => openExerciseModal(exercise));
  return card;
}

// Open exercise modal
function openExerciseModal(exercise) {
  document.getElementById("exerciseTitle").textContent = exercise.name;
  document.getElementById("exerciseCategory").textContent = exercise.category;
  document.getElementById("exerciseDifficulty").textContent =
    exercise.difficulty;
  document.getElementById("exerciseDuration").textContent = exercise.duration;
  document.getElementById("exerciseInstructions").textContent =
    exercise.instructions;
  document.getElementById("exerciseMuscles").textContent = exercise.muscles;
  document.getElementById("exerciseTips").textContent = exercise.tips;

  exerciseImage.src = exercise.image;
  exerciseVideo.src = exercise.video;

  modal.style.display = "block";
  document.body.style.overflow = "hidden";
}

// Close exercise modal
function closeExerciseModal() {
  modal.style.display = "none";
  document.body.style.overflow = "auto";
}

// Toggle between photo and video
function toggleMedia(type) {
  if (type === "photo") {
    exerciseImage.style.display = "block";
    exerciseVideo.style.display = "none";
    photoBtn.classList.add("active");
    videoBtn.classList.remove("active");
  } else {
    exerciseImage.style.display = "none";
    exerciseVideo.style.display = "block";
    videoBtn.classList.add("active");
    photoBtn.classList.remove("active");
  }
}

// Setup event listeners
function setupEventListeners() {
  // Filter buttons
  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const filter = button.getAttribute("data-filter");

      // Update active button
      filterButtons.forEach((btn) => btn.classList.remove("active"));
      button.classList.add("active");

      // Update filter and display
      currentFilter = filter;
      displayExercises();
    });
  });

  // Modal close
  closeBtn.addEventListener("click", closeExerciseModal);

  // Close modal when clicking outside
  window.addEventListener("click", (e) => {
    if (e.target === modal) {
      closeExerciseModal();
    }
  });

  // Media toggle buttons
  photoBtn.addEventListener("click", () => toggleMedia("photo"));
  videoBtn.addEventListener("click", () => toggleMedia("video"));

  // Mobile navigation
  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
  });

  // Close mobile menu when clicking on a link
  document.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", () => {
      hamburger.classList.remove("active");
      navMenu.classList.remove("active");
    });
  });

  // Category cards click
  document.querySelectorAll(".category-card").forEach((card) => {
    card.addEventListener("click", () => {
      const category = card.getAttribute("data-category");

      // Update filter and display
      currentFilter = category;

      // Update active filter button
      filterButtons.forEach((btn) => btn.classList.remove("active"));
      document
        .querySelector(`[data-filter="${category}"]`)
        .classList.add("active");

      // Scroll to exercises section
      document
        .getElementById("exercises")
        .scrollIntoView({ behavior: "smooth" });

      // Display filtered exercises
      displayExercises();
    });
  });

  // Workout day cards click
  document.querySelectorAll(".workout-day-card").forEach((card) => {
    card.addEventListener("click", () => {
      const workoutDay = card.getAttribute("data-category");

      // Update filter and display
      currentFilter = workoutDay;

      // Update active filter button
      filterButtons.forEach((btn) => btn.classList.remove("active"));
      document.querySelector(`[data-filter="all"]`).classList.add("active");

      // Scroll to exercises section
      document
        .getElementById("exercises")
        .scrollIntoView({ behavior: "smooth" });

      // Display filtered exercises
      displayExercises();
    });
  });

  // Smooth scrolling for navigation links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  });
}

// Add some animation on scroll
window.addEventListener("scroll", () => {
  const cards = document.querySelectorAll(".exercise-card, .category-card");
  cards.forEach((card) => {
    const cardTop = card.getBoundingClientRect().top;
    const cardVisible = 150;

    if (cardTop < window.innerHeight - cardVisible) {
      card.style.opacity = "1";
      card.style.transform = "translateY(0)";
    }
  });
});

// Initialize card animations
document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".exercise-card, .category-card");
  cards.forEach((card) => {
    card.style.opacity = "0";
    card.style.transform = "translateY(20px)";
    card.style.transition = "opacity 0.6s ease, transform 0.6s ease";
  });
});
