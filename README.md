
---

# 🧠 Memory Match

Memory Match is an open-source vocabulary learning app that blends the best of Anki’s spaced repetition with Duolingo-style matching exercises. It's designed to make memorizing words fast, fun, and personal — upload your own word lists and train your brain interactively.

Currently in early development, but the vision is big — and contributions or feedback are more than welcome!

---

## ✨ What’s the Idea?

- Anki-style spaced repetition for long-term retention
- Duolingo-inspired matching exercises for active recall
- Your custom vocab, your pace — no limits!

---

## ⚡ Built With

- ⚛️ React + TypeScript
- ⚡ Vite for ultra-fast dev experience
- 💨 Tailwind CSS for styling
- 🧠 Local component state

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/AliveJarvis/memory-match.git
cd memory-match
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Start the Dev Server

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 🧪 How It Works (for now)

1. Upload Your Words in a Notepad File. 
   Format:  
   ```
   FirstWord Meaning (Spaces separate the Word with Meaning)
   NextWord Meaning (Next line is for new word)
   ```

2. Generate Exercises  
   The app creates randomized matching cards.

3. Match Terms  
   Visual feedback helps reinforce correct answers.

4. Regenerate & Repeat  
   Shuffle and practice again to build memory.

---

## 📂 Project Structure (so far)

```
src/
├── components/
│   ├── WordUploader.tsx
│   ├── WordList.tsx
│   └── MatchingExercise.tsx
│
├── lib/
│   └── shuffle.ts
│
├── types.ts
└── App.tsx
```

---

## 📌 Current Needs

- [ ] Dark mode toggle
- [ ] Mobile polish
- [ ] UI Design

---

## 📌 Future Vision

- [ ] Can Make account
- [ ] Save Progress
- [ ] Support Anki Decks
- [ ] Use Space repetition By matching excercise
- [ ] Different Exercises like Fill in the blanks

---

## 🙌 Contributing

This is an early-stage project with big potential — if you're interested in education tech, React apps, or just building cool tools, feel free to fork, star, or open issues and PRs!

---

## 📄 License

MIT — free to use, modify, and share.

---

## 💡 Inspiration

Inspired by Duolingo's interactive UX and Anki's spaced repetition effectiveness, Memory Match aims to deliver the best of both worlds — but fully customizable.

---

## ✍️ Author

Made with love by [Arjun](https://github.com/AliveJarvis)

---