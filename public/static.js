import assets from '@assets'
const skills = assets.skills
const feaImgs = assets.featured
const data = {
    personal: {
        email: 'm63jayne@gmail.com',
        social: {
            github: {
                title: 'GitHub',
                url: 'https://github.com/mrJayn',
                icon: 'FaGitHub',
            },
            codepen: {
                title: 'Codepen',
                url: 'https://codepen.io/mrjayn',
                icon: 'FaCodepen',
            },
            linkedin: {
                title: 'Linkedin',
                url: 'https://www.linkedin.com/in/',
                icon: 'FaLinkedinIn',
            },
            gmail: {
                title: 'Email',
                url: 'mailTo',
                icon: 'AiOutlineMail',
            },
        },
    },

    navLinks: [
        {
            item: '1',
            title: 'About',
            url: '/#about',
        },
        {
            item: '2',
            title: 'Experience',
            url: '/#exp',
        },
        {
            item: '3',
            title: 'Projects',
            url: '/#featured',
        },
        {
            item: '4',
            title: 'Contact',
            url: '/#contact',
        },
    ],
    menuLinks: [
        {
            item: '1',
            title: 'About',
            url: '/#about',
        },
        {
            item: '2',
            title: 'Experience',
            url: '/#exp',
        },
        {
            item: '3',
            title: 'Projects',
            url: '/#featured',
        },
        {
            item: '4',
            title: 'Contact',
            url: '/#contact',
        },
    ],
    cards: {
        about: {
            title: 'about',
            content: `Nice to meet you,\nAllow me to introduce myself.`,
            btnText: 'Read More',
            SRC: assets.misc.myPicTransparent,
            ALT: 'picture of myself',
        },
        skills: {
            title: 'skills',
            content: `Some tech I'm familiar with...`,
            btnText: 'Read More',
            SRC: assets.skills.cssImg,
            ALT: 'image of skill',
        },
        experience: {
            title: 'experience',
            content: `Where I've worked`,
            btnText: 'Read More',
            SRC: assets.misc.resume,
            ALT: '/',
        },
    },
    skills: [
        {
            item: '1',
            skill: 'HTML',
            url: assets.skills.htmlImg,
        },
        {
            item: '2',
            skill: 'CSS',
            url: assets.skills.cssImg,
        },
        {
            item: '3',
            skill: 'Javascript',
            url: assets.skills.jsImg,
        },
        {
            item: '4',
            skill: 'React',
            url: assets.skills.reactImg,
        },
        {
            item: '5',
            skill: 'Tailwind',
            url: assets.skills.tailwindImg,
        },
        {
            item: '6',
            skill: 'Github',
            url: assets.skills.githubImg,
        },
        {
            item: '7',
            skill: 'Node',
            url: assets.skills.nodeImg,
        },
        {
            item: '8',
            skill: 'Python',
            url: assets.skills.pyImg,
        },
        {
            item: '9',
            skill: 'TensorFlow',
            url: assets.skills.tensorImg,
        },
    ],
    featured: [
        {
            item: 'fp1',
            title: 'Property Finder',
            category: 'none',
            tech: ['React', 'Javascript', 'FireBase', 'Tailwind'],
            text: 'This is a descritpion Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam obcaecati aliquid dignissimos vero. Doloremque repellendus eveniet, eius commodi assumenda ut voluptate nesciunt! Repudiandae tenetur molestiae saepe suscipit, distinctio ullam nulla.',
            src: assets.featured.property,
            github: 'https://github.com/bchiang7/spotify-profile',
            url: 'https://spotify-profile.herokuapp.com/',
        },
        {
            item: 'fp2',
            title: 'ML Face Recognition Software',
            category: 'none',
            tech: ['Python', 'TensorFlow', 'Torch'],
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, molestiae dolorum ad explicabo non nostrum ni dicta? Placeat rem animi amet minima praesentium architecto ab ut harum reprehenderit!',
            src: assets.featured.crypto,
            github: 'https://github.com/bchiang7/spotify-profile',
            url: 'https://spotify-profile.herokuapp.com/',
        },
        {
            item: 'fp3',
            title: 'Soething Cool',
            category: 'none',
            tech: ['react', 'nextjs', 'framer-motion'],
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, molestiae dolorum ad explicabo non nostrum ni dicta? Placeat rem animi amet minima praesentium architecto ab ut harum reprehenderit!',
            src: assets.projects.cohort,
            github: 'https://github.com/bchiang7/spotify-profile',
            url: 'https://spotify-profile.herokuapp.com/',
        },
    ],
    projects: [
        {
            item: '1',
            title: 'Cohort Analysis',
            category: 'Data Analysis',
            technologies: ['Python', 'Matplotlib', 'pandas', 'Seaborn'],
            message: 'Cohort Analysis of retained customers over time',
            src: assets.projects.cohort,
            github: 'https://github.com/mrJayn/Cohort-Analysis',
            url: '/',
        },
        {
            item: '2',
            title: 'Archived Project 2',
            category: '',
            technologies: ['React', 'Nextjs', 'tech3'],
            message: 'A simple front end design for my Web App',
            src: assets.projects.crypto,
            github: 'https://github.com/bchiang7/spotify-profile',
            url: '/',
        },
        {
            item: '3',
            title: 'Archived Project 3',
            category: '',
            technologies: ['Python', 'Tensorflow', 'Tech3'],
            message:
                'A simple wrkt computational app made with python and tensorflow',
            src: assets.projects.property,
            github: 'https://github.com/bchiang7/spotify-profile',
            url: '/',
        },
        {
            item: '4',
            title: 'Archived Project 4',
            category: '',
            technologies: ['React', 'Nextjs', 'tech3'],
            message: 'A simple front end design for my Web App',
            src: assets.projects.crypto,
            github: 'https://github.com/bchiang7/spotify-profile',
            url: '/',
        },
        {
            item: '5',
            title: 'Archived Project 5',
            category: '',
            technologies: ['Python', 'Tensorflow', 'Tech3'],
            message:
                'A simple wrkt computational app made with python and tensorflow',
            src: assets.projects.netflix,
            github: 'https://github.com/bchiang7/spotify-profile',
            url: '/',
        },
        {
            item: '6',
            title: 'Archived Project 6',
            category: '',
            technologies: ['React', 'Nextjs', 'tech3'],
            message: 'A simple front end design for my Web App',
            src: assets.projects.twitch,
            github: 'https://github.com/bchiang7/spotify-profile',
            url: '/',
        },
    ],
    formInputs: [
        {
            item: '1',
            title: 'name',
            placeholder: 'Who am I speaking with?',
            type: 'text',
        },
        {
            item: '2',
            title: 'email',
            placeholder: 'Where should I reach you?',
            type: 'email',
        },
        {
            item: '3',
            title: 'subject',
            placeholder: 'What is the topic of this message?',
            type: 'text',
        },
        {
            item: '4',
            title: 'message',
            placeholder: 'Type your message here.',
            type: 'text',
        },
    ],
}

export default data
