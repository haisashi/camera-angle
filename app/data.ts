// app/data.ts

export type CameraAngle = {
  id: number;
  title: string;
  description: string;
  imageUrl: string; // We will use placeholders for now
};

export const cameraAngles: CameraAngle[] = [
  {
    id: 1,
    title: "Low Angle",
    description: "Camera is below the subject's eyeline looking up. Makes the subject look powerful or threatening.",
    imageUrl: "/images/low-angle.png",
  },
  {
    id: 2,
    title: "High Angle",
    description: "Camera is above the subject looking down. Makes the subject appear weak, vulnerable, or small.",
    imageUrl: "/images/high-angle.png",
  },
  {
    id: 3,
    title: "Overhead Shot",
    description: "Directly above the subject (90 degrees), also known as Bird's-Eye View. Shows complex movements or geography.",
    imageUrl: "/images/overhead-shot.png",
  },
  {
    id: 4,
    title: "Dutch Angle",
    description: "Skews the horizontal axis. Creates a sense of unease, mania, or tension.",
    imageUrl: "/images/dutch-angle.png",
  },
  {
    id: 5,
    title: "Eye Level Shot",
    description: "The most natural height. Does not impose judgment and creates an instant connection with the character.",
    imageUrl: "/images/eye-level-shot.png",
  },
  {
    id: 6,
    title: "Shoulder Level Shot",
    description: "Slightly lower than eye level. Often used in conversations and over-the-shoulder (OTS) shots.",
    imageUrl: "/images/shoulder-level-shot.png",
  },
  {
    id: 7,
    title: "Hip Level Shot",
    description: "Camera at hip height. Iconic in Westerns to show gun holsters and build tension.",
    imageUrl: "/images/hip-level-shot.png",
  },
  {
    id: 8,
    title: "Knee Level Shot",
    description: "Camera at knee height. Great for tracking movement or showing details missed in wider shots.",
    imageUrl: "/images/knee-level-shot.png",
  },
  {
    id: 9,
    title: "Ground Level Shot",
    description: "Camera placed on or slightly below the ground. Adds style to tracking shots or captures specific details.",
    imageUrl: "/images/ground-level-shot.png",
  },
];