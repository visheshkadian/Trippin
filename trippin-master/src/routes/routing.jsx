import Starter from '../views/starter/starter.jsx';
import BlogMain from '../components/Blog/blogmain.js';
import People from '../components/People/peoplepage.js';
import Places from '../components/Places/placespage.js';


var ThemeRoutes = [
  { 
    path: '/dashboard', 
    name: 'Dashboard', 
    icon: 'mdi mdi-apps', 
    component: Starter 
  },
  {
    path: '/places',
    name: 'Places',
    icon: 'mdi mdi-earth',
    component: Places
  },
  {
    path: '/people',
    name: 'People',
    icon: 'mdi mdi-human-greeting',
    component: People
  },
  { path: '/', pathTo: '/dashboard', name: 'Dashboard', redirect: true }
  
];
export default ThemeRoutes;
