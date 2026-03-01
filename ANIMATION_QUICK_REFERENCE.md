# 🎨 Animation Quick Reference Card

## 🎯 Most Used Animations

### 1. **Stagger Entry** (All List Items)
```jsx
className="stagger-item"  // Auto-delays nth-child
```
**Timing:** 0s, 0.1s, 0.2s... 0.9s  
**Use:** Quiz options, badges, map questions, locations

---

### 2. **3D Flip Entrance** (Important Reveals)
```jsx
initial={{ opacity: 0, rotateY: -90 }}
animate={{ opacity: 1, rotateY: 0 }}
transition={{ delay: 0.15, type: "spring", stiffness: 100, damping: 20 }}
```
**Use:** Quiz options, map questions, award badges  
**Feel:** Smooth, bouncy, playful

---

### 3. **Hover Magic** (All Interactive Elements)
```jsx
whileHover={{ scale: 1.05, boxShadow: "0px 15px 40px rgba(99, 102, 241, 0.3)" }}
whileTap={{ scale: 0.95 }}
```
**Use:** Buttons, cards, clickable items  
**Feedback:** Immediate visual response

---

### 4. **Success Celebration** (Right Answers)
```jsx
import { celebrationEffect } from '../utils/particleEffects';
celebrationEffect(x, y);  // Confetti + Sparkles + Ripple
```
**Result:** Festive multi-layer effect  
**Duration:** 600-800ms

---

### 5. **Bounce Animation** (Attention Grabbers)
```jsx
className="animate-bounce-kids"
```
**Use:** Badges, highlighted items  
**Duration:** 1s infinite

---

## 🎪 Animation Classes Cheat Sheet

### Entrance Animations
| Class | Effect | Duration |
|-------|--------|----------|
| `animate-bounce-kids` | Up/down bounce | 0.8s |
| `animate-pop-in` | Scale + fade in | 0.6s |
| `animate-slide-up` | Slide up + fade | 0.6s |
| `animate-flip-in` | 3D flip entrance | 0.5s |

### Motion Animations
| Class | Effect | Duration |
|-------|--------|----------|
| `animate-float-kids` | Gentle floating | 3s infinite |
| `animate-spin-kids` | Rotation | 2s infinite |
| `animate-wiggle-kids` | Playful wiggle | 0.8s infinite |
| `animate-wave-kids` | Wave motion | 1s infinite |

### Glow Animations
| Class | Effect | Duration |
|-------|--------|----------|
| `animate-glow-kids` | Gradient glow | 3s infinite |
| `animate-rainbow-glow` | Rainbow colors | 3s infinite |
| `animate-pulse-glow` | Pulsing glow | 2s infinite |
| `animate-focus-glow` | Focus ring | 1.5s infinite |

### Reaction Animations
| Class | Effect | Duration |
|-------|--------|----------|
| `animate-shake-kids` | Error shake | 0.6s |
| `animate-celebration` | Success spin | 0.8s |
| `animate-target-pulse` | Scale pulse | 0.5s |
| `animate-pop` | Pop effect | 0.5s |

---

## 🛠️ Quick Integration Template

### For a List of Cards
```jsx
{items.map((item, idx) => (
  <motion.div
    key={item.id}
    initial={{ opacity: 0, y: 20, rotateX: -60 }}
    whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
    transition={{ delay: idx * 0.1, type: "spring", stiffness: 100, damping: 15 }}
    whileHover={{ scale: 1.05 }}
    className="stagger-item"
  >
    {item.content}
  </motion.div>
))}
```

### For a Single Interactive Button
```jsx
<motion.button
  initial={{ scale: 0.9 }}
  animate={{ scale: 1 }}
  whileHover={{ scale: 1.1, boxShadow: "0px 12px 30px rgba(0,0,0,0.2)" }}
  whileTap={{ scale: 0.95 }}
  onClick={handleClick}
  className="animate-glow-kids"
>
  Click Me!
</motion.button>
```

