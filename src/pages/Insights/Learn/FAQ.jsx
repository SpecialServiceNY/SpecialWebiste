import React from 'react';
import FaqCard from './FaqCard';
import './FAQ.css';

const FAQ = () => (
  <div className="faq-page">
    <FaqCard
      question="WHAT DO BLIND PEOPLE SEE?"
      answer={
        <>
          <p>
            Most blind people have some level of vision, but what they can see differs from person to person. Some may only see the light. Others may see blurry shapes, figures, or colors.
          </p>
          <p>
            For those people who are blind from birth, they do not have a visual sense at all. They don’t see black - they don’t SEE anything at all. Imagine how you SEE out of your elbow. Nothing, right?
          </p>
        </>
      }
    />
    <FaqCard
      question="CAN A BLIND PERSON GET THEIR VISION BACK?"
      answer={
        <>
          <p>
            Four out of five cases of vision loss or vision impairment are from avoidable causes, which means that they are treatable or preventable if detected sooner rather than later. However, sometimes it isn’t possible for someone with vision loss to get their eyesight back.
          </p>
          <p>
            But don’t assume all blind persons want their vision to be back. Being blind can be pretty chill. Blind people can do the same stuff as sighted people - play sports and video games, work a variety of jobs, dance, read, make art, travel - and can also make blind jokes CONSTANTLY.
          </p>
        </>
      }
    />
    <FaqCard
      question="DO BLIND PEOPLE HAVE STRONGER SENSES?"
      answer={
        <>
          <p>
            A large amount of conditions for vision loss are associated with aging. So now ask yourself, do elderly people tend to have better hearing or worse hearing than younger people? Even people who are congenitally blind don’t have enhanced senses from birth.
          </p>
          <p>
            But humans’ brains are incredibly flexible and adaptable. When one sense is missing, the brain often focuses its attention and resources on developing the remaining senses. This can lead to a higher level of sensitivity and awareness in these areas. However, years of practice are still needed to have a stronger sense.
          </p>
        </>
      }
    />
    <FaqCard
      question="HOW CAN BLIND PEOPLE EXPERIENCE ART?"
      answer={
        <>
          <p>
            Blind people experience art through various senses beyond vision. They listen to music, feel textures of pottery or clothing, and even taste food as forms of art.
          </p>
          <p>
            Special techniques like using puffy paint or tactile printing allow them to create and appreciate visual art through touch. Some art museums also feature exhibits with tactile representations for blind visitors, making art accessible through tactile experiences. Despite visual limitations, blind individuals can engage in painting and photography, adapting methods to suit their abilities and preferences.
          </p>
        </>
      }
    />
  </div>
);

export default FAQ;