class Nav {

    constructor() {
        this.tabs = document.querySelectorAll("nav li");
        this.templates = document.querySelectorAll("link[rel='import']");

        this.Init();
    }

    Init() {
        this.LoadTemplates();
        this.LoadMenuItems();
        this.HideMenuContent();
    }

    LoadMenuItems() {
        for (let tab of this.tabs) {
            tab.addEventListener("click", (e) => this.ShowMenuContent(e));
        }
    }

    LoadTemplates() {
        for (let template of this.templates) {
            let templateContent = template.import.querySelector("template");
            let clone = document.importNode(templateContent.content, true);
            document.querySelector("#template-content").appendChild(clone);
        }
    }

    ShowMenuContent(e) {
        this.HideMenuContent();

        let section = document.querySelector("#template-content section#"+e.target.dataset.section+"-section");
        section.classList.add("active");
        
        this.SetActiveMenu(e.target);
    }

    HideMenuContent() {
        let sections = document.querySelectorAll("#template-content section");
        for (let section of sections) {
            section.classList.remove("active");
        }
    }

    SetActiveMenu(element) {
        this.RemoveActiveMenus();
        element.classList.add("active");
    }

    RemoveActiveMenus() {
        for (let tab of this.tabs) {
            tab.classList.remove("active");
        }
    }

}

new Nav();