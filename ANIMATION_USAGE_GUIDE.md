# 🎨 Animation Usage Guide & Code Examples

## Quick Reference: How to Use New Animations

### 1. 🎯 Apply Stagger Animation to Lists

For any list of items, add the `.stagger-item` class:

```jsx
{items.map((item, idx) => (
  <motion.div
    key={item.id}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay: idx * 0.1 }}
    className="stagger-item"  // ← Automatic delay
  >
    {item.content}
  </motion.div>
))}
```

Automatically applies delays:
- Item 1: 0s
- Item 2: 0.1s
- Item 3: 0.2s
- ... up to Item 10: 0.9s

---

### 2. 💥 Create Particle Burst Effect

```jsx
import { createConfettiBurst } from '../utils/particleEffects';

const handleClick = (e) => {
  // Burst 40 particles from click point
  createConfettiBurst(
    e.clientX, 
    e.clientY, 
    40,  // particle count
    ['#FF69B4', '#87CEEB', '#FFD700']  // colors
  );
};
```

**CSS Classes Added Automatically:**
- `.confetti-particle` - handles animation
- Particles auto-remove after 800ms

---

### 3. ✨ Create Sparkle Effect

```jsx
import { createSparkles } from '../utils/particleEffects';

const handleSuccess = () => {
  // Create 20 sparkles with 100ms delay
  createSparkles(x, y, 20, 100);  // delay in ms
};
```

**Emojis:** ✨ ⭐ 💫 🌟 (random selection)
**Duration:** 600ms

---

### 4. 🎆 Combined Celebration Effect

```jsx
import { celebrationEffect } from '../utils/particleEffects';

const handleBadgeEarned = (x, y) => {
  // All-in-one: Confetti + Sparkles + Ripple
  celebrationEffect(x, y);
};
```

**Includes:**
- Confetti burst (40 particles)
- Sparkle particles (20 emojis)
- Ripple wave

---

### 5. 🎪 3D Flip Entrance Animation

```jsx
<motion.button
  initial={{ opacity: 0, rotateY: -90 }}
  animate={{ opacity: 1, rotateY: 0 }}
  transition={{ 
    delay: 0.15, 
    type: "spring", 
    stiffness: 100, 
    damping: 20 
  }}
>
  Click Me
</motion.button>
```

**Result:** Smooth 3D Y-axis flip with spring bounce

---

### 6. 🌊 Wave Motion Animation

```jsx
<div className="animate-wave-motion">
  Animated Content
</div>
```

**CSS Animation:**
- Duration: 1.2s
- Repeats: Infinite
- Motion: Up/down + rotation wave

---

### 7. 🎯 Focus Glow Effect

```jsx
<div className="animate-focus-glow">
  Important Element
</div>
```

**Effect:**
- Pulsing glow (0 → 20px → 0)
- Duration: 1.5s
- Repeats: Infinite

---

### 8. 🌈 Color Shifting Animation

```jsx
<div className="animate-color-shift">
  Rainbow Colors
</div>
```

**CSS Effect:**
- Hue rotates: 0° → 360°
- Duration: 4s
- Repeats: Infinite
- Filter-based (hardware accelerated)

---

### 9. 🎭 Spring-Based Scale Animation

```jsx
<motion.div
  whileHover={{ 
    scale: 1.05, 
    boxShadow: "0px 15px 40px rgba(99, 102, 241, 0.4)" 
  }}
  transition={{
    type: "spring",
    stiffness: 100,
    damping: 20
  }}
>
  Hover over me!
</motion.div>
```

**Physics:**
- Stiffness: 100 (responsive)
- Damping: 20 (bouncy, not jittery)

---

### 10. 📍 Starburst Effect on Click

```jsx
import { createStarburst } from '../utils/particleEffects';

const handleClick = (e) => {
  const element = e.currentTarget;
  createStarburst(element);  // Scale + rotate explosion
};
```

**Effect:**
- Scale: 0 → 1
- Rotate: 0° → 180°
- Opacity: 1 → 0
- Duration: 600ms

---

### 11. 🔆 Success Animation

```jsx
import { successEffect } from '../utils/particleEffects';

const handleCorrectAnswer = (buttonEl) => {
  successEffect(buttonEl);  // Celebration + Pulse
};
```

**Combination:**
- `animate-celebration` (360° spin)
- `animate-target-pulse` (scale pulse)
- Duration: 800ms

---

### 12. ❌ Error Shake Animation

```jsx
import { errorEffect } from '../utils/particleEffects';

const handleWrongAnswer = (buttonEl) => {
  errorEffect(buttonEl);  // Shake left/right
};
```

**Effect:**
- Horizontal shake: ±5px
- Duration: 600ms

---

## 📚 CSS Animation Classes (Use Directly)

### Entrance Animations
- `animate-bounce-entrance` - Bounce from top with scale
- `animate-slide-in-left-bounce` - Bounce from left
- `animate-slide-in-right-bounce` - Bounce from right
- `animate-flip-in` - 3D flip entrance

### Motion Animations
- `animate-float-kids` - Gentle floating
- `animate-spin-kids` - Spinning
- `animate-bounce-kids` - Up/down bounce
- `animate-wave-motion` - Wave undulation

### Glow Animations
- `animate-glow-kids` - Gradient glow pulse
- `animate-rainbow-glow` - Multi-color glow cycle
- `animate-focus-glow` - Radial glow pulse

