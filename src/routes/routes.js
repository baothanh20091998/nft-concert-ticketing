import config from "../config";

// Pages
import Home from "../pages/Home";
import Profile from "../pages/Profile";

// Public routes
const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.profile, component: Profile },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
