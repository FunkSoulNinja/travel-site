import MobileMenu from './modules/MobileMenu';
import RevealOnScroll from './modules/RevealOnScroll';
import StickyHeader from './modules/StickyHeader';
import Modal from './modules/Modal';
import $ from "jquery";

let mobileMenu = new MobileMenu();
new RevealOnScroll($(".feature-item"), "40%");
new RevealOnScroll($(".testimonial"), "40%");
let stickyHeader = new StickyHeader();
var modal = new Modal();
