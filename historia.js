import * as singleSpa from 'single-spa';

singleSpa.registerApplication('navbar', () =>
    import ('src/component/navbar/navbar.js'), () => true);
singleSpa.registerApplication('home', () =>
    import ('src/home/home.js'), () => location.pathname === "/");
singleSpa.registerApplication('vendor', () =>
    import ('src/vendor/vendor.js'), pathPrefix('/vendor'));

singleSpa.start();

function pathPrefix(prefix) {
    return function(location) {
        return location.pathname.startsWith(`${prefix}`);
    }
}