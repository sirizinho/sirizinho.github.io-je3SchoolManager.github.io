function openTab(event, tabId) {
    var i, tabcontent, tabbuttons;

    // Esconde todas as abas principais
    tabcontent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].classList.remove("active");
    }

    // Remove a classe 'active' de todos os botões de abas principais
    tabbuttons = document.getElementsByClassName("tab-button");
    for (i = 0; i < tabbuttons.length; i++) {
        tabbuttons[i].classList.remove("active");
    }

    // Mostra a aba principal selecionada e adiciona a classe 'active' ao botão
    document.getElementById(tabId).classList.add("active");
    event.currentTarget.classList.add("active");

    // Seleciona a primeira sub aba por padrão quando uma nova aba principal é selecionada
    var subTabs = document.querySelector(`#${tabId} .sub-tabs`);
    if (subTabs) {
        var firstSubTabButton = subTabs.querySelector('.sub-tab-button:first-child');
        openSubTab({ currentTarget: firstSubTabButton }, firstSubTabButton.getAttribute('onclick').match(/'([^']+)'/)[1]);
    }
}

function openSubTab(event, subTabId) {
    var i, subtabcontent, subtabbuttons;

    // Esconde todas as sub-abas
    subtabcontent = document.getElementsByClassName("sub-tab-content");
    for (i = 0; i < subtabcontent.length; i++) {
        subtabcontent[i].classList.remove("active");
    }

    // Remove a classe 'active' de todos os botões de sub-abas
    subtabbuttons = document.getElementsByClassName("sub-tab-button");
    for (i = 0; i < subtabbuttons.length; i++) {
        subtabbuttons[i].classList.remove("active");
    }

    // Mostra a sub aba selecionada e adiciona a classe 'active' ao botão
    document.getElementById(subTabId).classList.add("active");
    event.currentTarget.classList.add("active");
}
