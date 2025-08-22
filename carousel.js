const teamMembers = [
  {
    name: "Moses Peace",
    role: "Founder & Visionary",
    bio: {
      short:
        "Moses Peace is a Public Speaker, Prolific Writer, Podcaster, Project Manager and Media Personality with...",
      full:
        "Moses Peace is a Public Speaker, Prolific Writer, Podcaster, Project Manager and Media Personality with a strong grasp of the social media landscape. She is the host of Peaceful’s Corner, a podcast dedicated to honest conversations around healing, growth, and emotional well-being. The Moses Peace Foundation is her way of giving back,a personal response to a journey she has lived through. Through it, she creates safe spaces for emotional healing, especially for women and girls navigating pain and brokenness."
    },
    socials: {
      facebook: "https://www.facebook.com/share/1Eyyw5fQwV/?mibextid=wwXIfr",
      instagram: "https://www.instagram.com/iam_mosespeace",
      twitter: "https://x.com/iam_mosespeace?s=21",
      youtube: "https://www.youtube.com/@Peacefuls_Corner"
    }
  },
  {
    name: "Debby Moses",
    role: "Executive Coordinator",
    bio: {
      short: "Debby Moses serves as the Executive Coordinator of our foundation. She plays a key role in managing...",
      full:
        "Debby Moses serves as the Executive Coordinator of our foundation. She plays a key role in managing our internal structure, overseeing financial records, organizing team operations, and keeping everything on track behind the scenes. As the public face of our foundation, Debby also represents us at events and gatherings, speaking with heart and clarity about the work we do and the change we hope to see. Her leadership, voice, and attention to detail are part of what keeps our mission grounded and growing."
    },
    socials: {
      facebook: "https://www.facebook.com/share/16q8PUHcm1/?mibextid=wwXIfr",
      instagram: "https://www.instagram.com/official_dee_bee?igsh=bTNpODlxZmN0N29p",
      twitter: "#",
      youtube: "#"
    }
  },
  {
    name: "Chioma Esther Okafor",
    role: "Project Coordinator",
    bio: {
      short:
        "Chioma Esther Okafor is the Project Coordinator of our foundation. She oversees the planning, execution...",
      full:
        "Chioma Esther Okafor is the Project Coordinator of our foundation. She oversees the planning, execution, and follow-up of our projects, ensuring every detail is handled with care and precision. Chioma works closely with the team and community partners to keep our initiatives on schedule and aligned with our mission. Her commitment, coordination skills, and passion for impact help bring each project to life from start to finish."
    },
    socials: {
      facebook: "https://www.facebook.com/share/1AqWTWzea4/?mibextid=wwXIfr",
      instagram: "https://www.instagram.com/chi__oma_okafor?igsh=MTRxdHprYzNmamVoNA==",
      twitter: "#",
      youtube: "#"
    }
  },
    {
    name: "Moses Peace",
    role: "Founder & Visionary",
    bio: {
      short:
        "Moses Peace is a Public Speaker, Prolific Writer, Podcaster, Project Manager and Media Personality with...",
      full:
        "Moses Peace is a Public Speaker, Prolific Writer, Podcaster, Project Manager and Media Personality with a strong grasp of the social media landscape. She is the host of Peaceful’s Corner, a podcast dedicated to honest conversations around healing, growth, and emotional well-being. The Moses Peace Foundation is her way of giving back,a personal response to a journey she has lived through. Through it, she creates safe spaces for emotional healing, especially for women and girls navigating pain and brokenness."
    },
    socials: {
      facebook: "https://www.facebook.com/share/1Eyyw5fQwV/?mibextid=wwXIfr",
      instagram: "https://www.instagram.com/iam_mosespeace",
      twitter: "https://x.com/iam_mosespeace?s=21",
      youtube: "https://www.youtube.com/@Peacefuls_Corner"
    }
  },
  {
    name: "Pst Chioma Rufus",
    role: "Counselor & Mentor",
    bio: {
      short: "Pst Chioma Rufus is a trusted mentor and spiritual counselor to the founder of our foundation...",
      full:
        "Pst Chioma Rufus is a trusted mentor and spiritual counselor to the founder of our foundation. She is the Founder of Think Like A Queen and Lead Pastor of The LoveChannels Christian Center. She provides faith-based guidance and emotional support to women and youth dealing with pain, trauma, and rejection generally. Her wisdom, care, and voice of encouragement continue to shape lives and strengthen the heart behind our mission."
    },
    socials: {
      facebook: "https://www.facebook.com/share/1AC7aT1Gqf/?mibextid=wwXIfr",
      instagram: "https://www.instagram.com/officialchiomarufus?igsh=Ym9mN2c2M2xjOGd0",
      twitter: "#",
      youtube: "https://youtube.com/@officialchiomarufus?si=Cemc_GoY7GmM30kp"
    }
  }
];

