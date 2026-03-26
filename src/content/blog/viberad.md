---
title: "VibeRad: Reimagining Radiology Education with Gemini 3 Pro"
description: "Winner, Google DeepMind hackathon. Top 50 out of 4,096 submissions from 19,022 entrants. An AI teaching assistant that sees what you see, turning complex MRI scans into interactive radiology lessons."
pubDate: 2026-03-26
tags: ["ai", "radiology", "medical-education", "gemini", "hackathon", "google-deepmind"]
---

**Winner, Google DeepMind "Vibe Code with Gemini 3 Pro in AI Studio" Hackathon**

VibeRad was selected as one of the top 50 winning projects out of 4,096 submissions in the Google DeepMind Gemini 3 Pro hackathon on Kaggle, earning $10,000 in Gemini API credits. Top 50 out of 4,096 submissions (top ~1.2%), from a pool that started at 19,022 entrants.

---

**An AI teaching assistant that sees what you see. Point at anything. Ask about it. Learn.**

**The pattern is modality agnostic.** We demonstrate it with brain MRI, but the same Capture-and-Ask loop applies to CT scans, X-rays, ultrasound, digital pathology, pathology slides, satellite imagery, circuit boards, architectural plans, molecular structures, or any visual domain where learners benefit from expert guidance.

Gemini 3 Pro's native multimodality means the AI sees exactly what you see. No describing, no copying, no context lost.

---

