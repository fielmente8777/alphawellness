"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { X, BedDouble, UtensilsCrossed, Sparkles, ShoppingCart } from "lucide-react";

interface OfferPopupProps {
  imageSrc?: string;
  price?: string;
  onBookNow?: () => void;
}

const OfferPopup = ({
  imageSrc = "/popup_1_11zon.jpg",
  price = "₹10,999",
  onBookNow,
}: OfferPopupProps) => {
  // Use a ref instead of a plain variable so the "dismissed" flag
  // survives re-renders without triggering them.
  const hasBeenDismissed = useRef(false);
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (hasBeenDismissed.current) return;
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 10000); // 10 seconds
    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    hasBeenDismissed.current = true;
  };

  if (!isOpen || !mounted) return null;

  return createPortal(
    <div className="op-overlay">
      <div className="op-card">
        <button
          onClick={handleClose}
          type="button"
          aria-label="Close popup"
          className="op-close"
        >
          <X size={16} />
        </button>

        {/* LEFT: content */}
        <div className="op-content">
          <span className="op-badge">Limited-Time Offer</span>

          <h2 className="op-title">Limited Rooms</h2>
          <p className="op-subtitle">Available at</p>
          <p className="op-price">{price}</p>

          <div className="op-divider" />

          <p className="op-description">
            A complete wellness experience designed for your mind, body &amp;
            soul.
          </p>

          <div className="op-features">
            <FeatureRow
              icon={<BedDouble size={16} />}
              title="ACCOMMODATION"
              desc="Luxury stay amidst nature"
            />
            <FeatureRow
              icon={<UtensilsCrossed size={16} />}
              title="FOOD"
              desc="Wholesome and nutritious meals"
            />
            <FeatureRow
              icon={<Sparkles size={16} />}
              title="TREATMENT"
              desc="Personalized therapies for total well-being"
            />
          </div>

          <button onClick={onBookNow} className="op-book-btn">
            <ShoppingCart size={16} />
            Book Now
          </button>
        </div>

        {/* RIGHT: image */}
        <div className="op-image-wrap">
          <div className="op-image-inner">
            <Image
              src={imageSrc}
              alt="Resort accommodation"
              fill
              sizes="(max-width: 1024px) 100vw, 250px"
              className="op-image"
              priority
            />
          </div>

          <div className="op-includes">
            <span className="op-includes-title">INCLUDES</span>
            <span className="op-includes-rule" />
            <span className="op-includes-item">Food</span>
            <span className="op-includes-item">Accommodation</span>
            <span className="op-includes-item">Treatment</span>
          </div>
        </div>
      </div>

      <style jsx>{`
        .op-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.5);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 16px;
          z-index: 9999;
        }

        .op-card {
          position: relative;
          width: 524px;
          max-width: 100%;
          display: flex;
          flex-direction: row;
          align-items: stretch;
          background: #fbf3ea;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 25px 60px rgba(0, 0, 0, 0.35);
        }

        .op-close {
          position: absolute;
          top: 12px;
          right: 12px;
          z-index: 20;
          width: 28px;
          height: 28px;
          border-radius: 50%;
          border: none;
          background: rgba(0, 0, 0, 0.35);
          color: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
        }
        .op-close:hover {
          background: rgba(0, 0, 0, 0.55);
        }

        /* LEFT column */
        .op-content {
          width: 280px;
          flex-shrink: 0;
          padding: 30px 26px;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }

        .op-badge {
          display: inline-block;
          align-self: center;
          background: #4a3527;
          border: none;
          color: #fdf6ee;
          border-radius: 6px;
          font-size: 11px;
          line-height: 16px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          padding: 7px 16px;
          white-space: nowrap;
        }

        .op-title {
          margin: 14px 0 0;
          font-family: Georgia, "Times New Roman", serif;
          font-size: 26px;
          line-height: normal;
          color: #3a2c22;
          font-weight: 500;
        }

        .op-subtitle {
          margin: 4px 0 0;
          font-size: 14px;
          line-height: 20px;
          color: #3a2c22;
        }

        .op-price {
          margin: 2px 0 0;
          font-size: 38px;
          line-height: normal;
          font-weight: 700;
          color: #8a6a53;
        }

        .op-divider {
          margin: 16px 0;
          width: 100%;
          border-top: 1px dashed #c9b8a8;
        }

        .op-description {
          margin: 0;
          max-width: 220px;
          font-size: 13.5px;
          line-height: 20px;
          color: #6b6b66;
        }

        .op-features {
          margin-top: 18px;
          width: 100%;
          display: flex;
          flex-direction: column;
          gap: 12px;
          text-align: left;
        }

        .op-book-btn {
          margin-top: 20px;
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          border: none;
          border-radius: 999px;
          background: #4a3527;
          color: #fff;
          font-size: 13px;
          line-height: 20px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.04em;
          padding: 12px 0;
          cursor: pointer;
        }
        .op-book-btn:hover {
          opacity: 0.9;
        }

        /* RIGHT column (image) */
        .op-image-wrap {
          position: relative;
          width: 244px;
          /* no explicit height: let flexbox "stretch" (the default
             align-items value) size this to match .op-content's
             height. A percentage height here would resolve to 0
             because the parent's height is auto/content-based. */
          flex-shrink: 0;
          align-self: stretch;
          box-sizing: border-box;
          padding: 10px;
          background: #fbf3ea;
        }
        .op-image-inner {
          position: relative;
          width: 100%;
          height: 100%;
          border-radius: 6px;
          overflow: hidden;
        }
        .op-image {
          object-fit: cover;
        }

        .op-includes {
          position: absolute;
          top: 14px;
          right: 14px;

          width: 116px;
          height: 116px;

          border-radius: 50%;
          border: 1px dashed rgba(216, 203, 177, 0.9);

          background: rgba(221, 214, 194, 0.88);
          backdrop-filter: blur(2px);

          display: flex;
          flex-direction: column;
          align-items: center;

          padding-top: 18px;
          box-sizing: border-box;

          text-align: center;
        }
        .op-includes-title {
          font-size: 13px;
          font-family: Georgia, "Times New Roman", serif;
          color: #4b382c;
          font-weight: 500;
          letter-spacing: 0.06em;
        }
        .op-includes-rule {
          width: 36px;
          height: 1px;
          background: #8e7d6f;
          margin: 6px 0 8px;
        }
        .op-includes-item {
          font-size: 11px;
          color: #4b382c;
          line-height: 17px;
        }

        /* Responsive: stack on small screens */
        @media (max-width: 560px) {
          .op-card {
            width: 100%;
            max-width: 400px;
            height: auto;
            flex-direction: column;
          }
          .op-content {
            width: 100%;
            order: 2;
          }
          .op-image-wrap {
            width: 100%;
            height: 220px;
            order: 1;
          }
        }
      `}</style>
    </div>,
    document.body
  );
};

function FeatureRow({
  icon,
  title,
  desc,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
}) {
  return (
    <div className="op-feature-row">
      <div className="op-feature-icon">{icon}</div>
      <div>
        <p className="op-feature-title">{title}</p>
        <p className="op-feature-desc">{desc}</p>
      </div>

      <style jsx>{`
        .op-feature-row {
          display: flex;
          align-items: flex-start;
          gap: 10px;
        }
        .op-feature-icon {
          width: 30px;
          height: 30px;
          flex-shrink: 0;
          border-radius: 50%;
          background: #eadfd1;
          color: #8a6a53;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .op-feature-title {
          margin: 0;
          font-size: 12px;
          line-height: 16px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.03em;
          color: #8a6a53;
        }
        .op-feature-desc {
          margin: 2px 0 0;
          font-size: 14px;
          line-height: 20px;
          color: #3a2c22;
        }
      `}</style>
    </div>
  );
}

export default OfferPopup;