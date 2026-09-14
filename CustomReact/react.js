// const customRender = (ReactElement, MainContainer) => {
//     const domelement = document.createElement(ReactElement.type);
//     domelement.innerHTML = ReactElement.props.children;
//     domelement.setAttribute('href', ReactElement.props.href);
//     domelement.setAttribute('target', ReactElement.props.target);
//     MainContainer.appendChild(domelement);
// }

// modifed version
const customRender = (ReactElement, MainContainer) => {
    const domelement = document.createElement(ReactElement.type);
    domelement.innerHTML = ReactElement.props.children;
    for (const prop in  ReactElement.props) {
        if (prop == 'children') continue;
        domelement.setAttribute(prop, ReactElement.props[prop]);
    }
    MainContainer.appendChild(domelement);
}


const ReactElement = {
    type: 'a',
    props: {
        href: 'https://www.google.com',
        target: '_blank',
        children: 'Google'
    }
}

const MainContainer = document.getElementById("root");
customRender(ReactElement, MainContainer);
