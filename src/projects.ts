import project1Img from './assets/ProjectsImages/project_main_img_1.png';
import project2Img from './assets/ProjectsImages/project_main_img_2.png';
import project3Img from './assets/ProjectsImages/project_main_img_3.png';
import project4Img from './assets/ProjectsImages/project_main_img_4.png';
import project_cruxclimbing_preview from './assets/ProjectsImages/project_cruxclimbing_preview.png';
import project_liquidanim_preview from './assets/ProjectsImages/project_liquidanim_preview.png';
import project_7menebo_preview from './assets/ProjectsImages/project_7menebo_preview.png';
import project_wolkh_preview from './assets/ProjectsImages/project_wolkh_preview.png';

export interface IProject {
    title: string,
    types: string[],
    shortDescription: string,
    modalDescription: string,
    image: string,
    imageDescription: string,
    modalImage: string,
    modalImageDescription: string,
    showBeLink: boolean,
    linkBe?: string,
    showYTLink: boolean,
    linkYT?: string,
    modalBackgroundColor: string,
}

export const types = ['Show all', 'Typography', '2D & 3D', 'Animations', 'UI/UX', 'Personal Projects', 'Projects for clients', 'Other'];
export const mobileTypes = ['Show all', 'Typogr..', '2D & 3D', 'Animations', 'UI/UX', 'Personal..', 'Commercial', 'Other'];

