import React, { useState } from 'react';
import { useHighContrast } from '../../../components/HighContrastContext';
import './Encourage.css';

const Encourage = () => {
  const { isHighContrast } = useHighContrast();

  const generateRandomPosition = (isPopped) => {
    const maxWidth = isPopped ? 70 : 100;
    const maxHeight = isPopped ? 70 : 100;
    return {
      top: `${Math.random() * maxHeight}%`,
      left: `${Math.random() * maxWidth}%`,
      transform: 'translate(-50%, -50%)',
    };
  };

  const [bubbles, setBubbles] = useState([
    {
      id: 1,
      content: "If people say how can you live with blindness.",
      poppedContent: "<h1 style={{color: 'red'}}>“I lived, bitch.”</h1> <h2>Blindness is just a part of your life. Keep moving forward. Make people's mouths shout and watch you become the GOAT.</h2>",
      popped: false,
      style: generateRandomPosition(false),
    },
    {
      id: 2,
      content: "You have a name other than BLIND",
      poppedContent: "<h1 style={{color: 'red'}}>“Don’t let your disability be your personality.”</h1> <h2>Don’t be afraid of trying more times than others. You know you can earn it. Let others remember your name, not a stupid label.</h2>",
      popped: false,
      style: generateRandomPosition(false),
    },
    {
      id: 3,
      content: "Don't let sight loss destroy you",
      poppedContent: "<h1 style={{color: 'red'}}>“If you see sight loss as devastating, it will be devastating.”</h1> <h2>We only live once. Sometimes, the burden of reality is suffocating. But you still can choose not to be devastated and find something valuable in your life.</h2>",
      popped: false,
      style: generateRandomPosition(false),
    },
    {
      id: 4,
      content: "When you feel lonely",
      poppedContent: "<h1 style={{color: 'red'}}>“I’m not the first and I won’t be the last.”</h1> <h2>Some hardships are inevitable, but we don't have to face them alone. With connections and community, we can always find the bright part in the darkest days.</h2>",
      popped: false,
      style: generateRandomPosition(false),
    },
    {
      id: 5,
      content: "Whether you are sighted or visually impaired",
      poppedContent: "<h1 style={{color: 'red'}}>“You might be the envy of others.”</h1> <h2>What you want to let go of could be something others desperately wish for. Don’t choose to be a coward. The cards are in your hands. Hold on to them tightly and play them wisely.</h2>",
      popped: false,
      style: generateRandomPosition(false),
    },
    {
      id: 6,
      content: "If you need the courage to begin your journey",
      poppedContent: "<h1 style={{color: 'red'}}>“Little by little, the bird builds his nest.”</h1> <h2>Rome wasn’t built in a day. Under the new rules, you are building your own castle. Be patient and confident. Like a bird, let's build it little by little.</h2>",
      popped: false,
      style: generateRandomPosition(false),
    },
    {
      id: 7,
      content: "If people underestimate your ability",
      poppedContent: "<h1 style={{color: 'red'}}>“Lack of sight doesn’t equate to lack of intelligence.”</h1> <h2>Don’t let others tell you what you can do. If you want to go to Princeton for physics and math, your path is clearer than most.</h2>",
      popped: false,
      style: generateRandomPosition(false),
    },
    {
      id: 8,
      content: "When you're stuck in your room",
      poppedContent: "<h1 style={{color: 'red'}}>“Go to school or stay and be a couch potato.”</h1> <h2>Imagine sinking into your couch and letting your family handle all your daily tasks for forty years. If that's not the future you want, then get up and take action.</h2>",
      popped: false,
      style: generateRandomPosition(false),
    },
    {
      id: 9,
      content: "You know what blind people lose but never miss?",
      poppedContent: "<h1 style={{color: 'red'}}>“The ability to be shallow.”</h1> <h2>Blind people don’t judge others by their appearance. Visually impaired individuals can both give and receive love. Personality is their primary criterion, not appearance.</h2>",
      popped: false,
      style: generateRandomPosition(false),
    },
    {
      id: 10,
      content: "Don’t think too much about how you were born",
      poppedContent: "<h1 style={{color: 'red'}}>“We’re all dead in the end.”</h1> <h2>However we begin our life, it becomes truly fulfilling if we can proudly say 'I have lived'</h2>",
      popped: false,
      style: generateRandomPosition(false),
    },
  ]);

  const handleBubbleClick = (id) => {
    const updatedBubbles = bubbles.map((bubble) =>
      bubble.id === id
        ? {
            ...bubble,
            popped: !bubble.popped,
            style: generateRandomPosition(!bubble.popped),
          }
        : bubble
    );
    setBubbles(updatedBubbles);
    playBurstSound(); // 播放爆破音效
  };

  const playBurstSound = () => {
    const audio = new Audio(`${process.env.PUBLIC_URL}/burst.mp3`);
    audio.volume = 1; 
    audio.play();
  };

  return (
    <div className={`encourage-page ${isHighContrast ? 'high-contrast' : ''}`}>
      <div className="page-header">
        <h1>Encouragement</h1>
        <p>Click on the bubble to break the nonsense.</p>
      </div>
      <div className="bubble-container">
        <div className="background-overlay"></div>
        {bubbles.map((bubble) => (
          <div
            key={bubble.id}
            className={`bubble ${bubble.popped ? 'popped' : ''}`}
            style={bubble.style}
            onClick={() => handleBubbleClick(bubble.id)}
          >
            <div className="bubble-overlay">
              <div className="bubble-content">
                {bubble.popped ? (
                  <div dangerouslySetInnerHTML={{ __html: bubble.poppedContent }} />
                ) : (
                  <p>{bubble.content}</p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Encourage;