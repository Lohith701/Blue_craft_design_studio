import React, { useState, useEffect, useCallback } from 'react';
import ReactDOM from 'react-dom';
import { X, ChevronRight, ChevronLeft } from 'lucide-react';
import './ProjectModal.css';

const ProjectModal = ({ project, onClose }) => {
  const [activeIdx, setActiveIdx] = useState(0);
  const [fading, setFading]       = useState(false);

  /* ── Switch image with a brief fade ── */
  const switchTo = useCallback((idx) => {
    if (idx === activeIdx) return;
    setFading(true);
    setTimeout(() => {
      setActiveIdx(idx);
      setFading(false);
    }, 160);
  }, [activeIdx]);

  const prev = () => switchTo((activeIdx - 1 + project.images.length) % project.images.length);
  const next = () => switchTo((activeIdx + 1) % project.images.length);

  /* ── ESC to close ── */
  useEffect(() => {
    const handler = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [onClose]);

  /* ── Lock body scroll ── */
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = ''; };
  }, []);

  const modal = (
    <div className="pm-backdrop" onClick={onClose}>
      <div className="pm-panel" onClick={(e) => e.stopPropagation()}>

        {/* ── Close button ── */}
        <button className="pm-close" onClick={onClose} aria-label="Close">
          <X size={18} />
        </button>

        {/* ── Main image area ── */}
        <div className="pm-main-wrap">
          <img
            key={activeIdx}
            src={project.images[activeIdx]}
            alt={`${project.title} view ${activeIdx + 1}`}
            className={`pm-main-img ${fading ? 'pm-fading' : ''}`}
          />

          {/* Prev arrow */}
          {project.images.length > 1 && (
            <button className="pm-arrow pm-arrow-left" onClick={prev} aria-label="Previous">
              <ChevronLeft size={22} />
            </button>
          )}

          {/* Next arrow */}
          {project.images.length > 1 && (
            <button className="pm-arrow pm-arrow-right" onClick={next} aria-label="Next">
              <ChevronRight size={22} />
            </button>
          )}
        </div>

        {/* ── Thumbnail strip ── */}
        {project.images.length > 1 && (
          <div className="pm-thumbs">
            {project.images.map((img, idx) => (
              <button
                key={idx}
                className={`pm-thumb ${idx === activeIdx ? 'pm-thumb-active' : ''}`}
                onClick={() => switchTo(idx)}
                aria-label={`Image ${idx + 1}`}
              >
                <img src={img} alt={`thumb-${idx + 1}`} />
              </button>
            ))}
          </div>
        )}

      </div>
    </div>
  );

  /* Render straight into document.body via Portal — bypasses any stacking context */
  return ReactDOM.createPortal(modal, document.body);
};

export default ProjectModal;
