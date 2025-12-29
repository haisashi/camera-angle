
export type WikiItem = {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
};

export type Category = {
  slug: string;
  title: string;
  description: string;
  items: WikiItem[];
};

export const filmData: Record<string, Category> = {
  "shot-sizes": {
    slug: "shot-sizes",
    title: "Shot Sizes",
    description: "How much of the subject and environment is visible.",
    items: [
      { id: 1, title: "Establishing Shot", description: "Wide enough to establish geography, time, and scale.", imageUrl: "/images/sizes/establishing.png" },
      { id: 2, title: "Master Shot", description: "Captures the scene entirely, clarifying character positions.", imageUrl: "/images/sizes/master.png" },
      { id: 3, title: "Wide Shot (WS)", description: "Positions subjects far away to show relationship to environment.", imageUrl: "/images/sizes/wide.png" },
      { id: 4, title: "Full Shot (FS)", description: "Subject's entire body from head to toe.", imageUrl: "/images/sizes/full.png" },
      { id: 5, title: "Cowboy Shot", description: "Thighs up. Originates from Westerns to show gun holsters.", imageUrl: "/images/sizes/cowboy.png" },
      { id: 6, title: "Medium Shot (MS)", description: "Waist up. Neutral, natural, and most common.", imageUrl: "/images/sizes/medium.png" },
      { id: 7, title: "Medium Close Up (MCU)", description: "Chest up. Prioritizes story details over environment.", imageUrl: "/images/sizes/mcu.png" },
      { id: 8, title: "Close Up (CU)", description: "Face only. Powerful weapon for emotion.", imageUrl: "/images/sizes/closeup.png" },
      { id: 9, title: "Extreme Close Up (ECU)", description: "Isolates a specific detail like eyes or lips.", imageUrl: "/images/sizes/ecu.png" },
    ]
  },
  "framing": {
    slug: "framing",
    title: "Framing",
    description: "How subjects are positioned and organized within the frame.",
    items: [
      { 
        id: 1, 
        title: "Clean Single", 
        description: "One character alone in the frame. No part of anyone else is visible. Convey's isolation.", 
        imageUrl: "/images/framing/clean-single.png" 
      },
      { 
        id: 2, 
        title: "Dirty Single", 
        description: "One character focused, but a blurry part of another character is visible. Shows connection.", 
        imageUrl: "/images/framing/dirty-single.png" 
      },
      { 
        id: 3, 
        title: "Two Shot", 
        description: "Two characters visible. Establishes a visual relationship (affectionate or contentious).", 
        imageUrl: "/images/framing/two-shot.png" 
      },
      { 
        id: 4, 
        title: "Crowd Shot (Three/Four/Five)", 
        description: "Three or more characters. Shows group dynamics or chaos.", 
        imageUrl: "/images/framing/crowd-shot.png" 
      },
      { 
        id: 5, 
        title: "Over-the-Shoulder (OTS)", 
        description: "Looking over a character's shoulder at another. Standard for conversation.", 
        imageUrl: "/images/framing/ots.png" 
      },
      { 
        id: 6, 
        title: "Point of View (POV)", 
        description: "Camera sees exactly what the character sees. Immerses the audience.", 
        imageUrl: "/images/framing/pov.png" 
      },
      { 
        id: 7, 
        title: "Insert Shot", 
        description: "Tight focus on a specific detail or prop crucial to the narrative.", 
        imageUrl: "/images/framing/insert.png" 
      },
    ]
  },
  "camera-angles": {
    slug: "camera-angles",
    title: "Camera Angles",
    description: " The height and angle of the camera in relation to the subject.",
    items: [
      { id: 1, title: "Low Angle", description: "Looking up at subject. Makes them look powerful.", imageUrl: "/images/angles/low.png" },
      { id: 2, title: "High Angle", description: "Looking down. Makes subject look weak or vulnerable.", imageUrl: "/images/angles/high.png" },
      { id: 3, title: "Overhead / God's Eye", description: "Directly 90 degrees above. Shows geometry or divine view.", imageUrl: "/images/angles/overhead.png" },
      { id: 4, title: "Dutch Angle", description: "Tilted horizon. Creates unease, mania, or tension.", imageUrl: "/images/angles/dutch.png" },
      { id: 5, title: "Eye Level", description: "Neutral perspective. Creates connection and intimacy.", imageUrl: "/images/angles/eye.png" },
      { id: 6, title: "Shoulder Level", description: "Slightly lower than eye. Standard for conversations.", imageUrl: "/images/angles/shoulder.png" },
      { id: 7, title: "Hip Level", description: "Camera at hip height. Stylish and action-oriented.", imageUrl: "/images/angles/hip.png" },
      { id: 8, title: "Knee Level", description: "Low height to track movement or show details.", imageUrl: "/images/angles/knee.png" },
      { id: 9, title: "Ground Level", description: "Camera on floor. Captures footwork or intense detail.", imageUrl: "/images/angles/ground.png" },
    ]
  },
  "depth-of-field": {
    slug: "depth-of-field",
    title: "Depth of Field",
    description: "The range of distance that appears acceptably sharp. Controls where the audience looks.",
    items: [
      { 
        id: 1, 
        title: "Deep Focus", 
        description: "Everything from foreground to background is crisp. Allows the eye to explore the entire scene.", 
        imageUrl: "/images/focus/deep.png" 
      },
      { 
        id: 2, 
        title: "Shallow Focus", 
        description: "Only a specific slice is sharp; the rest is blurry. Isolates the subject from the environment.", 
        imageUrl: "/images/focus/shallow.png" 
      },
      { 
        id: 3, 
        title: "Soft Focus", 
        description: "Nothing is 100% sharp. Creates a dreamy, nostalgic, or surreal atmosphere.", 
        imageUrl: "/images/focus/soft.png" 
      },
      { 
        id: 4, 
        title: "Rack Focus", 
        description: "Changing focus from one subject to another within the same shot. Directs attention actively.", 
        imageUrl: "/images/focus/rack.png" 
      },
      { 
        id: 5, 
        title: "Split Diopter", 
        description: "Two separate focal points are sharp (foreground & background) with a blur in the middle.", 
        imageUrl: "/images/focus/split.png" 
      },
      { 
        id: 6, 
        title: "Tilt Shift", 
        description: "Manipulates the plane of focus. Can make real life look like a miniature model.", 
        imageUrl: "/images/focus/tilt.png" 
      },
    ]
  },
  "camera-gear": {
    slug: "camera-gear",
    title: "Camera Gear",
    description: "The rigs and machinery used to support the camera.",
    items: [
      { id: 1, title: "Handheld", description: "Carried by operator. Adds grit, intimacy, or chaos.", imageUrl: "/images/gear/handheld.png" },
      { id: 2, title: "Tripod (Sticks)", description: "Fixed support. Good for static shots or smooth pans.", imageUrl: "/images/gear/tripod.png" },
      { id: 3, title: "Pedestal", description: "Moves vertically up/down. Used for TV or revealing details.", imageUrl: "/images/gear/pedestal.png" },
      { id: 4, title: "Crane / Jib", description: "Large arm for sweeping high/low movements.", imageUrl: "/images/gear/crane.png" },
      { id: 5, title: "Overhead Rig", description: "Mounts camera directly above for top-down views.", imageUrl: "/images/gear/overhead-rig.png" },
      { id: 6, title: "Dolly", description: "Wheeled cart on tracks. Smooth motion towards/away from subject.", imageUrl: "/images/gear/dolly.png" },
      { id: 7, title: "Stabilizer / Steadicam", description: "Isolates camera from operator movement for smooth flow.", imageUrl: "/images/gear/steadicam.png" },
      { id: 8, title: "Snorricam", description: "Rigged to actor's body. Faces them, creating dizziness.", imageUrl: "/images/gear/snorricam.png" },
      { id: 9, title: "Vehicle Mount", description: "Attached to car/plane. Captures speed and realism.", imageUrl: "/images/gear/vehicle.png" },
      { id: 10, title: "Drone", description: "Aerial shots. Establish scale or chase action.", imageUrl: "/images/gear/drone.png" },
    ]
  },
  "camera-movement": {
    slug: "camera-movement",
    title: "Camera Movement",
    description: "How the camera moves through space.",
    items: [
      { id: 1, title: "Static Shot", description: "No movement. Allows acting or composition to shine.", imageUrl: "/images/movement/static.png" },
      { id: 2, title: "Pan / Whip Pan", description: "Horizontal rotation. Whip pans create energy.", imageUrl: "/images/movement/pan.png" },
      { id: 3, title: "Tilt", description: "Vertical rotation up or down. Reveals height or scale.", imageUrl: "/images/movement/tilt.png" },
      { id: 4, title: "Push In", description: "Physically moving closer. Emphasizes importance.", imageUrl: "/images/movement/pushin.png" },
      { id: 5, title: "Pull Out", description: "Physically moving back. Reveals context or isolation.", imageUrl: "/images/movement/pullout.png" },
      { id: 6, title: "Zoom / Crash Zoom", description: "Lens movement (not physical). Focuses attention.", imageUrl: "/images/movement/zoom.png" },
      { id: 7, title: "Dolly Zoom", description: "Zooming while moving opposite. Creates vertigo effect.", imageUrl: "/images/movement/dollyzoom.png" },
      { id: 8, title: "Tracking Shot", description: "Moving with the subject (usually forward/backward).", imageUrl: "/images/movement/tracking.png" },
      { id: 9, title: "Trucking Shot", description: "Moving laterally left or right (side-stepping).", imageUrl: "/images/movement/trucking.png" },
      { id: 10, title: "Arc Shot", description: "Orbiting 360 degrees around a subject.", imageUrl: "/images/movement/arc.png" },
      { id: 11, title: "Boom Shot", description: "Vertical camera movement (up/down) through space.", imageUrl: "/images/movement/boom.png" },
      { id: 12, title: "Camera Roll", description: "Rotating the camera on its axis. Disorienting.", imageUrl: "/images/movement/roll.png" },
      { id: 13, title: "Random Movement", description: "Camera shake or handheld vibration. Creates chaos or realism.", imageUrl: "/images/movement/random.png" },
    ]
  },
  "lenses": {
    slug: "lenses",
    title: "Camera Lenses",
    description: "The glass that determines field of view and compression.",
    items: [
      { id: 1, title: "Extreme Wide Angle", description: "18-24mm. Distorts edges, captures vast landscapes.", imageUrl: "/images/lenses/extreme-wide.png" },
      { id: 2, title: "Wide Angle", description: "24-35mm. Accentuates movement and depth.", imageUrl: "/images/lenses/wide.png" },
      { id: 3, title: "Standard Lens", description: "35-50mm. Matches human eye. Natural look.", imageUrl: "/images/lenses/standard.png" },
      { id: 4, title: "Telephoto", description: "70mm+. Compresses space, isolates subject, blurs background.", imageUrl: "/images/lenses/telephoto.png" },
      { id: 5, title: "Macro", description: "Extreme close focus for textures and tiny details.", imageUrl: "/images/lenses/macro.png" },
      { id: 6, title: "Tilt Shift", description: "Manipulates focus plane. Creates 'miniature' effect.", imageUrl: "/images/lenses/tiltshift.png" },
    ]
  },
  "frame-rate": {
    slug: "frame-rate",
    title: "Frame Rate",
    description: "The speed at which images are recorded and played.",
    items: [
      { id: 1, title: "24 FPS", description: "The cinematic standard. Feels like a movie.", imageUrl: "/images/framerate/24fps.png" },
      { id: 2, title: "Higher FPS (48/60/120)", description: "Hyper-realistic, smooth. Used for sports or reality.", imageUrl: "/images/framerate/highfps.png" },
      { id: 3, title: "Fast Motion (Undercrank)", description: "Shooting lower FPS playback. Choppy, chaotic action.", imageUrl: "/images/framerate/fastmotion.png" },
      { id: 4, title: "Slow Motion (Overcrank)", description: "Shooting high FPS. Emphasizes emotion or action details.", imageUrl: "/images/framerate/slowmotion.png" },
      { id: 5, title: "Speed Ramp", description: "Changing frame rate mid-shot for dramatic effect.", imageUrl: "/images/framerate/ramp.png" },
    ]
  },
  "transitions": {
    slug: "transitions",
    title: "Editing Transitions",
    description: "How we move from one scene to another.",
    items: [
      { id: 1, title: "The Cut", description: "Instant switch. The most fundamental transition.", imageUrl: "/images/transitions/cut.png" },
      { id: 2, title: "Fade (Black/White)", description: "Gradual transition to color. Signals beginning/end.", imageUrl: "/images/transitions/fade.png" },
      { id: 3, title: "Dissolve", description: "One shot blends into another. Suggests time passage.", imageUrl: "/images/transitions/dissolve.png" },
      { id: 4, title: "Match Cut", description: "Connecting scenes via similar shapes, actions, or audio.", imageUrl: "/images/transitions/match.png" },
      { id: 5, title: "Wipe / Pass By", description: "Shape or object moves across screen to reveal next shot.", imageUrl: "/images/transitions/wipe.png" },
      { id: 6, title: "Smash Cut", description: "Abrupt cut between quiet/loud or still/chaotic.", imageUrl: "/images/transitions/smash.png" },
      { id: 7, title: "J-Cut / L-Cut", description: "Audio from next/prev scene overlaps the visual cut.", imageUrl: "/images/transitions/jlcut.png" },
    ]
  },
  "editing-techniques": {
    slug: "editing-techniques",
    title: "Editing Techniques",
    description: "Methods used within a scene to shape the story.",
    items: [
      { id: 1, title: "Eyeline Match", description: "Cutting to what the character is looking at.", imageUrl: "/images/editing/eyeline.png" },
      { id: 2, title: "Cross Cutting", description: "Alternating between two simultaneous scenes.", imageUrl: "/images/editing/crosscut.png" },
      { id: 3, title: "Eye Trace", description: "Matching focal points so viewer's eye doesn't hunt.", imageUrl: "/images/editing/eyetrace.png" },
      { id: 4, title: "Montage", description: "Juxtaposing unrelated images to create new meaning.", imageUrl: "/images/editing/montage.png" },
      { id: 5, title: "Cut on Action", description: "Cutting during movement to hide the edit.", imageUrl: "/images/editing/action.png" },
      { id: 6, title: "Jump Cut", description: "Cutting time within the same shot. Jarring effect.", imageUrl: "/images/editing/jump.png" },
    ]
  },
  "composition": {
    slug: "composition",
    title: "Composition",
    description: "The arrangement of elements within the frame.",
    items: [
      { id: 1, title: "Rule of Thirds", description: "Placing subjects on grid intersections.", imageUrl: "/images/composition/thirds.png" },
      { id: 2, title: "Leading Lines", description: "Lines guiding the eye to the subject.", imageUrl: "/images/composition/lines.png" },
      { id: 3, title: "Negative Space", description: "Empty space around subject. Creates isolation or balance.", imageUrl: "/images/composition/negative.png" },
      { id: 4, title: "Depth", description: "Using Foreground, Midground, Background layers.", imageUrl: "/images/composition/depth.png" },
      { id: 5, title: "Symmetry", description: "Perfect balance. Suggests order or artificiality.", imageUrl: "/images/composition/symmetry.png" },
      { id: 6, title: "Frame within a Frame", description: "Using objects to create a frame around the subject.", imageUrl: "/images/composition/frame.png" },
    ]
  },
  "lighting": {
    slug: "lighting",
    title: "Lighting",
    description: "Controlling light to set mood and exposure.",
    items: [
      { id: 1, title: "Hard Light", description: "Defined shadows. Intense, dramatic.", imageUrl: "/images/lighting/hard.png" },
      { id: 2, title: "Soft Light", description: "Diffused shadows. Flattering, romantic.", imageUrl: "/images/lighting/soft.png" },
      { id: 3, title: "High Key", description: "Bright, low contrast. Happy or sterile.", imageUrl: "/images/lighting/highkey.png" },
      { id: 4, title: "Low Key / Chiaroscuro", description: "Dark, high contrast. Mystery and drama.", imageUrl: "/images/lighting/lowkey.png" },
      { id: 5, title: "Practical Light", description: "Source visible in frame (lamps, candles).", imageUrl: "/images/lighting/practical.png" },
      { id: 6, title: "Motivated Light", description: "Imitating a natural source (e.g., moonlight).", imageUrl: "/images/lighting/motivated.png" },
    ]
  }
};