// Select DOM elements
const cards = document.querySelectorAll(".carousel-card");
const dots = document.querySelectorAll(".carousel-dot");
const memberName = document.querySelector(".carousel-member-name");
const memberRole = document.querySelector(".carousel-member-role");
const memberBioShort = document.querySelector(".carousel-member-bio .short");
const memberBioFull = document.querySelector(".carousel-member-bio .full");
const toggleBio = document.querySelector(".toggle-bio");
const memberSocials = document.querySelector(".carousel-member-social-icons");
const leftArrow = document.querySelector(".carousel-nav-arrow.left");
const rightArrow = document.querySelector(".carousel-nav-arrow.right");

let currentIndex = 0;
let isAnimating = false;

// Update carousel
function updateCarousel(newIndex) {
  if (isAnimating) return;
  isAnimating = true;

  currentIndex = (newIndex + cards.length) % cards.length;

  // Handle card positions
  cards.forEach((card, i) => {
    const offset = (i - currentIndex + cards.length) % cards.length;
    card.classList.remove("center","left-1","left-2","right-1","right-2","hidden");

    if (offset === 0) card.classList.add("center");
    else if (offset === 1) card.classList.add("right-1");
    else if (offset === 2) card.classList.add("right-2");
    else if (offset === cards.length - 1) card.classList.add("left-1");
    else if (offset === cards.length - 2) card.classList.add("left-2");
    else card.classList.add("hidden");
  });

  // Dots
  dots.forEach((dot, i) => {
    dot.classList.toggle("active", i === currentIndex);
  });

  // Fade out text/info
  memberName.style.opacity = "0";
  memberRole.style.opacity = "0";
  memberBioShort.style.opacity = "0";
  memberBioFull.style.opacity = "0";
  memberSocials.style.opacity = "0";

  setTimeout(() => {
    const member = teamMembers[currentIndex];

    // Update text
    memberName.textContent = member.name;
    memberRole.textContent = member.role;

    memberBioShort.textContent = member.bio.short;
    memberBioFull.textContent = member.bio.full;
	memberBioShort.style.display = "inline";
    memberBioFull.style.display = "none";
    toggleBio.textContent = "Read more";

    // Update socials
	memberSocials.innerHTML = ""; // clear old socials
	const socials = member.socials;

	Object.entries(socials).forEach(([platform, url]) => {
	if (url && url !== "#") {
		let iconClass = "";
		switch (platform) {
		case "facebook": iconClass = "fab fa-facebook-f"; break;
		case "instagram": iconClass = "fab fa-instagram"; break;
		case "twitter": iconClass = "fab fa-twitter"; break;
		case "youtube": iconClass = "fab fa-youtube"; break;
		}
		memberSocials.innerHTML += `<a href="${url}" target="_blank"><i class="${iconClass}"></i></a>`;
	}
	});


    // Fade back in
    memberName.style.opacity = "1";
    memberRole.style.opacity = "1";
    memberBioShort.style.opacity = "1";
    memberBioFull.style.opacity = "1";
    memberSocials.style.opacity = "1";
  }, 300);

  setTimeout(() => {
    isAnimating = false;
  }, 800);
}

// Bio toggle
toggleBio.addEventListener("click", (e) => {
  e.preventDefault();

  if (memberBioFull.style.display === "none") {
    // Show full, hide short
    memberBioShort.style.display = "none";
    memberBioFull.style.display = "inline";
    toggleBio.textContent = "Read less";
  } else {
    // Show short, hide full
    memberBioShort.style.display = "inline";
    memberBioFull.style.display = "none";
    toggleBio.textContent = "Read more";
  }
});


// Navigation
leftArrow.addEventListener("click", () => updateCarousel(currentIndex - 1));
rightArrow.addEventListener("click", () => updateCarousel(currentIndex + 1));
dots.forEach((dot, i) => dot.addEventListener("click", () => updateCarousel(i)));
cards.forEach((card, i) => card.addEventListener("click", () => updateCarousel(i)));

document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowLeft") updateCarousel(currentIndex - 1);
  else if (e.key === "ArrowRight") updateCarousel(currentIndex + 1);
});

// Swipe
let touchStartX = 0, touchEndX = 0;
document.addEventListener("touchstart", (e) => touchStartX = e.changedTouches[0].screenX);
document.addEventListener("touchend", (e) => {
  touchEndX = e.changedTouches[0].screenX;
  const diff = touchStartX - touchEndX;
  if (Math.abs(diff) > 50) updateCarousel(currentIndex + (diff > 0 ? 1 : -1));
});

// Init
updateCarousel(0);