**Try it now:** [Live Demo on Google AI Studio](https://aistudio.google.com/apps/drive/1pCMrggBue_gNE9IhzjN-KEdLm8cVPGjW?fullscreenApplet=true)

**Video Walkthrough:** [YouTube Demo](https://youtu.be/Zz3RvK8b1s8)

---

## The Problem: Radiology is Hard to Learn

Radiology is one of medicine's most visually demanding disciplines. Learning it has always been bottlenecked by access:

- **Expensive simulators** that most institutions can't afford
- **Scarce expert mentors** with limited time for one-on-one teaching
- **Years of passive observation** before independent interpretation
- **Static textbooks** that can't adapt to individual learners

What if an AI could sit beside a learner, see exactly what they see on a brain MRI, and teach them at their level?

That's **VibeRad**.

---

## What We Built

VibeRad is a browser-based MRI viewer with an AI teaching assistant powered by Gemini 3 Pro. Students browse real imaging series, adjust window/level, measure structures, and create segmentations, all while asking the AI to explain what they're seeing.

![VibeRad Anatomical Teaching Interface](https://i.imgur.com/gBXcK6V.jpeg)

*The AI identifies the frontal horns of the lateral ventricles and provides an anatomical breakdown tailored to the learner's level.*

### The Capture-and-Ask Workflow

The key interaction is simple: **click Capture, then ask.**

Users click the camera button to share the exact slice they're viewing. That image becomes active context for the AI. Then they ask: "What am I looking at?" or "Explain this structure" or "What would a radiologist notice here?"

The AI sees what you see. No copying, no describing, no context lost.

---

## Three AI Modes Powered by Gemini 3 Pro

We built three distinct modes that leverage different Gemini 3 Pro capabilities:

| Mode | Thinking Level | Special Features | Best For |
|------|---------------|------------------|----------|
| **Chat** | Low | Fast responses | Quick anatomy questions |
| **Deep Think** | High | Extended reasoning, high-res image analysis | Complex teaching moments |
| **Search** | High | Google Search grounding | Guideline citations, evidence-based answers |

```typescript
const MODE_CONFIG = {
  chat: {
    model: 'gemini-3-pro-preview',
    thinkingLevel: 'low',
    mediaResolution: 'MEDIA_RESOLUTION_MEDIUM',
    useSearch: false
  },
  deep_think: {
    model: 'gemini-3-pro-preview',
    thinkingLevel: 'high',
    mediaResolution: 'MEDIA_RESOLUTION_HIGH',
    useSearch: false
  },
  search: {
    model: 'gemini-3-pro-preview',
    thinkingLevel: 'high',
    useSearch: true  // Google Search grounding
  }
};
```

Deep Think mode uses Gemini's extended reasoning to work through complex anatomical questions. Search mode grounds responses in real medical literature, citing guidelines and textbook sources.

---

## Adaptive Learning Levels: High School to Resident

The same MRI slice. Four different teaching approaches.

![Adaptive Follow-up Questions Based on Learning Level](https://i.imgur.com/E0nYu0P.png)

*The Teaching Level selector adapts all explanations and follow-up questions to the learner's background.*

- **High School**: "Think of the ventricles like the brain's water reservoirs..."
- **Undergraduate**: "The lateral ventricles contain cerebrospinal fluid produced by..."
- **Medical Student**: "Note the T2 hyperintensity in the periventricular region, which could indicate..."
- **Resident**: "Key differentials include small vessel ischemic disease vs. demyelination. Consider the Fazekas scale..."

The AI generates follow-up questions calibrated to each level, stored as structured JSON:

```typescript
<SUGGESTIONS>
{
  "highschool": ["What are ventricles for?", "Why is the brain gray?"],
  "undergrad": ["What produces cerebrospinal fluid?", "Why do ventricles appear dark on T1?"],
  "medstudent": ["What's the differential for periventricular hyperintensities?"],
  "resident": ["How would you grade this on the Fazekas scale?"]
}
</SUGGESTIONS>
```

---

## Active Learning Through Segmentation

Students don't just view. They identify.

![Segmentation Panel with Anatomical Labels](https://i.imgur.com/o6DpNl2.png)

*Users can paint directly on the MRI slice to identify anatomical structures, then ask the AI to verify their work.*

The segmentation panel lets users:
- Select anatomical structures from a palette (Hippocampus, Amygdala, custom labels)
- Paint directly on the MRI slice with adjustable brush sizes
- Ask the AI: "What am I looking at?" for verification

This bridges passive learning (seeing annotations) with active learning (creating annotations). Students build pattern recognition by doing, not just watching.

---

## DICOM Viewer

The viewer includes standard radiology tools:

![VibeRad Toolbar and Guided Tour](https://i.imgur.com/BUKH5lN.png)

*Interactive onboarding guides new users through each tool.*

### Viewer Tools
- **Pan/Zoom**: Navigate large images with smooth interactions
- **Window/Level**: Adjust brightness and contrast (critical for different tissue types)
- **Scroll**: Move through 3D volumes slice by slice
- **Measure**: Calibrated distance measurements with labels
- **Segment**: Paint anatomical regions with color-coded labels

### Series Browser
Four MRI sequences from a real stroke patient:
- **FLAIR**: Fluid-attenuated inversion recovery (highlights pathology)
- **T1 Weighted**: Anatomical detail
- **DWI Trace**: Diffusion-weighted imaging (acute stroke detection)
- **ADC Map**: Apparent diffusion coefficient (confirms DWI findings)

---

## Safety: Education, Not Diagnosis

VibeRad is designed to teach, not diagnose.

### System-Level Constraints

The AI system prompt explicitly prohibits diagnostic conclusions:

```
You are the VibeRad Radiology Assistant.
You are for EDUCATIONAL USE ONLY. You are NOT a medical device and
must NOT give case-specific diagnoses or treatment decisions.

You MUST NOT claim a specific diagnosis for the highlighted region.
Never say "this is an intraparenchymal hemorrhage" or "this is a tumor."

Instead use: "findings in this region might warrant evaluation for..."
or "in real patients, similar appearances could represent..."
```

### Laterality Rules

One subtle but critical safety feature: correct radiological orientation.

```
Radiology orientation rules (VERY IMPORTANT):
- Image left = PATIENT'S RIGHT
- Image right = PATIENT'S LEFT
- When you mention a side, use the PATIENT'S side
- If unsure about laterality, do NOT guess
```

This prevents the AI from confusing left and right.

### UI-Level Safety

- **Persistent banner**: "Educational Demo Only - Not for Clinical Use"
- **Safety modal**: Explains limitations before first use
- **Welcome message**: "Never real diagnoses, reports, or treatment decisions"

---

## Why This Matters

The best radiology teaching happens when an expert sits beside you, looks at the same image, and explains what they see. There aren't enough experts, and their time is limited.

Gemini 3 Pro can see the exact slice a student is viewing, understand the spatial context, and generate explanations adapted to their level. It's not replacing radiologists. It's scaling the teaching that radiologists do.

### What Was Impossible Yesterday

Before multimodal AI:
- Building an interactive anatomy tutor required expensive custom software
- Adaptive explanations required human tutors
- Grounding responses in current guidelines required manual curation

With Gemini 3 Pro:
- The Capture-and-Ask workflow took days, not months
- Level-adaptive teaching is a prompt configuration
- Search grounding provides guideline citations automatically

This is what vibe coding enables. The iteration cycle between idea and working prototype is dramatically shorter.

---

## How We Built It

VibeRad was built entirely in Google AI Studio through conversation with Gemini 3 Pro. We described our ideas as a team and collaboratively built it through iteration.

### The Stack
- **Framework**: React 19.2.1 + TypeScript + Tailwind CSS
- **AI SDK**: @google/genai v1.31.0
- **Model**: gemini-3-pro-preview (1M context window)
- **Build**: Vite 6.2.0
- **Icons**: Lucide React

### By the Numbers
- ~5,300 lines of TypeScript/React
- 27 source files
- 11 React components
- 4 MRI sequences, ~106 slice images

### Data Source
All imaging from the Stroke Outcome Optimization Project (SOOP):
- **License**: CC0 (Public Domain)
- **Source**: [OpenNeuro ds004889](https://openneuro.org/datasets/ds004889/versions/1.1.2)
- **Citation**: Chris Rorden, John Absher, and Roger Newman-Norlund (2024)

---

## Future Directions

### Modality Agnostic

The Capture-and-Ask workflow works for any visual domain:

- **CT scans**: Chest, abdomen, head trauma
- **X-rays**: Chest radiographs, skeletal surveys
- **Ultrasound**: Cardiac, obstetric, point-of-care
- **Pathology**: Whole slide images, histology

The viewer changes; the teaching loop stays the same.

### Agentic VLM Environment

VibeRad points toward something bigger: **a vision-language model environment where AI can use tools autonomously.**

Today, the human clicks Capture, then asks. Tomorrow, the model could:

- **Reason**: "To answer this question about the hippocampus, I need to scroll to a more inferior slice"
- **Act**: Autonomously scroll through the volume to find the right anatomy
- **Measure**: Use the measurement tool to quantify a structure
- **Segment**: Paint regions to highlight what it's explaining
- **Verify**: Compare its segmentation against anatomical atlases
- **Iterate**: Refine its answer based on what it discovers

This is the **ReAct pattern** applied to medical imaging: Reason, Act, Observe, Repeat.

```
User: "Show me where the hippocampus is and measure it"

AI reasoning: I need to scroll to slice 45-50 where hippocampus is visible...
AI action: [scroll to slice 47]
AI reasoning: Now I can see the hippocampal formation. Let me segment it...
AI action: [paint segmentation on hippocampus]
AI reasoning: I should measure the long axis...
AI action: [use measurement tool: 3.2cm]
AI response: "Here's the hippocampus highlighted in blue.
             The long axis measures 3.2cm, which is within normal range..."
```

The viewer becomes an **interactive sandbox** where VLMs learn to use tools, not just describe images. Every tool in VibeRad (pan, zoom, scroll, measure, segment, window/level) becomes a function the model can call.

This transforms passive image understanding into **embodied visual reasoning**.

---

## Try It Yourself

**Live Demo**: [VibeRad on AI Studio](https://aistudio.google.com/apps/drive/1pCMrggBue_gNE9IhzjN-KEdLm8cVPGjW?fullscreenApplet=true)

**Video Walkthrough**: [YouTube Demo](https://youtu.be/Zz3RvK8b1s8)

**Source Code**: [GitHub](https://github.com/JamesWeatherhead/VibeRad)

**Data**: CC0 Stroke MRI from [OpenNeuro ds004889](https://openneuro.org/datasets/ds004889/versions/1.1.2)

---

## The Team

- **James Weatherhead**
- **Peter McCaffrey**
- **Jake Weatherhead**
- **George Golovko**

---

## Citation

James Weatherhead, Peter McCaffrey, Jake Weatherhead, George Golovko. *VibeRad: Reimagining Radiology Education with Gemini 3 Pro*. [Kaggle Competition Writeup](https://www.kaggle.com/competitions/gemini-3/writeups/new-writeup-1765065566929). 2025.

---

*This project won the Google DeepMind "Vibe Code with Gemini 3 Pro in AI Studio" Hackathon, December 2025. Winners announced March 2026.*

*VibeRad is an educational demo, not a medical device. Not validated for clinical use. AI outputs can be incorrect.*
