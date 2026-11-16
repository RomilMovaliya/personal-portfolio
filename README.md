# Personal Portfolio Website

A modern, interactive portfolio built with Next.js and deployed on AWS Amplify for the AWS Builder Center Hackathon.

## 🎯 Features

### Core Sections
- **About Me**: Introduction and professional background
- **Skills & Tech Stack**: Categorized technical skills
- **Projects**: Showcase of featured projects with live demos
- **Achievements**: Milestones and accomplishments
- **Contact**: Multiple ways to get in touch

### 🎮 Creative Feature: Developer's Secret Console

The portfolio includes a hidden, fully-functional command-line interface that visitors can discover and use to explore the site in a unique way.

**How to access**: Press `Ctrl + \`` (or look for the hint on the homepage)

**Available commands**:
- `help` - List all available commands
- `about` - Learn more about me
- `skills` - View technical skills
- `projects` - Browse projects
- `contact` - Get contact information
- `joke` - Get a random developer joke
- `matrix` - Enter the Matrix mode
- `secret` - Discover a hidden message
- `clear` - Clear the console
- `exit` - Close the console

This feature adds an interactive, memorable element that reflects developer culture while staying accessible and non-intrusive.

## 🚀 Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Deployment**: AWS Amplify Hosting
- **Version Control**: Git & GitHub

## 🏗️ AWS Services Used

- **AWS Amplify Hosting**: For hosting and continuous deployment
- **AWS CloudFront**: CDN for global content delivery
- **AWS Route 53**: DNS management (if custom domain used)
- **AWS Certificate Manager**: SSL/TLS certificates

## 📱 Responsive & Accessible

- Fully responsive design for all screen sizes
- WCAG accessibility standards followed
- Semantic HTML structure
- Keyboard navigation support
- ARIA labels for screen readers
- Focus indicators for interactive elements

## 🛠️ Local Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## 🌐 Deployment on AWS Amplify

### Prerequisites
- AWS Account
- GitHub account with this repository
- AWS Amplify CLI (optional)

### Deployment Steps

1. **Connect to AWS Amplify**
   - Log in to AWS Console
   - Navigate to AWS Amplify
   - Click "New app" → "Host web app"
   - Connect your GitHub repository

2. **Configure Build Settings**
   - Amplify will auto-detect Next.js
   - Use the included `amplify.yml` for build configuration
   - Set build commands if needed

3. **Deploy**
   - Click "Save and deploy"
   - Amplify will build and deploy your app
   - Get your live URL

4. **Custom Domain (Optional)**
   - Add custom domain in Amplify Console
   - Configure DNS settings
   - SSL certificate auto-provisioned

## 📸 Screenshots

### Homepage with Hero Section
![Homepage](screenshots/homepage.png)

### Skills Section
![Skills](screenshots/skills.png)

### Secret Console Feature
![Console](screenshots/console.png)

### Projects Showcase
![Projects](screenshots/projects.png)

## 🎓 What I Learned

- **AWS Amplify Hosting**: Learned how to deploy Next.js apps with continuous deployment
- **Serverless Architecture**: Understanding AWS's serverless hosting capabilities
- **CloudFront CDN**: How global content delivery works
- **Interactive UX**: Creating engaging features that enhance user experience
- **Performance Optimization**: Building production-ready, fast-loading applications

## 🚧 Challenges & Solutions

### Challenge 1: Console Keyboard Shortcuts
**Problem**: Global keyboard shortcuts conflicting with browser defaults
**Solution**: Used `Ctrl + \`` combination and properly handled event.preventDefault()

### Challenge 2: Mobile Responsiveness
**Problem**: Complex layouts breaking on smaller screens
**Solution**: Mobile-first approach with Tailwind's responsive utilities

### Challenge 3: AWS Deployment Configuration
**Problem**: Next.js dynamic routes needed proper configuration
**Solution**: Created custom amplify.yml with correct build settings

## 🔮 Future Enhancements

- Add blog section with CMS integration
- Implement dark/light theme toggle
- Add more interactive console commands
- Include testimonials section
- Add project filtering and search

## 📄 License

MIT License - feel free to use this as inspiration for your own portfolio!

## 🙏 Acknowledgments

- Built for the AWS Builder Center Hackathon
- Thanks to the AWS and Next.js communities for excellent documentation

## 📞 Contact

- **Email**: your.email@example.com
- **LinkedIn**: [linkedin.com/in/yourusername](https://linkedin.com/in/yourusername)
- **GitHub**: [github.com/yourusername](https://github.com/yourusername)

---

Made with 💜 and deployed on AWS Amplify
