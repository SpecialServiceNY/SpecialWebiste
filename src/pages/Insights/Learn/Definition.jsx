import React, { useState } from 'react';
import { useHighContrast } from '../../../components/HighContrastContext';
import './Definition.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearchPlus } from '@fortawesome/free-solid-svg-icons';

const Definition = () => {
  const { isHighContrast } = useHighContrast();
  const [showVideoAcuity, setShowVideoAcuity] = useState(false);
  const [showVideoPeripheral, setShowVideoPeripheral] = useState(false);
  const [isImageZoomed, setIsImageZoomed] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [dragging, setDragging] = useState(false);

  const handleWatchVideoClickAcuity = () => {
    setShowVideoAcuity(!showVideoAcuity);
  };

  const handleWatchVideoClickPeripheral = () => {
    setShowVideoPeripheral(!showVideoPeripheral);
  };

  const handleImageZoomToggle = () => {
    setIsImageZoomed(!isImageZoomed);
    setDragging(false); // Reset dragging state when zoom is toggled
  };

  const handleMouseDown = (e) => {
    if (isImageZoomed) {
      setDragging(true);
      setDragStart({ x: e.clientX, y: e.clientY });
    }
  };

  const handleMouseMove = (e) => {
    if (dragging) {
      const img = document.querySelector('.chart-image.zoomed');
      if (img) {
        img.scrollLeft -= (e.clientX - dragStart.x);
        img.scrollTop -= (e.clientY - dragStart.y);
        setDragStart({ x: e.clientX, y: e.clientY });
      }
    }
  };

  const handleMouseUp = () => {
    setDragging(false);
  };

  return (
    <div className={`legally-blind-container ${isHighContrast ? 'high-contrast' : ''}`}>
      <h1 className="title">Definition of Legally Blindness</h1>
      <div className="intro">
        <p className="intro-text">
          “Legally Blind” is a term that was developed to designate people with vision loss severe enough to qualify for government assistance. The term does not indicate total blindness.
        </p>
        <p className="intro-text highlighted">
          There are two components to legal blindness: 
          <span style={{ color: 'red', fontWeight: 'bold', fontSize: '24px' }}> visual acuity </span> 
          and 
          <span style={{ color: 'red', fontWeight: 'bold', fontSize: '24px' }}> peripheral vision </span>.
        </p>
      </div>
      <div className="content-container">
        <div className="content-card">
          <h2 className="subtitle">Visual Acuity</h2>
          {!showVideoAcuity ? (
            <>
              <p>
                20/20 vision is considered normal visual acuity. Corrected visual acuity, the most meaningful measurement, means the measurement of your vision with glasses and/or contact lenses.
              </p>
              <p>
                Uncorrected visual acuity (sans glasses/contacts) doesn’t really provide us with much useful information.
              </p>
              <p>
                Visual acuity is a measurement of the “sharpness” or clarity of your vision. Other components of “vision” include depth perception, color vision and peripheral vision (aka side vision).
              </p>
              <p>
                <strong>What Does 20/20 Mean?</strong>
              </p>
              <div className="image-container">
                <img
                  src="https://atlanticeyeinstitute.com/wp-content/uploads/2022/11/history-of-the-eye-chart.jpg"
                  alt="History of the Eye Chart"
                  className={`chart-image ${isImageZoomed ? 'zoomed' : ''}`}
                  onClick={handleImageZoomToggle}
                  onMouseDown={handleMouseDown}
                  onMouseMove={handleMouseMove}
                  onMouseUp={handleMouseUp}
                  onMouseLeave={handleMouseUp} // Ensure dragging stops when mouse leaves the image
                />
                {isImageZoomed && (
                  <div className="zoom-icon" onClick={handleImageZoomToggle}>
                    <FontAwesomeIcon icon={faSearchPlus} />
                  </div>
                )}
              </div>
              <p>
                The standard distance for measuring visual acuity is 20 feet.
              </p>
              <p>
                A person who has “normal” acuity is able to see the 20/20 line on the chart standing 20 feet away. In other words, a patient with 20/20 vision does not have to get any closer to the chart compared to other patients with “normal” vision.
              </p>
              <p>
                A person with 20/100 visual acuity must stand closer to the chart. For example, if I have 20/100 vision, I must stand at 20 feet to see what “normal” sighted individuals can read at 100 feet away.
              </p>
              <p>
                Conversely, if I have 20/15 vision (better than 20/20), I can stand at 20 feet while someone with 20/20 vision must be 15 feet from the chart (closer).
              </p>
              <p>
                <strong>Snellen Chart</strong>
              </p>
              <p>
                The Snellen chart, developed by Dutch ophthalmologist Herman Snellen in the 1860s, is the most common chart used for assessing visual acuity. It consists of letters arranged in decreasing size, used to measure how well you can see at various distances.
              </p>
            </>
          ) : (
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/0DUncwFDvlw?si=b66745alOoa74GiZ"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          )}
          {showVideoAcuity ? (
            <button className="toggle-video-button" onClick={handleWatchVideoClickAcuity}>
              Read Text
            </button>
          ) : (
            <button className="toggle-video-button" onClick={handleWatchVideoClickAcuity}>
              Watch Video
            </button>
          )}
        </div>
        <div className="content-card">
          <h2 className="subtitle">Peripheral Vision</h2>
          {!showVideoPeripheral ? (
            <>
              <p>
                Peripheral vision refers to what you can see to each side or up and down without moving your head, or everything that you can see that isn’t in your central vision. Your central vision is what you see that’s directly in front of you.
              </p>
              <div className="vision-images">
                <img
                  src="https://www.researchgate.net/publication/331409336/figure/fig1/AS:731322385448961@1551372252440/Human-field-of-view-FOV-for-both-eyes-showing-different-levels-of-peripheral-vision.ppm"
                  alt="Peripheral Vision"
                  className="vision-image"
                />
              </div>
              <p>
                If you’ve ever seen something “out of the corner of your eye,” you’re talking about your peripheral vision. Indirect vision is another term for peripheral vision.
              </p>
              <p>
                Your central vision is generally clearer than your peripheral vision because your eyes focus on what they’re looking at.
              </p>
              <p>
                Your visual field is everything you can see — it includes peripheral and central vision.
              </p>
              <div className="vision-images">
                <img
                  src="https://images.ctfassets.net/u4vv676b8z52/i9WX9eYxVm5flEyF77W9R/d6bcf619af52e8fa650c8f5d860cdd76/peripheral_hero.jpeg?fm=jpg&q=80"
                  alt="Peripheral Vision"
                  className="vision-image"
                />
              </div>
            </>
          ) : (
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/bLjUuz9SzgY?si=z6xOkASZbHNUc_4p"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          )}
          {showVideoPeripheral ? (
            <button className="toggle-video-button" onClick={handleWatchVideoClickPeripheral}>
              Read Text
            </button>
          ) : (
            <button className="toggle-video-button" onClick={handleWatchVideoClickPeripheral}>
              Watch Video
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Definition;