import project2Img from './assets/ProjectsImages/project_main_img_2.png';
import project_cruxclimbing_preview from './assets/ProjectsImages/project_cruxclimbing_preview.png';
import project_liquidanim_preview from './assets/ProjectsImages/project_liquidanim_preview.png';
import project_7menebo_preview from './assets/ProjectsImages/project_7menebo_preview.png';
import project_wolkh_preview from './assets/ProjectsImages/project_wolkh_preview.png';
import project_sm_preview from './assets/ProjectsImages/project_sm_preview.png';

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
        title: 'Text stylezations',
        types: ['Show all', 'Typography', 'Typogr..', 'Personal Projects', 'Personal..'],
        shortDescription: 'Different text styles compilation',
        modalDescription: '',
        image: project2Img, 
        imageDescription: 'Various text stylezations',
        modalImage: project2Img,
        modalImageDescription: 'Text stylezations',
        showBeLink: true,
        linkBe: 'https://www.behance.net/gallery/166320053/text-stylesation',
        showYTLink: false,
        linkYT: '',
        modalBackgroundColor: '#000'
    },
    {
        title: 'Spider-man - stylized text',
        types: ['Show all','Personal Projects', 'Personal..' , 'Other', 'Typography', 'Typogr..', ],
        shortDescription: 'Stylezed text inspired Spider-man animated movie',
        modalDescription: 'I become a huge fan of animated SM movie because of it unique style, so I tried to recreate text style from movie poster',
        image: project_sm_preview,
        imageDescription: 'SM - stylized text',
        modalImage: project_sm_preview,
        modalImageDescription: 'Spider-man - stylized text',
        showBeLink: true,
        linkBe: 'https://www.behance.net/gallery/191108503/SPIDER-MAN-stylized-text',
        showYTLink: false,
        linkYT: '',
        modalBackgroundColor: '#b20000'
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