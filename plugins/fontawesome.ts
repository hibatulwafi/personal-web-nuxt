import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import {
  faBars,
  faFileCode,
  faXmark,
  faFolderOpen,
  faPhone,
  faEnvelope,
  faLocationDot,
  faCode,
  faDatabase,
  faTerminal,
  faLaptopCode,
  faDesktop,
  faBriefcase,
  faBuilding
} from "@fortawesome/free-solid-svg-icons";

import {
  faVuejs,
  faCss3Alt,
  faJs,
  faPython,
  faGithub,
  faLinkedin,
  faHtml5,
  faJava,
  faPhp,
  faReact,
  faLaravel,
} from "@fortawesome/free-brands-svg-icons";

// Tambahkan semua ikon ke pustaka
library.add(
  faBars,
  faVuejs,
  faCss3Alt,
  faJs,
  faPython,
  faFileCode,
  faXmark,
  faFolderOpen,
  faGithub,
  faLinkedin,
  faPhone,
  faEnvelope,
  faLocationDot,
  faHtml5,
  faJava,
  faPhp,
  faReact,
  faLaravel,
  faCode,
  faDatabase,
  faTerminal,
  faLaptopCode,
  faDesktop,
  faBriefcase,
  faBuilding
);

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component("FontAwesomeIcon", FontAwesomeIcon);
});