### For a Success Moment
```jsx
const handleSuccess = () => {
  celebrationEffect(x, y);
  addPoints(10);
  playSound();
  setTimeout(() => nextQuestion(), 800);
};
```

---

## 📊 Animation Intensity Levels

### 🟢 Light (For younger kids)
```jsx
duration: 0.5
stiffness: 100
damping: 25  // More damping = less bouncy
```

### 🟡 Medium (Recommended for 5-10 year olds)
```jsx
duration: 0.6-0.8
stiffness: 100
damping: 18-20  // Balanced
```

### 🔴 Heavy (For engagement maximization)
```jsx
duration: 0.8-1.0
stiffness: 120
damping: 15  // More bouncy
```

---

## 🎯 Performance Checklist

Before using any animation:

- [ ] Uses `transform` or `opacity` only
- [ ] No `top`, `left`, `width`, `height` changes
- [ ] Duration < 2 seconds
- [ ] Not more than 50 simultaneous animations
- [ ] Particle cleanup implemented
- [ ] Tested on mobile devices
- [ ] No FPS drops observed
- [ ] Respects `prefers-reduced-motion`

---

## 🚨 Common Pitfalls

### ❌ DON'T
```jsx
// Animating layout properties (causes reflow)
animate={{ width: 100, height: 100 }}

// Too many particles at once
createConfettiBurst(x, y, 500)  // Way too many!

// Missing cleanup
setInterval(() => createParticles(), 100)  // Memory leak!

// Conflicting animations
className="animate-bounce animate-spin"  // Unpredictable!
```

### ✅ DO
```jsx
// Use hardware-accelerated properties
animate={{ scale: 1.1, opacity: 1 }}

// Reasonable particle counts
createConfettiBurst(x, y, 30-50)  // Good range

// Auto-cleanup included
createParticles()  // Removes after animation

// Single animation source
className={isSuccess ? "animate-bounce" : "animate-spin"}
```

---

## 🔗 Quick Links

**Documentation:**
- Full Guide: `ANIMATION_ENHANCEMENTS.md`
- Code Examples: `ANIMATION_USAGE_GUIDE.md`
- Session Summary: `SESSION_SUMMARY.md`

**Utility Functions:**
- Location: `src/utils/particleEffects.js`
- Functions: 10 helpers + 2 combos
- Import: `import { celebrationEffect } from '../utils/particleEffects'`

**CSS Animations:**
- File: `src/styles/index.css`
- New Animations: 25+
- Helper Classes: 50+

**Enhanced Pages:**
- QuizPage: 3D option entrance
- MapExplorer: Question card stagger
- AwardsPage: Badge bounce animation
- LessonDashboard: Location viewport animation

---

## 💡 Pro Tips

1. **Stagger delays grow naturally**
   - Per item delay: 80ms-150ms
   - Creates professional cascade effect
   - Auto-calculated via `idx * increment`

2. **Spring physics feel best**
   - Stiffness: 100-120
   - Damping: 15-20
   - Sweet spot for playful feel

3. **Combine effects strategically**
   - Success = Celebration + Pulse + Sound
   - Error = Shake + Color fade + Sound
   - Discovery = Pop + Sparkles + Ripple

4. **Test on actual devices**
   - Desktop browser ≠ Mobile device
   - Touch events may behave differently
   - Low-end devices need performance tuning

5. **Less is sometimes more**
   - 50+ animations ≠ use them all
   - Strategic placement > maximum usage
   - Let white space breathe

---

## 📱 Mobile Considerations

- Spring damping may need slight increase (18→20) on mobile
- Particle count may need reduction (50→30) on low-end devices
- Touch animations should be instant (no delay)
- Hover effects won't work; use `whileTap` instead

---

## 🎊 That's It!

You're ready to create stunning animations! Remember:
- Start simple, add complexity gradually
- Test early, test often
- Performance is king
- User experience is queen
- Have fun with it! 🚀

---

**Happy animating!** ✨🎉
