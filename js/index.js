window.onload = function () {

    const iconQuestion = document.getElementById('icon__question');
    const questionTitle = document.getElementById('question__title');
    const questionContent = document.getElementById('question__content');

    const iconExclamator = document.getElementById('icon__exclamator');
    const exclamatorTitle = document.getElementById('exclamator__title');
    const exclamatorContent = document.getElementById('exclamator__content');

    const iconLinks = document.getElementById('icon__links');

    const iconMobile = document.getElementById('icon__mobile');
    const navigation = document.getElementById('navigation');

    const removeAddContent = (content) => {
        content.classList.toggle('remove');
    };

    const removeAddNavigation = (content) => {
        content.classList.toggle('remove__navigation');
    };

    const removeAddPosition = (content) => {
        content.classList.toggle('position');
    };

    const removeAddPositionNav = (content) => {
        content.classList.toggle('position__nav');
    };

    iconQuestion.addEventListener('click', (evt) => {
        removeAddContent(questionTitle);
        removeAddContent(questionContent);
        removeAddPosition(iconExclamator);

    });

    iconExclamator.addEventListener('click', (evt) => {
        removeAddContent(exclamatorTitle);
        removeAddContent(exclamatorContent);
    });

    iconMobile.addEventListener('click', (evt) => {
        removeAddNavigation(navigation);
        removeAddPositionNav(iconQuestion);
        removeAddPositionNav(iconExclamator);
        removeAddPositionNav(iconLinks);
    });
};