### Interactive Animations
- `animate-wobble-kids` - Playful wobble
- `animate-shake-kids` - Error shake
- `animate-pop` - Pop scale animation
- `animate-celebration` - 360° celebration spin

### Color Animations
- `animate-color-shift` - Hue rotation 0-360°
- `animate-rainbow-text` - Gradient text cycling
- `animate-rainbow-rotate` - Rainbow + rotation

### Advanced Animations
- `animate-morph-kids` - Border-radius morphing
- `animate-rotate-perspective` - 3D multi-axis rotation
- `animate-vortex` - Spiraling vortex motion
- `animate-carousel` - 3D carousel spin

---

## 🎬 Real-World Page Examples

### Quiz Option Button
```jsx
<motion.button
  initial={{ opacity: 0, x: -50, rotateY: -90 }}
  animate={{ opacity: 1, x: 0, rotateY: 0 }}
  transition={{ delay: idx * 0.15, type: "spring", stiffness: 100, damping: 20 }}
  whileHover={{ scale: 1.05, x: 15, boxShadow: "0px 15px 40px rgba(99, 102, 241, 0.4)" }}
  whileTap={{ scale: 0.95, rotateY: 10 }}
  className="stagger-item"
>
  Option {idx + 1}
</motion.button>
```

**Features:**
- 3D flip entrance
- Spring physics
- Stagger delay
- Hover scale + shadow
- Click feedback

---

### Award Badge Card
```jsx
<motion.div
  initial={{ scale: 0, rotate: -180, opacity: 0 }}
  animate={{ scale: 1, rotate: 0, opacity: 1 }}
  transition={{ delay: idx * 0.12, type: "spring", stiffness: 120, damping: 18 }}
  whileHover={{ scale: 1.15, rotate: 10 }}
  className="animate-bounce-kids stagger-item"
>
  <motion.div
    animate={{ y: [0, -8, 0], rotate: [0, 5, -5, 0] }}
    transition={{ duration: 2, repeat: Infinity }}
  >
    {badge.emoji}
  </motion.div>
  <p>{badge.name}</p>
</motion.div>
```

**Features:**
- Spring entrance
- Hover rotation
- Continuous emoji motion
- Bounce animation

---

### Map Question Card
```jsx
<motion.button
  initial={{ opacity: 0, y: 20, rotateX: -90 }}
  animate={{ opacity: 1, y: 0, rotateX: 0 }}
  transition={{ delay: Math.min(0.35, index * 0.08), type: "spring", stiffness: 100, damping: 15 }}
  whileHover={{ scale: 1.05, y: -4, boxShadow: "0px 20px 50px rgba(99, 102, 241, 0.3)" }}
  whileTap={{ scale: 0.95 }}
  className="stagger-item"
>
  {question.title}
</motion.button>
```

**Features:**
- 3D rotateX entrance
- Viewport-aware
- Solved state styling
- Premium hover effects

---

## 🎯 Performance Tips

1. **Use transform/opacity only**
   ```css
   ✅ transform: scale(), rotate(), translateX()
   ✅ opacity: 0 to 1
   ❌ width, height, top, left (causes repaints)
   ```

2. **Limit particle count**
   ```javascript
   ✅ createConfettiBurst(x, y, 30)  // Reasonable
   ❌ createConfettiBurst(x, y, 500)  // Too many
   ```

3. **Use will-change sparingly**
   ```css
   ✅ .animate-item { will-change: transform; }
   ❌ * { will-change: all; }  // Don't do this!
   ```

4. **Clean up auto-generated elements**
   - Particle utility auto-removes elements after animation
   - No memory leaks!

---

## 🎪 Combining Animations

### Create Complex Sequences
```jsx
const handleSuccess = async (element) => {
  // Step 1: Celebrate
  celebrationEffect(e.clientX, e.clientY);
  
  // Step 2: After 400ms, succeed effect
  setTimeout(() => {
    successEffect(element);
  }, 400);
  
  // Step 3: After 1200ms, navigate
  setTimeout(() => {
    navigate('/next-page');
  }, 1200);
};
```

### Layer Multiple Animations
```jsx
<motion.div
  className="animate-float-kids animate-glow-kids"  // Stack classes!
  animate={{ rotate: [0, 360] }}  // Add Framer Motion
  transition={{ duration: 3, repeat: Infinity }}
>
  Layered animations!
</motion.div>
```

---

## ✅ Verification Checklist

When adding new animations, ensure:

- [ ] Element has unique key (React lists)
- [ ] Animation duration appropriate (0.3s - 2s typical)
- [ ] Uses hardware-accelerated properties
- [ ] Stagger delays scale reasonably
- [ ] Hover/click feedback clear
- [ ] Mobile touch events work
- [ ] No animation jank (60fps)
- [ ] Respects prefers-reduced-motion
- [ ] Auto-cleanup of temp elements
- [ ] Performance tested on low-end devices

---

## 📞 Need Help?

**Common Issues & Fixes:**

1. **Animation stutters**
   - Reduce `will-change` usage
   - Check z-index conflicts
   - Use `transform` instead of position changes

2. **Animation doesn't show**
   - Check `initial` state matches DOM
   - Verify `animate` key is correct
   - Check CSS specificity overrides

3. **Particles not cleaning up**
   - Particle utility auto-removes
   - Check browser console for errors
   - Verify DOM nodes removed

4. **Stagger timing wrong**
   - Delay should increase: `idx * increment`
   - Check CSS class `.stagger-item:nth-child()`
   - Verify all items have incremental indices

---

**Happy animating! 🎉✨**
