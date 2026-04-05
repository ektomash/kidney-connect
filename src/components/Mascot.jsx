import "./Mascot.css";

function Mascot({ pose = "idle", size = 120 }) {
  const poseClass = `mascot-${pose}`;

  return (
    <div
      className={`mascot-wrapper ${poseClass}`}
      style={{ width: size, height: "auto" }}
    >
      <svg
        viewBox="0 0 200 300"
        xmlns="http://www.w3.org/2000/svg"
        className="mascot-svg"
      >
        <defs>
          <linearGradient id="kidneyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FF8A80" />
            <stop offset="100%" stopColor="#E74C5A" />
          </linearGradient>
          <linearGradient id="shoeGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#E74C5A" />
            <stop offset="100%" stopColor="#C0392B" />
          </linearGradient>
        </defs>

        {/* Left leg */}
        <g className="mascot-left-leg">
          <line
            x1="78" y1="210" x2="70" y2="255"
            stroke="#D4453A" strokeWidth="6" strokeLinecap="round"
          />
          <ellipse cx="65" cy="262" rx="16" ry="10" fill="url(#shoeGrad)" />
          <ellipse cx="60" cy="258" rx="6" ry="3" fill="#fff" opacity="0.4" />
        </g>

        {/* Right leg */}
        <g className="mascot-right-leg">
          <line
            x1="122" y1="210" x2="130" y2="255"
            stroke="#D4453A" strokeWidth="6" strokeLinecap="round"
          />
          <ellipse cx="135" cy="262" rx="16" ry="10" fill="url(#shoeGrad)" />
          <ellipse cx="140" cy="258" rx="6" ry="3" fill="#fff" opacity="0.4" />
        </g>

        {/* Left arm */}
        <g className="mascot-left-arm">
          <line
            x1="55" y1="120" x2="20" y2="155"
            stroke="#D4453A" strokeWidth="5" strokeLinecap="round"
          />
          <circle cx="16" cy="160" r="10" fill="#fff" />
          <circle cx="16" cy="160" r="10" stroke="#e0e0e0" strokeWidth="1" fill="#fff" />

          {pose === "encouraging" && (
            <g className="mascot-thumbs-up">
              <rect x="12" y="140" width="6" height="15" rx="3" fill="#fff" stroke="#e0e0e0" strokeWidth="0.5" />
            </g>
          )}
        </g>

        {/* Right arm */}
        <g className="mascot-right-arm">
          <line
            x1="145" y1="120" x2="180" y2="155"
            stroke="#D4453A" strokeWidth="5" strokeLinecap="round"
          />
          <circle cx="184" cy="160" r="10" fill="#fff" />
          <circle cx="184" cy="160" r="10" stroke="#e0e0e0" strokeWidth="1" fill="#fff" />

          {pose === "idle" && (
            <g className="mascot-wave-hand">
              <line x1="184" y1="150" x2="184" y2="138" stroke="#e0e0e0" strokeWidth="1" />
              <circle cx="184" cy="135" r="4" fill="#fff" stroke="#e0e0e0" strokeWidth="0.5" />
            </g>
          )}
        </g>

        {/* Kidney body */}
        <path
          className="mascot-body"
          d="M100,45 C145,45 165,70 165,105 C165,140 145,175 120,195
             C110,203 105,210 100,215 C95,210 90,203 80,195
             C55,175 35,140 35,105 C35,70 55,45 100,45 Z"
          fill="url(#kidneyGrad)"
          stroke="#D4453A"
          strokeWidth="2"
        />

        {/* Kidney indentation (the characteristic kidney notch) */}
        <path
          d="M95,55 C85,75 82,100 88,130"
          fill="none"
          stroke="#D4453A"
          strokeWidth="2"
          opacity="0.3"
        />

        {/* Body highlight */}
        <ellipse cx="115" cy="90" rx="20" ry="30" fill="#fff" opacity="0.15" />

        {/* Blush circles */}
        <circle cx="65" cy="130" r="10" fill="#FF6B6B" opacity="0.35" />
        <circle cx="135" cy="130" r="10" fill="#FF6B6B" opacity="0.35" />

        {/* Eyes */}
        <g className="mascot-eyes">
          {/* Left eye */}
          <ellipse cx="78" cy="105" rx="14" ry="16" fill="#fff" />
          <ellipse cx="78" cy="105" rx="14" ry="16" stroke="#2c1a1a" strokeWidth="1.5" fill="#fff" />
          <ellipse
            cx={pose === "thinking" ? "76" : "80"}
            cy={pose === "thinking" ? "100" : "107"}
            rx="7" ry="8"
            fill="#2c1a1a"
            className="mascot-pupil-left"
          />
          <circle
            cx={pose === "thinking" ? "73" : "77"}
            cy={pose === "thinking" ? "97" : "103"}
            r="3" fill="#fff"
          />

          {/* Right eye */}
          <ellipse cx="122" cy="105" rx="14" ry="16" fill="#fff" />
          <ellipse cx="122" cy="105" rx="14" ry="16" stroke="#2c1a1a" strokeWidth="1.5" fill="#fff" />
          <ellipse
            cx={pose === "thinking" ? "120" : "124"}
            cy={pose === "thinking" ? "100" : "107"}
            rx="7" ry="8"
            fill="#2c1a1a"
            className="mascot-pupil-right"
          />
          <circle
            cx={pose === "thinking" ? "117" : "121"}
            cy={pose === "thinking" ? "97" : "103"}
            r="3" fill="#fff"
          />
        </g>

        {/* Eyebrows */}
        <g className="mascot-eyebrows">
          {pose === "thinking" ? (
            <>
              <path d="M64,82 Q78,72 92,82" fill="none" stroke="#2c1a1a" strokeWidth="2.5" strokeLinecap="round" />
              <path d="M108,78 Q122,72 136,82" fill="none" stroke="#2c1a1a" strokeWidth="2.5" strokeLinecap="round" />
            </>
          ) : pose === "celebrating" ? (
            <>
              <path d="M64,82 Q78,74 92,82" fill="none" stroke="#2c1a1a" strokeWidth="2.5" strokeLinecap="round" />
              <path d="M108,82 Q122,74 136,82" fill="none" stroke="#2c1a1a" strokeWidth="2.5" strokeLinecap="round" />
            </>
          ) : (
            <>
              <path d="M64,85 Q78,78 92,85" fill="none" stroke="#2c1a1a" strokeWidth="2.5" strokeLinecap="round" />
              <path d="M108,85 Q122,78 136,85" fill="none" stroke="#2c1a1a" strokeWidth="2.5" strokeLinecap="round" />
            </>
          )}
        </g>

        {/* Mouth */}
        <g className="mascot-mouth">
          {pose === "talking" ? (
            <ellipse cx="100" cy="145" rx="12" ry="9" fill="#2c1a1a" className="mascot-mouth-talking" />
          ) : pose === "celebrating" ? (
            <>
              <path d="M82,140 Q100,162 118,140" fill="#2c1a1a" />
              <path d="M86,140 Q100,150 114,140" fill="#FF8A80" />
            </>
          ) : (
            <path d="M85,140 Q100,155 115,140" fill="none" stroke="#2c1a1a" strokeWidth="2.5" strokeLinecap="round" />
          )}
        </g>

        {/* Celebrating confetti */}
        {pose === "celebrating" && (
          <g className="mascot-confetti">
            <circle cx="40" cy="50" r="3" fill="#FFB347" className="confetti-1" />
            <circle cx="160" cy="40" r="3" fill="#4ECDC4" className="confetti-2" />
            <rect x="25" y="75" width="6" height="6" rx="1" fill="#45B7D1" className="confetti-3" transform="rotate(30 28 78)" />
            <rect x="170" y="70" width="6" height="6" rx="1" fill="#FF6B6B" className="confetti-4" transform="rotate(-20 173 73)" />
            <circle cx="50" cy="35" r="2" fill="#96CEB4" className="confetti-5" />
            <circle cx="150" cy="55" r="2" fill="#C0392B" className="confetti-6" />
          </g>
        )}
      </svg>
    </div>
  );
}

export default Mascot;
