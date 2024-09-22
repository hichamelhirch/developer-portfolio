<p align="center" width="100%">
    <img height="100" src="https://github.com/hichamelhirch/developer-portfolio/assets/77630868/c0064908-cd5f-4751-a77c-eba90a62b55c">
</p>

---
# [Built Portfolio With GitHub ](https://github.com/hichamelhirch/developer-portfolio)

---

# Developer Portfolio

### Struggling to create a professional portfolio website? Look no further! With the Developer Portfolio template, you can create your own personalized portfolio today. My website is designed to be user-friendly and easily customizable, making it perfect for both developers and freelancers.

---

# Demo :movie_camera:

![](./public/image/screen.png)

## View live preview [here](https://hichamelhirch.vercel.app/).
---

## Table of Contents :scroll:

- [Sections](#sections-bookmark)
- [Demo](#demo-movie_camera)
- [Installation](#installation-arrow_down)
- [Getting Started](#getting-started-dart)
- [Usage](#usage-joystick)
- [Packages Used](#packages-used-package)

---

# Sections :bookmark:

- HERO SECTION
- ABOUT ME
- EXPERIENCE
- SKILLS
- PROJECTS
- EDUCATION
- BLOG
- CONTACTS

---

# Installation :arrow_down:

### You will need to download Git and Node to run this project

- [Git](https://git-scm.com/downloads)
- [Node](https://nodejs.org/en/download/)

#### Make sure you have the latest version of both Git and Node on your computer.

```
node --version
git --version
```

## <br />

# Getting Started :dart:

### Fork and Clone the repo

To Fork the repo click on the fork button at the top right of the page. Once the repo is forked open your terminal and perform the following commands

```
git clone https://github.com/<YOUR GITHUB USERNAME>/developer-portfolio.git

cd developer-portfolio
```

### Install packages from the root directory

```bash
npm install
# or
yarn install
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

---

# Usage :joystick:

Goto [emailjs.com](https://www.emailjs.com/) and create a new account for the mail sending. In free trial you will get 200 mail per month. After setup `emailjs` account, Please create a new `.env` file from `.env.example` file.

Eg:

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID =
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID =
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY =
NEXT_PUBLIC_GTM = # For site analytics
NEXT_PUBLIC_APP_URL = "http://127.0.0.1:3000"
NEXT_PUBLIC_RECAPTCHA_SECRET_KEY = # For captcha verification on contact form
NEXT_PUBLIC_RECAPTCHA_SITE_KEY =
```

### Then, Customize data in the `utils/data` [folder](https://github.com/hichamelhirch/developer-portfolio/tree/main/utils/data).

Eg:

```javascript
export const personalData = {
  name: "Hicham EL HIRCH",
  profile: '/profile.png',
  designation: "Software Developer",
  description: "I am Hicham EL HIRCH, a passionate and dedicated Full Stack Developer specializing in Java-based technologies. I excel in both front-end development using Angular and React, and back-end services with Spring Boot. I’m always eager to explore new technologies, continuously improving my skills and solving complex challenges. Open to any opportunities that align with my experience and drive for innovation.",
  email: 'hichamelhirchgmi@gmail.com',
  phone: '+212631790457',
  address: 'Casablanca, Maroc',
  github: 'https://github.com/hichamelhirch',
  facebook: 'https://www.facebook.com/profile.php?id=100020253690219&mibextid=ZbWKwL',
  linkedIn: 'https://www.linkedin.com/in/hicham-el-hirch/',
  twitter: 'https://x.com/Hicham843737462',
  stackOverflow: 'https://stackoverflow.com/users/27385067/hichamelhirch',
  leetcode: "https://leetcode.com/u/hichamelhirch/",
  devUsername: "hichamelhirch",
  resume: "https://drive.google.com/file/d/14iZa4KKZ-kv_YA7nYV2pUBRQQFbRE5na/view?usp=sharingg"

}

=======

```

`devUsername` Used for fetching blog from `dev.to`.

---

---

# Packages Used :package:

| Used Package List  |
| :----------------: |
|        next        |
|  @emailjs/browser  |
|    lottie-react    |
| react-fast-marquee |
|    react-icons     |
|   react-toastify   |
|        sass        |
|    tailwindcss     |

---