export const projects = [
    {
        title: 'Project cherniy',
        types: ['Show all', '2D & 3D', 'Projects for clients', 'Commercial'],
        shortDescription: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore, earum accusamus officiis modi perferendis delectus voluptatibus libero, esse omnis voluptas tempore nemo at ipsam suscipit!',
        modalDescription: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus perferendis, consectetur debitis tempore odio quidem fuga quasi officia nostrum molestiae sequi ipsum? Labore, quas commodi voluptatum quam rerum facere natus ipsum eveniet quis illum odio nobis mollitia ipsam officia libero amet cumque et deserunt? Mollitia.',
        image: project1Img, 
        imageDescription: 'Lorem ipsum dolor sit.',
        modalImage: project1Img,
        modalImageDescription: 'Lorem ipsum dolor sit.',
        showBeLink: true,
        linkBe: 'https://www.behance.net/gallery/166320053/text-stylesation',
        showYTLink: true,
        linkYT: 'https://www.youtube.com/watch?v=Yydr3JA2aDo',
        modalBackgroundColor: '#FF1E6D'
    },
    {
        title: 'Fonts',
        types: ['Show all', 'Typography', 'Typogr..', 'Personal Projects', 'Personal..'],
        shortDescription: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore, earum accusamus officiis modi perferendis delectus voluptatibus libero, esse omnis voluptas tempore nemo at ipsam suscipit!',
        modalDescription: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus perferendis, consectetur debitis tempore odio quidem fuga quasi officia nostrum molestiae sequi ipsum? Labore, quas commodi voluptatum quam rerum facere natus ipsum eveniet quis illum odio nobis mollitia ipsam officia libero amet cumque et deserunt? Mollitia.',
        image: project2Img, 
        imageDescription: 'Lorem ipsum dolor sit.',
        modalImage: project2Img,
        modalImageDescription: 'Lorem ipsum dolor sit.',
        showBeLink: true,
        linkBe: 'https://www.behance.net/gallery/166320053/text-stylesation',
        showYTLink: false,
        linkYT: '',
        modalBackgroundColor: '#000'
    },
    {
        title: '3D animation',
        types: ['Show all', '2D & 3D', 'Personal Projects', 'Personal..', 'Animations'],
        shortDescription: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore, earum accusamus officiis modi perferendis delectus voluptatibus libero, esse omnis voluptas tempore nemo at ipsam suscipit!',
        modalDescription: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus perferendis, consectetur debitis tempore odio quidem fuga quasi officia nostrum molestiae sequi ipsum? Labore, quas commodi voluptatum quam rerum facere natus ipsum eveniet quis illum odio nobis mollitia ipsam officia libero amet cumque et deserunt? Mollitia.',
        image: project3Img, 
        imageDescription: 'Lorem ipsum dolor sit.',
        modalImage: project3Img,
        modalImageDescription: 'Lorem ipsum dolor sit.',
        showBeLink: true,
        linkBe: 'https://www.behance.net/gallery/166320053/text-stylesation',
        showYTLink: false,
        linkYT: '',
        modalBackgroundColor: '#D9D9D9'
    },
    {
        title: 'SpaceDev',
        types: ['Show all', 'UI/UX', '2D & 3D', 'Projects for clients', 'Commercial'],
        shortDescription: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore, earum accusamus officiis modi perferendis delectus voluptatibus libero, esse omnis voluptas tempore nemo at ipsam suscipit!',
        modalDescription: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus perferendis, consectetur debitis tempore odio quidem fuga quasi officia nostrum molestiae sequi ipsum? Labore, quas commodi voluptatum quam rerum facere natus ipsum eveniet quis illum odio nobis mollitia ipsam officia libero amet cumque et deserunt? Mollitia.',
        image: project4Img, 
        imageDescription: 'Lorem ipsum dolor sit.',
        modalImage: project4Img,
        modalImageDescription: 'Lorem ipsum dolor sit.',
        showBeLink: true,
        linkBe: 'https://www.behance.net/gallery/166320053/text-stylesation',
        showYTLink: false,
        linkYT: '',
        modalBackgroundColor: '#D9D9D9'
    },
    {
        title: 'Liquid animatoin',
        types: ['Show all', '2D & 3D', 'Animations', 'Personal Projects', 'Personal..'],
        shortDescription: 'Liquid animation in after effects',
        modalDescription: 'this animation was used as backgroung for screen subtitels',
        image: project_liquidanim_preview,
        imageDescription: 'Liquid animation in after effects',
        modalImage: project_liquidanim_preview,
        modalImageDescription: 'Liquid animation in after effects',
        showBeLink: true,
        linkBe: 'https://www.behance.net/gallery/189763131/Liquid-animation',
        showYTLink: false,
        linkYT: '',
        modalBackgroundColor: '#000111'
    },
    {
        title: 'Crux Climbing',
        types: ['Show all', 'Projects for clients', 'Commercial', 'Other'],
        shortDescription: 'Logo design for Rock Climbing business in Birmingham',
        modalDescription: 'Crux Climbing is an indoor rock climbing business located in Birmingham, UK. The shown logo design was created for its owner, Jordan, during our time together in the same business development course.  ',
        image: project_cruxclimbing_preview,
        imageDescription: 'Logo design for Rock Climbing business.',
        modalImage: project_cruxclimbing_preview,
        modalImageDescription: 'Logo design for Rock Climbing business.',
        showBeLink: true,
        linkBe: 'https://www.behance.net/gallery/189663897/Crux-Climbing-(PROTOTYPE)',
        showYTLink: false,
        linkYT: '',
        modalBackgroundColor: '#FDD700'
    },
    {
        title: 'Event agency "Seventh heaven"',
        types: ['Show all', 'Projects for clients', 'Commercial', 'Other'],
        shortDescription: 'Logo design for Ukrainian Event agency business',
        modalDescription: 'Seventh heaven is Ukrainian Event agency specializing in childrens parties and birthdays  ',
        image: project_7menebo_preview,
        imageDescription: 'Event agency "Seventh heaven"',
        modalImage: project_7menebo_preview,
        modalImageDescription: 'Event agency "Seventh heaven"',
        showBeLink: true,
        linkBe: 'https://www.behance.net/gallery/189959235/Event-agency-Seventh-heaven',
        showYTLink: false,
        linkYT: '',
        modalBackgroundColor: '#FFFFFF'
    },
    {
        title: 'Jesus Teens - stylized text',
        types: ['Show all', 'Projects for clients', 'Commercial', 'Other', 'Typography', 'Typogr..', ],
        shortDescription: 'Stylezed text for teen team at church "Word of life"',
        modalDescription: 'Word of Life - is a megachurch in Uppsala (Sweden) and an international association of churches, within the Swedish Word of Faith movement.',
        image: project_wolkh_preview,
        imageDescription: 'Jesus Teens - stylized text',
        modalImage: project_wolkh_preview,
        modalImageDescription: 'Jesus Teens - stylized text',
        showBeLink: true,
        linkBe: 'https://www.behance.net/gallery/190098591/Jesus-Teens-stylized-text',
        showYTLink: false,
        linkYT: '',
        modalBackgroundColor: '#FFFFFF'
    },
]