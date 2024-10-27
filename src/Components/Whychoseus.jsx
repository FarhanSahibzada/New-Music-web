import React from 'react'
import { StickyScroll } from './ui/sticky-scroll-reveal';

function Whychoseus() {

  const content = [
    {
      title: "Seamless Collaboration",
      description:
        "Connect and work with your team effortlessly. Whether you're brainstorming, reviewing, or finalizing tasks, our platform enhances team collaboration, keeping everyone on the same page.",
      image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvamVjdCUyMGNvbGxhYm9yYXRpb258ZW58MHx8MHx8fDA%3D",
    },
    {
      title: "Instant Feedback",
      description:
        "Get feedback and suggestions from team members in real time. Our platform ensures you receive immediate input, helping you improve and iterate faster without waiting for email responses.",
      image: "https://plus.unsplash.com/premium_photo-1682309735318-934795084028?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGZlZWRiYWNrfGVufDB8fDB8fHww", 
    },
    {
      title: "Efficient Project Tracking",
      description:
        "Stay organized with up-to-the-minute tracking of your project’s progress. Monitor tasks, milestones, and deliverables easily, ensuring your project stays on course and within deadlines.",
      image: "https://plus.unsplash.com/premium_photo-1706259481452-f857c96ceaca?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvamVjdCUyMG1hbmFnZW1lbnR8ZW58MHx8MHx8fDA%3D", 
    },
    {
      title: "Content Generation",
      description:
        "Never worry about creating engaging content again. Our platform assists in generating ideas and content that align with your project's goals, helping you maintain a steady flow of information.",
      image: "https://plus.unsplash.com/premium_photo-1663039900507-b428a0be2924?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y29udGVudCUyMGdlbmVyYXRpb258ZW58MHx8MHx8fDA%3D", 
    },
  ];


  return (
    <div  >
      <StickyScroll content={content} />
    </div>
  )
}

export default Whychoseus