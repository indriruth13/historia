import * as singleSpa from 'single-spa';

singleSpa.registerApplication('navbar', () =>
    import ('src/component/navbar/navbar.js'), () => true);
singleSpa.registerApplication('home', () =>
    import ('src/home/home.js'), () => location.pathname === "" ||
    location.pathname === "/");
singleSpa.registerApplication('vendor', () =>
    import ('src/vendor/vendor.js'), pathPrefix('/vendor'));
singleSpa.registerApplication('login', () =>
    import ('src/login/login.js'), pathPrefix('/login'));
singleSpa.registerApplication('register', () =>
    import ('src/register/register.js'), pathPrefix('/register'));

singleSpa.start();

function pathPrefix(prefix) {
    return function(location) {
        return location.pathname.startsWith(`${prefix}`);
    }
}