# Portfolio Customization Guide

Follow these steps to personalize your portfolio with your own information.

## 📝 Step 1: Update Personal Information

### In `app/layout.tsx`
```typescript
export const metadata: Metadata = {
  title: "Your Name | Portfolio",  // Change this
  description: "Your custom description",  // Change this
};
```

### In `components/Hero.tsx`
- Line 7: Update the typing text `"Hi, I'm a Full-Stack Developer"` to your title
- Line 21: Update the description text

### In `components/About.tsx`
- Update all three paragraphs (lines 15-27) with your story
- Update social media links (lines 33, 45)
- Replace emoji with your actual profile picture if you have one
- Update "Your Name" and title (lines 59-60)

### In `components/Footer.tsx`
- Line 7: Update "Your Name" with your actual name

### In `components/Contact.tsx`
- Line 28: Update email address
- Line 42: Update location
- Line 56: Update GitHub username and link
- Line 80: Update email placeholder

## 🛠️ Step 2: Update Skills

### In `components/Skills.tsx`
Modify the `skillCategories` array (lines 3-21) with your actual skills:

```typescript
const skillCategories = [
  {
    category: 'Frontend',
    skills: ['Your', 'Frontend', 'Skills']
  },
  // Add or remove categories as needed
];
```

## 📂 Step 3: Add Your Projects

### In `components/Projects.tsx`
Update the `projects` array (lines 3-39) with your actual projects:

```typescript
const projects = [
  {
    title: 'Your Project Name',
    description: 'Project description',
    tech: ['Tech1', 'Tech2', 'Tech3'],
    github: 'https://github.com/yourusername/repo',
    live: 'https://your-demo.com',
    image: '🚀'  // Use emoji or replace with actual images
  },
  // Add more projects
];
```

**To use real images instead of emojis:**
1. Add images to `public/projects/` folder
2. Update the image rendering in the component:
```typescript
<img src={project.image} alt={project.title} />
```

## 🏆 Step 4: Update Achievements

### In `components/Achievements.tsx`
Modify the `achievements` array (lines 3-37) with your accomplishments:

```typescript
const achievements = [
  {
    title: 'Your Achievement',
    description: 'Description of what you did',
    date: 'Year or Date Range',
    icon: '🏆'  // Choose appropriate emoji
  },
  // Add your achievements
];
```

## 🎮 Step 5: Customize Secret Console

### In `components/SecretConsole.tsx`
Update the commands object (lines 47-94) to personalize responses:

```typescript
const commands: Record<string, string[]> = {
  about: [
    'Your custom about text',
    'Add multiple lines',
  ],
  contact: [
    '📧 Email: your.email@example.com',
    '💼 LinkedIn: your-linkedin-url',
    '💻 GitHub: your-github-url',
  ],
  // Customize other commands
};
```

## 🎨 Step 6: Customize Colors & Styling

### Tailwind Color Scheme
The portfolio uses these main colors:
- Primary: `indigo-600` (change to your preferred color)
- Secondary: `purple-600`
- Background: `slate-900`

To change the color scheme, search and replace:
- `indigo-` with your color (e.g., `blue-`, `green-`, `red-`)
- `purple-` with your secondary color

### In `app/globals.css`
- Customize scrollbar colors (lines 20-32)
- Adjust animation timing if needed

## 📱 Step 7: Add Your Profile Picture (Optional)

1. Add your image to `public/profile.jpg`
2. Update `components/About.tsx`:

```typescript
<div className="aspect-square rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 p-1">
  <img 
    src="/profile.jpg" 
    alt="Your Name"
    className="w-full h-full rounded-2xl object-cover"
  />
</div>
```

## 🔗 Step 8: Update Social Links

Find and replace all instances of:
- `yourusername` with your actual username
- `your.email@example.com` with your email
- `Your City, Country` with your location

Files to update:
- `components/About.tsx`
- `components/Contact.tsx`
- `README.md`

## 📄 Step 9: Update README

### In `README.md`
- Add your actual screenshots
- Update the "What I Learned" section with your experience
- Add your specific challenges faced
- Update contact information

## 🚀 Step 10: Prepare for Deployment

### Before deploying:
1. Test locally: `npm run dev`
2. Check all links work
3. Test the secret console (`Ctrl + \``)
4. Test on mobile viewport
5. Run build: `npm run build`
6. Fix any build errors

### Create GitHub Repository
```bash
cd portfolio
git init
git add .
git commit -m "Initial commit: Personal portfolio"
git branch -M main
git remote add origin https://github.com/yourusername/portfolio.git
git push -u origin main
```

## ✅ Checklist Before Submission

- [ ] All personal information updated
- [ ] Skills reflect your actual expertise
- [ ] Projects showcase your best work
- [ ] All links are working
- [ ] Secret console commands personalized
- [ ] Tested on desktop and mobile
- [ ] GitHub repository is public
- [ ] README includes screenshots
- [ ] AWS Amplify deployment successful
- [ ] Site loads at live URL

## 💡 Tips for Hackathon Success

1. **Make it Personal**: The console should reveal something unique about YOU
2. **Document Everything**: Take screenshots of your AWS setup
3. **Write Clear README**: Explain your creative feature and learning journey
4. **Test Thoroughly**: Ensure everything works before submission
5. **Be Creative**: Add personal touches to the console commands

## 🆘 Need Help?

Common issues and solutions:

**Build fails**: Check console for errors, ensure all imports are correct
**Styles not loading**: Clear `.next` folder and rebuild
**Console not opening**: Check keyboard shortcut, try different browser

---

Good luck with your hackathon submission! 🚀
